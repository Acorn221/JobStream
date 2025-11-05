import { prisma } from 'database';

export const setupEmbeddings = async () => {
  try {
    await prisma.$executeRaw`
			CREATE OR REPLACE FUNCTION match_experiences (
					job_id UUID,
					user_id UUID,
					match_threshold float,
					match_count int
			)
			RETURNS TABLE (
					id UUID,
					name text,
					content text,
					similarity float
			)
			LANGUAGE sql STABLE
			AS $$
					WITH job_description AS (
							SELECT embedding 
							FROM "Job" 
							WHERE "id"::text = job_id::text AND 
										"userId"::text = user_id::text
					)
					SELECT
							"Experience"."id"::UUID,
							"Experience"."name",
							"Experience"."content",
							1 - ("Experience"."embedding" <=> job_description.embedding) AS similarity
					FROM "Experience" 
					CROSS JOIN job_description
					WHERE "Experience"."userId"::text = user_id::text AND
								1 - ("Experience"."embedding" <=> job_description.embedding) > match_threshold
					ORDER BY similarity DESC
					LIMIT match_count;
			$$;
	`;
  } catch (e) {
    throw new Error(`Error creating match_experiences function ${e}`);
  }

  try {
    await prisma.$executeRaw`
		create index on "Experiences" using ivfflat (embedding vector_cosine_ops)
			with
			(lists = 100);

			create index on "Job" using ivfflat (embedding vector_cosine_ops)
			with
			(lists = 100);
		`;
  } catch (e) {
    console.log('Failed to add indexes, they probably already exist');
  }

  try {
    await prisma.$executeRaw`
		CREATE OR REPLACE FUNCTION match_embedding (
					embedding double precision[],
					user_id UUID,
					match_threshold float,
					match_count int
			)
			RETURNS TABLE (
					id UUID,
					name text,
					content text,
					similarity float
			)
			LANGUAGE sql STABLE
			AS $$
					SELECT
							"Experience"."id"::UUID,
							"Experience"."name",
							"Experience"."content",
							1 - ("Experience"."embedding" <=> embedding) AS similarity
					FROM "Experience" 
					WHERE "Experience"."userId"::text = user_id::text AND
								1 - ("Experience"."embedding" <=> embedding) > match_threshold
					ORDER BY similarity DESC
					LIMIT match_count;
			$$;
		`;
  } catch (e) {
    throw new Error(`Error creating match_embedding function ${e}`);
  }
};

/**
 * This function updates the creditsSum field on the User table to improve performance
 */
export const setupCreditTrigger = async () => {
  try {
    await prisma.$executeRaw`
    CREATE OR REPLACE FUNCTION update_creditsum()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        UPDATE "User" SET "creditsSum" = (
            SELECT SUM(amount)
            FROM "Credits"
            WHERE "userId" = OLD."userId"
        ) WHERE "id" = OLD."userId";
        RETURN OLD;
     ELSE
        UPDATE "User" SET "creditsSum" = (
            SELECT SUM(amount)
            FROM "Credits"
            WHERE "userId" = NEW."userId"
        ) WHERE "id" = NEW."userId";
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_creditsum ON "Credits";

CREATE TRIGGER trigger_update_creditsum
AFTER INSERT OR UPDATE OR DELETE ON "Credits"
FOR EACH ROW EXECUTE FUNCTION update_creditsum();
   ;`;
  } catch (e) {
    console.log(`Failed to add trigger${e}`);
  }
};

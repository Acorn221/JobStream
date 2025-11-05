## Setup

 - Create a .env in the backend folder and add the DATABASE_URL variable for the postgres database
 - Add the pgvector extension to the database
   - [PGVector Github](https://github.com/pgvector/pgvector)
 - `npx prisma db push`
 - `pnpm run test_data_gen`
 - `Generate keypair for JWTs`
   - `openssl ecparam -name secp521r1 -genkey -noout -out private.key`
   - `openssl ec -in private.key -pubout -out public.key`
 - `pnpm run dev`

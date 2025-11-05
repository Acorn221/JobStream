import prisma from 'database';

export const getOptimiserFolderId = async (userId: string) => {
  const res = await prisma.googleAuthToken.findFirst({
    where: {
      userId,
    },
    select: {
      driveFolderId: true,
    },
  });

  return res?.driveFolderId;
};

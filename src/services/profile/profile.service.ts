import { prisma } from "@/lib/prisma";
import { UpdateProfileInput } from "@/schemas/profile/profile.schema";

export async function updateProfile(
  userId: string,
  data: UpdateProfileInput
) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: data.name,
    },
  });
}
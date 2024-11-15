import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    console.log("[ERROR: GET_USER_BY_EMAIL]", error);
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (error) {
    console.log("[ERROR: GET_USER_BY_ID]", error);
    return null;
  }
};

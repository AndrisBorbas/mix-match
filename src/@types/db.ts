import type { Prisma } from "@prisma/client";

export type CompatUser = {
	createdAt: string;
	updatedAt: string;
} & Omit<Prisma.UserArgs, "createdAt" | "updatedAt">;

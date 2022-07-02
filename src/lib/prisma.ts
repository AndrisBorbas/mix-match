import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient =
	// @ts-expect-error: check
	process.env.NODE_ENV === "production" || !global.prisma
		? new PrismaClient()
		: // @ts-expect-error: checked
		  global.prisma;

// eslint-disable-next-line import/no-default-export
export default prisma;

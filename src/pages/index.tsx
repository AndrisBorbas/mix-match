import type { InferGetStaticPropsType } from "next";

import type { CompatUser } from "@/@types/db";
import { prisma } from "@/server/db/prisma";

export async function getStaticProps() {
	const users = await prisma.user.findMany({});
	const compatUsers: CompatUser[] = users.map((user) => {
		return {
			...user,
			createdAt: user.createdAt.toISOString(),
			updatedAt: user.updatedAt.toISOString(),
		};
	});
	console.log(compatUsers[0]);
	return { props: { compatUsers } };
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function HomePage({ compatUsers }: PageProps) {
	console.log(compatUsers);
	return (
		<div className="container prose prose-invert mx-auto">
			<h1 className="mt-16 text-center">mix-match</h1>
		</div>
	);
}

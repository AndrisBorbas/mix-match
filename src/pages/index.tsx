import type { GetStaticProps, InferGetStaticPropsType } from "next";

import prisma from "@/lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
	const users = await prisma.user.findMany({
		// select: { name: true, email: true },
	});
	users.map((user) => {
		// @ts-expect-error: test
		// eslint-disable-next-line no-param-reassign
		user.createdAt = Math.floor(user.createdAt / 1000);
		// @ts-expect-error: test
		// eslint-disable-next-line no-param-reassign
		user.updatedAt = Math.floor(user.updatedAt / 1000);
		return user;
	});
	return { props: { users } };
};

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function HomePage({ users }: PageProps) {
	console.log(users);
	return (
		<div className="container prose prose-invert mx-auto">
			<h1 className="mt-16 text-center">mix-match</h1>
		</div>
	);
}

import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="color-scheme" content="dark light" />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

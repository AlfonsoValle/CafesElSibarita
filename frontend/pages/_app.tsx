import { Layout } from "../components/layout/Layout";
import { useMemo } from "react";
import { SWRConfig } from "swr";
import { PublicFetcher } from "../lib/PublicFetcher";
import Head from "next/head";
import { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const origin = useMemo(() => {
		if (typeof window != "undefined") {
			return window.location.origin;
		}
	}, []);

	return (
		<>
			<GlobalStyles />
			<SWRConfig value={{ fetcher: PublicFetcher }}>
				<Head>
					<title>Cafes El Sibarita</title>
				</Head>

				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</>
	);
};

export default MyApp;

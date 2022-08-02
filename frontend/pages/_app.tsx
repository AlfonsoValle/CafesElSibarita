import { Layout } from "../components/layout/Layout";
import { useMemo } from "react";
import { SWRConfig } from "swr";
import { PublicFetcher } from "../lib/PublicFetcher";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
	const origin = useMemo(() => {
		if (typeof window != "undefined") {
			return window.location.origin;
		}
	}, []);

	return (
		<SWRConfig value={{ fetcher: PublicFetcher }}>
			<Head>
				<title>Cafes el Sibarita</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	);
};

export default MyApp;

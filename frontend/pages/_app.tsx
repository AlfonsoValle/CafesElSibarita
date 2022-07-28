import { Layout } from "../components/layout/Layout";
import { Auth0Provider } from "@auth0/auth0-react";
import { SWRConfig } from "swr";
import { useMemo } from "react";
import { backend_fetcher } from "../lib/fetcher";

const MyApp = ({ Component, pageProps }) => {
	const origin = useMemo(() => {
		if (typeof window != "undefined") {
			return window.location.origin;
		}
	}, []);

	return (
		<Auth0Provider
			domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
			clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
			redirectUri={origin}
		>
			<SWRConfig value={{ fetcher: backend_fetcher }}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</Auth0Provider>
	);
};

export default MyApp;

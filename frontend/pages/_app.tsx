import { Layout } from "../components/layout/Layout";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { SWRConfig } from "swr";
import { backend_fetcher } from "../lib/fetcher";
import { useEffect, useMemo, useState } from "react";
import { Spinner } from "../components/spinner/spinner";

const MyApp = ({ Component, pageProps }) => {
	const AuthenticatedApp = ({ children }) => {
		// Fetch accessToken for api audience
		const { getAccessTokenSilently } = useAuth0();
		const [token, setToken] = useState("");

		useEffect(() => {
			getAccessTokenSilently().then((mytoken) => {
				console.log("tokensito jugosito ------>", mytoken);
				setToken(mytoken);
			});
		}, []);

		return (
			<SWRConfig value={{ fetcher: backend_fetcher(token) }}>
				{token && children}
				{!token && (
					
						<Spinner />
					
				)}
				;
			</SWRConfig>
		);
	};

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
			audience="sibarita"
			scope="openid profile email"
		>
			<AuthenticatedApp>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthenticatedApp>
		</Auth0Provider>
	);
};

export default MyApp;

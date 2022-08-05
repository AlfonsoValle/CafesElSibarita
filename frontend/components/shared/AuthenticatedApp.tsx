import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { SWRConfig } from "swr";
import { useEffect, useState, useMemo } from "react";
import { TokenContext } from "../../lib/tokencontext";
import { AuthenticatedFetcher } from "../../lib/AuthenticatedFetcher";



const AuthenticationComponentApp = ({ children }) => {
	const { getAccessTokenSilently } = useAuth0();
	const [token, setToken] = useState("");

	useEffect(() => {
		getAccessTokenSilently().then((mytoken) => {
			console.log("tokensito------>", mytoken);
			setToken(mytoken);
		});
	}, []);

	return (
		<SWRConfig value={{ fetcher: AuthenticatedFetcher(token) }}>
			<TokenContext.Provider
				value={{
					Auth0Token: { value: token },
				}}
			>
				{children}
			</TokenContext.Provider>
		</SWRConfig>
	);
};

export const AuthenticatedApp = ({ children }) => {
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
			<AuthenticationComponentApp>{children}</AuthenticationComponentApp>
		</Auth0Provider>
	);
};

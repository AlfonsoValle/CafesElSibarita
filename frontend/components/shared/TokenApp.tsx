import { Auth0Provider } from "@auth0/auth0-react";
import { useMemo } from "react";

export const TokenApp = ({ children }) => {
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
			{children}
		</Auth0Provider>
	);
};

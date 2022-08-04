import { css } from "@emotion/react";
import { useMemo } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { PerfilCrud } from "../../components/profile/CrudProfile";
import { AuthenticatedApp } from "../../components/shared/AuthenticatedApp";

const CrearPerfil = () => {
	return (
		<AuthenticatedApp>
			<div></div>
		</AuthenticatedApp>
	);
};

export default CrearPerfil;

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { PerfilCrud } from "./CrudProfile";
import useSWR from "swr";
import { AuthenticatedFetcher } from "../../lib/AuthenticatedFetcher";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthenticatedApp } from "../Shared/AuthenticatedApp";
import { useToken } from "../../lib/tokencontext";
import { Spinner } from "../Shared/Spinner";

export const CardProfile = () => {
	const { Auth0Token } = useToken();
	const token = Auth0Token.value;
	const { data } = useSWR("/perfil/readProfile", AuthenticatedFetcher(token), {
		refreshInterval: 5000,
	});
	console.log(data);
	const prueba = data;
	return (
		<div>
			<div>
				{token && <h2> {prueba.name}</h2>}
				{token && <h2> {prueba.lastname}</h2>}
				{token && <h3> {prueba.address} </h3>}
				{token && <h3>{prueba.phone} </h3>}
				{!token && <Spinner />}
			</div>
		</div>
	);
};

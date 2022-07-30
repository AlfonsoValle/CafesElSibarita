import { css } from "@emotion/react";
import { CrudEspecialidades } from "../../components/Admin/CrudEspecialidades";
import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const EditarEspecialidades = () => {
	const { getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		getAccessTokenSilently().then((token) => {
			console.log("tokensito jugosito ------>", token);
		});
	}, []);

	return (
		<section
			css={css`
				height: 100vh;
				width: 100%;
				background-image: url("/images/fondocafe.jpg");
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
				display: flex;
				flex-direction: column;
			`}
		>
			<div
				css={css`
					background: rgb(5, 2, 0);
					background: linear-gradient(
						180deg,
						rgba(5, 2, 0, 0.8472693520767682) 0%,
						rgba(0, 0, 0, 0.4971292960543593) 100%
					);
					height: 100vh;
					display: flex;
					padding-left: 200px;
					padding-right: 200px;
					white-space: nowrap;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				`}
			>
				{" "}
				<CrudEspecialidades />
			</div>
		</section>
	);
};
export default EditarEspecialidades;
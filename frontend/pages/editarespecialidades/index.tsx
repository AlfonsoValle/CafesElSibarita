import { css } from "@emotion/react";
import { CrearEspecialidades } from "../../components/Admin/CreateSpeciality";
import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthenticatedApp } from "../../components/Shared/AuthenticatedApp";
import { BorrarEspecialidades } from "../../components/Admin/DeleteSpeciality";

const CrudEspecialidades = () => {
	return (
		<section
		css={css`
		height: 100vh;
		width: 100%;
		background-image: url("/images/34.png");
		background-repeat: no-repeat;
		background-size: cover;
	`}
		>
			<div
				css={css`
				height: 100vh;
				display: flex;
				align-items: center;
				justify-content: center;
				background: rgb(5, 2, 0);
				background: linear-gradient(
					180deg,
					rgba(58, 53, 50, 0.847) 0%,
					rgba(138, 100, 47, 0.497) 100%
				);
			`}
			>
				<div
					css={css`
						display: flex;
						align-items: center;
						justify-content: center;
						width: 100%;
						gap: 40px;
					`}
				>
					<AuthenticatedApp>
						<CrearEspecialidades />
						<BorrarEspecialidades />
					</AuthenticatedApp>
				</div>
			</div>
		</section>
	);
};
export default CrudEspecialidades;

import { css } from "@emotion/react";
import { CrearEspecialidades } from "../../components/specialities/CreateSpeciality";
import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthenticatedApp } from "../../components/shared/AuthenticatedApp";
import { BorrarEspecialidades } from "../../components/specialities/DeleteSpeciality";
import { Spinner } from "../../components/shared/Spinner";

const CrudEspecialidades = () => {
	const { user, loginWithRedirect } = useAuth0();

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
					{user && (
						<AuthenticatedApp>
							<CrearEspecialidades />
							<BorrarEspecialidades />
						</AuthenticatedApp>
					)}
					{!user && (
						<>
							<Spinner />{" "}
							<span
								onClick={() => loginWithRedirect()}
								css={css`
									display: flex;
									align-content: center;
									color: #f0ebe7;
									font-weight: 400;
									font-family: "Montserrat", sans-serif;
									font-size: 15px;
									height: 25px;
									padding-bottom: 6px;
									padding-left: 20px;
									padding-right: 22px;
									border-radius: 24px;
									border-radius: 24px;
									text-decoration: none;
									border: 1px solid #eaecebc5;
									background-color: #c28836d8;
									padding: 6px 10px 6px 10px;
									justify-content: center;
									align-items: center;
									text-align: start;
									:hover {
										background-color: #034d0ace;
									}

									cursor: pointer;
								`}
							>
								Identifícate
							</span>
						</>
					)}
				</div>
			</div>
		</section>
	);
};
export default CrudEspecialidades;

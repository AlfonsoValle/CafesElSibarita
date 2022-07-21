import { css } from "@emotion/react";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
	const { loginWithRedirect, user, logout } = useAuth0();

	return (
		<div
			css={css`
				display: flex;
				align-items: center;
				justify-content: center;
			`}
		>
			{!user && (
				<button
					onClick={() => loginWithRedirect()}
					css={css`
						display: flex;
						align-content: center;
						color: #f0ebe7;
						font-weight: 400;
						font-family: "Sirin Stencil", sans-serif;
						font-size: 18px;
						padding-bottom: 2px;
						padding-left: 2.5;
						padding-right: 2.5;
						border-radius: 3px;
						border-radius: 24px;
						text-decoration: none;
						border: 1px solid #eaecebc5;
						background-color: #251721;
						margin-right: 10px;
						:hover {
							background-color: #eda6439d;
						}

						justify-content: center;
						align-items: center;
						text-align: start;

						cursor: pointer;
					`}
				>
					Identifícate
				</button>
			)}
			{user && (
				<div
					css={css`
						display: flex;
						flex-direction: row;
					`}
				>
					<button
						css={css`
							display: flex;
							align-content: center;
							color: #f0ebe7;
							font-weight: 400;
							font-family: "Sirin Stencil", sans-serif;
							font-size: 22px;
							height: 25px;
							padding-bottom: 6px;
							padding-left: 20px;
							padding-right: 22px;
							border-radius: 24px;
							border-radius: 0px 10px 70px 0px;
							text-decoration: none;
							border: 2px solid #eaecebc5;
							background-color: #044b27b7;

							:hover {
								background-color: #eda543;
							}

							justify-content: center;
							align-items: center;
							text-align: start;

							cursor: pointer;
						`}
					>
						{user.nickname}
					</button>
					<button
						onClick={() => logout({ returnTo: window.location.origin })}
						css={css`
							display: flex;
							align-content: center;
							color: #f0ebe7;
							font-weight: 400;
							font-family: "Sirin Stencil", sans-serif;
							font-size: 22px;
							height: 25px;
							padding-bottom: 6px;
							padding-left: 20px;
							padding-right: 22px;
							border-radius: 24px;
							border-radius: 70px 0px 0px 10px;
							text-decoration: none;
							border: 2px solid #eaecebc5;
							background-color:#7b4e118d;

							justify-content: center;
							align-items: center;
							text-align: start;

							cursor: pointer;
						`}
					>
						Cerrar Sesión
					</button>
				</div>
			)}
		</div>
	);
};
import { css } from "@emotion/react";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
	const { loginWithRedirect, user, logout } = useAuth0();

	return (
		<div
			css={css`
				display: flex;
			`}
		>
			{!user && (
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
			)}
			{user && (
				<div
					css={css`
						display: flex;
						flex-direction: row;
					`}
				>
					<p
						css={css`
							display: flex;
							font-family: "Montserrat";
							font-weight: 200;
							font-size: 15px;
							padding: 6px 10px 6px 0px;
							text-decoration: none;
							align-items: center;
							text-align: start;
							white-space: nowrap;
						`}
					></p>
					<button
						onClick={() => logout({ returnTo: window.location.origin })}
						css={css`
							display: flex;
							align-content: center;
							color: #f0ebe7;
							font-weight: 400;
							font-family: "Montserrat", sans-serif;
							font-size: 15px;
							height: 25px;
							padding-top: 6px;
							padding-bottom: 6px;
							padding-left: 20px;
							padding-right: 22px;
							border-radius: 24px;
							border-radius: 24px;
							text-decoration: none;
							border: 1px solid #eaecebc5;
							background-color: #c28836ef;
							padding: 6px 10px 6px 10px;
							justify-content: center;
							align-items: center;
							text-align: start;
							:hover {
								background-color: #a90707ab;
							}

							cursor: pointer;
						`}
					>
						{user.nickname} | Salir
					</button>
				</div>
			)}
		</div>
	);
};

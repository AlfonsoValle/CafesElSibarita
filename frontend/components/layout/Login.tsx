import { css } from "@emotion/react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

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
						color: #f0ebe7;
						font-weight: 400;
						font-family: "Montserrat", sans-serif;
						font-size: 18px;
						margin-right: 10px;
						:hover {
							color: #eda543;
						}

						align-items: center;

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
					<button
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
							padding: 6px 10px 6px 10px;
							text-decoration: none;
							justify-content: center;
							align-items: center;
							text-align: start;
							border: 1px solid #eaecebc5;
							//background-color: #7b4e118d;
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
							background-color: #c287368d;
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
						Salir
					</button>
				</div>
			)}
		</div>
	);
};

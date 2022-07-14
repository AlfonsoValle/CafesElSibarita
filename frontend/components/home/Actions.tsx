import { css } from "@emotion/react";

const Action = () => {
	return (
		<div
			css={css`
				display: flex;
				white-space: nowrap;
				position: absolute;
				left: 30%;
				bottom: 10vh;
			`}
		>
			<button
				css={css`
					text-transform: uppercase;
					opacity: 80%;
					font-size: 25px;
					font-weight: 600;
					padding: 15px 90px;
					border-radius: 28px;
					margin-right: 20px;
					color: white;
					background: #1f2128;
					border-color: transparent;
					cursor: pointer;
				`}
			>
				Pedido Personalizado
			</button>
			<button
				css={css`
					text-transform: uppercase;
					color: black;
					opacity: 80%;
					font-family: "Sirin Stencil", sans-serif;
					font-size: 13px;
					font-weight: 600;
					padding: 15px 90px;
					border-radius: 28px;
					border-color: transparent;
					cursor: pointer;
					background: #f7f7f7;
				`}
			>
				Inventario Disponible
			</button>
		</div>
	);
};

export default Action;

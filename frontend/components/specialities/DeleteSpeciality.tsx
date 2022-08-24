import { css } from "@emotion/react";
import { ListaEspecialidades } from "./ListaEspecialidades";

export const BorrarEspecialidades = () => {
	return (
		<div
			css={css`
				border: 1px solid #ffffffad;
				font-size: 17px;
				border-radius: 10px;
				font-weight: 300;
				max-width: 300px;
				align-items: center;
				justify-content: center;
				background-color: #98694f38;
				padding: 20px;
				line-height: 1.6em;
				backdrop-filter: blur(20px);
				white-space: nowrap;
			`}
		>
			<h1
				css={css`
					display: flex;
					font-family: "Montserrat";
					font-weight: 600;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					padding: 10px;
				`}
			>
				{" "}
				Lista de Especialidades Actuales{" "}
			</h1>{" "}
			<ListaEspecialidades />
		</div>
	);
};

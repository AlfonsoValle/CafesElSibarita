import { css } from "@emotion/react";

export const AboutUsText: React.FC = () => {
	return (
		<div
			css={css`
				font-family: "Montserrat", sans-serif;
				font-size: 35px;

				//background-color: #251602b8;
				// border: 13px solid #9e9b99;
				border-radius: 20px;
				width: 70%;
				height: 50vh;
				margin-top: 20px;
				padding-top: 20px;
				color: #ffffff;
			`}
		>
			Cafés El Sibarita es una Sociedad con dos objetivos fundamentales
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 10px;
					gap: 25px;
					font-family: "Montserrat", sans-serif;
					font-size: 25px;
					color: white;
				`}
			></div>
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 60px;
					gap: 25px;
					font-family: "Montserrat", sans-serif;
					font-size: 25px;
					color: white;
				`}
			>
				<div
					css={css`
						display: flex;
					`}
				>
					{/* <img
						src="/images/vasosibarita.png"
						width="1000"
						height="1000"
						css={css`
							display: block;
							object-fit: cover;
							filter: brightness(99%);
							max-height: 100%;
							max-width: 400px;
							width: auto;
							height: auto;
						`}
					/> */}
				</div>

				<div
					css={css`
						border: 3px solid #ffffffad;
						border-radius: 50px 0px 50px 0px;
						font-weight: 500;
						align-items: center;
						justify-content: center;
						margin-right: 10px;
						margin-left: 30px;
						background-color: #98694f;
						padding: 20px;
					`}
				>
					Servir una experiencia premium a nuestros clientes. Ofreciendo un servicio de
					suscripción a cafés de especialidad de varios paises, de los mejores proveedores
					españoles. Para que siempre los tengas disponibles conservando todo su aroma y
					sabor. Lo recibes en casa, la cantidad que necesitas, cuando la necesitas.
				</div>

				<div
					css={css`
						border: 3px solid #ffffffad;
						font-weight: 500;
						align-items: center;
						justify-content: center;
						margin-right: 30px;
						margin-left: 10px;
						border-radius: 0px 50px 0px 50px;
						background-color: #a9a454;
						padding: 20px;
					`}
				>
					Dar a conocer a los mejores proveedores de café. Vendemos cantidades pequeñas en
					forma de suscripción con rotación quincenal. Los clientes pueden acceder a todas
					sus tiendas desde nuestra página. Nuestra ilusión es impulsar el comercio de
					café de calidad manufacturado en España.
				</div>
			</div>
		</div>
	);
};

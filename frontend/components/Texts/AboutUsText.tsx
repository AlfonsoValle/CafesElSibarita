import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Section = styled.div`
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
`;

const Title = styled.h1`
	font-size: 1.5em;
	max-width: 500px;
	font-family: "montserrat";
	margin: 10px auto;
	line-height: 1.8em;
	font-weight: bold;
`;

const Subtitle = styled.h2`
	font-size: 1.5em;
	max-width: 500px;
	font-family: "montserrat";
	margin: 10px auto;
	line-height: 1.8em;
	font-weight: 400;
`;

export const AboutUsText: React.FC = () => {
	return (
		<div
			css={css`
				padding: 0 20px;
				width: 100%;
			`}
		>
			<Title>Cafés El Sibarita es una Sociedad con dos objetivos fundamentales </Title>
			<div
				css={css`
					display: flex;
					flex-wrap: wrap;
					align-items: stretch;
					justify-content: center;
					margin-top: 60px;
					gap: 25px;
					font-family: "Montserrat", sans-serif;
					font-size: 25px;
					color: white;
				`}
			>
				<Section>
					<Subtitle>Servir</Subtitle>
					Servir una experiencia premium a nuestros clientes. Ofreciendo un servicio de
					suscripción a cafés de especialidad de varios paises, de los mejores proveedores
					españoles. Para que siempre los tengas disponibles conservando todo su aroma y
					sabor. Lo recibes en casa, la cantidad que necesitas, cuando la necesitas.
				</Section>

				<Section>
					<Subtitle>Café de Calidad</Subtitle>
					Dar a conocer a los mejores proveedores de café. Vendemos cantidades pequeñas en
					forma de suscripción con rotación quincenal. Los clientes pueden acceder a todas
					sus tiendas desde nuestra página. Nuestra ilusión es impulsar el comercio de
					café de calidad manufacturado en España.
				</Section>
			</div>
		</div>
	);
};

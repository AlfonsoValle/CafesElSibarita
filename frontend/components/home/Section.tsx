import { css } from "@emotion/react";
import MainBanner from "./MainBanner";
import Prime from "./Prime";
import Sibarita from "./Sibarita";
const Section = () => {
	return (
		<section
			css={css`
				height: 100vh;
				width: 99vw;
				background-image: url("/images/24.jpg");
				display: flex;
				flex-direction: row;
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
				background-attachment: fixed;
			`}
		>
			<Prime
				name="Suscripción Prime"
				description="Dos variedades diferentes al mes, rotando todo el año. En tu puerta cada 15 días. "
			/>
			<Sibarita
				name="Suscripción Sibarita"
				description="Sólo tu Café Favorito, de tu proveedor favorito. Cada 15 días en casa. "
			/>
			<MainBanner intro="Un servicio de Premium de entrega de café a Domicilio, la cantidad justa, con la frescura garantizada. Café de Especialidad, traído desde cada rincón del mundo,pero tostado artesanalmente por los mejores proveedores de España. Suscríbete y Recibe 150 gramos cada 15 días en tu domicilio, el mejor sabor y aroma a un clic de distancia." />
		</section>
	);
};

export default Section;

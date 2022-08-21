import { css } from "@emotion/react";
import MainBanner from "./MainBanner";
import Prime from "./Prime";
import Sibarita from "./Sibarita";
import BannerSlider from "././newslider/BannerSlider";

const Section = () => {
	return (
		<section
			css={css`
				height: 100vh;
				width: 100%;
				background-image: url("/images/fondocafe.jpg");
				background-repeat: no-repeat;
				background-size: cover;
			`}
		>
			<div
				css={css`
					height: 100vh;
					padding: 20px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					background: rgb(5, 2, 0);
					background: linear-gradient(
						180deg,
						rgba(5, 2, 0, 0.8472693520767682) 0%,
						rgba(0, 0, 0, 0.4971292960543593) 100%
					);
				`}
			>
				<div
					css={css`
						height: 45%;
					`}
				>
					<div
						css={css`
							max-height: 100%;
							height: 100%;
						`}
					>
						<MainBanner intro="Servicio Premium de entrega de café a Domicilio, la cantidad justa, con la frescura garantizada. Café traído desde cada rincón del mundo pero tostado artesanalmente en España. El mejor sabor y aroma a un clic de distancia. Cada 15 dias, en casa." />

						<div
							css={css`
								display: flex;
								flex-wrap: wrap;
							`}
						>
							<Prime
								name="Suscripción Prime"
								description="Sólo tu Café Favorito, de tu proveedor favorito."
								href="/subs/prime"
							/>
							<Sibarita
								name="Suscripción Sibarita"
								description="Dos variedades diferentes al mes, rotando todo el año."
								href="/subs/sibarita"
							/>
						</div>
					</div>
				</div>
				<div
					css={css`
						height: 55%;
					`}
				>
					<div
						css={css`
							font-family: "montserrat", sans-serif;
							font-size: 20px;
							padding: 5px;
							display: flex;
							justify-content: center;
							white-space: nowrap;
							font-weight: 500;
							margin-top: 60px;
							margin-bottom: 20px;
						`}
					>
						Nuestras Especialidades
					</div>
					<BannerSlider />
				</div>
			</div>
		</section>
	);
};

export default Section;

import { css } from "@emotion/react";
import MainBanner from "./MainBanner";
import Prime from "./Prime";
import Sibarita from "./Sibarita";
import BanneronClick from "./Banneronclick";
import BannerEspecialidades from "./BannerEspecialidades";
import BannerSlider from "././newslider/BannerSlider";

const Section = () => {
	return (
		<section
			css={css`
				height: 100vh;
				width: 100%;
				background-image: url("/images/fondocafe.jpg");
				//background-color: #c7c764;
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
			`}
		>
			<div
				css={css`
					background: rgb(5, 2, 0);
					background: linear-gradient(
						180deg,
						rgba(5, 2, 0, 0.8472693520767682) 0%,
						rgba(0, 0, 0, 0.4971292960543593) 100%
					);
					height: 100vh;
				`}
			>
				<div
					css={css`
						display: flex;
						align-items: center;
						justify-content: center;
					`}
				>
					<div
						css={css`
							min-width: 90%;
							width: 95%;
						`}
					>
						<MainBanner intro="Un servicio de Premium de entrega de café a Domicilio, la cantidad justa, con la frescura garantizada. Café de Especialidad, traído desde cada rincón del mundo pero tostado artesanalmente por los mejores proveedores de España. El mejor sabor y aroma a un clic de distancia." />

						<div
							css={css`
								display: flex;
							`}
						>
							<Prime
								name="Suscripción Prime"
								description="Sólo tu Café Favorito, de tu proveedor favorito. Cada 15 días en casa. "
								href="/subs/prime"
							/>
							<Sibarita
								name="Suscripción Sibarita"
								description="Dos variedades diferentes al mes, rotando todo el año. En tu puerta cada 15 días. "
								href="/subs/sibarita"
							/>
						</div>

						<div
							css={css`
								display: flex;
								margin-top: 8vh;
								justify-content: space-around;
							`}
						>
							<div
								css={css`
									display: flex;
									align-items: center;
									justify-content: center;
								`}
							>
								<BanneronClick />
							</div>

							<div>
								<div
									css={css`
										font-family: "montserrat", sans-serif;
										font-size: 14px;
										padding: 5px;
										display: flex;
										justify-content: center;
										white-space: nowrap;
										//border: 1px solid #eaecebc5;
										//background-color: #251721;
										//border-radius: 10px;
										font-weight: 500;
										margin-bottom: 10px;
									`}
								>
									Nuestras Especialidades
								</div>
								<div>
									<BannerSlider />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section;

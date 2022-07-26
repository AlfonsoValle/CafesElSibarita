import { css } from "@emotion/react";
import MainBanner from "./MainBanner";
import Prime from "./Prime";
import Sibarita from "./Sibarita";
import BanneronClick from "./Banneronclick";
import BannerEspecialidades from "./BannerEspecialidades";

const Section = () => {
	return (
		<section
			css={css`
				height: 100vh;
				width: 100%;
				background-image: url("/images/fondocafe.jpg");
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
							min-width: 60%;
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
							/>
							<Sibarita
								name="Suscripción Sibarita"
								description="Dos variedades diferentes al mes, rotando todo el año. En tu puerta cada 15 días. "
								
							/>
						</div>

						<div
							css={css`
								width: 100%;
								display: flex;
								align-items: center;
								max-height: 400px;
								justify-content: center;
							`}
						>
							<div
								css={css`
									width: 50%;
								`}
							>
								<BanneronClick />
							</div>

							<div>
								<div
									css={css`
										font-family: "montserrat", sans-serif;
										font-size: 18px;
										padding: 5px;
										padding-left: 10px;
										padding-right: 10px;
										display: flex;
										align-items: center;
										justify-content: center;
										white-space: nowrap;
										border: 2px solid #eaecebc5;
										background-color: #251721;
										border-radius: 24px;
										margin-top: 60px;
									`}
								>
									Nuestras Especialidades
								</div>
								<div
									css={css`
										display: flex;
										align-items: center;
										justify-content: center;
										flex-direction: row;
									`}
								>
									<BannerEspecialidades />
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

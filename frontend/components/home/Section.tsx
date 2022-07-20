import { css } from "@emotion/react";
import BannerDecorativo from "./decorationbanner";
import MainBanner from "./MainBanner";
import Prime from "./Prime";
import Sibarita from "./Sibarita";
import BanneronClick from "./banneronclick";
import BannerEspecialidades from "./bannerEspecialidades";

const Section = () => {
	return (
		<section
			css={css`
				height: 100vh;
				width: 100%;
				background-image: url("/images/24.jpg");
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
			`}
		>
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
				`}
			>
				<div
					css={css`
						min-width: 60%;
						width: 80%;
						height: 100vh;
					`}
				>
					<MainBanner intro="Un servicio de Premium de entrega de café a Domicilio, la cantidad justa, con la frescura garantizada. Café de Especialidad, traído desde cada rincón del mundo,pero tostado artesanalmente por los mejores proveedores de España. El mejor sabor y aroma a un clic de distancia." />

					<div
						css={css`
							display: flex;
							flex-direction: row;
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
					</div>

					<BannerDecorativo />

					<div
						css={css`
							width: 100%;
							display: flex;
							align-items: center;
							justify-content: center;

							max-height: 400px;
						`}
					>
						<div
							css={css`
								width: 70%;
							`}
						>
							<BanneronClick />
						</div>
						<div
							css={css`
								width: 80%;
							`}
						>
							<div
							css={css`
							background-color: #eda543;
							border: 5px solid  #eaecebc5;
							border-radius: 24px;
						`}
							
							
							>
								<div
								css={css`
								padding-bottom: 5px;
								padding-left: 10px;
								padding-right: 10px;
								width: 100%;
							`}
								
								
								> Nuestras Especialidades </div>
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

import { css } from "@emotion/react";
import { MainMenu } from "./MainMenu";
import { LateralMenu } from "./LateralMenu";
import { TokenApp } from "../Shared/TokenApp";
import { BotonHeader } from "../Shared/BotonHeader";

export const Header = () => {
	return (
		<>
			<TokenApp>
				<div
					css={css`
						display: flex;
						align-items: center;
						width: 100%;
						position: fixed;
						z-index: 2;
					`}
				>
					<div
						css={css`
							width: 26%;
						`}
					>
						<MainMenu />
					</div>
					<div
						css={css`
							display: flex;
							align-items: center;
							justify-content: space-around;
							gap: 5px;
							width: 65%;
							white-space: nowrap;
						`}
					>
						<BotonHeader text="Sobre Nosotros" href="/sobrenosotros" />

						<div>
							<BotonHeader
								text="Editar Especialidades"
								href="/editarespecialidades"
							/>
						</div>
					</div>
					<div
						css={css`
							margin-right: 5px;
							display: flex;
							justify-content: end;
							width: 35%;
						`}
					>
						<LateralMenu />
					</div>
				</div>
			</TokenApp>
		</>
	);
};

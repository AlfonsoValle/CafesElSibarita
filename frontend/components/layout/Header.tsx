import { css } from "@emotion/react";
import { MainMenu } from "./MainMenu";
import { LateralMenu } from "./LateralMenu";
import { HeaderButton } from "./HeaderButton";
import { TokenApp } from "../shared/TokenApp";
import { BotonHeader } from "../tailwind components/BotonHeader";

export const Header = () => {
	return (
		<>
			<TokenApp>
				<div
					css={css`
						display: flex;
						justify-content: space-between;
						width: 99%;
						align-items: center;
						position: fixed;
						z-index: 2;
					`}
				>
					{" "}
					<MainMenu />
					<div
						css={css`
							margin-right: 5px;
							display: flex;
						`}
					>
						<BotonHeader text="Sobre Nosotros" href="/sobrenosotros" />
						<BotonHeader text="Editar Especialidades" href="/editarespecialidades" />
						<LateralMenu />
					</div>
				</div>
			</TokenApp>
		</>
	);
};

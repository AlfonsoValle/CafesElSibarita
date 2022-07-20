import { css } from "@emotion/react";
import CuboProveedores from "./cuboproveedores";

const BanneronClick: React.FC = () => {
	return (
		<div
			className="banneronclick"
			css={css`
				
				
				margin-top: 1%;
				width: 85%;
				display: flex;
				justify-content: center;
				align-items: center;
			`}
		>
			<CuboProveedores />
		</div>
	);
};

export default BanneronClick;

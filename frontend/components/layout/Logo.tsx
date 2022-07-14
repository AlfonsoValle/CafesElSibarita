import Image from "next/image";
import { css } from "@emotion/react";
const Loguito = () => {
	return (
		<div
			css={css`
				display: flex;
				justify-content: flex-start;
				margin-left: 10px;
				margin-top: 5px;
			`}
		>
			<Image src="/images/logoSibarita.png" width="80px" height="80px" />
		</div>
	);
};
export default Loguito;

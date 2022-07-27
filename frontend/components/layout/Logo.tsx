import Image from "next/image";
import { css } from "@emotion/react";
const Loguito = () => {
	return (
		<div
			css={css`
				margin-left: 5px;
				margin-top: 5px;
			`}
		>
			<Image src="/images/logoSibarita.png" width="60px" height="60px" />
		</div>
	);
};
export default Loguito;

import Image from "next/image";
import { css } from "@emotion/react";
const Socials = () => {
	return (
		<div
			css={css`
				display: flex;
				justify-content: center;
				align-items: center;
				filter: invert(100%);
				cursor: pointer;
			`}
		>
			<Image src="/images/facebook.svg" width="35px" height="35px" />
			<Image src="/images/instagram.svg" width="35px" height="35px" />
			<Image src="/images/twitter.svg" width="35px" height="35px" />
		</div>
	);
};
export default Socials;

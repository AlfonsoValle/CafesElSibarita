import { css } from "@emotion/react";
import Link from "next/link";
import tw from "twin.macro";
interface ButtonProps {
	href?: string;
	text: string;
}

export const BotonHeader: React.FC<ButtonProps> = ({ href, text }) => {
	return (
		<Link href={href}>
			<div>
				<a
					tw="text-white text-base font-montserrat font-normal cursor-pointer relative border-none bg-none focus:text-[#eda543] hover:text-[#eda543] focus:after:(w-full left-0) hover:after:(w-full left-0) after:(content-[''] pointer-events-none bottom-[-2px] left-[50%]  w-0 h-[2px] bg-[#eda543]) after:absolute"
					css={css`
						transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
						transition-duration: 600ms;
						transition-property: color;

						:after {
							transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
							transition-duration: 600ms;
							transition-property: width, left;
						}
					`}
				>
					{text}
				</a>
			</div>
		</Link>
	);
};

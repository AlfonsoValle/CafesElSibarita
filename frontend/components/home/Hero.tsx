import { css } from "@emotion/react";

interface NameDescription {
	name: string;
	description: string;
}

const Hero: React.FC<NameDescription> = ({ name, description }) => {
	return (
		<section
			css={css`
				background-color: transparent;
				position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            left: 42%;
            top: 16vh;
			`}
		>
			<div
         css={css`
        font-size: 40px;
        font-weight: 500;
        
      `}
         >{name}</div>
			<div
        css={css`
        font-size: 20px;
        font-weight: 100;
        text-decoration: underline;
      `}
         
         >{description}</div>
		</section>
	);
};

export default Hero;

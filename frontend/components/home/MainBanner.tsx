import { css } from "@emotion/react";

interface Intro {
	intro: string;
	
}


const MainBanner: React.FC<Intro> = ({ intro}) => {
	return (
		<section
			css={css`
			font-family: "Roboto", sans-serif;
			color: white;
				background-color: #645541d2;
				display: flex;
				margin-top: 5%;
				margin-left: 20%;
				margin-right: 20%;
				width: 60%;
				border: 5px solid #eaecebc5;
				border-bottom: 900px;
				padding-bottom: 9px;
				border-radius: 50px 50px 0px 0px;
				height: 17%;
				//background-image: url("/images/mainbanner.jpg");
				flex-direction: row;
			
				background-position: center;
				background-attachment: fixed;
			`}
		>
		<div
			css={css`
			padding-left: 2%;
			padding-right: 2%;
			padding-top: 2%;
			padding-bottom: 2%;
				font-size: 20px;
				color: #dad8d3;
				font-weight: 500;
			`}
		>
			{intro}
			
			</div>
			
		</section>
	);
};

export default MainBanner;

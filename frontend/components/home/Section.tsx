import { css } from "@emotion/react";
import Action from "./Actions";
import Hero from "./Hero";
const Section = () => {
	return (
		<section
			css={css`
				height: 100vh;
				width: 99vw;
				background-image: url("/images/23.jpg");
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
				position: relative;
				background-attachment: fixed;
			`}
		>
			<Hero name="Cafés El Sibarita" description="Concertar una prueba de conducción" />
			<Action />
		</section>
	);
};

export default Section;

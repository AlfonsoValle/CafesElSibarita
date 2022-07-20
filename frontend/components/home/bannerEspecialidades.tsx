import { css } from "@emotion/react";
import Especialidades from "./especialidades";

interface Banderas {
	pais: string;
}

//create array with contry names;
const paises = [
	"es",
	"en",
	"fr",
	"de",
	"it",
	"pt",
	"ru",
	"ja",
	"ko",
	"zh",
	"cr",
	"br",
	"tr",
	"ar",
	"pl",
	"id",
	"th",
	"vi",
	"ms",
	"hi",
	"fa",
	"he",
	"uk",
	"br",
	"co",
];

const BannerEspecialidades: React.FC<Banderas> = ({ pais }) => {
	const bandera = paises.find((e) => e === pais);
	return (
		<div
			className="bannerEspecialidades"
			css={css`
				display: flex;
				align-items: center;
			`}
		>
			<div
				css={css`
					display: flex;
               
				`}
			>
				<Especialidades
					name="Honduras"
					text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"


					image={`https://countryflagsapi.com/svg/HN`}
				/>
				<Especialidades
					name="Costa Rica"
					text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
					image={`https://countryflagsapi.com/svg/cr`}
				/>
				<Especialidades
					name="Brasil"
					text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
					image={`https://countryflagsapi.com/svg/br`}
				/>
				<Especialidades
					name="Colombia"
					text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
					image={`https://countryflagsapi.com/svg/co`}
				/>
				<Especialidades
					name="Vietnam"
					text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
					image={`https://countryflagsapi.com/svg/vn`}
				/>
				<Especialidades
					name="Uganda"
					text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
					image={`https://countryflagsapi.com/svg/UG`}
				/>
				<Especialidades
					name="México"
					text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
					image={`https://countryflagsapi.com/svg/MEX`}
				/>
			</div>
		</div>
	);
};

export default BannerEspecialidades;

import { css } from "@emotion/react";

interface Banderas {
	pais?: string;
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

const BannerSlider: React.FC<Banderas> = ({ pais }) => {
	const bandera = paises.find((e) => e === pais);
	return (
		<div className="images-list" css={css``}>
			<div
				css={css`
					display: flex;
					justify-content: start;
					align-items: start;
					scroll-snap-align: center;
					overflow: overlay;
					max-width: 600px;
					height: 300px;
					margin-left: auto;
					margin-right: auto;
					gap: 10px;
					color: black;
					overflow-x: scroll;
					scroll-snap-type: x proximity;
				`}
			>
				<div
					css={css`
						min-width: 49%;
						width: 280px;
						background-color: #e5d8a9eb;
						border-radius: 10px;
						scroll-snap-align: center;
					`}
				>
					{" "}
					<img
						src="https://countryflagsapi.com/svg/cr"
						alt=""
						css={css`
							width: 100%;
							height: 140px;
							padding: 5px;
							border-radius: 10px;
						`}
					></img>{" "}
					<div
						css={css`
							display: flex;
							line-height: 1.2em;
							min-width: 50%;
							margin-top: 2px;
							display: flex;
							padding: 1px;
							font-weight: 300;
							font-family: "Montserrat";
						`}
					>
						El café de HONDURAS es famoso por su contundente aroma, cosechado en las
						famosas planicies de la región, cabe destacar sus tonos de sabor afrutados,
						algo amargos y su efecto contundente a la hora despertarnos de buena mañana.
					</div>
				</div>
				<div
					css={css`
						min-width: 49%;
						width: 280px;
						background-color: #e5d8a9eb;
						border-radius: 10px;
						scroll-snap-align: center;
					`}
				>
					{" "}
					<img
						src="https://countryflagsapi.com/svg/es"
						alt=""
						css={css`
							width: 100%;
							height: 140px;
							padding: 5px;
							border-radius: 10px;
						`}
					></img>{" "}
					<div
						css={css`
							display: flex;
							line-height: 1.2em;
							min-width: 50%;
							margin-top: 2px;

							display: flex;
							padding: 1px;
							font-weight: 300;
							font-family: "Montserrat";
						`}
					>
						El café de HONDURAS es famoso por su contundente aroma, cosechado en las
						famosas planicies de la región, cabe destacar sus tonos de sabor afrutados,
						algo amargos y su efecto contundente a la hora despertarnos de buena mañana.
					</div>
				</div>{" "}
				<div
					css={css`
						min-width: 49%;
						width: 280px;
						background-color: #e5d8a9eb;
						border-radius: 10px;
						scroll-snap-align: center;
					`}
				>
					{" "}
					<img
						src="https://countryflagsapi.com/svg/co"
						alt=""
						css={css`
							width: 100%;
							height: 140px;
							padding: 5px;
							border-radius: 10px;
						`}
					></img>{" "}
					<div
						css={css`
							display: flex;
							line-height: 1.2em;
							min-width: 50%;
							margin-top: 2px;

							display: flex;
							padding: 1px;
							font-weight: 300;
							font-family: "Montserrat";
						`}
					>
						El café de HONDURAS es famoso por su contundente aroma, cosechado en las
						famosas planicies de la región, cabe destacar sus tonos de sabor afrutados,
						algo amargos y su efecto contundente a la hora despertarnos de buena mañana.
					</div>
				</div>{" "}
				<div
					css={css`
						min-width: 49%;
						width: 280px;
						background-color: #e5d8a9eb;
						border-radius: 10px;
						scroll-snap-align: center;
					`}
				>
					{" "}
					<img
						src="https://countryflagsapi.com/svg/mex"
						alt=""
						css={css`
							width: 100%;
							height: 140px;
							padding: 5px;
							border-radius: 10px;
						`}
					></img>{" "}
					<div
						css={css`
							display: flex;
							line-height: 1.2em;
							min-width: 50%;
							margin-top: 2px;

							display: flex;
							padding: 1px;
							font-weight: 300;
							font-family: "Montserrat";
						`}
					>
						El café de HONDURAS es famoso por su contundente aroma, cosechado en las
						famosas planicies de la región, cabe destacar sus tonos de sabor afrutados,
						algo amargos y su efecto contundente a la hora despertarnos de buena mañana.
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerSlider;

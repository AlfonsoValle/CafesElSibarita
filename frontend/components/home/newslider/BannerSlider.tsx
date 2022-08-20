import { css } from "@emotion/react";
import useSWR from "swr";
import { Spinner } from "../../shared/Spinner";

const BannerSlider: React.FC = () => {
	const { data } = useSWR("especialidades/readSpecialities");

	return (
		<div className="images-list">
			<div
				css={css`
					display: flex;
					justify-content: start;
					align-items: start;
					scroll-snap-align: center;
					overflow: overlay;
					max-width: 90%;
					height: 300px;
					margin-left: auto;
					margin-right: auto;
					gap: 10px;
					color: white;
					scroll-snap-type: x proximity;
					border-radius: 10px;
				`}
			>
				{data?.length > 0 ? (
					data.map((item) => (
						<div
							css={css`
								min-width: 30%;
								width: 280px;
								border-radius: 10px;
								scroll-snap-align: center;
								background-color: #ffffff24;
								backdrop-filter: blur(20px);
								border: 1px solid #ffffffad;
							`}
						>
							<div
								css={css`
									text-align: justify;
									line-height: 1.3em;
									min-width: 50%;
									margin-top: 2px;
									display: flex;
									padding: 30px;
									font-weight: 400;
									font-family: "Montserrat";
									display: inline-block;
								`}
							>
								<img
									src={item.image}
									alt=""
									css={css`
										width: 40%;
										height: 90px;
										float: left;
										object-fit: cover;
										border-radius: 10px;
										margin: 0px 20px 5px 0px;
									`}
								></img>
								El café de {item.name} {item.text}
							</div>
						</div>
					))
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
};

export default BannerSlider;

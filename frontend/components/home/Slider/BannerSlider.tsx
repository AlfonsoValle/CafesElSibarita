import { css } from "@emotion/react";
import useSWR from "swr";
import { Spinner } from "../../Shared/Spinner";

const BannerSlider: React.FC = () => {
	const { data } = useSWR("especialidades/readSpecialities");
	console.log(data)
	return (
		<div className="images-list">
			<div
				css={css`
					display: flex;
					align-items: center;
					scroll-snap-align: center;
					overflow: overlay;
					padding-bottom: 22px;
					scroll-snap-type: x proximity;
					width: 100%;
					height: 100%;
					max-height: 255px;
					gap: 29px;
					color: white;
					border-radius: 10px;
				`}
			>
				{data?.length > 0 ? (
					data.map((item,i) => (
						
						<div
							css={css`
								min-width: 32%;
								width: 32%;
								height: 100%;
								border-radius: 10px;
								align-items: stretch;
								scroll-snap-align: start;
								background-color: #9d81494d;
								backdrop-filter: blur(17px);
								border: 1px solid #ffffffc3;
							`}
						>
							<div
								css={css`
									text-align: justify;
									font-size: 14.5px;
									line-height: 18px;
									margin-top: 2px;
									display: flex;
									padding: 10px;
									font-weight: 400;
									font-family: "Montserrat";
									display: inline-block;
								`}
							>
								<img
									src={item.image}
									alt=""
									css={css`
										width: 25%;
										height: 70px;
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

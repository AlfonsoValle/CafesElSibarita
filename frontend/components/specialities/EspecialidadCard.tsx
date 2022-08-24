import { css } from "@emotion/react";

export const EspecialidadCard = (item) => {
	return (
		<div
			css={css`
				border-radius: 10px;
				align-items: stretch;
				scroll-snap-align: start;
				background-color: #ffffff24;
				backdrop-filter: blur(20px);
				border: 1px solid #ffffffad;
			`}
		>
			<div
				css={css`
					text-align: justify;
					font-size: 18px;
					line-height: 16px;
					margin-top: 2px;
					display: flex;
					padding: 12px;
					font-weight: 600;
					font-family: "Montserrat";
					display: inline-block;
				`}
			>
				<div
					css={css`
						font-size: 18px;
						display: flex;
						padding: 0 10px;
						font-weight: 400;
						display: inline-block;
					`}
				>
					<button
						onClick={() => {
							item.onDelete(item.item._id);
						}}
						css={css`
							color: #ffffff;
							font-size: 15px;
							padding: 2px;
							text-decoration: none;
							background-color: #780606;
							justify-content: center;
							align-items: center;
							text-align: start;
						`}
					>
						x
					</button>
				</div>
				{item.item.name}
			</div>
		</div>
	);
};

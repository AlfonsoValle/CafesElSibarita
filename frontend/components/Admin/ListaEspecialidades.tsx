import { css } from "@emotion/react";
import { useState } from "react";
import useSWR from "swr";
import { DeleteSpeciality } from "../../lib/SpecialityRepo";
import { Spinner } from "../shared/Spinner";
import { EspecialidadCard } from "./EspecialidadCard";

export const ListaEspecialidades: React.FC = () => {
	const { data, mutate } = useSWR("especialidades/readSpecialities", {
		refreshInterval: 800,
	});

	return (
		<div className="images-list">
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 100%;
					height: 100%;
					max-height: 300px;
					padding: 0px 60px;
					gap: 5px;
					color: white;
					border-radius: 10px;
				`}
			>
				{data?.length > 0 ? (
					data.map((item, i) => (
						<EspecialidadCard
							item={item}
							onDelete={async () => {
								await DeleteSpeciality(item._id);
								mutate();
							}}
						/>
					))
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
};

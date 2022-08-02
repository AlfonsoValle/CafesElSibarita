import { useForm } from "react-hook-form";
import { Botonformulario } from "./Botondeformulario";
import { css } from "@emotion/react";


export const CrudEspecialidades = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitted },
	} = useForm();

	const submit = handleSubmit((data) => {
		console.log("handle SUBMIT");
		console.log(data);
	});

	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			`}
		>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				`}
			>
				<label className="form-label">Nombre de la Especialidad: </label>
				<input
					type="text"
					className="form-control"
					placeholder="Especialidad"
					{...register("especialidad")}
				/>
			</div>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				`}
			>
				<label className="form-label"> Descripción: </label>
				<input
					className="form-control"
					type="text"
					placeholder="Descripción"
					{...register("descripción")}
				/>
			</div>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				`}
			>
				<label className="form-label"> Bandera: </label>
				<input
					className="form-control"
					type="text"
					placeholder="Utilice el Código ISO del País"
					{...register("bandera")}
				/>
			</div>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				`}
			>
				<Botonformulario onClick={submit} variant={isSubmitted ? "done" : "pending"}>
					{" "}
					Guardar Perfil
				</Botonformulario>
			</div>
		</div>
	);
};

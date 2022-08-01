import { useForm } from "react-hook-form";
import { ButtonForm } from "./ButtonForm";
import { css } from "@emotion/react";
import { useState } from "react";
import { createProfile } from "../../lib/profilerepo";

export const PerfilCrud = () => {
	const [name, setname] = useState("");
	const [lastname, setlastname] = useState("");
	const [address, setaddress] = useState("");
	const [phone, setphone] = useState("");

	const handleSubmit = async () => {
		await createProfile({
			auth0id: "1",
			name,
			lastname,
			address,
			phone,
			favourite_products: [],
		});
	};

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
				<label className="form-label">Nombre: </label>
				<input
					type="text"
					className="form-control"
					placeholder="Alfonso"
					value={name}
					onChange={(e) => setname(e.target.value)}
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
				<label className="form-label"> Apellidos: </label>
				<input
					className="form-control"
					type="text"
					placeholder="Garcia Garcia"
					value={lastname}
					onChange={(e) => setlastname(e.target.value)}
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
				<label className="form-label"> Direccion: </label>
				<input
					className="form-control"
					type="text"
					placeholder="Avenida de la galletita nº1"
					value={address}
					onChange={(e) => setaddress(e.target.value)}
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
				<label className="form-label"> Telefono: </label>
				<input
					className="form-control"
					type="text"
					placeholder="675533223"
					value={phone}
					onChange={(e) => setphone(e.target.value)}
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
				<ButtonForm onClick={handleSubmit}>Guardar Perfil</ButtonForm>
			</div>
		</div>
	);
};

import { css } from "@emotion/react";
import Link from "next/link";
import tw from "twin.macro";

export const BotonPrueba: React.FC = () => {
	return (
		<a tw="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-2 rounded">
			{" "}
			Prueba de Twin Macro
		</a>
	);
};

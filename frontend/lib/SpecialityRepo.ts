import { Specialitytobackend } from "./SpecialityToBackend";

interface ISpeciality {
	name: string;
	text: string;
	image: string;
}

export const CreateSpeciality = async (data: ISpeciality) => {
	const res = await Specialitytobackend.post("especialidades/createSpecialities", data);
	console.log(res.data);
	return res.data;
};

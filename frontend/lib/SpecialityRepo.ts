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

export const DeleteSpeciality = async (_id) => {
	const res = await Specialitytobackend.delete(`especialidades/deleteSpecialities/${_id}`);
	return res.data;
 };
import { profiletobackend } from "./ProfileApi";

interface IProfile {
	auth0id?: string;
	name: string;
	lastname: string;
	address: string;
	phone: string;
	favourite_products?: string[];
}

export const CreateProfile = async (data: IProfile) => {
	const res = await profiletobackend.post("/perfil/createProfile", data);
	console.log(res.data);
	return res.data;
};

// export const findProfile = async () => {
// 	const res = await profiletobackend.get("/perfil/findProfile");
// 	return res.data;
// };

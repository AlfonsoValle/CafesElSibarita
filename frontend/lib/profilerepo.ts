import { profiletobackend } from "./profileApi";

interface IProfile {
	auth0id?: string;
	name: string;
	lastname: string;
	address: string;
	phone: string;
	favourite_products?: string[];
}

export const createProfile = async (data: IProfile) => {
	const res = await profiletobackend.post("/X", data);
	return res.data;
};

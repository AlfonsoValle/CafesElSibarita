import mongoose from "mongoose";
import { MONGODB_URL } from "./config";
import { ProfileModel } from "./profile.model";

const createProfileExample = async () => {
	await ProfileModel.create([
		{
			auth0id: "auth0|62d3511b69e95f64be8a8a4a",
			name: "Federico",
			lastname: "Jimenez Patatero",
			address: "Avenida de la Patata nº 44",
			phone: "675556677",
			favourite_products: ["Colombia", "Brasil", "Guatemala"],
		},
		{
			name: "Macarena",
			lastname: "Blanca y Sincera",
			address: "Calle de la Alpargata nº 2",
			phone: "687566237",
			favourite_products: ["Angola", "Nueva Guinea", "Camerun"],
		},
	]);
};
(async () => {
	await mongoose.connect(MONGODB_URL);
	try {
		await ProfileModel.collection.drop();
	} catch (error) {
		console.log("no he encontrado la info");
	}
	await createProfileExample();
	await mongoose.disconnect();
})();

import { Document, model, Schema } from "mongoose";

export interface ProfileDocument extends Document {
	auth0id: string;
	name: string;
	lastname: string;
	address: string;
	phone: string;
	favourite_products: string[];
}

const schema = new Schema(
	{
		auth0id: { type: String },
		name: { type: String },
		lastname: { type: String },
		address: { type: String },
		phone: { type: String },
		favourite_products: { type: Array },
	},
	{ timestamps: true }
);

export const ProfileModel = model<ProfileDocument>("profile", schema);

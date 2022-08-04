import { Document, model, Schema } from "mongoose";

export interface specialityDocument extends Document {
	auth0id: string;
	name: string;
	text: string;
	image: string;
}

const schema = new Schema(
	{
		auth0id: { type: String },
		name: { type: String },
		text: { type: String },
		image: { type: String },
	},
	{ timestamps: true }
);

export const specialityModel = model<specialityDocument>("speciality", schema);

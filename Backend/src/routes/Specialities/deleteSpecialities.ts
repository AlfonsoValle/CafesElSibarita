import { FastifyPluginAsync } from "fastify";
import { specialityModel } from "./speciality.model";

export const deleteSpecialities: FastifyPluginAsync = async (app) => {
	app.delete<{ Params: { _id: string } }>("/deleteSpecialities/:_id", async (req, res) => {
      const { _id } = req.params;
		await specialityModel.findByIdAndDelete({_id: _id});

      return {
         status: 'deleted',
     };
	});
};





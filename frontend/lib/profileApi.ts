import axios from "axios";

export const profiletobackend = axios.create({
	baseURL: "http://localhost:5000",
});

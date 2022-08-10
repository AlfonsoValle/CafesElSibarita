import axios from "axios";

export async function getServerSideProps(ctx) {
	console.log(ctx.params);
	const res = await axios.post("http://0.0.0.0:5000/sub/single", {
		handle: ctx.params.handle,
	});
	return {
		props: { product: res.data },
	};
}

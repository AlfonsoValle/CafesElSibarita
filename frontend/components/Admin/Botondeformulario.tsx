import tw from "twin.macro"



export const Botonformulario: React.FC<{

	variant?: "done" | "pending";
	children: any;
	onClick?: any;
}> = ({ variant = "pending", children, onClick }) => {
	console.log(variant);
	return (
		<button
			type="button"
			className={`px-4 py-1 rounded-full flex gap-1 items-center ${
				variant == "done"
					? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
					: "bg-gradient-to-r from-purple-500 to-purple-500"
			}`}
			onClick={onClick}
			disabled={variant == "done"}
		>
			{children}
		</button>
	);
};

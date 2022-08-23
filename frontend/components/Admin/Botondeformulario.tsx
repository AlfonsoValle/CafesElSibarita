export const Botonformulario: React.FC<{
	variant?: "done" | "pending";
	children: any;
	onClick?: any;
}> = ({ variant = "pending", children, onClick }) => {
	console.log(variant);
	return (
		<button
			type="button"
			onClick={() => variant != "done" && onClick()}
			disabled={variant == "done"}
		>
			{children}
		</button>
	);
};

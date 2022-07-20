import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Proveedores from "./proveedores";

const CuboProveedores: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="Cubo">
			{isOpen && (
				<motion.div onClick={() => setIsOpen(!isOpen)} className="flag">
					<motion.div
						layout="position"
						css={css`
						
							background-color: #eda543;
							border: 5px solid #eaecebc5;
							border-radius: 24px;
							padding: 20px;
							text-align: center;
							cursor: pointer;
						`}
					>
						Quieres conocer a Nuestros Proveedores? 👆🏻
					</motion.div>
				</motion.div>
			)}
			{!isOpen && (
				<motion.div
					onClick={() => setIsOpen(!isOpen)}
					css={css`
						display: flex;
						text-align: center;
						align-items: center;
						justify-content: space-around;
						background-color: #eda543;
						border: 5px solid #eaecebc5;
						border-radius: 24px;
						text-align: center;
						cursor: pointer;
						overflow: hidden;
						
					`}
				>
					<div
						css={css`
							display: flex;
							flex-wrap: wrap;
							gap: 10px;
							justify-content: center;
							text-align: center;
							
						`}
					>
						<Proveedores
							name="Tienda 1"
							url="https://google.com"
							image="/images/coffee-bag-svgrepo-com.svg"
						/>
						<Proveedores
							name="Tienda 2"
							url="https://google.com"
							image="/images/coffee-bag-svgrepo-com.svg"
						/>
						<Proveedores
							name="Tienda 3"
							url="https://google.com"
							image="/images/coffee-bag-svgrepo-com.svg"
						/>
						<Proveedores
							name="Tienda 4"
							url="https://google.com"
							image="/images/coffee-bag-svgrepo-com.svg"
						/>
						<Proveedores
							name="Tienda 5"
							url="https://google.com"
							image="/images/coffee-bag-svgrepo-com.svg"
						/>
						<Proveedores
							name="Tienda 6"
							url="https://google.com"
							image="/images/coffee-bag-svgrepo-com.svg"
						/>
						<Proveedores
							name="Tienda 7"
							url="https://google.com"
							image="/images/coffee-bag-svgrepo-com.svg"
						/>
						<Proveedores
							name="Tienda 8"
							url="https://google.com"
							image="/images/coffee-bag-svgrepo-com.svg"
						/>
					</div>
				</motion.div>
			)}
		</div>
	);
};

export default CuboProveedores;

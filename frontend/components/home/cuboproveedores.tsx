import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Proveedores from "./Proveedores";

const CuboProveedores: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="Cubo">
			{isOpen && (
				<motion.div onClick={() => setIsOpen(!isOpen)} className="flag">
					<motion.div
						layout="position"
						css={css`
							font-family: "montserrat", sans-serif;
							font-size: 18px;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: #251721;
							border: 3px solid #eaecebc5;
							border-radius: 24px;
							padding: 20px 75px 20px 75px;
							text-align: center;
							cursor: pointer;
							width: 50%;
							white-space: nowrap;
							display: flex;
							justify-content: center;
							align-items: center;
							:hover {
								transform: scale(1.1);
							}
						`}
					>
						¿Quieres conocer a Nuestros Proveedores? 👆🏻
					</motion.div>
				</motion.div>
			)}
			{!isOpen && (
				<motion.div
					onClick={() => setIsOpen(!isOpen)}
					css={css`
						display: flex;
						color: white;
						text-align: center;
						align-items: center;
						margin-top: 20px;
						background-color: #1e4924;
						border: 3px solid #eaecebc5;
						border-radius: 24px;
						text-align: center;
						padding: 5px;
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
							color: white;
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
					</div>
				</motion.div>
			)}
		</div>
	);
};

export default CuboProveedores;

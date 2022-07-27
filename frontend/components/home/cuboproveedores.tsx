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
							background-color: #251721;
							border: 3px solid #eaecebc5;
							border-radius: 24px;
							padding: 10px 10px 10px 10px;
							cursor: pointer;
							white-space: nowrap;

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
						background-color: #1e4924;
						border: 3px solid #eaecebc5;
						border-radius: 24px;
						padding: 2px;
						cursor: pointer;
						overflow: hidden;
					`}
				>
					<div
						css={css`
							display: flex;
							flex-wrap: wrap;
							justify-content: center;
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

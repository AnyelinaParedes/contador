import React from "react";
import Boton from "./boton.jsx";
import { useState } from "react";
import Contador from "./contador.jsx";

//include images into your bundle
import rigoImage from "../../img/4geeks.png";

//create your first component
function Home() {
	const [numClic, setNumClic] = useState(0);

	const manejarClic = () => {
		setNumClic(numClic + 1);
	};
	const reiniciarContador = () => {
		setNumClic(0);
	};

	return (
		<div className="App">
			<div className="logo">
				<img className="logo-A" src={rigoImage} alt="logo" />
			</div>
			<div className="contenedor-1">
				<Contador numClic={numClic} />
				<Boton
					texto="Clic"
					esBotonDeClic={true}
					manejarClic={manejarClic}
				/>
				<Boton
					texto="Reiniciar"
					esBotonDeClic={false}
					manejarClic={reiniciarContador}
				/>
			</div>
		</div>
	);
}

export default Home;

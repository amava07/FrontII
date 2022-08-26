/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
	nombre: "",
	edad: 0,
	ciudad: "",
	interesPorJs: "",
};

const listado = [
	{
		imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
		lenguajes: "HTML y CSS",
		bimestre: "1er bimestre",
	},
	{
		imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
		lenguajes: "Javascript",
		bimestre: "2do bimestre",
	},
	{
		imgUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
		lenguajes: "React JS",
		bimestre: "3er bimestre",
	},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
	/* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
	let time = Date.now();
	let year = new Date(time).getFullYear();

	datosPersona.nombre = prompt("Ingrese su nombre: ");
	let age = Number(prompt("Ingresa el año en que naciste: "));
	while (isNaN(age) || age <= 0) {
		alert("Por favor ingresa un valor válido");
		age = Number(prompt("Ingresa el año en que naciste: "));
	}
	datosPersona.edad = year - age;

	datosPersona.ciudad = prompt("Ingrese la ciudad en la que se encuentra");

	let js = confirm("¿Tiene interés por JavaScript?")?"Si" :"No";
	
}

function renderizarDatosUsuario() {
	/* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
	obtenerDatosDelUsuario();
	/* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
	document.getElementById("nombre").innerHTML = datosPersona.nombre;
	document.getElementById("edad").innerHTML = datosPersona.edad;
	document.getElementById("ciudad").innerHTML = datosPersona.ciudad;
	document.getElementById("javascript").innerHTML = datosPersona.interesPorJs;
}

/* let cards = [
	{
		imagen:
			"https://www.nicepng.com/png/full/141-1415510_psd-to-html-and-css3-html-css.png",
		alt: "HTML y CSS",
		lenguajes: "Lenguajes HTML Y CSS",
		bimestre: "1er Bimestre",
	},
	{
		imagen:
			"https://gogeticon.net/files/3163565/e58388b5d8582d8016e121d9e035ad13.png",
		alt: "JavaScript",
		lenguajes: "JavaScript",
		bimestre: "2do Bimestre",
	},
	{
		imagen:
			"https://gogeticon.net/files/3163568/bac8f95418e4f53673b7d4e95314e621.png",
		alt: "React JS",
		lenguajes: "JavaScript",
		bimestre: "3er Bimestre",
	},
];*/

function recorrerListadoYRenderizarTarjetas() {
	/* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
	const fila = document.querySelector("#fila");
	fila.innerHTML = ``;
	listado.forEach((card) => {
		fila.innerHTML += `
    <li class = "caja">
    <img src="${card.imgUrl}" alt="${card.alt}">
    <p> ${card.lenguajes}</p>
    <p> ${card.bimestre}</p>
    </li>
    `;
	});
}

function alternarColorTema() {
	/* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
	const body = document.getElementById("sitio");
	body.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener(
	"keypress",
	(event) => {
		var name = event.key;
		if (name == "F" || name =="f") {
			document.querySelector("#sobre-mi").removeAttribute("class");
		}
	},
	false
);

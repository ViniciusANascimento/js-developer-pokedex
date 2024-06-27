class CardPokemon extends HTMLElement{
	constructor(){
		super();

		const shadow = this.attachShadow({mode:"open"})
	}

	build(){
		const componentRoot = document.createElement("div");
		componentRoot.setAttribute("class","card");

		const linkPokemon = document.createElement("a");
		linkPokemon.setAttribute("class","pokemon");
		linkPokemon.href = (this.getAttribute("link") || ("#"));

		const numberPokemon = document.createElement("span");
		numberPokemon.textContent = document.getElementById("number");

		const namePokemon = document.createElement("span");
		namePokemon.textContent = document.getElementById("name");

		const detailType = document.createElement("div");
		detailType.setAttribute("class","detail");

		const orderType = document.createElement("ol");
		orderType.setAttribute("class","types");
		
		detailType.appendChild(orderType);

		const photo = document.createElement("img");
		photo.src = this.getAttribute("photo-link");
		photo.alt = this.getAttribute("alt");

		componentRoot.appendChild(linkPokemon);
		componentRoot.appendChild(numberPokemon);
		componentRoot.appendChild(namePokemon);
		componentRoot.appendChild(detailType);
		componentRoot.appendChild(photo);

		return componentRoot
	}
	style(){
		`
			.pokemons {
			display: grid;
			grid-template-columns: 1fr;
			margin: 0;
			padding: 0;
			list-style: none;
		}

		.normal {
			background-color: var(--normal);
		}

		.grass {
			background-color: var(--grass);
		}

		.fire {
			background-color: var(--fire);
		}

		.water {
			background-color: var(--water);
		}

		.electric {
			background-color: var(--electric);
		}

		.ice {
			background-color: var(--ice);
		}

		.ground {
			background-color: var(--ground);
		}

		.flying {
			background-color: var(--flying);
		}

		.poison {
			background-color: var(--poison);
		}

		.fighting {
			background-color: var(--fighting);
		}

		.psychic {
			background-color: var(--psychic);
		}

		.dark {
			background-color: var(--dark);
		}

		.rock {
			background-color: var(--rock);
		}

		.bug {
			background-color: var(--bug);
		}

		.ghost {
			background-color: var(--ghost);
		}

		.steel {
			background-color: var(--steel);
		}

		.dragon {
			background-color: var(--dragon);
		}

		.fairy {
			background-color: var(--fairy);
		}

		.pokemon {
			display: flex;
			flex-direction: column;
			margin: .5rem;
			padding: 1rem;
			border-radius: 1rem;
		}

		.pokemon .number {
			color: #000;
			opacity: .3;
			text-align: right;
			font-size: .625rem;
		}

		.pokemon .name {
			text-transform: capitalize;
			color: #fff;
			margin-bottom: .25rem;
		}

		.pokemon .detail {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}

		.pokemon .detail .types {
			padding: 0;
			margin: 0;
			list-style: none;
		}

		.pokemon .detail .types .type, #about .detail .types {
			color: #fff;
			padding: .25rem .5rem;
			margin: .25rem 0;
			font-size: .625rem;
			border-radius: 1rem;
			filter: brightness(1.1);
			text-align: center;
		}

		.pokemon .detail img {
			max-width: 100%;
			height: 70px;
		}

		.pagination {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding: 1rem;
		}

		.pagination button {
			padding: .25rem .5rem;
			margin: .25rem 0;
			font-size: .625rem;
			color: #fff;
			background-color: #6c79db;
			border: none;
			border-radius: 1rem;
		}

		@media screen and (min-width: 380px) {
			.pokemons {
				grid-template-columns: 1fr 1fr;
			}
		}

		@media screen and (min-width: 576px) {
			.pokemons {
				grid-template-columns: 1fr 1fr 1fr;
			}
		}

		@media screen and (min-width: 992px) {
			.pokemons {
				grid-template-columns: 1fr 1fr 1fr 1fr;
			}
		}
		`
		return style;
	}
}

customElements.define("card-pokemon",CardPokemon)
// function convertPokemonToLi(pokemon) {
//     return `
//         <a href="details.html?number=${pokemon.number}">
//         <li class="pokemon ${pokemon.type}">
//             <span class="number">#${pokemon.number}</span>
//             <span class="name">${pokemon.name}</span>

//             <div class="detail">
//                 <ol class="types">
//                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                 </ol>

//                 <img src="${pokemon.photo}"
//                     alt="${pokemon.name}">
//             </div>
//         </li>
//         </a>
//     `
// }
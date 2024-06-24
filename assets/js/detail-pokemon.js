const headerDetailPokemon = document.getElementById('header-detail')
const mainDetailPokemon = document.getElementById('pokemon-detail')
const test = document.getElementById('teste')

//  Get URL
const paramsString = window.location.href;
const searchParams = new URLSearchParams(paramsString);
// add param number to let number
let number
// Iterating the search parameters
for (const p of searchParams) {
	number = p[1]
}


function convertPokemonToHeader(pokemon) {
    return `
		<div class="headerDetail pokemon">
		<span class="back"><a href="index.html">Back</a></span>
		<span class="name" style="background:
							linear-gradient(120deg,
							${pokemon.types.map((type) =>
								`var(--${type}),transparent `).join(',')}
			">${pokemon.name}
		</span>
		<span class="number">#${pokemon.number}</span>
		</div>
    `
}

function convertPokemonToDetail(pokemon){
	return `
		<div class="spritePokemon detail">
		<img  class="${pokemon.type}" src="${pokemon.photo}"
                    alt="${pokemon.name}">
		</div>
			<section>
				<nav class="navbarDetail">
					<a href="#about">About</a>
					<a href="#status-detail">Stats</a>
					<a href="#evolution">Evolution</a>
					<a href="#moves">Moves</a>
				</nav>
			</section>
			<section id="about" >
				<p class="descript-pokemon">
				texto informativo sobre o pokemon
				</p>
				<div class-"metricsPokemon">
					<ul class="about">
						<li class="height">
							<p>Height</p>
							<p>${pokemon.height}</p>
						</li>
						<li class="weight">
							<p>Weight</p>
							<p>${pokemon.weight}</p>
						</li>
					</ul>
				</div>
				<div class="detail">
					<ol class="types">
						${pokemon.types.map((type) =>
							`<li class="types ${type}">${type}</li>`).join('')
						}
					</ol>
				</div>
			</section>
			<section>
				<ul>
					${pokemon.stats.map((statsList) =>
						`<li class="stats">
							<span class="name">
								${statsList[0]}
							</span>
							<div class="stat" style="background-color:var(--${pokemon.type})">
							<div class="stat value" style="background-color: #fff; width: ${statsList[1]}px; color: #000">
							<span>${statsList[1]}</span>
							</div>
							</div>
						</li>`).join('')
					}
				</ul>
			</section>
	`
}

function loadHeaderDetailPokemon(number){
    pokeApi.getDetail(number)
            .then((pokemon) => {
                const newHtml = convertPokemonToHeader(pokemon)
                headerDetailPokemon.innerHTML = newHtml
            })
}

loadHeaderDetailPokemon(number)

function loadDetailPokemon(number){
    pokeApi.getDetail(number)
            .then((pokemon) => {
                const newHtml = convertPokemonToDetail(pokemon)
                mainDetailPokemon.innerHTML = newHtml
				console.log(teste)
            })
}

loadDetailPokemon(number)

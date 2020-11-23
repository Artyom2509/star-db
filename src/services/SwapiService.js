export class SwapiService {
	_apiBase = 'https://swapi.dev/api/';
	_imgBase = 'https://starwars-visualguide.com/assets/img/';

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`, {mode: 'cors'});

		if (!res.ok) {
			throw new Error(`Couldn't not Fetch ${url} - recieved ${res.status}`);
		}

		return await res.json();
	};

	getAllPeople = async () => {
		const res = await this.getResource(`people/`);
		return res.results.map(this._transformPerson);
	};

	getAllPlanets = async () => {
		const res = await this.getResource(`planets/`);

		const exclude = ['Tatooine'];
		const fittered = res.results.filter((el) => !exclude.includes(el.name));

		return fittered.map(this._transformPlanet);
	};

	getAllStarships = async () => {
		const res = await this.getResource(`starships/`);

		const exclude = [
			'CR90 corvette',
			'Imperial I-class Star Destroyer',
			'GR-75 medium transport',
		];
		const fittered = res.results.filter((el) => !exclude.includes(el.model));

		return fittered.map(this._transformStarship);
	};

	getOneStarship = async (id) => {
		const starship = await this.getResource(`starships/${id}/`);
		return this._transformStarship(starship);
	};

	getOnePlanet = async (id) => {
		const planet = await this.getResource(`planets/${id}/`);
		return this._transformPlanet(planet);
	};

	getOnePeople = async (id) => {
		const people = await this.getResource(`people/${id}/`);
		return this._transformPerson(people);
	};

	_extract(item) {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	}

	_transformPlanet = (planet) => {
		return {
			id: this._extract(planet),
			name: planet.name,
			image: `${this._imgBase}planets/${this._extract(planet)}.jpg`,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
		};
	};

	_transformPerson = (person) => {
		return {
			id: this._extract(person),
			name: person.name,
			image: `${this._imgBase}characters/${this._extract(person)}.jpg`,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
		};
	};

	_transformStarship = (starship) => {
		return {
			id: this._extract(starship),
			name: starship.name,
			image: `${this._imgBase}starships/${this._extract(starship)}.jpg`,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity,
		};
	};
}

export default class DummySwapiService {

  _people = [
    {
      id: 51,
      name: 'Bilbo Baggins [TEST DATA]',
      image: `https://placeimg.com/400/500/people`,
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    },

    {
      id: 52,
      name: 'Frodo Baggins [TEST DATA]',
      image: `https://placeimg.com/400/500/people`,
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    }
  ];

  _planets = [
    {
      id: 51,
      name: 'Earth [TEST DATA]',
      image: `https://placeimg.com/400/400/nature`,
      population: '7.530.000.000',
      rotationPeriod: '23 hours 56 seconds',
      diameter: '12.742 km'
    },
    {
      id: 52,
      name: 'Venus [TEST DATA]',
      image: `https://placeimg.com/400/400/nature`,
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km'
    }
  ];

  _starships = [
    {
      id: 51,
      name: 'USS Enterprise [TEST DATA]',
      image: `https://placeimg.com/600/400/tech`,
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100
    },
    {
      id: 52,
      name: 'USS Enterprise 2 [TEST DATA]',
      image: `https://placeimg.com/600/400/tech`,
      model: 'NCC-1705-C',
      manufacturer: 'Northrop Grumman',
      costInCredits: 'not known',
      length: 'approx 340 meters',
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100
    }
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getOnePeople = async () => {
    return this._people[0];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getOnePlanet = async () => {
    return this._planets[0]
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getOneStarship = async () => {
    return this._starships[0];
  };

  getPersonImage = () => {
    return `https://placeimg.com/400/500/people`
  };

  getStarshipImage = () => {
    return `https://placeimg.com/600/400/tech`;
  };

  getPlanetImage = () => {
    return `https://placeimg.com/400/400/nature`
  };
}

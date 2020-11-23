import {
	withChildFunction,
	withData,
	withSwapiService,
	compose,
} from '../hoc-helpers';
import ItemList from '../item-list';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => (
	<span>
		{name} &nbsp;<span className="grayColor">&nbsp;{model}</span>
	</span>
);

const mapPersonMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPeople,
	};
};

const mapPlanetMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets,
	};
};

const mapStarshipMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllStarships,
	};
};

const PersonList = compose(
	withSwapiService(mapPersonMethodsToProps),
	withData,
	withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
	withSwapiService(mapPlanetMethodsToProps),
	withData,
	withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
	withSwapiService(mapStarshipMethodsToProps),
	withData,
	withChildFunction(renderModelAndName)
)(ItemList);

export { PersonList, StarshipList, PlanetList };

import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import { PeoplesPage, StarshipsPage, PlanetsPage } from '../pages';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import { SwapiService } from '../../services/SwapiService';
import DummiSwapiService from '../../services/dummy-swapi-service';
import {
	HashRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
	state = {
		showRandomPlanet: true,
		swapiService: new SwapiService(),
	};

	onServiceChange = () => {
		this.setState(({ swapiService }) => {
			const Service =
				swapiService instanceof SwapiService ? DummiSwapiService : SwapiService;

			return {
				swapiService: new Service(),
			};
		});
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet,
			};
		});
	};

	onItemSelected = (id) => {
		this.setState({
			selectedPerson: id,
		});
	};

	render() {
		const { showRandomPlanet, swapiService } = this.state;
		const planet = showRandomPlanet ? (
			<ErrorBoundry>
				<RandomPlanet updateInterval={5000} />
			</ErrorBoundry>
		) : null;

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={swapiService}>
					<Router>
						<div className="container">
							<Header onServiceChange={this.onServiceChange} />
							{planet}

							<div className="mb2 button-row">
								<button
									className="toggle-planet btn btn-warning btn-lg"
									onClick={this.toggleRandomPlanet}>
									Toggle Random Planet
								</button>
							</div>
							<Switch>
								<Route
									path="/"
									exact
									render={() => <h2>Welcome to StarDB</h2>}
								/>
								<Route path="/people/:id?" component={PeoplesPage} />
								<Route path="/planets/:id?" component={PlanetsPage} />
								<Route path="/starships" exact component={StarshipsPage} />
								<Route
									path="/starships/:id"
									render={({ match }) => {
										const { id } = match.params;
										return <StarshipDetails itemId={id} />;
									}}
								/>
								<Route render={() => <h1>404 - Page not found</h1>} />
							</Switch>
						</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	}
}

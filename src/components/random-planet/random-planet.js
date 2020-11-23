import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SwapiService } from '../../services/SwapiService';
import Spinner from '../spinner/spinner';
import PlanetView from '../planet-view';
import ErrorIndicator from '../error-indicator';
import './random-planet.css';

export default class RandomPlanet extends Component {
	swapiService = new SwapiService();
	startTimeout;

	static propTypes = {
		updateInterval: PropTypes.number,
	};

	static defaultProps = {
		updateInterval: 6000,
		updateTimeout: 1000,
	};

	state = {
		planet: {},
		loading: true,
		error: false,
	};

	componentDidMount() {
		const { updateInterval, updateTimeout } = this.props;
		this.startTimeout = setTimeout(this.updatePlanet, updateTimeout);
		this.interval = setInterval(this.updatePlanet, updateInterval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		clearTimeout(this.startTimeout);
	}

	onPlanetLoaded = (planet) => {
		this.setState({ planet, loading: false });
	};

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
		});
	};

	updatePlanet = () => {
		const id = Math.floor(Math.random() * 30) + 1;

		const exclude = [22, 23, 24, 27, 20, 26, 13, 25, 29, 30, 28, 1];
		if (exclude.includes(id)) {
			this.updatePlanet();
			return false;
		}

		this.swapiService
			.getOnePlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	};

	render() {
		const { planet, loading, error } = this.state;

		const hasData = !(loading && error);

		const spinner = loading ? <Spinner /> : null;
		const errorMessage = error ? <ErrorIndicator /> : null;
		const content = hasData ? <PlanetView planet={planet} /> : null;

		return (
			<div className="random-planet jumbotron rounded">
				{spinner}
				{errorMessage || content}
			</div>
		);
	}
}

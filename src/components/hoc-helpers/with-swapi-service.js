import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wraped) => {
	return (props) => {
		return (
			<SwapiServiceConsumer>
				{(swapiService) => {
					const serviceProps = mapMethodsToProps(swapiService);
					return <Wraped {...props} {...serviceProps} />;
				}}
			</SwapiServiceConsumer>
		);
	};
};

export { withSwapiService };

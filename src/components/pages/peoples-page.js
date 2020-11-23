import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row';
import './people-page.css';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplesPage = ({ history, match }) => {
	const { id } = match.params;

	return (
		<Row
			left={<PersonList onItemSelected={(id) => history.push(id)} />}
			right={<PersonDetails itemId={id} />}
		/>
	);
};

export default withRouter(PeoplesPage);

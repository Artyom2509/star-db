import React from 'react';
import './people-page.css';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {
	return <StarshipList onItemSelected={(id) => history.push(id)} />;
};

export default withRouter(StarshipsPage);

import React from 'react'

const withChildFunction = (fn) => (Wraped) => {
	return (props) => {
		return <Wraped {...props}>{fn}</Wraped>;
	};
};

export default withChildFunction;
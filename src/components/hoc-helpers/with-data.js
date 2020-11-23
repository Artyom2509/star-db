import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

const withData = (View) => {
	return class extends Component {
		state = {
			data: null,
			loading: true,
			error: false,
		};

		componentDidUpdate(prevProps) {
			if (this.props.getData !== prevProps.getData) {
				this.update();
			}
		}

		componentDidMount() {
			this.update();
		}

		update() {
			this.setState({ loading: true, error: false });

			this.props
				.getData()
				.then((data) => {
					this.setState({
						data,
						loading: false,
					});
				})
				.catch(() => {
					this.setState({ error: true });
				});
		}

		render() {
			const { data, loading, error } = this.state;
			if (loading) return <Spinner />;
			if (error) return <ErrorIndicator />;

			return (
				<ErrorBoundry>
					<View {...this.props} data={data} />
				</ErrorBoundry>
			);
		}
	};
};

export default withData;
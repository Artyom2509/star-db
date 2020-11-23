import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
import './item-details.css';

export class ItemDetails extends Component {
	state = {
		item: null,
		isLoaded: false,
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoaded: true });
			this.updateItem();
		}, 500);
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.itemId !== prevProps.itemId ||
			this.props.getData !== prevProps.getData
		) {
			setTimeout(() => {
				this.updateItem();
				this.setState({ isLoaded: false });
			}, 300);
		}
	}

	updateItem = () => {
		const { itemId, getData } = this.props;
		if (!itemId) return;

		getData(itemId).then((item) => {
			this.setState({
				item,
				isLoaded: true,
			});
		});
	};

	render() {
		const { isLoaded, item } = this.state;

		if (!item) {
			return <span className="item-details">Select a item from a list</span>;
		}

		if (!isLoaded) {
			return (
				<div className="item-details card">
					<div className="card-body">
						<Spinner />
					</div>
				</div>
			);
		}

		const { name, image } = item;

		return (
			<div className="item-details card">
				<img className="item-image" alt="alt" src={image} />

				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						{React.Children.map(this.props.children, (child) => {
							return React.cloneElement(child, { item });
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export const Record = ({ item, field, label }) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</li>
	);
};

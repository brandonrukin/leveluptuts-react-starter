import React from 'react';

export default React.createClass({
	render() {
		return (
			<div>
				<img src={this.props.person.img} />
				<h3>{this.props.person.name}</h3>
				<span>{this.props.person.phone}</span>
				<p>{this.props.person.email}</p>
			</div>
		)
	}
});

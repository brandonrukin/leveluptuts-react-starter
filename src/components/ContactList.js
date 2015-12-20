import React from 'react';
import Contact from './Contact';

var person = {
	'name': 'Brandon',
	'email': 'rukin.brandon@gmail.com',
	'img': 'http://lorempixel.com/80/80/cats/1/',
	'phone': '384 293 4029'
}

export default React.createClass({
	render() {
		return (
			<section>
				<h2>Contact List</h2>
				<Contact person={person}/>
			</section>
		)
	}
});

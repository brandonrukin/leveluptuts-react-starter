import React from 'react';
import Contact from './Contact';

var people = [{
	'name': 'Brandon',
	'email': 'brandon@gmail.com',
	'img': 'http://lorempixel.com/80/80/cats/1/',
	'phone': '384 293 4029'
}, {
	'name': 'Jordan',
	'email': 'jordan@gmail.com',
	'img': 'http://lorempixel.com/80/80/cats/2/',
	'phone': '584 493 4879'
},	{
	'name': 'Adam',
	'email': 'adam@gmail.com',
	'img': 'http://lorempixel.com/80/80/cats/3/',
	'phone': '884 793 7929'	
},	{
	'name': 'Ben',
	'email': 'ben@gmail.com',
	'img': 'http://lorempixel.com/80/80/cats/4/',
	'phone': '784 593 2629'	
}];

export default React.createClass({
	render() {
		return (
			<section>
				<h2>Contact List</h2>
				{people.map(function(person, i) {
					return (<Contact person={person} key={i}/>)
				})}
			</section>
		)
	}
});

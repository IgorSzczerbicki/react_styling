import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

	state = {
		persons: [
			{id: 0, name: 'Igor', age: 30},
			{id: 1, name: 'Anna', age: 25},
			{id: 2, name: 'Marcin', age: 33}
		],
		curPerson: 0,
		showPersons: false
	};

	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex,1);
		this.setState({persons})
	};

	nameChangeHandler = (event, id) => {
		const personId = this.state.persons.findIndex(person => {
			return person.id === id;
		});

		const person = {
			...this.state.persons[personId]
		};
		//const person = Object.assign({}, this.state.persons[personId]

		const persons = [...this.state.persons];
		persons[personId] = person;

		person.name = event.target.value;
		this.setState({persons});
	};

	togglePersonHandler = () => {
		this.setState({showPersons: !this.state.showPersons})
	};

	render() {
		const btnStyle = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if (this.state.showPersons){
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person
							key = {person.id}
							delete ={this.deletePersonHandler.bind(this, index)}
							name={person.name}
							age ={person.age}
							changeName = {(event) => this.nameChangeHandler(event, person.id)} />
					})}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>React Start</h1>
				<button
					style = {btnStyle}
					onClick={this.togglePersonHandler}>Toggle persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
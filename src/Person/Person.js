import React from 'react'
import classes from './Person.css'
//import Radium from 'radium'

const person = (props) => {
	/*const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	};*/
	return (
		<div className={classes.Person} > {/*style={style}>*/}
			<p onClick={props.delete}>
				Imie: {props.name}, wiek: {props.age} - click!
			</p>
			<p>
				{props.children}
				</p>
			<input
				type = "text"
				onChange={props.changeName}
				value = {props.name} />
		</div>
	)
};

export default person; //Radium(person);
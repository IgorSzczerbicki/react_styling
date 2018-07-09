import React from 'react'
import './Person.css'

const person = (props) => {
	return (
		<div className="Person">
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

export default person;
import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<br/>
			<button onClick={props.onReset}>Reset Filters</button>
			<button onClick={props.onSortGreased}>Greased</button>
			<button onClick={props.onSortName}>Sort By Name</button>
			<button onClick={props.onSortWeight}>Sort By Weight</button>
		</div>
	)
}

export default Nav

import React from 'react';
import './Seat.css';

const Seat = (props) => {
	const test = () => {
		console.log("clicked");
	}
	return(
		<div className={props.className} key={Math.random()} onClick={test}>
			<span className="seatno">{props.seatno}</span>
		</div>
	)

}

export default Seat;
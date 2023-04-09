import React from 'react';
import './Theatreseats.css';
import Button from 'react-bootstrap/Button';
import Theatreseatrow from '../theatreseatrow/Theatreseatrow';
import Seat from '../seat/Seat';

const Theatreseats = (props) => {
	const fields = [];
	for(let i=0; i<10;i++){
		fields.push(
			<Theatreseatrow 
				key={i}
				seatrow = {i}
				booked_seats = {props.booked_seats}
			>
			</Theatreseatrow>
		)
	}

	return(
		<div className="layout">
			<div className="theatreseat" key={Math.random()}>
				{
					fields
				}
			</div>
			<div>
				<div className="child">
					<Seat className="nohoverred"/>
					<Seat className="nohovergreen"/>

				</div>
				<div className="child">
					<div className="seatins"> Booked Seats </div>
					<div className="seatins"> Available Seats </div>
				</div>
				<div className="childButton">
					<Button>Book</Button>
				</div>
			</div>
		</div>
	)

}

export default Theatreseats;
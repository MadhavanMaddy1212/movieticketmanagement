import React from 'react';
import './Theatreseatrow.css';
import Seat from '../seat/Seat';

const Theatreseatrow = (props) => {
	const fields = [];
	for(let i=0; i< 10;i++){
		const seatnumber = (props.seatrow * 10) + i+1;
		const bookedSeat = (seatnumber === props.booked_seats) ? true : false
		fields.push(
			<Seat 
				key={seatnumber} 
				seatno={seatnumber}
				className= { bookedSeat ? "seatred" : "seatgreen"}
			/>
		)
	}
	return(
		<div className="theatre-row">
			{ 
				fields
			}
		</div>
	)

}

export default Theatreseatrow;
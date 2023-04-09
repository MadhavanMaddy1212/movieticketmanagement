import React from 'react';
import './Theatrelist.css';
import Card from '../card/Card';
import Theatreitem from '../theatreitem/Theatreitem';

const Theatrelist = (props) => {
	if(props && props.items && props.items.length > 0){
		return(
			<ul className="theathre-list">
				{
					props.items.map(
						theatre => 
							<Theatreitem
								key={Math.random()}
								name={theatre.theatre_name}
								avatar={theatre.thumbnail_url}
								show1_movie = {theatre.show1_movie}
								show1_time = {theatre.show1_time}
								show2_movie = {theatre.show2_movie}
								show2_time = {theatre.show2_time}
								show3_movie = {theatre.show3_movie}
								show3_time = {theatre.show3_time}
								show4_movie = {theatre.show4_movie}
								show4_time = {theatre.show4_time}
								booked_seats ={theatre.booked_seats}
							>
							</Theatreitem>
					)
				}
			</ul>
		)

	} else {
		return (
			<Card>
				No Theatres Found
			</Card>
		)
	}
}

export default Theatrelist;
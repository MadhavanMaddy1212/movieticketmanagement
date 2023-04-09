import React from 'react';
import Card from '../card/Card';
import Avatar from '../avatar/Avatar';
import Show from '../show/Show';
import './Theatreitem.css';

const Theatreitem = (props) => {
	return(
		<li className="theatre-item">
			<Card className="theatre-item__content row">
				<div className="theatre-item__main col-12">
					<div className="theatre-item__child theatre-details">
						<Avatar src={props.avatar} alt="Not Loaded" height="180px" width="200px"/>
						<div className="theatre-item__name">
							{props.name}
						</div>
					</div>
					<div className="theatre-item__child theatre-show-details">
						<div className="theatre-item__main_show">
							<div className="theatre-item__child_show">
								<Show
									show_name = { props.show1_movie}
									show_time = { props.show1_time}
									booked_seats = {props.booked_seats}
								>
								</Show>
								<Show
									show_name = { props.show3_movie}
									show_time = { props.show3_time}
									booked_seats = {props.booked_seats}
								>8
								</Show>
							</div>
							<div className="theatre-item__child_show">
								<Show
									show_name = { props.show2_movie}
									show_time = { props.show2_time}
									booked_seats = {props.booked_seats}
								>
								</Show>
								<Show
									show_name = { props.show4_movie}
									show_time = { props.show4_time}
									booked_seats = {props.booked_seats}
								>
								</Show>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</li>
	)
}

export default Theatreitem;
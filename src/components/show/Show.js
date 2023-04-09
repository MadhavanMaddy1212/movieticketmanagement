import React from 'react';
import Card from '../card/Card';
import './Show.css';

const Show = ( props ) => {
	return (
		<Card className="show_details">
			<div>
				{props.show_name}
			</div>
			<div>
				{props.show_time}
			</div>
		</Card>
	)
}

export default Show;
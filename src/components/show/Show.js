import React , { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './Show.css';
import Modal from 'react-modal';
import Theatreseats from '../theatreseats/Theatreseats';

function Show(props){
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const onOpen = () => {
		setModalIsOpen(true);
	}
	const onClose = () => {
		setModalIsOpen(false);
	}
	
	useEffect( () => {
		Modal.setAppElement('body')
	});

	return (
		<>
			<Button className="show_details" onClick={onOpen}>
				<div>
					{props.show_name}
				</div>
				<div>
					{props.show_time}
				</div>
			</Button>
			<Modal isOpen={modalIsOpen}>
				<button className="button-css" onClick={onClose}>x</button>
				<Theatreseats 
					booked_seats = {props.booked_seats}
				/>
			</Modal>
		</>
	)

}

export default Show;
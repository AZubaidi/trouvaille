import { useEffect, useState } from 'react';
import './Points.scss';
import axios from 'axios';
import Card from '../../components/Card/Card';

export default function Points () {
	const [destinations, setDestinations] = useState([]);
	const [points, setPoints] = useState([]);
	useEffect(() => {
		const getDestinations = async() => {
			const destinations = await axios.get('http://localhost:8080/api/destinations');
			setDestinations(destinations.data);
		}
		const getPoints = async() => {
			const points = await axios.get('http://localhost:8080/api/points');
			setPoints(points.data);
		}
		getDestinations();
		getPoints();
	}, [])
	console.log(destinations);
	console.log(points);
	return (
		destinations.map((destination) => {
			console.log(destination);
			return (
			<div className='destination'>
				<Card
					destinationId = {destination.id}
					name = {destination.name}
					country = {destination.country}
					photo = {destination.photo}
				/>
			</div>
			)
		})
	)
}

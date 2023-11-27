import { useEffect, useState } from 'react';
import './Points.scss';
import axios from 'axios';
import Card from '../../components/Card/Card';
import { Typography } from '@mui/material';

export default function Points({addFavorite, deleteFavorite, checkFavorites}) {
	const [destinations, setDestinations] = useState([]);
	const [points, setPoints] = useState([]);
	useEffect(() => {
		console.log('hello');
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
	return (
		<div className='points'>
		<Typography variant='h4' sx={{ml:'2rem', mb: '1rem', fontWeight: 'bold'}}>All travel points</Typography>
		<Typography variant='h6' sx={{ml:'2rem', mb: '1rem'}}>Click on a pin to add a point to your pins.</Typography>
		{destinations.map((destination) => {
			return (
			<div className='block'>
			<div className='block__destination'>
				<Card
					destinationId = {destination.id}
					name = {destination.name}
					country = {destination.country}
					photo = {destination.photo}
					destination = {true}
				/>
			</div>
			<div className='block__points'>
				{points
					.filter(point => point.destination_id === destination.id)
					.map((point) => {
					return (
					<Card 
						id = {point.id}
						destinationId={destination.id}
						pointId={point.id}
						name = {point.name} 
						photo = {point.photo}
						addFavorite={addFavorite}
						deleteFavorite={deleteFavorite}
						checkFavorites={checkFavorites}
					/>
					)
				})}
			</div>
			</div>
			)
		})}
		</div>
	)
}

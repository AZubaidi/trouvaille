import { Typography } from '@mui/material';
import './Pins.scss';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pins({isLoggedIn, checkFavorites, addFavorite, deleteFavorite, favorites}) {
	const [destinations, setDestinations] = useState<any[]>([]);
	const [points, setPoints] = useState<any[]>([]);
	useEffect(() => {
		console.log('hello');

		const getPoints = async() => {
			const points = await axios.get('http://localhost:8080/api/points');
			const data = points.data;
			const destinations = await axios.get('http://localhost:8080/api/destinations');
			const destData = destinations.data;
			const ptsArray = [];
			const destArray = [];
			for (let i = 0; i < data.length; i++) {
				const pointId = data[i].id;
				const destId = data[i].destination_id;
				if (checkFavorites(pointId)) {
					ptsArray.push(data[i]);
					const currentDestination = destData.find(dest => dest.id === destId);
					if (!destArray.includes(currentDestination)) {
						destArray.push(currentDestination);
					}
				}
			}
			setPoints(ptsArray);
			setDestinations(destArray);
		}
		getPoints();
	}, [favorites])
	return (
		!isLoggedIn &&
			<Typography variant='h4' sx={{ml:'2rem', mb: '1rem', mt: '2rem'}}>Please login to view your pins.</Typography>	
		||
		<div className='pins'>
		<Typography variant='h4' sx={{ml:'2rem', mb: '1rem', fontWeight: 'bold'}}>Your pins</Typography>
		<Typography variant='h6' sx={{ml:'2rem', mb: '1rem'}}>Click on a pin to remove it from your pins.</Typography>
		{
		destinations.map((destination) => {
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
		})
		}
		</div>
	)
}

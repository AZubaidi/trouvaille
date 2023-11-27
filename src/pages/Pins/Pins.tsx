import { Typography } from '@mui/material';
import './Pins.scss';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pins({isLoggedIn, favorites, addFavorite, deleteFavorite, checkFavorites}) {
	const [destinations, setDestinations] = useState<any[]>([]);
	const [points, setPoints] = useState<any[]>([]);
	useEffect(() => {
		const getDestinations = async() => {
			const destinations = await axios.get('http://localhost:8080/api/destinations');
			const data = destinations.data;
		}
		const getPoints = async() => {
			const points = await axios.get('http://localhost:8080/api/points');
			const data = points.data;
			console.log(data);
			const destArray = [];
			const ptsArray = [];
			for (let i = 0; i < data.length; i++) {
				const pointId = data[i].id;
				const destId = data[i].destination_id;
				console.log(pointId);
				console.log(destId);
				console.log(favorites);
				if (favorites.includes(pointId)) {
					ptsArray.push(data[i]);
					if (!destArray.includes(destId)) {
						destArray.push(data[i]);
					}
				}
			}
			setPoints(ptsArray);
			setDestinations(destArray);
		}
		getDestinations();
		getPoints();
	}, [])
	return (
		!isLoggedIn &&
			<Typography>Please login to view your pins.</Typography>	
		||
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
	)
}

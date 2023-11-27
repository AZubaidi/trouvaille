import { Typography } from '@mui/material';
import './Quiz.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

export default function Quiz ({addFavorite, deleteFavorite, checkFavorites}) {
	const [points, setPoints] = useState([]);
	const [selectPoints, setSelectPoints] = useState([]);
	const [currentPoint, setCurrentPoint] = useState(null);
	const [numOfClicks, setNumOfClicks] = useState(0);

	useEffect(() => {
		const getPoints = async() => {
			const pts = await axios.get('http://localhost:8080/api/points');
			console.log(pts.data);
			setPoints(pts.data);
			const points = [];
			for (let i = 0; i < 2; i++) {
				const randomElement = pts.data[Math.floor(Math.random() * pts.data.length)];
				console.log(randomElement);
				points.push(randomElement);
			}
			setSelectPoints(points);
			
		}
		getPoints();
		
	}, [])

	const handleQuizClick = (point) => {
		console.log('quiz click');
		console.log(point);
        setNumOfClicks(numOfClicks + 1);
		const pointsArray = selectPoints;
        const clickedPoint = pointsArray.find((pt) => pt.id === point.id);
        setCurrentPoint(clickedPoint);

        const clickedPointIndex = pointsArray.findIndex((pt) => pt.id === point.id);
		const randomElement = points[Math.floor(Math.random() * points.length)];
		const newPoints = [randomElement];
        newPoints.splice(clickedPointIndex, 0, clickedPoint);
        setSelectPoints(newPoints);
	}
	return (
		numOfClicks === 4 && 
			<div className='quiz'>
			<Typography variant='h5' className='quiz__heading'>Here's what you desire.</Typography>
			<Card 
				id = {currentPoint.id}
				destinationId={currentPoint.destination_id}
				pointId={currentPoint.id}
				name = {currentPoint.name} 
				photo = {currentPoint.photo}
				addFavorite={addFavorite}
				deleteFavorite={deleteFavorite}
				checkFavorites={checkFavorites}
				bigCard={true}
				/>
			</div>
			||
		<div className='quiz'>
			<Typography variant='h4'>Pick the place that you like more.</Typography>
			<Typography variant='subtitle1'>Only {4-numOfClicks} more before your trouvaille.</Typography>
		<div className='quiz__cards'>
		{
		selectPoints.map((point) => {
			console.log('inside map');
			return (
				
				<div onClick={() => handleQuizClick(point)}>
				<Card 
						id = {point.id}
						destinationId={point.destination_id}
						pointId={point.id}
						name = {point.name} 
						photo = {point.photo}
						addFavorite={addFavorite}
						deleteFavorite={deleteFavorite}
						checkFavorites={checkFavorites}
						overlay={false}
				/>
					</div>
			)
		})
		}
		</div>
		</div>
	)
}

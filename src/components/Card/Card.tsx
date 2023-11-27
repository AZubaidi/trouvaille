import { Typography, paginationItemClasses } from '@mui/material';
import { PushPin, PushPinOutlined  } from '@mui/icons-material';
import './Card.scss';

export default function Card({destinationId, pointId, name, country, photo, destination=false, addFavorite, deleteFavorite, checkFavorites}) {
	const handlePin = (pointId) => {
		console.log(pointId);
		if (checkFavorites(pointId)) {
			deleteFavorite(pointId);
		} else {
			addFavorite(pointId);
		}
	}
	return (
		<div className={`card ${destination? 'card--dstn' : '' }`} style={{backgroundImage: `url(${photo})`}}>
			{!destination && !checkFavorites(pointId) &&
				<PushPinOutlined onClick={() => handlePin(pointId)} className={'card__pin'} />
				|| !destination &&
				<PushPin onClick={() => handlePin(pointId)} className={'card__pin'} />
			}
			<Typography className={'card__name'}>
				{name}
			</Typography>
			<Typography className='card__country'>
				{country}
			</Typography>
		</div>
	)
}

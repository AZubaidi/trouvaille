import { Typography, paginationItemClasses } from '@mui/material';
import { PushPin, PushPinOutlined  } from '@mui/icons-material';
import './Card.scss';

export default function Card({destinationId, pointId, name, country, photo, destination=false, addFavorite, deleteFavorite, checkFavorites, overlay = true, bigCard=false}) {
	const handlePin = (pointId) => {
		console.log(pointId);
		if (checkFavorites(pointId)) {
			deleteFavorite(pointId);
		} else {
			addFavorite(pointId);
		}
	}
	return (
		<div className={`card ${destination? 'card--dstn' : '' } ${bigCard? 'card--special' : ''}`} style={{backgroundImage: `url(${photo})`}}>
			{overlay &&
			!destination && !checkFavorites(pointId) &&
				<PushPinOutlined onClick={() => handlePin(pointId)} className={'card__pin'} />
				|| overlay && !destination &&
				<PushPin onClick={() => handlePin(pointId)} className={'card__pin'} />
			}
			{overlay &&
				<>
			<Typography className={'card__name'} sx={{fontWeight: 'bold'}}>
				{name}
			</Typography>
			<Typography className='card__country'>
				{country}
			</Typography>
			</>
			}
		</div>
	)
}

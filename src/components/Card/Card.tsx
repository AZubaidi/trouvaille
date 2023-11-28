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
	let nameStyle;
	if (bigCard) {
		nameStyle = {
			fontSize: '1.3rem',
			textShadow: "-1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px  0   0 #000, 1px  1px 0 #000, 0    1px 0 #000,-1px  1px 0 #000, -1px  0   0 #000;",
		}
	} else {
	nameStyle = {
			textShadow: "-1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px  0   0 #000, 1px  1px 0 #000, 0    1px 0 #000,-1px  1px 0 #000, -1px  0   0 #000;",
			lineHeight: '8px;'
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
			<Typography className={'card__name'} sx={nameStyle}>
				{name}
			</Typography>
			<Typography className='card__country' sx={{fontWeight: 'bold'}}>
				{country}
			</Typography>
			</>
			}
		</div>
	)
}

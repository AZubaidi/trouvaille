import { Typography } from '@mui/material';
import './Card.scss';

export default function Card({destinationId, name, country, photo}) {
	console.log(destinationId, name, country, photo);
	return (
		<div className='card card--big' style={{backgroundImage: `url(${photo})`}}>
			<Typography className='card__name'>
				{name}
			</Typography>
			<Typography className='card__country'>
				{country}
			</Typography>
		</div>
	)
}

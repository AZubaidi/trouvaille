import { Typography } from '@mui/material';
import './Hero.scss';

export default function Hero () {
	const photo = 'https://cdn.audleytravel.com/1050/750/79/1018521-rome-skyline-italy.webp';
	return (
		<div className="hero">
			<div className='hero__right'>
			<Typography variant='h1' sx={{ fontWeight: 400, lineHeight: 0.8 }}>trouvaille</Typography>
			<Typography variant='subtitle1' sx={{ml: 1 }}>(n.) a lucky find.</Typography>
			<Typography variant='h2'>Find a place you didn't know you wanted.</Typography>
			</div>
			<div className='hero__left'>
			<div className='hero-card' style={{backgroundImage: `url(${photo})`}}>
				<Typography className={'hero-card__name'} sx={{fontSize:'1.5rem', lineHeight:0.8}}>
					Rome
				</Typography>
				<Typography className='hero-card__country'>
					Italy
				</Typography>
			</div>
			</div>
		</div>
	)
}

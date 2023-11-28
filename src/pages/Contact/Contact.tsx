import { Icon, Typography } from '@mui/material';
import './Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact () {
	return (
		<div className='contact'>
			<Typography variant = 'h1' sx={{fontWeight:'500'}}>Abdul Alzubaidi</Typography>
			<Typography variant = 'h2' sx={{mb: '4rem', lineHeight: '1.5rem'}}>Software Engineer</Typography>
			<div className='contact__github'>
				<GitHubIcon sx={{height: '3.25rem', width: '2.5rem'}} />
				<Typography variant = 'h3' sx={{fontWeight: '300'}}>&nbsp;/AZubaidi</Typography>
			</div>
			<div className='contact__linkedin'>
				<LinkedInIcon sx={{height: '3.5rem', width: '2.5rem'}} />
				<Typography variant = 'h3' sx={{fontWeight: '300'}}>&nbsp;/in/abdul-alzubaidi</Typography>
			</div>
			<div className='contact__email'>
				<EmailIcon sx={{height: '3.5rem', width: '2.5rem'}} />
				<Typography variant = 'h3' sx={{fontWeight: '300'}}>&nbsp;abdulrahman.zubaidi@gmail.com</Typography>
			</div>
			<div style={{height: '1vh'}} > </div>
		</div>
	)
}

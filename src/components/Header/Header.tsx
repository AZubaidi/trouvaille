import { Link } from 'react-router-dom';
import './Header.scss';
import Login from '../Login/Login';

export default function Header({isLoggedIn, setIsLoggedIn, setJwtToken}) {
	return (
		<nav className="header">
			<ul className='header__left'>
				<li className='header__li'>
					<Link to='/' className='header__li__item--logo'>trouvaille</Link>
				</li>
			</ul>
			<ul className='header__right'>
				<li className='header__li'>
					<Link to='/points' className='header__li__item'>Points</Link>
				</li>
				<li className='header__li'>
					<Link to='/pins' className='header__li__item'>Pins</Link>
				</li>
				<li className='header__item'>
					<Login 
						isLoggedIn={isLoggedIn}
						setIsLoggedIn={setIsLoggedIn}
						setJwtToken={setJwtToken}
					/>
				</li>
			</ul>
		</nav>
	)
}

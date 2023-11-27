import { Link } from 'react-router-dom';
import './Header.scss';
import Login from '../Login/Login';

export default function Header({setIsLoggedIn, setJwtToken}) {
	return (
		<nav className="header">
			<ul className='header__left'>
				<li>
					<Link to='/'>Trouvaille</Link>
				</li>
			</ul>
			<ul className='header__right'>
				<li className='header__item'>
					<Link to='/points'>Points</Link>
				</li>
				<li className='header__item'>
					<Link to='/pins'>Pins</Link>
				</li>
				<li className='header__item'>
					<Login 
						setIsLoggedIn={setIsLoggedIn}
						setJwtToken={setJwtToken}
					/>
				</li>
			</ul>
		</nav>
	)
}

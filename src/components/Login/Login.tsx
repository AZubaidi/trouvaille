import './Login.scss';
import { FormEventHandler, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 340,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Login({isLoggedIn, setIsLoggedIn, setJwtToken}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
		if (isLoggedIn) {
			console.log(isLoggedIn);
			setIsLoggedIn(false);
			console.log(isLoggedIn);
			setJwtToken(null);
			return;
		}
		setOpen(true);
	}
  const handleClose = () => setOpen(false);
  const handleSubmit = async (e: any) => {
		e.preventDefault();
		const username = e.target.username.value;
		const password = e.target.password.value;
		const sendLogin = await axios.post('http://localhost:8080/api/login', {
			username: username,
			password: password,
		});
		console.log(sendLogin);
		if (sendLogin && sendLogin.data.token) {
			console.log('logged in successfully');
			setIsLoggedIn(true);
			setJwtToken(sendLogin.data.token);
			localStorage.setItem("token", sendLogin.data.token)
			handleClose();
		}
	}
  return (
    <div>
      <button onClick={handleOpen} className='login-btn'>{isLoggedIn? 'Logout' : 'Login'}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
		  <form className='form form--login' onSubmit={handleSubmit}>
			<label htmlFor='username'>Username</label> 
			<input className='form__input' type='text' name='username' />
			<label htmlFor='password'>Password</label> 
			<input className='form__input' type='text' name='password' />
			<button className='form__submit' type='submit'>login </button>
		  </form>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Don't have an account? Click here to register.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

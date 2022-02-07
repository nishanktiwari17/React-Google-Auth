import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const clientId =
	'707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function LogoutHooks() {
	const navigate = useNavigate();
	const onLogoutSuccess = (res) => {
		// console.log('Logged out Success');
		// toast.success('Logged out Successfully');
		navigate('/');
	};

	const onFailure = () => {
		console.log('Handle failure cases');
		toast.error('Failed to logout');
	};

	const { signOut } = useGoogleLogout({
		clientId,
		onLogoutSuccess,
		onFailure,
	});

	return (
		<button onClick={signOut}>
			{/* <img src="icons/google.svg" alt="google login" className="icon"></img> */}
			Confirm Sign Out
		</button>
	);
}

export default LogoutHooks;

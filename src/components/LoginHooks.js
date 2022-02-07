import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
	'1064876605521-pff1c9it0o77bv4otssv3kv9s1ctnirr.apps.googleusercontent.com';

function LoginHooks() {
	const navigate = useNavigate();
	const onSuccess = (res) => {
		console.log('Login Success: currentUser:', res.profileObj);
		toast.success(`Logged in successfully`);
		navigate('/role');
		refreshTokenSetup(res);
	};

	const onFailure = (res) => {
		console.log('Login failed: res:', res);
		toast.error(`Failed to login`);
	};

	const { signIn } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
		isSignedIn: true,
		accessType: 'offline',
		// responseType: 'code',
		// prompt: 'consent',
	});

	return (
		<div>
			<h1>Welcome to my page! Please sign in with google to continue</h1>
			<button onClick={signIn} className="button">
				{/* <img
				src=".public/icons/google.svg"
				alt="google login"
				className="icon"
			></img> */}

				<span className="buttonText">Sign in with Google</span>
			</button>
		</div>
	);
}

export default LoginHooks;

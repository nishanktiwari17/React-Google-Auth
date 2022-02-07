import React from 'react';
import './App.css';
import Login from './components/LoginHooks';
import Logout from './components/LogoutHooks';
import Role from './components/Role';
import Manager from './pages/Manager';
import HR from './pages/HR';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/logout" element={<Logout />} />
						<Route path="/role" element={<Role />} />
						<Route path="/dashboard" element={<Header />} />
						<Route
							path="/dashboard/manager"
							element={<Manager />}
						/>
						<Route path="/dashboard/hr" element={<HR />} />
					</Routes>
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="colored"
					/>
				</div>
			</Router>
		</div>
	);
}

export default App;

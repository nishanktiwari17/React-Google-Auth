import React from 'react';
import {
	FormGroup,
	FormControlLabel,
	Checkbox,
	Grid,
	Card,
	CardContent,
	Box,
	Button,
	Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useStyles = makeStyles(() => ({
	button: {
		textAlign: 'center',
		marginTop: '15px',
		background: 'rgb(73, 79, 82) !important',
		color: 'white',
	},
	card: {
		marginTop: '20px',
		marginLeft: '220px',
		marginRight: '220px',
		paddingLeft: '50px',
	},
}));

function Role() {
	const navigate = useNavigate();
	const classes = useStyles();
	const [checked, setChecked] = useState({
		hr: false,
		manager: false,
	});
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	const handleChange = (event) => {
		setChecked({ ...checked, [event.target.name]: event.target.checked });
		console.log(checked);
	};

	const handleClick = () => {
		console.log(checked);
		if (checked.hr === true && checked.manager === false) {
			navigate('/dashboard/hr');
		}
		if (checked.manager === true && checked.hr === false) {
			navigate('/dashboard/manager');
		}
		if (checked.manager === true && checked.hr === true) {
			toast.error('You can select only one role');
		}
	};

	return (
		<div>
			{' '}
			<h1>Role</h1>
			<div style={{ margin: 0, padding: 0 }}>
				<title>Create Modify</title>
				<Box
					sx={{
						backgroundColor: 'background.default',
						minHeight: '100%',
						py: 3,
					}}
				>
					<Container pl={4} pr={4} maxWidth={false}>
						<h2>Select a role</h2>
						<Card className={classes.card}>
							<CardContent>
								<Grid container spacing={2}>
									<FormGroup>
										<FormControlLabel
											control={
												<Checkbox
													name="manager"
													id="manager"
													onChange={handleChange}
												/>
											}
											label="Manager"
										/>
										<FormControlLabel
											control={
												<Checkbox
													name="hr"
													id="hr"
													onChange={handleChange}
												/>
											}
											label="HR"
										/>
									</FormGroup>
								</Grid>
							</CardContent>
						</Card>
						<Button
							variant="contained"
							className={classes.button}
							onClick={handleClick}
						>
							Submit
						</Button>
					</Container>
				</Box>
			</div>
		</div>
	);
}

export default Role;

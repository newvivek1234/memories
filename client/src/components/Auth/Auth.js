import React, { useState } from "react";
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";

import Icon from "./Icon.js";
import LockOutLinedIcon from "@material-ui/icons/LockOpenOutlined";
import useStyles from "./styles.js";
import Input from "./Input.js";

const Auth = () => {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);

	const [isSignup, setIsSignup] = useState(false);

	const handleShowPassword = () =>
		setShowPassword((prevShowPassword) => !prevShowPassword);
	const handleSubmit = () => {};
	const handleChange = () => {};

	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
		handleShowPassword(false);
	};

	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutLinedIcon />
				</Avatar>
				<Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Input
									name="firstName"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									half
								/>
								<Input
									name="lastName"
									label="Last Name"
									handleChange={handleChange}
									half
								/>
							</>
						)}
						<Input
							name="email"
							label="Email Address"
							handleChange={handleChange}
							type="email"
						/>
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							type={showPassword ? "text" : "password"}
							handleShowPassword={handleShowPassword}
						/>
						{isSignup && (
							<Input
								name="confirmPassword"
								label="Repeat Password"
								handleChange={handleChange}
								type="password"
							/>
						)}
					</Grid>
					<GoogleLogin
						clientId="Google ID"
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color="primary"
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								startIcon={<Icon />}
								variant="contained"
							>
								Google Sign In
							</Button>
						)}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{isSignup ? "Sign Up" : "Sign In"}
					</Button>
					<Grid conatiner justify="flex-end">
						<Grid item>
							<Button onClick={switchMode}>
								{isSignup
									? "Already have a account ? Sign In"
									: "Don't have an account ? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;

import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import Navbar from "./components/Navbar/Navbar.js";
import { getPosts } from "./actions/posts.js";
import useStyles from "./styles.js";

const App = () => {
	const [currentId, setCurrentId] = useState(null);

	// for styles
	const classes = useStyles();
	// hook
	const dispatch = useDispatch();   

	// successful dispatch
	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		<Container maxWidth="lg">
			<Navbar />
			<Grow in>
				<Container>
					<Grid
						container
						justify="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>

						<Grid item xs={12} sm={7}>
							<Posts setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;

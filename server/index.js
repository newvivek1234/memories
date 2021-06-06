import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

// heroku || local
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL =
	"mongodb+srv://Demo:Demo@freecluster.ugzhd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// mongodb+srv://<username>:<password>@freecluster.ugzhd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority;

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

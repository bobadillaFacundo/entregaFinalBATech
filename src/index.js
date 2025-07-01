
// Importing necessary modules
import express from "express";
import { join, __dirname } from "./utils/index.js"
import cors from "cors"
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes.js";
import product from "./routes/product.routes.js";
import authentication from "./middlewares/auth.middleware.js";


const app = express();

app.set("PORT", 9000);
app.use(cors()); 


// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());


// routes
app.use("/auth", authRoutes);
app.use("/products",authentication,product);

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});

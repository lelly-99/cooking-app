import express  from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import pgPromise from "pg-promise";
import flash from "express-flash";
import session from "express-session";
import bcrypt from "bcrypt";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import IngredientsService from "./service/ingredients.js";
import IngredientsRoutes from "./routes/ingredientRoutes.js";
import AuthRoutes from "./routes/authRoutes.js";
import AuthService from "./service/authService.js";
dotenv.config();

const app = express();
const pgp = pgPromise();

const connectionString = process.env.DATABASE_URL 

const db = pgp({ connectionString});



app.use(session({ 
  secret: 'Razorma', 
  resave: false,
  saveUninitialized: true,
}));
app.use(flash());








// Setup the Handlebars view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());

const ingredientsService = IngredientsService(db);
const ingredientsRoutes = IngredientsRoutes(ingredientsService)

const authService = AuthService(db);
const authRoutes = AuthRoutes(authService ,bcrypt);

//authRoutes
app.get('/login', authRoutes.loginRoute);
app.get('/register', authRoutes.registerRoute)



// Define a route to handle GET requests to Home page
app.get("/",ingredientsRoutes.root);




//Scan Routes
app.get("/scan",ingredientsRoutes.scan);




//list of recipes Routes (dishList)
app.get("/recipes/:recipe_dish_name",ingredientsRoutes.recipes);





//list of recipes Routes (dishList)
app.get("/dishList/:dish_name",ingredientsRoutes.dishList);





//chosen recipe Routes
app.get("/recipes/:id",ingredientsRoutes.makeFood);





//finished meal Routes
app.get("/finishedMeal",ingredientsRoutes.showFood);





//learderboard Routes
app.get("/learderboard",ingredientsRoutes.getLearderboard);




///port
let PORT = process.env.PORT || 3006;

app.listen(PORT, function(){
  console.log(`App listening on localhost:${PORT}`);
});
import axios from "axios";
export default function IngredientsRoutes(ingredientsService) {

    //get the home page
    function root(req, res) {
      res.render('home',{
        currentUser:""
      });
    }




    
    function scan(req, res){
      res.render('scan',{
        currentUser:""
      });
    }





    async function recipes(req, res){
      // let recipeFor = req.params.recipe_dish_name;
      // let recipeData = await axios.get(`https://recipes-api-8b36.onrender.com/api/recipe/${recipeFor}`)
      // recipeData=recipeData.data.data
      // console.log(recipeData)
      // res.render('recipe',{
      //   recipe: recipeData,
      //   currentUser:""
      // });
    }



    

    async function makeFood(req, res){
      let id = req.params.id;
      
      let recipeData = await axios.get(`https://recipes-api-8b36.onrender.com/api/recipes/${id}`)
      console.log(recipeData.data.data);
      res.render('recipe',{
        recipe: recipeData,
        currentUser:""
      });
    }



    async function dishList(req,res){
      let dishFor = req.params.dish_name;
      let dishes = await axios.get(`https://recipes-api-8b36.onrender.com/api/dishes/${dishFor}`)
      let dishesData = dishes.data
      res.render(`dishList`,{
        dishes:dishesData,
        currentUser:""
      })
    }


    function showFood(req, res){
      res.render('finishedMeal',{
        currentUser:""
      });
    }







    function getLearderboard(req, res){
      res.render('learderboard',{
        currentUser:""
      });
    }
    
 
    
  
    return {
      root,
      scan,
      // recipes,
      makeFood,
      showFood,
      getLearderboard,
      dishList
  }
}
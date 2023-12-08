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





    function recipes(req, res){
      res.render('recipe',{
        currentUser:""
      });
    }





    function makeFood(req, res){
      res.render('recipe',{
        currentUser:""
      });
    }



    async function dishList(req,res){
      let dishes = await axios.get("https://recipes-api-8b36.onrender.com/api/dishes/:dish_name")
      let dishesData = dishes.data
      let dishFor = req.params.dish_name;
      console.log(dishesData)
      res.render(`dishList/${dishFor}`,{
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
      recipes,
      makeFood,
      showFood,
      getLearderboard,
      dishList
  }
}
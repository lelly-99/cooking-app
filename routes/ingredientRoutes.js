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



    function dishList(req,res){
      res.render('dishList',{
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
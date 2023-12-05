export default function IngredientsRoutes(ingredientsService) {

    //get the home page
    function root(req, res) {
      res.render('Home');
    }
  
    
  
    return {
      root
  }
}
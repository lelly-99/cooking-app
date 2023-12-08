export default function helpers() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function addOne(value)  {
        return value + 2;
    }
    
  
    return {
      capitalize,
      addOne
    }
  }

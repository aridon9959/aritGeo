function aritGeo(arr) {
  let diff = arr[1] - arr[0];
  let ratio = arr[1]/arr[0];

  let arit = true;
  let geo = true;

  if (arr.length === 0) {
      return 0
  } 

  for(var i = 0; i < arr.length -1; i++) {
      if(arr[i + 1] - arr[i] !== diff ){
        arit = false;
       }
       if(arr[i + 1] / ratio !== arr[i]) {
        geo = false;
      }
  }

    if(arit === true) {
       return "Arithmetic";
    } else if(geo === true) {
      return "Geometric"; 
    } else {
      return -1; 
    }
} 

module.exports.aritGeo = aritGeo;




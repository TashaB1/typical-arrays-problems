
exports.min = function min (array) {
     let min = 0;

     if ((Array.isArray(array))&&(array.length > 0)){
        min = array[0];

        for (i=0; i<array.length; i++){
            if (array[i]<min) {
                min = array[i];
            }
        }
     }

     return min;
}


exports.max = function max (array) {
      let max = 0;

      if ((Array.isArray(array)) && (array.length > 0)){
         max = array[0];

         for (i=0; i<array.length; i++){
             if (array[i]>max) {
                 max = array[i];
             }
         }
      }

      return max;
}

exports.avg = function avg (array) {
    if ((Array.isArray(array))&&(array.length > 0)){
        return array.reduce((a, b) => (a + b)) / array.length;
    }
    else{
        return 0;
    }
}

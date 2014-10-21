if (!Array.indexOf && !Array.prototype.indexOf) {
     Array.prototype.indexOf = function (obj) {
         for (i=0; i<this.length; i++) {
             if(this[i]===obj) {
                 return i;
             }
         return -1;
        }
      }
    }

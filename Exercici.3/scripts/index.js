
//Array
var lletres = ["A", "N", "N", "A"];


//reduce()
var numlletres = lletres.reduce(function(contadorLletres, lletres){
contadorLletres[lletres] = (contadorLletres[lletres] || 0) + 1;
return contadorLletres;
}, {})

console.log(numlletres);


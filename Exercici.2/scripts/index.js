
    //Array
    var lletres=["A", "N", "3", "N", "A"];

    //Bucle
    for (var i=0;i<lletres.length; i++) {

        if (lletres[i] =="A" || lletres[i] =="E" || lletres[i] =="I" || lletres[i] =="O" || lletres[i] =="U") {
        console.log("He trobat la vocal: " + lletres [i]);
        }

        else if (isNaN(lletres[i]) == false) {
            console.log("Els noms de persones no contenen el número: " + lletres [i]);
            }

        else{
            console.log("He trobat la consonant: " + lletres [i]);
        }

    }


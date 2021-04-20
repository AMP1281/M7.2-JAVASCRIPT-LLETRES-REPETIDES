
Array//
    var lletres = ["A", "N", "N", "A"];

    var numlletres = new Map ();

    lletres.forEach((letra) => {
        var count = 0;
        for (var el of lletres){
            if (el == letra){
                count ++;
                numlletres.set(el,count);
            }
        }
    });

    console.log(numlletres);


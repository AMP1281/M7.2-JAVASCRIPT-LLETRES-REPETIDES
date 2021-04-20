//Exercici.1

    //Array
    var lletres1=["A", "N", "N", "A"];

    //Function + Bucle For
    function exercici1() {
        for(var i=0;i<lletres1.length; i++) {
            console.log(lletres1[i]);
        }
    }

//Exercici.2

    //Array
    var lletres2=["A", "N", "3", "N", "A"];

    //Function + Bucle
    function exercici2(){
        
        for (var i=0;i<lletres2.length; i++) {

            if (lletres2[i] =="A" || lletres2[i] =="E" || lletres2[i] =="I" || lletres2[i] =="O" || lletres2[i] =="U") {
            console.log("He trobat la vocal: " + lletres2 [i]);
            }

            else if (isNaN(lletres2[i]) == false) {
                console.log("Els noms de persones no contenen el número: " + lletres2 [i]);
                }

            else{
                console.log("He trobat la consonant: " + lletres2 [i]);
            }
        }
    }

//Exercici.3

    //Array
    var lletres3 = ["A", "N", "N", "A"];

    //Function exercici final
    function exercici3(){

        var numlletres = new Map ();

        lletres3.forEach((letra) => {
        var count = 0;
        for (var el of lletres3){
            if (el == letra){
                count ++;
                numlletres.set(el,count);
            }
        }
        });

        console.log(numlletres);
    }

//Exercici.4

    //Array
    var nom = ["A", "N", "N", "A"];
    var cognom = ["M", "O", "N", "T", "S", "E", "R", "R", "A", "T"];

    //Function exercici final
    function exercici4(){
        var fusio = nom.concat("", cognom);
        console.log(fusio);
    }

//Exercici.5

    var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

    var regExp=/\b[\w._-]+@[\wñ._-]+(?:\.[\w]+)+\b/gi;

    var result = str.match(regExp);

    //Function exercici final
    function exercici5(){
        var filtrar = result.filter((email,index) => result.indexOf(email) === index);
        console.log(filtrar);
    }

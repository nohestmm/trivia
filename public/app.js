let countPoint;
let gamerCapture;
let points = 0;
const welcome = '<h1>Bienvenido a la Trivia</h1><p>Tu Nombre:<input class= "textField" type="text" id = "gamerName"></p><p class = "Error" id= "Error" >Debe ingresar un nombre</p><br><button onclick="validar()" >Acceder</button>'

const questionOneCult1 = `<p>PREGUNTAS SOBRE CULTURA</p>
<p>1.-¿Cuál país es conocido por bailar tango?</p>
<div class ="radio">
<input type= "radio" id="baile" name="baile" value="v1">
<label>Chile</label>
</div>
<div class ="radio">
<input type= "radio" id="baile" name="baile" value="v2">
<label>Argentina</label>
</div>
<div class ="radio">
<input type= "radio" id="baile" name="baile" value="v3">
<label >Paraguay</label>
</div>
<input type="hidden" id="question" value="q1">
<p class="Error" id ="Error">Debe Seleccionar una de las opciones</p>
<button onclick="nextQuestion()">Siguiente</button>
<div class = "buttonOptions">
<button onclick="home()">Salir</button>
<button onclick="capture()">Volver</button>
</div>`;
const questionOneCult2 = '<p>PREGUNTAS SOBRE CULTURA</p><p>2.-¿Cuál nacionalidad es conocida por bailar "La cueca"?<div class ="radio"><input type= "radio" id="cueca" name="cueca" value="v1" > <label >Boliviana</label></div><div class ="radio"><input type= "radio" id="cueca" name="cueca" value="v2"> <label>Colombiana</label></div> <div class ="radio"><input type= "radio" id="cueca" name="cueca" value="v3"> <label >Chilena</label></div><input type="hidden" id="question" name="question" value="q2"><p class="Error" id = "Error">Debe Seleccionar una de las opciones</p><button onclick="nextQuestion()">Siguiente</button><div class = "buttonOptions"><button onclick="home()">Salir</button> <button onclick="capture()" >Volver</button> </div>';
const questionOneCult3 = '<p>PREGUNTAS SOBRE CULTURA</p><p>3.-¿En cuál pais se celebran los carnavales más famosos del mundo?<div class ="radio"><input type= "radio" id="" name="carnavales" value="v1" > <label >Panamá</label></div><div class ="radio"><input type= "radio" id="" name="carnavales" value="v2"> <label>Brasil</label></div> <div class ="radio"><input type= "radio" id="" name="carnavales" value="v3"> <label >Honduras</label></div><input type="hidden" id= "question" name="question" value="q3"><p class="Error" id = "Error">Debe Seleccionar una de las opciones</p><button onclick="nextQuestion()">Finalizar</button><div class = "buttonOptions"><button onclick="home()">Salir</button> <button onclick="capture()" >Volver</button> </div>';
const questionTwoFood1 = '<p>PREGUNTAS SOBRE COMIDAS TIPICAS</p><p>1.-¿Cuál país es conocido por su famoso ceviche?</p><div class ="radio"><input type= "radio" id="ceviche" name="ceviche" value="v1" > <label >Colombia</label></div><div class ="radio"><input type= "radio" id="ceviche" name="ceviche" value="v2"> <label>Venezuela</label></div> <div class ="radio"><input type= "radio" id="ceviche" name="ceviche" value="v3"> <label >Perú</label></div><input type="hidden" id="question" value="q1"><button onclick="nextQuestion2()">Siguiente</button><div class = "buttonOptions"><button onclick="home()">Salir</button> <button onclick="capture()">Volver</button> </div>';
const questionThreeDrink1 = '<p>PREGUNTAS BEBIDAS TIPICAS DE PAISES</p><p>1.-¿Cuál país es conocido por esta famosa bebida?</p><div class ="radio"><input type= "radio" id="ceviche" name="ceviche" value="v1" > <label >Colombia</label></div><div class ="radio"><input type= "radio" id="ceviche" name="ceviche" value="v2"> <label>Venezuela</label></div> <div class ="radio"><input type= "radio" id="ceviche" name="ceviche" value="v3"> <label >Perú</label></div><input type="hidden" id="question" value="q1"><button onclick="nextQuestion3()">Siguiente</button><div class = "buttonOptions"><button onclick="home()">Salir</button> <button onclick="capture()">Volver</button> </div>';



/*Captura nombre de jugador despues de validar*/
const capture = () => {

    if (gamerCapture === '' || gamerCapture === undefined) {
        gamerCapture = document.getElementById("gamerName").value;
    }
    if (points !== 0) {
        points = 0;
    }

    document.getElementById("rectangule").innerHTML = '<h1>Bienvenido ' + gamerCapture.toUpperCase() + '</h1><p class="titles">Elije una de las categorias para jugar</p><button onclick="tema1()" >Cultura de Paises</button> <button onclick="tema2()">Comidas Tipicas</button> <button onclick="tema3()">Bebidas Tipicas</button><br><br><button   onclick="home()">Salir</button>';
}

const tema1 = () => {
    document.getElementById("rectangule").innerHTML = questionOneCult1;
}
const tema2 = () => {
    document.getElementById("rectangule").innerHTML = questionTwoFood1;
}

const tema3 = () => {
    document.getElementById("rectangule").innerHTML = questionThreeDrink1;
}

/*Valida espacio en blanco */
const validar = () => {
    let invalid = document.getElementById("gamerName").value;
    if (invalid === '') {
        document.getElementById("error").style.display = 'block';
    } else {
        capture();
    }

}
/*Reimprime la Pagina principal */
const home = () => {
    gamerCapture = '';
    points = 0;
    
    document.getElementById("rectangule").innerHTML = welcome;
}

/*Captura id de checkbox culturales*/
const nextQuestion = () => {

    let questionActive = document.getElementById("question").value;

    if (questionActive === "q1") {
        let saveAnswer = document.getElementsByName("baile");
        let resultado = 0;
        for (let i = 0; i < saveAnswer.length; i++) {

            if (saveAnswer[i].checked) {
                resultado = saveAnswer[i].value;
            }

        }
        if (resultado === "v2") {
            points = points + 40;
            document.getElementById("rectangule").innerHTML = questionOneCult2;
        } else if (resultado !== 0) {
            document.getElementById("rectangule").innerHTML = questionOneCult2;
        } else {
            document.getElementById("error").style.display = 'block';

        }

        //alert(points);
        //console.log(resultado);

    } else if (questionActive === "q2") {
        let saveAnswer = document.getElementsByName("cueca");
        let resultado = 0;
        for (let i = 0; i < saveAnswer.length; i++) {
            if (saveAnswer[i].checked) {
                resultado = saveAnswer[i].value;
            }
        }
        if (resultado === "v3") {
            points = points + 30;
            document.getElementById("rectangule").innerHTML = questionOneCult3;
        } else if (resultado !== 0) {
            document.getElementById("rectangule").innerHTML = questionOneCult3;
        } else {
            document.getElementById("error").style.display = 'block';

        }
        //alert(points);



    } else if (questionActive === "q3") {
        let saveAnswer = document.getElementsByName("carnavales");
        let resultado = 0;
        for (let i = 0; i < saveAnswer.length; i++) {
            if (saveAnswer[i].checked) {
                resultado = saveAnswer[i].value;
            }
        }
        if (resultado === "v2") {
            points = points + 30;

            document.getElementById("rectangule").innerHTML = '<h1>Resultado de la Trivia ' + points + '</h1><button onclick="home()">Salir</button> <button onclick="capture()" >Volver</button> </div> ';

        } else if (resultado !== 0) {
            document.getElementById("rectangule").innerHTML = '<h1>Resultado de la Trivia ' + points + '</h1><button onclick="home()">Salir</button> <button onclick="capture()" >Volver</button> </div> ';

        } else {
            document.getElementById("error").style.display = 'block';

        }
        //alert(points); 
    }
}

const nextQuestion2 = () => {

    let questionActive = document.getElementById("question").value;

    if (questionActive === "q1") {
        let saveAnswer = document.getElementsByName("ceviche");
        let resultado = 0;
        for (let i = 0; i < saveAnswer.length; i++) {
            if (saveAnswer[i].checked) {
                resultado = saveAnswer[i].value;
            }
        }
        if (resultado === "v3") {
            points = points + 40;
        }
        //alert(points);
        document.getElementById("rectangule").innerHTML = '<p>PREGUNTAS SOBRE COMIDAS TIPICAS</p><p>2.-¿A cuál país pertenece el plato típico llamado "Ropa Vieja"?<div class ="radio"><input type= "radio" id="ropaVieja" name="ropaVieja" value="v1" > <label >EEUU</label></div><div class ="radio"><input type= "radio" id="ropaVieja" name="ropaVieja" value="v2"> <label>Cuba</label></div> <div class ="radio"><input type= "radio" id="ropaVieja" name="ropaVieja" value="v3"> <label >Nicaragua</label></div><input type="hidden" id="question" name="question" value="q2"><button onclick="nextQuestion2()">Siguiente</button><div class = "buttonOptions"><button onclick="home()">Salir</button> <button onclick="capture()" >Volver</button> </div>';

    } else if (questionActive === "q2") {
        let saveAnswer = document.getElementsByName("ropaVieja");
        let resultado = 0;
        for (let i = 0; i < saveAnswer.length; i++) {
            if (saveAnswer[i].checked) {
                resultado = saveAnswer[i].value;
            }
        }
        if (resultado === "v2") {
            points = points + 30;
        }
        //alert(points);
        document.getElementById("rectangule").innerHTML = '<p>PREGUNTAS SOBRE COMIDAS TIPICAS</p><p>3.-¿Cual es el plato tipico de Japón?<div class ="radio"><input type= "radio" id="japon" name="japon" value="v1" > <label >Sashimi</label></div><div class ="radio"><input type= "radio" id="japon" name="japon" value="v2"> <label>Sushi</label></div> <div class ="radio"><input type= "radio" id="japon" name="japon" value="v3"> <label >Camarones</label></div><input type="hidden" id= "question" name="question" value="q3"><button onclick="nextQuestion2()">Finalizar</button><div class = "buttonOptions"><button onclick="home()">Salir</button> <button onclick="capture()" >Volver</button> </div>';

    } else if (questionActive === "q3") {
        let saveAnswer = document.getElementsByName("japon");
        let resultado = 0;
        for (let i = 0; i < saveAnswer.length; i++) {
            if (saveAnswer[i].checked) {
                resultado = saveAnswer[i].value;
            }
        }
        if (resultado === "v1") {
            points = points + 30;
        }
        //alert(points); 
        document.getElementById("rectangule").innerHTML = '<h1>Resultado de la Trivia ' + points + '</h1><button onclick="home()">Salir</button> <button onclick="capture()" >Volver</button> </div> ';
    }
}

const nextQuestion3 = () => {

    let questionActive = document.getElementById("question").value;

    if (questionActive === "q1") {
        let saveAnswer = document.getElementsByName("ceviche");
        let resultado = 0;
        for (let i = 0; i < saveAnswer.length; i++) {
            if (saveAnswer[i].checked) {
                resultado = saveAnswer[i].value;
            }
        }
        if (resultado === "v3") {
            points = points + 40;
        }
        //alert(points);
        document.getElementById("rectangule").innerHTML = '<p>PREGUNTAS BEBIDAS TIPICAS DE PAISES</p><p>2.-¿A cuál país pertenece el plato típico llamado "Ropa Vieja"?<div class ="radio"><input type= "radio" id="ropaVieja" name="ropaVieja" value="v1" > <label >EEUU</label></div><div class ="radio"><input type= "radio" id="ropaVieja" name="ropaVieja" value="v2"> <label>Cuba</label></div> <div class ="radio"><input type= "radio" id="ropaVieja" name="ropaVieja" value="v3"> <label >Nicaragua</label></div><input type="hidden" id="question" name="question" value="q2"><button onclick="nextQuestion2()">Siguiente</button><div class = "buttonOptions"><button onclick="home()">Salir</button> <button onclick="capture()" >Volver</button> </div>';

    } else if (questionActive === "q2") {
        let saveAnswer = document.getElementsByName("ropaVieja");
        let resultado = 0;
        for (let i = 0; i < saveAnswer.length; i++) {
            if (saveAnswer[i].checked) {
                resultado = saveAnswer[i].value;
            }
        }
        if (resultado === "v2") {
            points = points + 30;
        }
        //alert(points);
        document.getElementById("rectangule").innerHTML = '<p>PREGUNTAS BEBIDAS TIPICAS DE PAISES</p><p>3.-¿Cual es el plato tipico de Japón?<div class ="radio"><input type= "radio" id="japon" name="japon" value="v1" > <label >Sashimi</label></div><div class ="radio"><input type= "radio" id="japon" name="japon" value="v2"> <label>Sushi</label></div> <div class ="radio"><input type= "radio" id="japon" name="japon" value="v3"> <label >Camarones</label></div><input type="hidden" id= "question" name="question" value="q3"><button onclick="nextQuestion2()">Finalizar</button><div class = "buttonOptions"><button onclick="home()">Salir</button> <button onclick="capture()" >Volver</button> </div>';

    } else if (questionActive === "q3") {
        let saveAnswer = document.getElementsByName("japon");
        let resultado = 0;
        for (let i = 0; i < saveAnswer.length; i++) {
            if (saveAnswer[i].checked) {
                resultado = saveAnswer[i].value;
            }
        }
        if (resultado === "v1") {
            points = points + 30;
        }
        //alert(points); 
        document.getElementById("rectangule").innerHTML = '<h1>Resultado de la Trivia ' + points + '</h1><button onclick="home()">Salir</button> <button onclick="capture()" >Volver</button> </div> ';
    }
}
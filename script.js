//Quand l'utilisateur clic sur le btn Envoyer, je récupere la valeur du input et la compare a la réponse attendue. 

var réponse = "sos";

function getInputValue(){
    // Selectionne l'element input et recupere sa value
    var inputVal = document.getElementById("inp").value;
    inputVal = inputVal.toLowerCase()
    console.log(inputVal);

    //Compare la valeur a la réponse attendu
    if(inputVal == réponse){
        console.log('bonne rep');
        document.querySelector(".verification").innerHTML = "<span style='color:green'>Bonne réponse</span>";
        event.preventDefault();
    } else if (inputVal == ''){
        document.querySelector(".verification").innerHTML = "<span style='color:red'>Vous n'avez rentré aucune réponse </span>";
    } else {
        document.querySelector(".verification").innerHTML = "<span style='color:red'>Mauvaise réponse, mais vous pouvez réessayé</span>";
        event.preventDefault();
    }
}

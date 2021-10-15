//Quand l'utilisateur clic sur le btn Envoyer, je récupere la valeur du input et la compare a la réponse attendue. 

var réponse = "sos";

function getInputValue(){
    // Selectionne l'element input et recupere sa value
    var inputVal = document.getElementById("inp").value;
    inputVal = inputVal.toLowerCase()
    console.log(inputVal);

    //Compare la valeur a la réponse attendu
    if(inputVal == réponse){
        console.log('1234');
        alert('1234 ')
        //document.querySelector(".verification").innerHTML = "<span style='color:#00561b'>Bonne réponse</span>";
        event.preventDefault();
    } else if (inputVal == ''){
        document.querySelector(".verification").innerHTML = "<span style='color:#6b0d0d'>Vous n'avez rentré aucune réponse </span>";
        event.preventDefault();
    } else {
        document.querySelector(".verification").innerHTML = "<span style='color:#6b0d0d'>Mauvaise réponse, mais vous pouvez réessayé</span>";
        event.preventDefault();
    }
}

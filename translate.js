var userInput=document.querySelector("#txt-input")
var btnTranslate=document.querySelector("#btn-translate")
var outputTxt=document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

btnTranslate.addEventListener("click", translateInput)


function translateInput(){
    var txt_input=userInput.value  //taking input

    //calling server for processing 
    fetch(getValidUrl(txt_input))
    .then(response => response.json())
    .then(json =>{
        var translatedTxt=json.contents.translated;
        outputTxt.innerText=translatedTxt;  //displaying output
    })
    .catch(errorHandler)

    
}

function getValidUrl(input){
    return serverURL+"?"+"text="+input
}
function errorHandler(error){
    console.log("error occurred"+ error)
    alert("Server limit exceded! try again after some time or try a different translation")
}
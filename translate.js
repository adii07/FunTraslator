var userInput=document.querySelector("#txt-input")
var btnTranslate=document.querySelector("#btn-translate")
var outputTxt=document.querySelector("#output")
var languageOption=document.querySelector("#language")
var talk=document.querySelector("#talk")


btnTranslate.addEventListener("click", translateInput)

function translateInput(){
    var txt_input=userInput.value  //taking input

    // dropdown menu slector
    var x = document.getElementById("language").selectedIndex;
    var y = document.getElementById("language").options;
    console.log(y[x].text);
    // dropdown menu slector



    //calling server for processing 
    fetch(getValidUrl(txt_input,y[x].text))
    .then(response => response.json())
    .then(json =>{
        var translatedTxt=json.contents.translated;
        outputTxt.innerText=translatedTxt;  //displaying output
    })
    .catch(errorHandler)

    
}

function serverURL(input){
    switch (input) {
        case "yoda":
          console.log("its yoda")
        //   talk.innerText="you are now taking like Yoda"
          return "https://api.funtranslations.com/translate/yoda.json"
          break;
        case "minions":
            console.log("its minion")
            // talk.innerText="you are now taking like a Minion"
            return "https://api.funtranslations.com/translate/minion.json"
          break;
        case "groot":
            console.log("its groot")
            // talk.innerText="you are now taking like a Dotharaki"
            return "https://api.funtranslations.com/translate/groot.json"
          break;
        case "pirate":
            console.log("its pirate")
            // talk.innerText="you are now taking like a pirate"
            return "https://api.funtranslations.com/translate/pirate.json"
          break;
      }
    
}
function getValidUrl(input,y){
    return serverURL(y)+"?"+"text="+input
}
function errorHandler(error){
    console.log("error occurred"+ error)
    alert("Server limit exceded! try again after some time or try a different translation")
}
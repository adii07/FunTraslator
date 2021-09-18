var userInput = document.querySelector("#txt-input")
var btnTranslate = document.querySelector("#btn-translate")
var outputTxt = document.querySelector("#output")
var languageOption = document.querySelector("#language")
var talk = document.querySelector("#talk")
var x
var y

//get the drop down list 
var activities = document.getElementById("language");
//call changes as item from  dropdown list are selected
activities.addEventListener("change", addActivityItem, false);
//called as the button is clicked processees the translation
btnTranslate.addEventListener("click", translateInput)

function addActivityItem() {
    //option is selected
    x = document.getElementById("language").selectedIndex;
    y = document.getElementById("language").options;
    switch (y[x].text) {
        case "yoda":
            changeColor("#9cbb80","#ffffff")
            document.getElementById("footer-para").innerText="Are you a fan of groot?\nYoda’s last words were “Luke. There is another Skywalker.” – To Luke Skywalker."
            break;
        case "minions":
            changeColor("#F2C94C","#333333")
            document.getElementById("footer-para").innerText="Are you a fan of minions?\nDid you know that the gibberish they say is an actual language."
            break;
        case "pirate":
            changeColor("#809cbb","#ffffff")
            document.getElementById("footer-para").innerText="Did you know that Pirates stole books, too.."
            break;
        case "groot":
            changeColor("#bb9f80","#ffffff")
            document.getElementById("footer-para").innerText="Are you a fan of groot?\nDid you know that the voice of groot was given by Vin Disel!!"
            break;
    }
}

function translateInput() {
    var txt_input = userInput.value //taking input

    // dropdown menu slector
    // var x = document.getElementById("language").selectedIndex;
    // var y = document.getElementById("language").options;
    // console.log(y[x].text);
    // dropdown menu slector



    //calling server for processing 
    fetch(getValidUrl(txt_input))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputTxt.innerText = translatedTxt; //displaying output
        })
        .catch(errorHandler)


}

function serverURL() {
    switch (y[x].text) {
        case "yoda":
            return "https://api.funtranslations.com/translate/yoda.json"
            break;
        case "minions":
            return "https://api.funtranslations.com/translate/minion.json"
            break;
        case "groot":
            return "https://api.funtranslations.com/translate/groot.json"
            break;
        case "pirate":
            return "https://api.funtranslations.com/translate/pirate.json"
            break;
    }

}

function getValidUrl(input) {
    return serverURL() + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occurred" + error)
    alert("Server limit exceded! try again after some time or try a different translation")
}


function changeColor(primary,secondary) {
    document.getElementById("nav-bar").style.backgroundColor = primary;
    document.getElementById("nav-bar").style.color = secondary;
    document.getElementById("footer").style.backgroundColor = primary;
    document.getElementById("footer").style.color = secondary;
    document.getElementById("btn-translate").style.backgroundColor = primary;
    document.getElementById("btn-translate").style.color = secondary;
}
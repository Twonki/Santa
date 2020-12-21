
function submitGiftCode() {

    var code =  document.getElementById("code").value;
    var password =  document.getElementById("password").value;

    document.getElementById("giftbox").style.visibility = "visible";

    //alert("Hi Santa! Your Code is " + code + " and " + password);
    
    document.getElementById("gifttext").innerText = trial;

}

function decode(secret_text, password){
    //TODO: Add actual symetric decoding
    return secret_text;
}
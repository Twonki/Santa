
function submitGiftCode() {

    var code =  document.getElementById("code").value;
    var password =  document.getElementById("password").value;

    document.getElementById("giftbox").style.visibility = "visible";

    //alert("Hi Santa! Your Code is " + code + " and " + password);
    
    encoded_gift = gifts[code];

    decoded_gift = JsonFormatter.parse(JSON.stringify(encoded_gift));

    decyphered_gift = decypher(decoded_gift,password);

    document.getElementById("gifttext").innerText = decyphered_gift;

}

function decypher(secret_text, password){
    var decrypted = CryptoJS.AES.decrypt(secret_text,password);
    return decrypted.toString(CryptoJS.enc.Utf8);
}

// Taken from https://cryptojs.gitbook.io/docs/
var JsonFormatter = {
    stringify: function(cipherParams) {
        // create json object with ciphertext
        var jsonObj = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
        // optionally add iv or salt
        if (cipherParams.iv) {
            jsonObj.iv = cipherParams.iv.toString();
        }
        if (cipherParams.salt) {
            jsonObj.s = cipherParams.salt.toString();
        }
        // stringify json object
        return JSON.stringify(jsonObj);
    },
    parse: function(jsonStr) {
        // parse json string
        var jsonObj = JSON.parse(jsonStr);
        // extract ciphertext from json object, and create cipher params object
        var cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
        });
        // optionally extract iv or salt
        if (jsonObj.iv) {
            cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
        }
        if (jsonObj.s) {
            cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
        }
        return cipherParams;
    }
}

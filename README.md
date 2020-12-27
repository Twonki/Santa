# Little Santa

Hi! :octocat:

This repository is intended to be a little christmass secret for some of my friends.
Usually, I come along and hand out huge bags of presents for all I love, but this year I am stuck in quarantine. 

Or, well, something like that, but no big christmass. 

So, I made this repository where I just make a little static website for people to enter gift codes and their password, 
and they see a personal wishes. 

## How ? 

The messages are symetrically encrypted in the JS.

Any happy user gets a code and decrypts it with his password (chosen and shared by me). 

## Contributing

This is intended for my friends. Feel free to take / copy the idea and you don't even need to tell that you borrowed it from me :P 

But if you want to suprise your friends, please make a fork. 

## Creating Gifts

To create a gift, you need to first think of your message you want to share, as well as a code for it. 
The code can be any text. 

Think of a password for what you want to use for encryption, and make it secure (numbers, extra characters, no "real words").

Visit the browser and edit in the console: 

```Javascript
var encrypted = CryptoJS.AES.encrypt("Your message", "The very secure password");
var textToCopyToGifts = JsonFormatter.stringify(encrypted);
```

You can verify your encryption using: 

```Javascript
var cipherobject = JsonFormatter.parse(textToCopyToGifts);
// Maybe, depending on your mode of copy:
// var cipherobject = JsonFormatter.parse(JSON.stringify(textToCopyToGifts));
var decrypted = CryptoJS.AES.decrypt(encrypted,"The very secure password");
console.log(decrypted.toString(CryptoJS.enc.Utf8));
```

take the `textToCopyToGifts` object and add it with your code to the `gifts.js` file.
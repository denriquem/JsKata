Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

---

As a user,
so that I can encrypt a message,
I would like the first letter of a word to be converted to ASCII,

As a user,
so that I can encrypt a message,
I would like the last letter to be switched with the second letter,

As a user,
I can encrypt a message with multiple words,
I would like the message to encrypt two words in a string.

As a users,
So that I can encryt a longer message,
I would like to encrypt a message with three words in a string.

---

input output table:
"H" => "72"
'Hello" => "72olle"
"good" => "103doo"
"hello world" => "104olle 119drlo"
"hello cruel world" =>

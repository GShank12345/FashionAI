

# Project title : 

Explore Fashion AI

# Description: 

Explore Fashion AI allows you to upload an image of the fabric to describe the sheen, texture and other related information.

# Dependencies: 

npm install, javascript, express.js for running the server and sending messages in port 3000. Only works for 3000, for other ports modify textarea1.js, index.html( inside public folder in paypal-minimal) and server.js. (inside paypal-minimal) to include other ports. crypto.js - for encryption and decryption AWS Lambda - for OpenAI key storage , environment variables to store Paypal sandbox client-id and client secret,

# environment variables: 

set the PayPal sandbox client id and Client secret in .env in the root folder

# locally run the server: 

First run node server.js

# UI tool:

Chrome extension - enable developer mode and then load the unpacked extension and run.

#Testing
1. Run the server in the local machine node server.js
2. Click the button 'Choose a file' to load an image file (.png and .jpeg) file only or click 'open webcam' to take the image from the laptop camera.
3. Click 'Load the selected file'
4. Click 'Analyze Fabric'
5. A PayPal window opens and after a few seconds the PayPal button appears along with cancel button.
6. Click the 'PayPal button' and login with your sandbox email id and password
7. Complete payment and once complete the Payment window closes
8. The details of the image garment is displayed in another text area below the uploaded image text area.
9. The sound image once clicked will enable audio from the 'tts' engine. Double click the sound button to disable audio.
10. Click 'Email Text' button to send the details via your mail account.
11. Click 'Clear Text' to clear image and text.

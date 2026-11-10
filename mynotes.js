
// window.alert("window",window);

// window.moveTo(0, 0);
var d = new Date()
var yourname = ""
var i = 0
var value="";
var imgc;
var x=" ";
var streaming=false;
var width = 320;
var canvas = null;
var messData0 = ""
var messData = ""
var flowers = ["flower/flower-1.png","flower/flower-2.png","flower/flower-3.png","flower/flower-4.png","flower/flower-5.png","flower/flower-6.png","flower/flower-7.png","flower/flower-8.png","flower/flower-9.png","flower/flower-10.png"]



var i1 =  Math.floor(Math.random() * flowers.length);
var  mess=flowers[i1];



var ffm = []
// change Feb 8
var url1 = 'https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans'


window.document.write("<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label><b>Browser Color : </b></label>&nbsp;")
window.document.write("<input type='radio' id='color1' name='color' value='lightblue'><label for='lightblue'><b>Light Blue</b></label>&nbsp;&nbsp;")

var color1 = window.document.getElementById('color1');

color1.addEventListener('click', function()
    {
         window.document.body.style.backgroundColor = color1.value
    })

window.document.write("<input type='radio' id='color112' name='color' value='lightgrey'><label for='lightgrey'><b>Light Grey</b></label>&nbsp;&nbsp;")

var color112 = window.document.getElementById('color112');

color112.addEventListener('click', function()
{
    window.document.body.style.backgroundColor = color112.value
})

window.document.write("<input type='radio' id='color11' name='color' value='lightgreen' checked><label for='lightgreen'><b>Light Green</b></label>&nbsp;&nbsp;")


var color11 = window.document.getElementById('color11');
window.document.body.style.backgroundColor = color11.value
color11.addEventListener('click', function()
{
    window.document.body.style.backgroundColor = color11.value
})
window.document.write("<input type='radio' id='color12' name='color' value='yellow'><label for='yellow'><b>Yellow</b></label>&nbsp;&nbsp;")

var color12 = window.document.getElementById('color12');
color12.addEventListener('click', function()
{
    window.document.body.style.backgroundColor = color12.value
})
window.document.write("<input type='radio' id='color111' name='color' value='green'><label for='green'><b>Green</b></label>&nbsp;&nbsp;")

var color111 = window.document.getElementById('color111');
color111.addEventListener('click', function()
{
    window.document.body.style.backgroundColor = color111.value
})
window.document.write("<input type='radio' id='color13' name='color' value='white'><label for='white'><b>White</b></label>&nbsp;&nbsp;")

var color13 = window.document.getElementById('color13');
color13.addEventListener('click', function()
{
    window.document.body.style.backgroundColor = color13.value
})
window.document.write("<input type='radio' id='color2' name='color' value='pink'><label for='pink'><b>Pink</b></label><br>")
                      var color2 = window.document.getElementById('color2');
                      color2.addEventListener('click', function()
                      {
                      window.document.body.style.backgroundColor = color2.value
                      })


/// new
 window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<style>.dcolorn{width:30%;text-align:center;bold;text-color:black;}</style><div class='dcolorn'><h3><b><text>Support the project</text></b></h3></div><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div><style>.pp-VJSZ8FUAEXBPY{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:'Helvetica Neue',Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}</style><form action='https://www.paypal.com/ncp/payment/VJSZ8FUAEXBPY' method='post' target='_blank' style='display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;'><input class='pp-VJSZ8FUAEXBPY' type='submit' value='Support' /><img src=https://www.paypalobjects.com/images/Debit_Credit_APM.svg alt='cards' /><section style='font-size: 0.75rem;''> Powered by <img src='https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg' alt='paypal' style='height:0.875rem;vertical-align:middle;'/></section></form></div><br>")




window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<style>.dcolorn{width:15%;text-align:center;bold;text-color:black;}</style><h4><label class='dcolorn'><b>Enter Name:</b></label>&nbsp&nbsp<input type='text' id='entername' placeholder='Enter your name' title='enter-name' class='dcolorn'></input><br>")


        
        window.document.write("<br><h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cloth make" + " " + String(d).substring(0,16) + "</h1>&nbsp;&nbsp;")

        // window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<body onload='enableEditMode()'><style>.dcolor{width:10%;text-align:center}</style><button  title='bold' id='bold'><i class='fa fa-bold'></i></button><textarea id='demo' rows='20' cols='110'></textarea>")
        
        window.document.write("<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Select a File to Load:&nbsp;&nbsp;<input type='file' id='fileToLoad'>&nbsp&nbsp&nbsp<button id='loadFileAsText' >Load Selected File</button></b><br><br><style>.dcamera{width: 340px;display: inline-block;}</style>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='dcamera'><video id='video'>video stream unavailable</video></div><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id='startbutton'>Open Webcam</button></div></center><br><br>")
         
        var tkphoto = document.getElementById('startbutton');
          tkphoto.addEventListener('click', function()
            {
                demo.document.body.innerHTML.editable = false
                tkphoto.textContent = 'Click to take a photo';
                imgc = null;
                demo.document.body.innerHTML = null;
                video = document.getElementById('video');

                let hidden = video.getAttribute("hidden");
                if (hidden) {
                    video.removeAttribute("hidden");
                }
               // canvas = document.getElementById('canvas');
              //  photo = document.getElementById('photo');

                navigator.mediaDevices.getUserMedia({
                                   video: true,
                                   audio: false
                               })
                               .then(function(stream) {
                                   video.srcObject = stream;
                                   video.play();
                               })
                               .catch(function(err) {
                                   console.log("An error occurred: " + err);
                               });
                video.addEventListener('canplay', function(ev) {
                                if (!streaming) {
                                    height = video.videoHeight / (video.videoWidth / width);

                                    if (isNaN(height)) {
                                        height = width / (4 / 3);
                                    }

                                    video.setAttribute('width', width);
                                    video.setAttribute('height', height);
                                 //   canvas.setAttribute('width', width);
                                 //   canvas.setAttribute('height', height);
                                    streaming = true;
                                }
                            }, false);
                tkphoto.addEventListener('click', function(ev) {
                    demo.document.body.innerHTML = null;
                    democ.document.body.innerHTML = null;
                    
                    imgc = null;
                                takepicture();
                                ev.preventDefault();
                            }, false);

            })

function takepicture() {

    var canvas = document.createElement("canvas")
    var context = canvas.getContext('2d');
            if (width && height) {
                canvas.width = width;
                canvas.height = height;
                context.drawImage(video, 0, 0, width, height);
                var data = canvas.toDataURL('image/png');
                var img = document.createElement("img");
               img.src = data;
                imgc = img.src;
                demo.document.body.innerHTML =  "<img id='img' alt='health' height='250' width='250' src=" + imgc + "></img></html>";
            } else {
              //  clearphoto();
                imgc = null;
                demo.document.body.innerHTML = null;
            }
        }
        var fileload = document.getElementById('loadFileAsText');
        
        window.document.write(";<iframe name='demo' id='demo' style='color:black;width:75%;' height='300'></iframe><img id='flower-id' width='150' height='150' alt='flowers' src=" + mess + "></img><script id='scriptcr' src='./crypto-js/crypto-js.js'   value=imgc></script><script src='textarea1.js'></script></body>'")
        var textframe = window.document.getElementById('demo');
        
        window.document.getElementById("demo").style.backgroundColor = "lightblue";
        // file upload
        fileload.addEventListener('click', function loadfile() {
            // alert("entered")
            var filename = document.getElementById("fileToLoad").value
            var fileext = filename.split('.').pop().toLowerCase();

            if ((fileext == "jpg") || (fileext == "png")) {
                var fileToLoad = document.getElementById("fileToLoad").files[0];
             //   console.log("The file to load " + document.getElementById("fileToLoad").files[0])

                var fileReader = new FileReader();
                var img = document.createElement("img")
                fileReader.readAsDataURL(fileToLoad)
                fileReader.onload = function(fileLoadedEvent){
                //    console.log("Tinside ")
                    img.src = fileLoadedEvent.target.result;
                 //   console.log("The file to load " + img.src)
                    imgc = img.src
                    demo.document.body.innerHTML = "<img id='img' alt='health' height='250' width='250' src=" + img.src + "></img></html>"
                };

            }
            else
            {
                window.alert("Please upload only jpeg or png file. ")
            }
        })
        // file upload
        
     //   var textpage = window.document.getElementById('demo');
     //   var mess = window.document.getElementById('flower-img');

      //  var cryptcr = window.document.getElementById('scriptcr').src;
    

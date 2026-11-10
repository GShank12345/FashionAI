
demo.document.designMode = "on";
var datas = ""
var textkey = ""
var textkey1 = ""
var textkey2 = ""
var textkey3 = ""
var decrypt1 = ""
var decrypted = ""
var textkey1 = ""
var decrypt2 = ""
var decrypt3 = ""
var decrypt4 = ""
var decrypted1 = ""
var decrypted2 = ""
var decrypted3 = ""
var decrypt5 = ""
var decrypt6 = ""
var decrypted4 = ""
var decrypted5 = ""
var textkey4 = ""
var textkey5 = ""
var yourfullname = ""
var istrue = false;
var iv = CryptoJS.enc.Base64.parse("");
// var winds = window.close()
// alert("Enter your name.")

 // fetch('https://oszd3wrcv4.execute-api.us-east-1.amazonaws.com/default/textauth').then((response) => response.json())

window.document.write("<br><br><br><style>.dcolor{width:20%;text-align:center;background-color:lightblue}</style> </head><button type='button' id='downloadpage' title='Text Correct'  class='dcolor'><h4>Analyze Fabric</h4></button>&nbsp &nbsp &nbsp &nbsp &nbsp<style>.dcolor1{width:15%;text-align:center;background-color:lightblue}</style> </head><button type='button' id='clearpage' title='Clear page'  class='dcolor1'><h4>Clear Image</h4></button>&nbsp &nbsp &nbsp<style>.dcolor2{width:15%;text-align:center;bold;text-size:4}</style><label class='dcolor2'><b>Enter email:</b></label>&nbsp&nbsp<input height=150 type='text' id='enteremail' placeholder='Enter email' title='enter-email' ></input>&nbsp&nbsp&nbsp <button type='button' id='mailto' title='Email to' class='dcolor1'><h4>Email Text</h4></button><br><br><br>")

var textemail = window.document.getElementById('enteremail');
var clearpage = window.document.getElementById('clearpage');
var textpage = window.document.getElementById('downloadpage');
var mailpage = window.document.getElementById('mailto');

window.document.write("<iframe name='democ' id='democ' style='background-color: lightblue;color:white;width:75%;' height='300'></iframe>&nbsp;&nbsp;<img id='playcorrs'  src='sound.png' />")
window.document.write("<br><h4>The AI generated answers may not be accurate and use other resources to verify the content. This tool must only be used as a general aid.</h4>")
var playcorr = window.document.getElementById('playcorrs');
// playcorr.onclick = function playcorr()
playcorr.addEventListener('dblclick', function ()

{
   chrome.tts.stop()
})
playcorr.addEventListener('click', function () 
{

    if (democ.document.body.innerHTML == "")
    {
        alert("There is no text")
    }
    else
    {
       console.log("Button pressed")
        chrome.tts.speak( datas, {'voiceName': 'Samantha','rate':0.8,'pitch':0.8});

        }
   

})
// printpage.onclick = function printpage()



// mailpage.onclick = function mailtopage()
mailpage.addEventListener('click',

function mailpage()
{
   
        const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (res.test(String(textemail.value).toLowerCase()) == false)
        {
            alert("Please enter a valid e-mail address")
        }
        else
        {
            window.location.href = "mailto:" + textemail.value + "?subject=" + yourfullname + " Explore Fashion AI" + "&body=" + democ.document.body.innerText
        }
  
})
//clearpage.onclick = function clearpage()
clearpage.addEventListener('click',

function clearpage()
{
    demo.document.body.innerHTML = ""
    democ.document.body.innerHTML = ""
    datas = ""
})
//textpage.onclick = function textpage()
textpage.addEventListener('click', 
  function  textpage()
{
    if (demo.document.body.innerHTML == "")
    {
        alert("Load Image")
    }
    else
    {

        console.log("istrue",istrue)
           if (istrue == false)
           {
              load1(istrue)
           }    
           else
            {
               
                load()
               
            } 
 
 async function load1(istrue)
    
 {
    await fetch("http:/localhost:3000/api/messages",{
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "text/plain"
        }}).then((response) => response.json())

            .then ( (data) =>  {

                try 
                    {
                       
                        console.log("inside load1",data.mess2,data.mess, messData0, messData)
                        if (data.mess2 != null || data.mess != null)
                        {
                        messData0 = data.mess2
                        messData = data.mess;
                        sessionStorage.setItem("status", messData)
                        istrue = true;
                         console.log("aftermload1",data.mess2,data.mess, messData0, messData)

                             if (messData != 'COMPLETED')
                                {
                                    let winds =  window.open('http://localhost:3000','','height=500,width=500')
                                    democ.document.body.innerHTML = ""
                                    
                                    
                                       var timer = setInterval(function() { 
                                        //  refresh1()
                                         console.log("the messdata sessionStorage is 0", messData, "1." + sessionStorage.getItem("status"),"2" + sessionStorage.getItem(messData0), "3." + messData0)
                                        if (winds.closed) {
                                           
                                         //   messData0 = data.mess2
                                          //  messData = data.mess;
                                                sessionStorage.setItem("status", messData)
                                                console.log("wind closed")
                                                clearInterval(timer);
                                                load()
         
                                        }
     
                                    }, 1000)
                                   
                                }
                                 else
                                {
                                    console.log("why going inside")
                                    democ.document.body.innerHTML = "completed"
                                    correcttextpay1()
                                }                     //
                    sessionStorage.setItem("status",messData)
                    return istrue
                    }
                    else
                    {
                        istrue = false
                        return istrue
                    }
                        
                }
                    catch(error)
                    {
                        console.log("error",error)
                    }
                })
            }

       //************************status */
       console.log("the messdata sessionStorage is ", messData0,sessionStorage.getItem("status"),sessionStorage.getItem(messData0), "3." + messData0)
          
    
     setTimeout(function(){
        {
            clearInterval(timer);
            winds.close()
            democ.document.body.innerHTML = "Time out. "
           
        }
        },600000)

    }
 
})

async function refresh1()
{
     await fetch("http:/localhost:3000/api/messages",{
                                            method: "POST",
                                            headers: {
                                                    "Access-Control-Allow-Origin": "*",
                                                    "Content-Type": "text/plain"
                                            }}).then((response) => response.json())

                                            .then ( (data) =>  {
                                                     messData0 = data.mess2
                                                     messData = data.mess;
                                                    sessionStorage.setItem("status", messData)
                                            })
                                           


}

async function load() {

  await refresh1()
 
  
console.log("The response ---------",messData, sessionStorage.getItem("status"))

if (sessionStorage.getItem("status") == "Payment Cancelled")
{
console.log("Payment Cancelled")
democ.document.body.innerHTML += messData;
datas += messData
}
else if (sessionStorage.getItem("status") == "COMPLETED")
{

console.log("Payment Completed 2")
democ.document.body.innerHTML = "Completed 2"
correcttextpay1()
}
else
{
    console.log("Some error")
    democ.document.body.innerHTML += messData;
    datas += messData
}
}

async function correcttextpay1()
{

    //  await  fetch('https://zlraua457c.execute-api.us-east-1.amazonaws.com/default/textauth-correct').then((response) => response.json())

// .then ( (data) =>  {
// decrypt1 = data[0]
//  decrypt2 = data[1]
//  decrypt3 = data[2]
//  decrypt4 = data[3]
// decrypt5 = data[4]
// decrypt6 = data[5]
// decrypted = CryptoJS.AES.decrypt(decrypt1,"",{});
// decrypted1 = CryptoJS.AES.decrypt(decrypt2,"",{});
// decrypted2 = CryptoJS.AES.decrypt(decrypt3,"",{});
// decrypted3 = CryptoJS.AES.decrypt(decrypt4,"",{});
// decrypted4 = CryptoJS.AES.decrypt(decrypt5,"",{});
// decrypted5 = CryptoJS.AES.decrypt(decrypt6,"",{});
// textkey =  decrypted.toString(CryptoJS.enc.Utf8)
// textkey1 =  decrypted1.toString(CryptoJS.enc.Utf8)
// textkey2 =  decrypted2.toString(CryptoJS.enc.Utf8)
// textkey3 =  decrypted3.toString(CryptoJS.enc.Utf8)
// textkey4 =  decrypted4.toString(CryptoJS.enc.Utf8)
// textkey5 =  decrypted5.toString(CryptoJS.enc.Utf8)
// });


    // function call obfuscated 
    var _0x218871=_0x21d4;function _0x325b(){var _0x3dcf25=['Dg9tDhjPBMC','mZe1mtG2nNrnBM1ira','otjduwTTqKC','mZyYodKYnxDiA2P2uq','ANnVBG','Ahr0Chm6lY96BhjHDwe0ntDJlMv4zwn1DguTyxbPlNvZlwvHC3qTms5HBwf6B25HD3mUy29Tl2rLzMf1BhqVDgv4Dgf1DgGTy29YCMvJDa','mtGXodLtrhzYqMG','zw5J','quvt','ndi3nJGWwe5cqKvX','n3HRrw52qG','nZu3ndCXnuXZq3jjrG','vxrMoa','nZqZmtKYu3bKEgXV','zgvJCNLWDa','ndG1ndGXnKHeDKnkqq','DgHLBG'];_0x325b=function(){return _0x3dcf25;};return _0x325b();}function _0x21d4(_0x535324,_0x311d3b){var _0x325b21=_0x325b();return _0x21d4=function(_0x21d4b8,_0x50a25a){_0x21d4b8=_0x21d4b8-0xec;var _0x54d09d=_0x325b21[_0x21d4b8];if(_0x21d4['IwUhga']===undefined){var _0x234d28=function(_0x52d327){var _0x48018d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2773fd='',_0x1a1999='';for(var _0x3dc447=0x0,_0x391136,_0x545324,_0x152bf7=0x0;_0x545324=_0x52d327['charAt'](_0x152bf7++);~_0x545324&&(_0x391136=_0x3dc447%0x4?_0x391136*0x40+_0x545324:_0x545324,_0x3dc447++%0x4)?_0x2773fd+=String['fromCharCode'](0xff&_0x391136>>(-0x2*_0x3dc447&0x6)):0x0){_0x545324=_0x48018d['indexOf'](_0x545324);}for(var _0x110e43=0x0,_0x1198e5=_0x2773fd['length'];_0x110e43<_0x1198e5;_0x110e43++){_0x1a1999+='%'+('00'+_0x2773fd['charCodeAt'](_0x110e43)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1a1999);};_0x21d4['YeQAOi']=_0x234d28,_0x535324=arguments,_0x21d4['IwUhga']=!![];}var _0x488bdf=_0x325b21[0x0],_0x38011c=_0x21d4b8+_0x488bdf,_0x2ee388=_0x535324[_0x38011c];return!_0x2ee388?(_0x54d09d=_0x21d4['YeQAOi'](_0x54d09d),_0x535324[_0x38011c]=_0x54d09d):_0x54d09d=_0x2ee388,_0x54d09d;},_0x21d4(_0x535324,_0x311d3b);}(function(_0x175c29,_0x503f2a){var _0x34bcfe=_0x21d4,_0x4e189d=_0x175c29();while(!![]){try{var _0x426a02=-parseInt(_0x34bcfe(0xf5))/0x1+parseInt(_0x34bcfe(0xee))/0x2*(parseInt(_0x34bcfe(0xf2))/0x3)+parseInt(_0x34bcfe(0xf9))/0x4+parseInt(_0x34bcfe(0xef))/0x5+-parseInt(_0x34bcfe(0xed))/0x6*(parseInt(_0x34bcfe(0xf6))/0x7)+-parseInt(_0x34bcfe(0xfb))/0x8+parseInt(_0x34bcfe(0xf7))/0x9;if(_0x426a02===_0x503f2a)break;else _0x4e189d['push'](_0x4e189d['shift']());}catch(_0x19b2d2){_0x4e189d['push'](_0x4e189d['shift']());}}}(_0x325b,0x734d1),await fetch(_0x218871(0xf1))[_0x218871(0xfc)](_0x52d327=>_0x52d327[_0x218871(0xf0)]())[_0x218871(0xfc)](_0x48018d=>{var _0x1edd2d=_0x218871;decrypt1=_0x48018d[0x0],decrypt2=_0x48018d[0x1],decrypt3=_0x48018d[0x2],decrypt4=_0x48018d[0x3],decrypt5=_0x48018d[0x4],decrypt6=_0x48018d[0x5],decrypted=CryptoJS[_0x1edd2d(0xf4)][_0x1edd2d(0xfa)](decrypt1,'',{}),decrypted1=CryptoJS[_0x1edd2d(0xf4)]['decrypt'](decrypt2,'',{}),decrypted2=CryptoJS[_0x1edd2d(0xf4)][_0x1edd2d(0xfa)](decrypt3,'',{}),decrypted3=CryptoJS['AES']['decrypt'](decrypt4,'',{}),decrypted4=CryptoJS[_0x1edd2d(0xf4)]['decrypt'](decrypt5,'',{}),decrypted5=CryptoJS[_0x1edd2d(0xf4)][_0x1edd2d(0xfa)](decrypt6,'',{}),textkey=decrypted[_0x1edd2d(0xec)](CryptoJS['enc'][_0x1edd2d(0xf8)]),textkey1=decrypted1[_0x1edd2d(0xec)](CryptoJS[_0x1edd2d(0xf3)][_0x1edd2d(0xf8)]),textkey2=decrypted2['toString'](CryptoJS[_0x1edd2d(0xf3)]['Utf8']),textkey3=decrypted3['toString'](CryptoJS[_0x1edd2d(0xf3)][_0x1edd2d(0xf8)]),textkey4=decrypted4['toString'](CryptoJS[_0x1edd2d(0xf3)][_0x1edd2d(0xf8)]),textkey5=decrypted5[_0x1edd2d(0xec)](CryptoJS[_0x1edd2d(0xf3)][_0x1edd2d(0xf8)]);}));

  
    if (textkey == null)
        {
            Console.log("text key error")
        }
        else
        {
     democ.document.body.innerHTML = "<b><h2>Please wait...</h2></b>"
        democ.document.body.innerHTML.editable = false
        // alert("inside and text key",textpage,textkey)
        
      await  fetch(textkey3, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + textkey
        },
            
        body: data = JSON.stringify({
            'model': textkey1,
            'messages': [{role: "user",  content: [
                { type: "text", text:  textkey4},
                {
                    type: "image_url",
                    image_url: {
                        "url": imgc,
                        "detail": "low"
                    },
                },
            ],
            'max_completion_tokens': 1600
            },
            ],

        })
        })
        .then( (response)=> {
            return response.json()
            .then((data)=> {
               // console.log("message success",data.error)
                if (data.error)
                {
                    alert("Internal Error. Please try again after some time.")
                    democ.document.body.innerHTML = ""
                    window.location.href = "notes.html"
                }
                else
                {
                   // console.log(data.choices[0].message.content);
                    democ.document.body.innerHTML = "done"
                    datas = data.choices[0].message.content
                    democ.document.body.innerHTML = "<h3><b>" + data.choices[0].message.content + "</b></h3>"
                }
            })
        })
      
}
}




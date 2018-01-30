
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //buttons
    document.f.onsubmit = processForm;
    document.f.onreset = clearForm;

    //define process function
    function processForm() {

        //madlib blanks
        var fanbase = document.f.fanbase.value;
        var youtuber = document.f.youtuber.value;
        var feeling = document.f.feeling.value;
        var product = document.f.product.value;
        var describe = document.f.describe.value;
        var sense = document.f.sense.value;
        var verb = document.f.verb.value;
        var quality = document.f.quality.value;
        var descript = document.f.descript.value;
        var action = document.f.action.value;
        var teach = document.f.teach.value;
        var thing = document.f.thing.value;
        var myMsg = document.getElementById('myMsg');
        var myGif = document.getElementById('myGif');

        if (fanbase == "" || youtuber == "" || feeling== "" || product == "" || describe == "" || sense == "" || verb == "" || quality == "" || descript == "" || action == "" ) {
            alert("Still Buffering. Please finish the form!");
        } else {

            //message
            myMsg.innerHTML = "Hey "+fanbase+"-ers! It’s "+youtuber+" here and welcome back to my channel! \nI'm so "+feeling+"! Today, I’m going to be doing an unboxing of the BRAND NEW "+product+". \nOkay, now that I opened this box. Can we just look at this packaging?? I mean seriously, it is just so "+describe+". I hope you guys could "+sense+" this better. Anyway, I love the way that it "+verb+". I wish it were a little more "+quality+" because honestly, I could deal without all the  "+descript+". \nThank you guys for watching! \nI’ll leave all the links in the description box below! Don’t forget to  "+action+", like, and subscribe!! See you guys next time when I'll teach you how to "+teach+" a "+thing+".\n Bye!";

            myMsg.className = "show";
            myGif.className = "hide";


        return false;
      }
    }

    //clear form
    function clearForm() {
        myMsg.className = "hide";
        myGif.className = "show";
    }



}

);

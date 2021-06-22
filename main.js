var voice_reconize=window.webkitSpeechRecognition;

var recognize=new voice_reconize();
var text_box=document.getElementById("voice_text");
function start(){
   text_box.innerHTML="";
    recognize.start();

}

recognize.onresult = function(event){

   console.log(event);
   var content = event.results[0][0].transcript;
   text_box.innerHTML=content;
   console.log(content);

  
   if(content=="take my selfie")
   {
       console.log("taking selfie-----");
speak();
}
}
function speak(){
    var text_speach=window.speechSynthesis;
    var speak_data=document.getElementById("voice_text").value;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    text_speach.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_selfie();
        save();
    },3000);

}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image"src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}


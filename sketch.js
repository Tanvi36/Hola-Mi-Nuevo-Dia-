const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png";
var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here
        textSize(30);
        fill(255);
        if(hour>=12){
            text("Time : "+hour%12+"pm",50,100);
        }

        else if(hour===0){
        text("Time : 12 A.M.",100,100);
        }
            else{
        text("Time : "+hour%12+"am",50,100);
            }
    
            
        
            console.log(hour);
       

       
}

 async function getBackgroundImg (){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    
   
    // write code slice the datetime
     hour = datetime.slice(11,13);
   

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        debugger;
        bg = "sunrise1.png";
    }

    else if(hour>=06 && hour<=08){
        debugger;
        bg = "sunrise2.png";
    }

    else if(hour>=08 && hour<=10){
        debugger;
        bg = "sunrise3.png";
    }

    else if(hour>=10 && hour<=12){
        debugger;
        bg = "sunrise4.png";
    }

    else if(hour>=12 && hour<=14){
        debugger;
        bg = "sunrise5.png";
    }

    else if(hour>=14 && hour<=16){
        debugger;
        bg = "sunrise6.png";
    }

    else if(hour>=16 && hour<=19){
        debugger;
        bg = "sunset7.png";
    }

    else if(hour>=19 && hour<=21){
        debugger;
        bg = "sunset8.png";
    }

    else if(hour>=21 && hour<=23){
        debugger;
        bg = "sunset9.png";

    }

    else if(hour>=23 && hour<00){ 
        debugger;
        bg = "sunset10.png";
    }

    else if(hour>=00 && hour<=03){
        debugger;
        bg = "sunset11.png";
    }

    else{
        debugger;
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}

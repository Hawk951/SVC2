var hulk,hulkimg;
var ironMan,ironManimg;
var thor,thorImg;
var spiderMan,spiderManimg;
var background1,backgroundimg;
var bullet;
var themeTune;
var gameState="wait";
var player;




function preload(){
	captainAmericastill=loadImage("avengers/captainamerica.png");
	captainAmerica1img=loadImage("avengers/captainAmericarunningright.gif");

	bg= loadImage("space/spacebg.gif");


thanosright=loadAnimation("thanosright/thanos-0.png","thanosright/thanos-1.png","thanosright/thanos-2.png","thanosright/thanos-3.png","thanosright/thanos-4.png","thanosright/thanos-5.png","thanosright/thanos-6.png","thanosright/thanos-7.png","thanosright/thanos-8.png","thanosright/thanos-9.png","thanosright/thanos-10.png","thanosright/thanos-12.png","thanosright/thanos-13.png","thanosright/thanos-14.png","thanosright/thanos-15.png");
thanosleft=loadAnimation("thanosleft/thanos2-0.png","thanosleft/thanos2-1.png","thanosleft/thanos2-2.png","thanosleft/thanos2-3.png","thanosleft/thanos2-4.png","thanosleft/thanos2-5.png","thanosleft/thanos2-6.png","thanosleft/thanos2-7.png","thanosleft/thanos2-8.png","thanosleft/thanos2-9.png","thanosleft/thanos2-10.png","thanosleft/thanos2-12.png","thanosleft/thanos2-13.png");


}


function setup(){
	createCanvas(windowWidth,windowHeight);
	

	background1=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
background1.addImage(bg);
background1.visible=false;
background1.scale=2.4;


	captainAmerica=createSprite(100,150);
	captainAmerica.addImage(captainAmericastill);
	//captainAmerica.scale=0.5;

	
		
	button1=createButton("Pause");
	button1.position(1750,100);

	button=createButton("start");
	button.position(100,100);


	player=createSprite(100,200);
    player.visible=false;

}




function draw(){
	

if (gameState==="wait"){

	captainAmerica.visible=false;

background("cyan");
text("AVENGERS IN ACTION", windowWidth/2-50,windowHeight/2);

button.mousePressed(()=>{

	gameState="start";
	//background(background1);

	background1.visible=true;
	button.hide();
	captainAmerica.visible=true;
	spawnthanos()

})
 
if (gameState==="start"){
//background(bg)
}

if (keyDown(RIGHT_ARROW)){
	captainAmerica.addImage(captainAmerica1img)
	captainAmerica.x=captainAmerica.x+5
}

}
drawSprites()





}


function spawnthanos(){

	//if(frameCount%50 === 0){

		thanos=createSprite(700,150)

	thanos.scale=2.5;
	thanos.addAnimation("left",thanosleft);
		
/*	if(keyDown("LEFT_ARROW")){
			
			thanos.addAnimation("left",thanosleft);
		}
		else if(keyDown("RIGHT_ARROW")){
			thanos.changeAnimation("right",thanosright);
		}*/
	
//	}
}
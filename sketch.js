var player,form,game,q;
var gameState=0;
var database;
var playerCount;
var img1,img2,img3,room1,spark,virusimg,marketimg,left,right,level1,level2,level3,room2,room3,end;
var vel=2,man,man_vel=10,virusGroup,player_ans,store_sec=0,store_min=0;
var seconds=0
var minutes=0
var Questions=[]
var qstate=0,cstate=0,wstate=0
var r,rr=7
var Options=[]
var Width=window.innerWidth
var Height=window.innerHeight
var Answers=[]
var ans=0
var Clue=[]

var Words=[]

var Clue2=[]

var Scrambled=[]
var Questions2=[]

var Clue3=[]

function preload(){
img1=loadImage('images/screen 1.jpg');
img2=loadImage('images/screen 2.jpg');
img3=loadImage('images/screen 3.jpg');
room1=loadImage('images/Room-1.jpg');
room1_box=loadImage('images/Room-1_box.jpg');
level1=loadImage('images/level1.jpg');
virusimg=loadAnimation('images/v1.png','images/v2.png','images/v3.png','images/v4.png'
,'images/v5.png','images/v6.png','images/v7.png','images/v8.png');
marketimg=loadImage('images/Market.jpg')
left=loadImage('images/boy_l.png')
right=loadImage('images/boy_r.png')
level2=loadImage('images/level2.jpg');
level3=loadImage('images/level3.jpg');
room2=loadImage('images/Room-2.jpg')
room3=loadImage('images/Room-3.jpg')
end=loadImage('images/screen 1.jpg')

}


function setup() {
  let can=createCanvas(Width,Height)
 //can.position(0,0,'fixed')
 database = firebase.database();
 game = new Game()
 game.start()
 game.getState()
 player.getCount()
 
 q=new Q()
 q.index=0
 setInterval(timeIt, 1000);
 virusGroup = new Group();
 man = createSprite(1,Height-150,100,100)
 man.scale=Height/700
 man.addImage("r",right)
 man.addImage("l",left)
 man.velocityX=man_vel;
 man.visible=false

 for(var i=0;i<16;i++){
                q.getQ(i)
                q.getA(i)
                Options[i]=[]
                for(var a=0;a<4;a++){
                  
                  q.getO(i,a)
                } 
              
              }
              for(var i=0;i<8;i++){
                q.getW(i)
              }
              Clue=[
      "I am an idiot box... find me and click on me",
      "I was invented by 2 brothers... find me",
      "Michael Jordan the player... find me",
      "It takes 20 years to dispose of me...",
      "My average lifetime is around 1,000 hours... find me",
      "I have magnets in me and I vibrate... find me",
      "You feel cozy on me"
    ]
  
    Words=[
      "haldi",
      "pandemic",
      "webex",
      "quarantine",
      "social distancing",
      "self isolation",
      "contagious",
      "virus"
      
      ]
      Clue2=[
        "BlackBoard",
        "Globe",
        "Clock",
        "Projector",
        "Photo1",
        "Plane",
        "SetSquare"
        ]
        
         Scrambled=[
          "l a d h i",
          "d m n a p c i e",
          "e x e w b",
          "t a a q r u i t n n",
          "c l a i s o _ s a t n i g n d c",
          "e f l s _ i f s a t n o l i o ",
          "o t g o s u c n a i",
          "u i v s r"
          
        ] 
        
        Clue3=[
          "BlackBoard",
          "dustbin",
          "plant",
          "books and files",
          "flame burner"
          ]
// console.log(Options)
// console.log(Answers)
// console.log(Questions)
// console.log(Questions2)
 }




function  draw() {
//document.body.style.overflow = "hidden";
//background(0)
if(gameState === 1){
  game.start2();
  
}

if(gameState === 2){
  game.start3();
  x=10
}

if(gameState === 3){
  clear();
  game.start4()
}
if(gameState === 4){
  game.start5()
  seconds=0
}
if(gameState === 5){
  clear();
  game.start6()
}
if(gameState === 6){
  clear();
  game.room1();
 
  if(seconds === 0){
    seconds=0

  }
} 

if(gameState === 7){
  clear();
  game.start7()
}

if(gameState === 8){
  clear();
  game.start8()
}

if(gameState === 9){
  clear();
  game.room2()
}
if(gameState === 10){
  clear();
  game.start9()
}
if(gameState === 11){
  clear();
  game.start10()
}
if(gameState === 12){
  clear();
  game.room3()
}
if(gameState === "end"){
  clear();
  game.end()
}
if(seconds===60){
  minutes=minutes+1
  seconds=0

}

if(man.x<Width){

}else{
man_vel=-10
man.changeAnimation("l",left)
}

if(man.x<0){
man_vel=10
man.changeAnimation("r",right)
}
man.velocityX=man_vel;

// console.log(r)
// console.log(Answers)
// console.log(Questions)
// console.log(Options)

drawSprites() 



}



function timeIt(){
  seconds=seconds+1
  
}


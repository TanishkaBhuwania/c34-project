//Create variables here

var dogImg,happyDogImg,database,foodS,foodStock,dog,happyDog

function preload()
{
	//load images here
  dogImg = loadImage("images/Dog.png")
  happyDogImg = loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(200,300,10,10)
  dog.addImage(dogImg)
  
  database = firebase.database()

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)

  

}


function draw() {  

  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImg)

  }

  drawSprites();
  //add styles here
  
  text("left over food"+foodS,200,400)
  textSize(200)
  fill("red")
  stroke(50)

}

function readStock(data){
foodS = data.val()
}

function writeStock(x){
database.ref('/').update({
  food:x
})

}





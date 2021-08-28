      //create sprites
      var surfer,surfer_running;
      var path,pathImg;
      var bomb,bombImg;
      var coin,coinImg;
      var drink,drinkImg;
 
      function preload(){
      //pre-load images and animation 
      surfer_running = loadAnimation("Runner-1.png","Runner-2.png");

      pathImg = loadImage("path.png");

      coinImg = loadImage("coin.png");

      bombImg = loadImage("bomb.png");

      drinkImg = loadImage("energyDrink.png");

      }

      function setup(){
      createCanvas(400,625);
      //create sprites here
      path = createSprite(200,312,200,625)
      path.addImage("way",pathImg)
      path.velocityY = 5;
      path.scale=1.2;


      surfer = createSprite(200,500,50,50)
      surfer.addAnimation("runner",surfer_running)
      surfer.scale=0.2;

     
      }

      function draw() {
      background(0);
     
      surfer.x = World.mouseX;
      
     

      if(path.y > 400){
      path.y = height/2 
      } 
      
      spawn_objects()

   
      drawSprites();
      }
      
     function spawn_objects(){
      if(frameCount % 70 === 0){
      var objects = createSprite(Math.round(random(10,380),160,15,15))
      objects.velocityY=3;
  
      var randnum = Math.round(random(1,3));
      switch(randnum){
      case 1: objects.addImage(bombImg);
      break;
      case 2: objects.addImage(coinImg); 
      break;
      case 3: objects.addImage(drinkImg);
      break;
      default: break;
     }
     objects.scale = 0.3;
     objects.lifetime = 200;
     }  
     }
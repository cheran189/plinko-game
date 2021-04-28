   const Engine = Matter.Engine;
   const World = Matter.World;
   const Bodies = Matter.Bodies;
   const Body = Matter.Body;

    var engine,world;
    var ground;
    var plinkos = [];
    var divisions = [];
    var particles = [];
    //var ground1,ground2,ground3;
    var divisionsHeight = 300;
function preload(){

}
function setup() {
   createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(599,590,1200,30);

   for (var i = 0; i<=width; i=i+80){
     divisions.push(new Divisions(i,height-divisionsHeight/2,10,divisionsHeight));
   }
    for(var j = 75; j<= width; j = j+50){
      plinkos.push(new Plinko(j , 75))
    }
    for(var j = 50; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,175))
    }
    for(var j = 75; j<= width; j = j+50){
      plinkos.push(new Plinko(j ,275))
    }
    for(var j = 50; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,375))
    }
  /*for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,275))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,325))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,375))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,425))
    }
    */
      // for(var k = 75; k<= 300; k = k+100){
      //   plinkos.push(new Plinko(j,k))
      // }
    
Engine.run(engine);
  }

 
 
function draw() { 
  rectMode(CENTER);
  background(0);
  if(frameCount % 60 === 0){
    particle = new Particle(random(width/2-20,width/2+20),10,10);
    particles.push(particle);
  }


   Engine.update(engine);

  //  strokeWeight(4); 

for(var n = 0; n < particles.length; n++){
  particles[n].display();
 }

  for(var h = 0; h<divisions.length;h++){
  divisions[h].display();
}
   for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
    // for(var k = 0; k<plinkos.length;k++){
    //   plinkos[j].display();
    // }
    // for(var l = 0; l<plinkos.length;l++){
    //   plinkos[j].display();
    // }
 }
  ground.display();   

 console.log(plinkos.length);

  
}
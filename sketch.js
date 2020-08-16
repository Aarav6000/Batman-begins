const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine, world;

var rain = [];
var count = 0;
var i = 0;
var man;

function preload() {

}

function setup() {
    canvas = createCanvas(400, 700);
    engine = Engine.create();
    world = engine.world;

    man = new Umbrella();
}

function draw() {
    background(0, 2, 25);
    Engine.update(engine);
    showMouse(500, 100, "w", true);

    if (frameCount % 1 === 0 && count < 80) {
        rain.push(new Drop(random(10, 390), 0));
        rain.push(new Drop(random(10, 390), 0));
        count++;
    }
    for (let j = 0; j < rain.length; j++) {
        rain[j].display();
        if(rain[j].body.position.y > 700){
            Body.setPosition(rain[j].body, {x: random(10, 390), y: 0});
            Body.setVelocity(rain[j].body, {x:0, y: 4});
        }
    }

    man.display();
}
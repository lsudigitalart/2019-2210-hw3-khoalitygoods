var loopNum = 0

function setup() {
    

}

function draw() {
    

    createCanvas (windowWidth, windowHeight);
    background (75,175,175);
    

    var redColor = 255;
    var greenColor = 255;
    var blueColor = 255;



    fill (redColor ,greenColor, blueColor);


for(var i=0; i<1000; i += 5){ 
        fill (random(256), random (0), random (256))
    circle(random(width), random(height), random(width/20));
}



    for(var i=0; i<1000; i += 5){ 
        fill (random(256), random (0), random (256))
        print(i);
         //rectangle
    rotate(45)
    fill (0,0,139);
    noStroke(0)
    rect(500, 300-loopNum, 200, 400-loopNum);
}

for(var i=0; i<1000; i += 5){ 
    fill (random(256), random (0), random (256))
    print(i);
     //rectangle
rotate(45)
fill (255,255,255);
noStroke(0)
rect(500, 600-loopNum, 200, 600-loopNum);
}




    console.log(mouseX,mouseY)


    
    
    loopNum += 1
    loopNum %= 1200
}

function windowResized(){
    resizeCanvas (windowWidth, windowHeight);
}


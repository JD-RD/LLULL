function Scene7() {

    // this.setup = function() {
    //     background('red')
    // }

    this.draw = function() {
        background(40)
        fill('yellow')
        ellipse(w/2, h/2,10,10)
    }
    
    // KEYS CONTROL
    this.keyPressed = function() {
        if(key == 0) {
            this.sceneManager.showScene( Intro );
            console.log('Intro');
        }else if (key == '1') {
            this.sceneManager.showScene( Scene1 );
            console.log('Scene-1');
        } else if (key == '2') {
            this.sceneManager.showScene( Scene2 );
            console.log('Scene-2')
        } else if (key == '3') {
            this.sceneManager.showScene( Scene3 );
            console.log('Scene-3')
        } else if (key == '4') {
            this.sceneManager.showScene( Scene4 );
            console.log('Scene-4')
        } else if (key == '5') {
            this.sceneManager.showScene( Scene5 );
            console.log('Scene-5')
        } else if (key == '6') {
            this.sceneManager.showScene( Scene6 );
            console.log('Scene-6')
        } else if (key == '7') {
            this.sceneManager.showScene( Scene7 );
            console.log('Scene-7')
        } else if (key == '8') {
            this.sceneManager.showScene( Scene8 );
            console.log('Scene-8')
        } else if (key == '9') {
            this.sceneManager.showScene( Scene9 );
            console.log('Scene-9')
        }
    }
}

// CODE DONE - HAS TO BE INTEGRATED

// Rose Patterns =>  r = cos(k*angle );
// posX = (cos(k*angle) * cos(angle);
// posY = (sin(k*angle) * sin(angle);
// k = n / d; number of sides / numbers of sides
// canvas vars
// let w = window.innerWidth/1.2, h = window.innerHeight/1.2;
// let w = 732, h = 250;
// let posX, posY;
// let r;
// let angle;
// let n = 9;
// let n_Slider;
// let d = 1;
// let d_Slider;
// let k;
// let expander = 100;

// function setup() {
//   createCanvas(w, h);
//   n_Slider = createSlider(1,9,9); // 9 max
//   n_Slider.position(20,15);
//   d_Slider = createSlider(1,9,7);
//   d_Slider.position(20,35);// 9 max
// }

// // 9 sides = 0.69813170079
// function draw() {
//   background(0);
//   fill(255);
//   text('n', 10,22);
//   text('d', 10,42);
//   fill('yellow');
//   text(n_Slider.value(), 100,22);
//   text(d_Slider.value(), 100,42);
//   translate(w/2, h/2);
// 	// loop
//   beginShape();
//   for( angle = 0 ; angle < TWO_PI * d_Slider.value(); angle += 0.01) {
//     k = n_Slider.value() / d_Slider.value() // n / d;
//     r = (cos( k * angle )) * expander;
//   	posX = r * cos(angle);
//   	posY = r * sin(angle);
//     noFill();
//     stroke(255);
//     strokeWeight(.5);
//   	// strokeWeight(2);
// 		// point(posX, posY);
//     vertex(posX, posY);
// 	}
//   endShape();
// }

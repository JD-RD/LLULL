function Scene6() {

    // this.setup = function() {
    //     background('red')
    // }

    this.draw = function() {
        background(30)
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

// let w = window.innerWidth
// let h = window.innerHeight
// let d1
// let phase = 0,
//   speed = 0.03
// let maxDotSize = 39
// let numCols = 8
// const COLORS = ['rgba(255, 199, 26,0.5)',
//   'rgba(0, 166, 81, 0.5)',
//   'rgba(237, 28, 36, 0.5)'
// ]

// function setup() {
//   createCanvas(w, h);
// }

// function draw() {
//   background('rgba(255, 199, 26,0.25)');
//   noStroke()
//   // translate(w/2,h/2)
//   // rotate(frameCount/100)

//   // Loop1
//   for (let strand = 0; strand < 9; strand++) {
//     fill('rgba(0, 166, 81, 0.5)')

//     let x = map(strand, 0, numCols, maxDotSize, w - maxDotSize);

//     phase = frameCount * speed
//     let y = h / 2 + sin(phase + strand / 8) * 25
//     let sizeOffset = (cos(phase + strand) + 1) * 0.5
//     let circleSize = sizeOffset * maxDotSize
//     d1 = new Dot(x, y, circleSize)

//     d1.create()
//   }

//   // Loop2
//   for (let strand = 9; strand > 0; strand--) {
//     fill('rgba(237, 28, 36, 0.5)')

//     let x = map(strand, numCols, 0, w - maxDotSize, maxDotSize);

//     phase = frameCount * speed
//     let y = h / 2 + cos(phase + strand / 8) * 25
//     let sizeOffset = (sin(phase + strand) + 1) * 0.5
//     let circleSize = sizeOffset * maxDotSize
//     d1 = new Dot(x, y, circleSize)

//     d1.create()
//   }

// }

// // Dot Class
// class Dot {
//   constructor(x, y, s) {
//     this.x = x
//     this.y = y
//     this.s = s
//   }

//   create() {
//     ellipse(this.x, this.y, this.s, this.s)
//   }
// }
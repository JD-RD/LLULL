function Scene6() {
    // let dotSize1
    let dotSize= w/12
    let phase = 0
    let speed = 0.03
    let numCols = 8
    const COLORS = ['rgba(255, 199, 26,0.5)',
        'rgba(0, 166, 81, 0.5)',
        'rgba(237, 28, 36, 0.5)'
        ]

    this.setup = function() {
        // canvas
    }

    this.draw = function() {

        // background(255,199, 26, x3.value()+ 50 - x7.value() * 0.25)
        background('rgba(255, 199, 26,0.25)');

        // Loop1
        for (let strand = 0; strand < 9; strand++) {
            let x = map(strand, 0, numCols, dotSize, w - dotSize);

            phase = frameCount * speed
            let y = h / 2 + sin(phase + strand / 8) * 25
            let sizeOffset = (cos(phase + strand) + 1) * 0.5
            let circleSize = sizeOffset * dotSize

            dot1 = new Dot(x, y)
            dot1.creation(circleSize, COLORS[1])
        }

        // Loop2
        for (let strand = 9; strand > 0; strand--) {
            

            let x = map(strand, numCols, 0, w - dotSize, dotSize);

            phase = frameCount * speed
            let y = h / 2 + cos(phase + strand / 8) * 25
            let sizeOffset = (sin(phase + strand) + 1) * 0.5
            let circleSize = sizeOffset * dotSize

            dot1 = new Dot(x, y)
            dot1.creation(circleSize, COLORS[2])
        }
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

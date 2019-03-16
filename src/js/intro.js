function Intro() {
    const colors = [  'rgba(255, 199, 26,0.5)',
    'rgba(237, 28, 36, 0.5)', 
    'rgba(0, 166, 81, 0.75)' ]
    let rate = 8;
    // font
    let letters = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K'];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let surprise = [];
    let choice;
    let formedWord;
    let llull;
    // x0=>size, x1=>transparency, x2=>color, x3=>random

    this.setup = function() {
        console.log('> intro: connected')
    }
    
    this.draw = function() {
        
        // console.log('rate: ' + rate);
        frameRate(rate);
        
        // bg
        background(237,28, 36, x3.value()+ 25 - x7.value() * 0.25)
        // random generation letters
        surprise = []; // 4 letters long
        for(let i=0; i < 3; i++) {
            choice = random(); // (0-1) float number
            if(choice > 0.5) {
                surprise.push(letters[floor(random(letters.length))]);
            }
            surprise.push(numbers[int(random(numbers.length))]);
        }
        formedWord = surprise.join('');
        // console.log(formedWord);
        // text formation in two layers
        if(choice > 0.5) {
            llull = new word(
                    w/2 + random( x2.value(), -x2.value()), // x position
                    h/1.75 + random( x2.value(), -x2.value()), // y position
                    color(colors[2]),         // color
                    x0.value() + 200,                       // size
                    formedWord);                            // text to add
            llull.creation();
        } else {
            llull = new word(
                    w/2 + random( x2.value(), -x2.value()),// x position
                    h/1.75 + random( x2.value(), -x2.value()),// y position
                    color(colors[0]),                              // color
                    x0.value() + 200,                      // size
                    'LLULL');                              // text to add
            llull.creation();
        }
    }
    // keys | 0: Intro, 1: Scene-1, 2: Scene-2, ..., 9: Scene-9
    // Up Arrow: Frame Rate + 2
    // Down Arrow: Frame Rate - 2
    // KEYS CONTROL
    this.keyPressed = function() {
        
        // console.log(key);     

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
        } else if (key == 'ArrowUp') {
            if (rate <= 22) {
                rate = rate + 2
                console.log('Frame Rate +2: ' + rate)
            }
        } else if (key == 'ArrowDown') {
            if (rate >= 4) {
                rate = rate - 2
                console.log('Frame Rate -2: ' + rate)
            }
        }
    }
}

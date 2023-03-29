class KeyInput {
  constructor() {
    this.keys = {};
    window.addEventListener('keydown', this.down.bind(this));
    window.addEventListener('keyup', this.up.bind(this));
  }

  isPressed(keyCode) {
    return this.keys.hasOwnProperty(keyCode) ? this.keys[keyCode] : false;
  }  

  down(e) {
    if (this.keys[e.keyCode]) return;
    this.keys[e.keyCode] = true;

    switch (e.keyCode) {
      case 37: // ArrowLeft
        console.log('ArrowLeft is pressed');
        break;
      case 39: // ArrowRight
        console.log('ArrowRight is pressed');
        break;
      default:
        console.log('KeyDown', e.key, e.keyCode);
    }
  }

  up(e) {
    this.keys[e.keyCode] = false;
    console.log('KeyUp', e.key, e.keyCode);
  }
}

const keyInput = new KeyInput();
export default keyInput;

console.log('Gerakan panah keyboard')


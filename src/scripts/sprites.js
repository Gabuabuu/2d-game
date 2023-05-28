const gravity = 0.6

class Sprite {
  constructor({ position,velocity, dimensions }) {
    this.position = position;
    this.velocity = velocity;
    this.width = dimensions.width;
    this.height = dimensions.height;
  }

  draw() {
    context.fillStyle = "white";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.velocity.y += gravity

    if(this.position.y+this.height >= canvas.height) {
      this.velocity.y = 0
    } 

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    this.draw()
  }
}

const player = new Sprite({
  position: {
    x: 100,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 2,
  },
  dimensions: {
    width: 50,
    height: 150,
  },
});

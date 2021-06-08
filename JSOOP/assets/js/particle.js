let time = 0;
let gravity = 1;

function Particle(startX, startY) {
  this.x = startX;
  this.y = startY;
  this.velocity = { x: 0, y: 0 };
}

Particle.prototype = {
  display: function () {
    return `${this.x}, ${this.y}`;
  },
  getVelocity: function () {
    return time * gravity;
  },
  move: function () {
    if (this.y <= 0) {
      console.log("bottom");
    } else {
      this.y -= this.getVelocity();
    }
  },
};

let particles = [];

let numParticle = 100;
for (let i = 0; i < numParticle; i++) {
  particles.push(new Particle(i, Math.ceil(Math.random() * 500)));
  //   console.log(
  //     `Added a new particle at x=${particles[i].x}, y=${particles[i].y}`
  //   );
  //   console.log(particles[i].display());
}

// console.log(particles);

// console.log("Particle has own x property: " + particles[0].hasOwnProperty("x"));
// console.log(
//   "Particle has own display property: " + particles[0].hasOwnProperty("display")
// );

function tick() {
  time++;
  console.log(
    particles.map((particle) => {
      return "x = " + particle.x;
    })
  );
  console.log(
    particles
      .filter((particle) => {
        return particle.y > 0;
      })
      .map((particle) => {
        return "y = " + particle.y;
      })
  );
  particles.map((particle) => {
    particle.move();
  });
}

setInterval(tick, 1000);

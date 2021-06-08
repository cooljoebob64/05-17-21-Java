function Particle(startX, startY) {
  this.x = startX;
  this.y = startY;
  this.velocity = { x: 0, y: 0 };
}

Particle.prototype = {
  display: function () {
    return `${this.x}, ${this.y}`;
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

console.log("Particle has own x property: " + particles[0].hasOwnProperty("x"));
console.log(
  "Particle has own display property: " + particles[0].hasOwnProperty("display")
);

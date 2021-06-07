// Going back to our slideshow object, let's add some functionality.

// Create an empty property named playInterval

// A play() function that moves to the next photo ever 2000ms until the end.
// Tip - use playInterval = setInterval(fn,ms).

// A pause() function that stops the slideshow
//  Tip - use clearInterval(playInterval)

// Automatically pause the slideshow if it gets to the end of the photolist while playing.

let slideshow = {
  photoList: [],
  addPhoto: function (newPhotoName) {
    this.photoList.push(newPhotoName);
    console.log(`Added photo: ${newPhotoName}`);
  },
  currentPhotoIndex: 0,
  nextPhoto: function () {
    if (this.currentPhotoIndex > this.photoList.length - 2) {
      console.log("End of slideshow.");
      this.pause();
    } else {
      this.currentPhotoIndex++;
      this.getCurrentPhoto();
    }
  },
  prevPhoto: function () {
    this.currentPhotoIndex--;
    if (this.currentPhotoIndex < 0) {
      console.log("End of slideshow.");
      this.currentPhotoIndex++;
    } else {
      this.getCurrentPhoto();
    }
  },
  getCurrentPhoto: function () {
    if (this.photoList.length == 0) {
      console.log(`No photos in the list!`);
    }
    console.log(
      `Photo #${this.currentPhotoIndex + 1}: ${
        this.photoList[this.currentPhotoIndex]
      }`
    );
    currentPhotoName.innerHTML = this.currentPhoto();
  },
  currentPhoto: function () {
    return this.photoList[this.currentPhotoIndex];
  },
  getList: function () {
    console.log(this.photoList);
  },
  playInterval: null,
  play: function () {
    let self = this;
    this.playInterval = setInterval(function () {
      self.nextPhoto();
    }, 2000);
  },
  pause: function () {
    console.log("Pausing playback...");
    clearInterval(this.playInterval);
  },
};

slideshow.addPhoto("My Weekend");
slideshow.addPhoto("A Boat");
slideshow.addPhoto("That time it happened");

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let currentPhotoName = document.getElementById("currentPhotoName");
let nextButton = document.getElementById("nextButton")
playButton.addEventListener("click", slideshow.play.bind(slideshow));
pauseButton.addEventListener("click", slideshow.pause.bind(slideshow));

// slideshow.getCurrentPhoto();

// slideshow.play();

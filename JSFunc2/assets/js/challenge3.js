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
      this.currentPhotoIndex++;
      if (this.currentPhotoIndex > this.photoList.length - 1) {
        console.log("End of slideshow.");
        this.currentPhotoIndex--;
      } else {
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
    },
    getList: function () {
      console.log(this.photoList);
    },
  };
  
  

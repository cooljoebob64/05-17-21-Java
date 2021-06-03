// Challenge 4
// Create a single object named "slideshow" that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

// An array called photoList that contains the names of the photos as strings

// An integer currentPhotoIndex that represents which photo in the photoList is currently displayed

// A nextPhoto() function that moves currentPhotoIndex to the next index ifthere is one, and:

// logs the current photo name.

// Otherwise, log "End of slideshow";

// A prevPhoto() function that does the same thing, but backwards.

// A function getCurrentPhoto() that returns the current photo from the list.

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


// Some demonstration of the object at work

slideshow.addPhoto("My Weekend");
slideshow.addPhoto("A Boat");
slideshow.addPhoto("That time it happened");

slideshow.getCurrentPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();

slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();

slideshow.getList();

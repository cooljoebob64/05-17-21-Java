// Get the header element
let header = document.querySelector("header");
console.log("The header element:");
console.log(header);

// Get all the section elements
let sections = document.querySelectorAll("section");
console.log("The sections:");
console.log(sections);

// Get the section element with class="current"
let currentSection = document.querySelector("section.current");
console.log("The current section:");
console.log(currentSection);

// Get the section that comes after the current section
let afterCurrent = currentSection.nextElementSibling;
console.log("The section after current:");
console.log(afterCurrent);

// Get the h2 node from the section before the 'current' section
let h2FromBeforeCurrent = currentSection.previousElementSibling.firstChild;
console.log("The h2 node from the section before the current section:");
console.log(h2FromBeforeCurrent);

// Get the div that contains the section that has an h2 with a class of 'highlight'
let divWithSectionWithH2WithHighlight =
  document.querySelector("h2.highlight").parentElement.parentElement;
console.log(
  "The div that contains the section that has an h2 with class 'highlight':"
);
console.log(divWithSectionWithH2WithHighlight);

// Get all the sections that contain an H2 (using a single statement);
let sectionsWithH2 = Array.from(document.querySelectorAll("section h2")).map(
  function (headline) {
    return headline.parentElement;
  }
);
console.log("All the sections that contain an H2:");
console.log(sectionsWithH2);

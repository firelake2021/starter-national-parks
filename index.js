const heading = document.querySelector("h1");
console.log(heading);
const value = document.querySelector(".value");
console.log(value);
const button = document.querySelector("button");
console.log(button);
const area = document.querySelector(".area");
console.log(area);
const statParentDiv = document.querySelector(".stats>div");
console.log(statParentDiv);
const hello = document.querySelector(".hello");
console.log(hello);
const allButtons = document.querySelectorAll("button");
console.log(allButtons);
for (let button of allButtons.values()) {
  console.log(button);
}

for (let i = 0; i < allButtons.length; i++) {
  const element = allButtons[i];
  console.log(element);
}

const allDivs = document.querySelectorAll("div");
for (let div of allDivs.values()) {
  console.log(div);
}

// const allDivsWithArea = document.querySelectorAll("div .area-display stat");
// for (el of allDivsWithArea.values()) {
//   console.log(el);
// }
const area1 = document.querySelector("div.stats");
console.log(area1);
const allDivsWithArea = document.querySelectorAll("div.stat");
for (el of allDivsWithArea.values()) {
  console.log(el);
}

const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let ratingValue of ratings) {
  const rate = parseFloat(ratingValue.innerText);
  if (rate > 4.7) ratingValue.style.fontWeight = "bold";
  ratingValue.style.color = "#3ba17c";
}
const ratings1 = document.querySelectorAll(".rating-display .value");

for (let rating of ratings1) {
  let ratingValue = parseFloat(rating.innerText);
  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

const allParks = document.querySelectorAll(".park-display");
const numberOfParks = allParks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberOfParks} exciting parks to visit`;

newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

// Get the parent element of all parks
const main = document.querySelector("main");

// // Select a single park
const park = document.querySelector(".park-display");

main.removeChild(park);

const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
  console.log("you clicked the button", event);
  console.log(event.target);
});
// Select all the buttons for all the parks
const allButtons1 = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each

allButtons1.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

//select name sorter link
const nameSorter = document.querySelector("#name-sorter");
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("you clicked the name sorter", event);
});

nameSorter.addEventListener("click", (event) => {
  // main is nodeList
  const main = document.querySelector("main");
  const allParks = document.querySelectorAll(".park-display");
  // main is node  list
  const mainSelector = document.querySelector("main");
  // allParks is node list
  const allParks1 = document.querySelectorAll(".park-display");
  //this line removes all parks
  mainSelector.innerHTML = "";

  //create array from nodelist
  const parksArray = Array.from(allParks1);
  parksArray.sort((first, second) => {
    const parkName1 = first.querySelector("h2").innerText;
    const parkName2 = second.querySelector("h2").innerText;
    const res = parkName1 < parkName2 ? -1 : 1;
    return res;
  });

  parksArray.forEach((park) => main.appendChild(park));
});

const newButton = document.createElement("button");
const parkFirst = document.querySelector(".park-display");
newButton.innerHTML = "Learn more";
parkFirst.appendChild(newButton);

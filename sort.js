// Select the `ratingSorter` link
// order parks by ratings
// console.log("Before!");
// window.addEventListener("DOMContentLoaded", (event) => console.log("loaded"));

// console.log("Before!");

const sortByRating = (first, second) => {
  console.log("first =  " + first.innerHTML);

  const parkArate = parseFloat(
    first.querySelector(".rating-display .value").innerText
  );
  const parkBrate = parseFloat(
    second.querySelector(".rating-display .value").innerText
  );
  console.log("parka =  " + parkArate);
  console.log("parkb =  " + parkBrate);

  if (parkArate < parkBrate) return -1;
  else if (parkArate > parkBrate) return 1;
  else return 0;
};

const rateSorterClickHandler = (event) => {
  event.preventDefault();
  const main = document.querySelector("main");

  const parks = main.querySelectorAll(".park-display");
  main.innerHTML = "";
  // create array
  parkArray = Array.from(parks);
  //sort array
  parkArray.sort(sortByRating);
  parkArray.forEach((element) => {
    main.appendChild(element);
  });
};

const main = () => {
  const ratingSorter = document.querySelector("#rating-sorter");

  // Add an event listener
  ratingSorter.addEventListener("click", rateSorterClickHandler);
};
// Add event listener for `DOMContentLoaded`
window.addEventListener("DOMContentLoaded", main);

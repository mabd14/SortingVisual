let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let bars_container = document.getElementById("bars_container");
let select_algo = document.getElementById("algo");
let minRange = 1;
let maxRange = 20;
let heightFactor = 6.5
let numOfBars = 20;
let unsorted_array = new Array(numOfBars);


function randomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min 
}
function createRandomArray() {
    let array = new Array(numOfBars);
    for (let i = 0; i < numOfBars; i++) {
      array[i] = randomNum(minRange, maxRange);
    }
  
    return array;
  }

  

document.addEventListener("DOMContentLoaded", function () {
    unsorted_array = createRandomArray();
    renderBars(unsorted_array);
  });

/**
 * It creates a div element for each element in the array, sets the height of each div element to the
 * value of the corresponding element in the array, and appends each div element to the bars_container
 * div element
 * @param array - The array to be sorted.
 */
  function renderBars(array) {
    for (let i = 0; i < numOfBars; i++) {
      let bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = array[i] * heightFactor + "px";
      bars_container.appendChild(bar);
    }
  }

/* Adding an event listener to the randomize_array button. When the button is clicked, it will call the
function that is passed to the event listener. */
  randomize_array.addEventListener("click", function () {
    unsorted_array = createRandomArray();
    bars_container.innerHTML = "";
    renderBars(unsorted_array);
  });
  


/**
 * Sleep() returns a promise that resolves after a given number of milliseconds.
 * @param ms - The number of milliseconds to wait before resolving the promise.
 * @returns A promise that will resolve after the setTimeout function has been called.
 */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve,ms))
}
/**
 * It takes an array as input, and then iterates over the array, comparing each element with the
 * element next to it, and swapping them if the element is greater than the next element
 * @param array - The array to be sorted
 * @returns The sorted array.
 */

async function bubbleSort(array) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          for (let k = 0; k < bars.length; k++) {
            if (k !== j && k !== j + 1) {
              bars[k].style.backgroundColor = "aqua";
            }
          }
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          bars[j].style.height = array[j] * heightFactor + "px";
          bars[j].style.backgroundColor = "lightgreen";
          //bars[j].innerText = array[j];
          bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
          bars[j + 1].style.backgroundColor = "lightgreen";
        //   bars[j + 1].innerText = array[j + 1];
          await sleep(100);
        }
      }
      await sleep(100);
    }
    return array;
  }

sort_btn.addEventListener("click", function() {  
  let sorted_array = bubbleSort(unsorted_array)
    console.log(sorted_array)
})


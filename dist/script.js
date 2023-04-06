function sort() {
  const input = document.getElementById("inputArray").value;
  const array = input.split(",").map((item) => parseInt(item.trim()));
  let len = array.length;
  let i, j, stop, swaps = 0;
  for (i = 0; i < len - 1; i++) {
    for (j = 0, stop = len - i - 1; j < stop; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swaps++;
      }
      visualize(array, swaps);
    }
  }
  document.getElementById("swaps").innerText = swaps;
  return array;
}

function visualize(array, swaps) {
  let result = document.getElementById("result");
  result.innerHTML = "";
  let maxNum = Math.max(...array);
  let barWidth = (result.clientWidth - array.length * 4) / array.length;
  for (let i = 0; i < array.length; i++) {
    let barContainer = document.createElement("div");
    barContainer.className = "bar-container";
    let bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${(array[i] / maxNum) * 100}%`;
    bar.style.width = `${barWidth}px`;
    let label = document.createElement("div");
    label.className = "bar-label";
    label.innerText = array[i];
    barContainer.appendChild(bar);
    barContainer.appendChild(label);
    result.appendChild(barContainer);
  }
 
}

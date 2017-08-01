// Global array of user inputs
var arr = []

document.getElementById('sortBtn').onclick = function handleClickEvent(ev) {
    // Retrieve user input values from DOM
    var i1Val = document.getElementById('i1').value;
    var i2Val = document.getElementById('i2').value;
    var i3Val = document.getElementById('i3').value;
    var i4Val = document.getElementById('i4').value;
    var i5Val = document.getElementById('i5').value;
    var i6Val = document.getElementById('i6').value;
    // Push user input into a global array
    arr.push(i1Val, i2Val, i3Val, i4Val, i5Val, i6Val);
}

var select = document.getElementById("sortSelect");

for (var i = 0; i < planets.length; i++) {
  var plan = planets[i][0];
  var el = document.createElement("option");
  el.innerText = planets[i][0];
  el.value = planets[i][1];
  el.textContent = plan;
  select.appendChild(el);
}

    // First sorting algorithm Bubblesort
    var bubbleSort = function (arr){
        var len = arr.length;
        console.log(len);
        for (var i = len-1; i>=0; i--){
            for(var j = 1; j<=i; j++){
            if(arr[j-1]>arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                }
            }
        }
        return arr;
    }
    
    // Second is Insertion Sort
    var insertionSort = function (arr){
        var minIdx, temp, 
            len = arr.length;
        for(var i = 0; i < len; i++){
            minIdx = i;
            for(var  j = i+1; j<len; j++){
            if(arr[j]<arr[minIdx]){
                minIdx = j;
            }
            }
            temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
        return arr;
    }

// var select = document.getElementById("planetSelect");

// for (var i = 0; i < planets.length; i++) {
//   var algorithmIndex = planets[i][0];
//   var el = document.createElement("option");
//   el.value = planets[i][1];
//   el.textContent = algorithmIndex;
//   select.appendChild(el);
// }


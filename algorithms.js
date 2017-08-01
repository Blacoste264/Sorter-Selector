// Our array of sorting algorithms
var algorithms = [
    // First sorting algorithm Bubblesort
    ['BubbleSort', function (arr){  
        var length = arr.length;
        for (var i = (length - 1); i >= 0; i--) {
            for (var j = (length - i); j > 0; j--) {
                if (items[j] < items[j - 1]) {
                    var tmp = items[j];
                    items[j] = items[j - 1];
                    items[j - 1] = tmp;
                }
            }
        }
    } ],
    // Second is Insertion Sort
    ['InsertionSort', function (arr){
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
        }]
];

var select = document.getElementById("planetSelect");

for (var i = 0; i < planets.length; i++) {
  var algorithmIndex = planets[i][0];
  var el = document.createElement("option");
  el.value = planets[i][1];
  el.textContent = algorithmIndex;
  select.appendChild(el);
}

// document.getElementById('sortBtn').onclick = function handleClickEvent(ev) {

// }

// Global array of user inputs
var arr = []

function createArr() {
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

// First sorting algorithm Bubble sort
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// Second is Insertion sort
function insertionSort(arr) {
    var minIdx, temp,
        len = arr.length;
    for (var i = 0; i < len; i++) {
        minIdx = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}

// Third is Selection sort
function selectionSort(arr){
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

// This is the third merge sort
// Part 1
function mergeSort(arr){
   var len = arr.length;
   if(len <2)
      return arr;
   var mid = Math.floor(len/2),
       left = arr.slice(0,mid),
       right =arr.slice(mid);
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
   return merge(mergeSort(left),mergeSort(right));
}
// Part 2
function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}
   
        

document.getElementById('bubbleBtn').onclick = function handleClickEvent(ev) {
    arr = [];
    createArr(ev);
    bubbleSort(arr);
    document.getElementById('newArr').innerHTML = ('<h2> Here is your Bubble sorted sorted array! ' + arr + '</h2>');
    document.getElementById('img').innerHTML="<img src='images/Bubble-sort.gif' />";
    document.getElementById('output').innerHTML = ('<b>How Bubble sort works...</b></br> You compare the first item with the second.' 
    + ' If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.' 
    + ' Then compare second with third item. If second item is bigger than the third, we swap them. otherwise, they stayed in their position.' 
    + ' Hence, the biggest among first three is in the third position. We keep doing it until we hit the last element of the array.' 
    + ' In that way we bubble up the biggest item of the array to the right most position of the array. Look at the inner loop in the code below.' 
    + ' We repeat this process, starting from the last item of the array. look at the outer loop in the code below.' 
    + ' We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.' 
    + ' Then we move backward inside the outer loop. Same thing is going on...');

}

document.getElementById('insertionBtn').onclick = function handleClickEvent(ev) {
    arr = [];
    createArr(ev);
    insertionSort(arr);
    document.getElementById('newArr').innerHTML = ('<h2> Here is your Insertion sorted array! ' + arr + '</h2>');
    document.getElementById('img').innerHTML="<img src='images/Insertion-sort-example.gif' />";
    document.getElementById('output').innerHTML = ('<b>How Insertion sort works... </b></br>' 
    + ' Imagine you are playing cards. Somebody is giving you cards one by one.' 
    + ' When you are receiving card, you are planning to put them in a way so that the smaller one is on the left. This means you want to insert them in a sorted way.' 
    + ' If the first card you are getting is 5. Just hold the card in your hand. you don’t have to do anything. If the second card is 2, you want to put it before 5 so that the two cards you have are sorted.' 
    + ' When you are putting the card with number 2 at the left, you are changing the position of the card 5 from first position to second position.' 
    + ' And then first position becomes available and you put 2 there. If the third card is 4. you will start from second position. In the second position, you have card 5 which is bigger than 4.' 
    + ' Hence you will move 5 to the third position. The next card to the left is 2 which is smaller than 4. Hence, you wont move 2. And you will insert card 4 in the second position. Then you got 10. It is bigger than the previous card which is 5.' 
    + ' Hence, you just add it at the last position. The next card is 7. You just move the position of the card 10 to the right and insert card 7. If the last card is 3. You will have to move 10 to the right as it is bigger than 3. and then you check with the next card to the left it is 7 which is bigger than 3. you move it to the right.' 
    + ' Similarly, you move 5, 4 to the right. And put the number 3 before 2 as 2 is smaller than 3. Congrats. You are done!');

}

document.getElementById('selectionBtn').onclick = function handleClickEvent(ev) {
    arr = [];
    createArr(ev);
    selectionSort(arr);
    document.getElementById('newArr').innerHTML = ('<h2> Here is your Selection sorted array! ' + arr + '</h2>');
    document.getElementById('img').innerHTML="<img src='images/Selection-Gif.gif' />";
    document.getElementById('output').innerHTML = ('<b>How Selection sort works... </b></br>' 
    + ' This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element.' 
    + ' Hence first element is the lowest element in the array.' 
    + ' Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.' 
    + ' Thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.');
}


// document.getElementById('mergerBtn').onclick = function handleClickEvent(ev) {
//     createArr(ev);
//     bubbleSort(arr);
//     document.getElementById('output').innerHTML = ('Here is your new array! ' + arr);
// }

// document.getElementById('quickBtn').onclick = function handleClickEvent(ev) {
//     createArr(ev);
//     bubbleSort(arr);
//     document.getElementById('output').innerHTML = ('Here is your new array! ' + arr);
// }

// document.getElementById('heapBtn').onclick = function handleClickEvent(ev) {
//     createArr(ev);
//     bubbleSort(arr);
//     document.getElementById('output').innerHTML = ('Here is your new array! ' + arr);
// }
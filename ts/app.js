let sortedArray = [-1, 0, 1, 8, 14, 29, 30, 55, 91];
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}
document.getElementById("search-button").addEventListener("click", function () {
    let inputElement = document.getElementById("search-input");
    let resultElement = document.getElementById("result");
    let target = parseInt(inputElement.value, 10);
    if (!isNaN(target)) {
        let result = binarySearch(sortedArray, target);
        if (result != -1) {
            resultElement.textContent = "Number found at index: ".concat(result);
        }
        else {
            resultElement.textContent = "Number not found";
        }
    }
    else {
        resultElement.textContent = "Please enter a valid number";
    }
});

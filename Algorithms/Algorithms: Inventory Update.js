function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    return arr1.map((element, i) => {
        return arr2.map(e => e[1]).includes(element[1]) ? [element[0] + arr2[arr2.findIndex(e => e[1] == element[1])][0], element[1]] : element    
    }).concat(arr2.filter(e => !arr1.map(e => e[1]).includes(e[1]))).sort((a, b) => {
        var nameA = a[1].toUpperCase(); // ignore upper and lowercase
        var nameB = b[1].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
    }

        // names must be equal
        return 0;
            })
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
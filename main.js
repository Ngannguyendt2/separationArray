let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [];
let arr3 = [];

function separationray() {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] % 2 == 0) {
            arr2.push(array1[i]);
        } else {
            arr3.push(array1[i]);
        }
    }

}

separationray();
document.write("Array even: " + arr2 + "<br>");
document.write("Array odd: " + arr3);
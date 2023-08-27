
var mergeTwoLists = function (list1, list2) {
    let result = [];
    let i = 0, j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] <= list2[j]) {
            result.push(list1[i]);
            i++;
        } else {
            result.push(list2[j]);
            j++;
        }
    }

    // Add the remaining elements from list1 (if any)
    while (i < list1.length) {
        result.push(list1[i]);
        i++;
    }

    // Add the remaining elements from list2 (if any)
    while (j < list2.length) {
        result.push(list2[j]);
        j++;
    }

    return result;
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
const list1 = [];
const list2 = [0];
console.log(mergeTwoLists(list1, list2));

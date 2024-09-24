function binarySearch(list, element) {
    let right = list.length - 1;
    let left = 0;

    while (right >= left) {
        let middle = ((left + right)/2);

        if (list[middle] === element) {
            return middle;
        } else if (list[middle] < element) {
            left = middle + 1;
        } else{
            right = middle - 1;
        }
    }
    return -1;
}

function binarySearch(list, element) {
    let right = list.length - 1;
    let left = 0;
    let middle = Math.round(left + (right - left)/2)

    if (list[middle] == element) {
        let index = middle
        while (left <= right) {
            if (list[middle] == element) {
                index = middle;
                right = middle - 1;
            } else if (element < list[middle]) {
                right = middle - 1;
            } else{
                left = middle + 1;
            }
        }
        return index
    }
    else if (list[middle] > element) {
        let mindex = binarySearch(list.slice(0, middle), element);
        return mindex;
    }
    else if (list[middle] < element) {
        let mindex = binarySearch(list.slice(0, right + 1), element);
        return mindex + middle;
    }
    return -1;
}

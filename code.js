function binarySearch(list, element) {
    var right = list.length;
    var left = 0;

    while (true) {
        if (right - left < 2) {
            if (list[left] == element) {
                while (list[left - 1] == element) left--;
                return left;
            }
            else return -1;
        }   
        
        var middle = left + Math.floor((right - left)/2)

        if (list[middle] > element) {
            right = middle;
        }
        else if (list[middle] < element) {
            left = middle + 1;
        }
        else if (list[middle] == element) {
            while (list[middle - 1] == element) middle--;
            return middle;
        }
    }
}

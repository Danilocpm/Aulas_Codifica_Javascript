function BinarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        let mid = Math.floor((right + left)/2)

        if(arr[mid] === target) {

        return mid

        } 
        
        else if(arr[mid] < target) {
            left = mid + 1
        }

        else {
            right = mid - 1
        }

    }

    return -1
}


let num = [1,3,7,8,30,20]

console.log(BinarySearch(num, 30))
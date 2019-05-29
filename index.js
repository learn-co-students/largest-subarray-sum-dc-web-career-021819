function largestSubarraySum(arr) {
    // Highest sum is intialized to total for all array elems, instead of 0,
    // setting to 0 would be incorrect if result was a negative number
    let highestSum = arr.reduce((sum, cur) => sum + cur, 0)
    let greatestSlice

    // Elems are not needed in forEach, underscore represents an unused declaration
    arr.forEach((_, ind1) => {
        let workingSlice = []
        let workingSum

        // Only iterate over remaining 
        arr.forEach((_, ind2) =>{
            workingSlice = arr.slice(ind2 - ind1, ind2 + ind1)
            workingSum = workingSlice.reduce((sum, cur) => sum + cur, 0)
            console.log(workingSlice, ind1, ind2)
            if (workingSum > highestSum) {
                highestSum = workingSum
                greatestSlice = workingSlice
            }
        })
    })
    return highestSum
}

// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

largestSubarraySum(array)
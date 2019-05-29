function largestSubarraySum(arr) {
    let highestSum = 0
    let greatestSlice
    arr.forEach((elem1, ind1) => {
        let workingSlice = []
        let workingSum
        arr.forEach((elem2, ind2) => {
            if (ind1 !== ind2 && ind2 > ind1) {
                workingSlice = arr.slice(ind1, ind2 + 1)
                workingSum = workingSlice.reduce((sum, cur) => sum + cur, 0)
                console.log(workingSlice, ind1, ind2)
                if (workingSum > highestSum) {
                    highestSum = workingSum
                    greatestSlice = workingSlice
                }
            }
        })
    })
    return highestSum
}

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

largestSubarraySum(array)
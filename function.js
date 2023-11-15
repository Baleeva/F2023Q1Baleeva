const arr = [5, 8, 16]
const brr = [22, 34, 43]
const frr = [33, 27, 5, 8]
const drr = [2,4,6]
const fullArrays = [arr, brr, frr, drr]

function evenNumberSearch(array) {
    const result = []
    const delit = 2

    for (i = 0; i <= array.length - 1; i++) {
        for (x = 0; x <= array[i].length -1; x++) {
            if (array[i][x] % delit === 0)
                result.push(array[i][x])
        }
    }
    return result
}

console.table(evenNumberSearch(fullArrays))

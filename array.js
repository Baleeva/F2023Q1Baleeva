const array = [5,8,16]
const result = []
for (i=0; i<array.length-1; i++){
if (array[i] %2===0)
result.push(array[i])
}
console.log(result)
function min(array)
{
    let output = array[0]
    for(const item of array)
    {
        if(output > item)
            output = item
    }
    return output
}
const testArray = [52,273,32,103,275,24,57]
console.log(`${testArray}중에서`)
console.log(`최소값=${min(testArray)}`)

function max(array1)
{
    let output1 = array1[0]
    for(const item of array1)
    {
        if(output1 < item)
            output1 = item
    }
    return output1
}
const testArray1 = [52,273,32,103,275,24,57]
console.log(`${testArray1}중에서`)
console.log(`최대값=${max(testArray1)}`)
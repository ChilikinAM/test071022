

const Test = () => {

    const myFn = (arr) => {
        const result = []
        let a = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i - 1] < arr[i] - 1) {
                a = arr[i]
            }
            if ((arr[i + 1] > arr[i] + 1 && arr[i - 1] < arr[i] - 1)
                || (i === 0 || (i === (arr.length -1) && arr[i - 1] !== arr[i] - 1))
                && (arr[i + 1] !== arr[i] +1)
            ){
                result.push(arr[i])
            }
            if ((arr[i - 1] === arr[i] - 1 && arr[i + 1] !== arr[i] + 1)
                || (i === (arr.length -1) && arr[i - 1] === arr[i] - 1)
            ){
                result.push(`${a}->${arr[i]}`)
            }
            if (!a) {
                a = arr[i]
            }
        }
        return result
    }

    console.log(myFn([1,3,5,6,7,12,13,14,17,19]))
    console.log(myFn([1,2,3,5,7,12,13,14,16,18,19]))


    return (
        <>

        </>    )
}

export {Test}
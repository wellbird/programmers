function solution(arr, query) {
    query.forEach((item, idx) => {
        if(idx % 2 === 0){
            arr = arr.slice(0, item + 1)
        } else{
            arr = arr.slice(item)
        }
    })
    return arr;
}
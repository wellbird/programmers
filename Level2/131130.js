function solution(cards) {
    const visitedArr = Array(cards.length).fill(1)
    const countArr = []
    cards.forEach((item, index) => {
        let count = 0
        let current = index
        while(visitedArr[current]){
            count++
            visitedArr[current] = 0
            current = cards[current] - 1
        }
        countArr.push(count)
    })
    if(countArr.length < 2) return 0
    countArr.sort((a, b) => b - a)
    return countArr[0] * countArr[1]
}
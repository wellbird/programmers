function solution(places) {
    const answer = []
    for (const room of places) {
        let checkSafe = 1
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (room[i][j] === "P") {
                    if (!check(room, i, j)) {
                        checkSafe = 0
                        break
                    }
                }
            }
            if (!checkSafe) {
                break
            }
        }
        answer.push(checkSafe)
    }
    return answer;
}

function check(place, curX, curY) {
    const dx = [0, 0, 1, -1]
    const dy = [1, -1, 0, 0]
    for (let i = 0; i < 4; i++) {
        const nextX = curX + dx[i]
        const nextY = curY + dy[i]
        if (nextX >= 0 && nextX < 5 && nextY >= 0 && nextY < 5) {
            if (place[nextX][nextY] === "P") {
                return false
            } else if (place[nextX][nextY] === "O") {
                for (let j = 0; j < 4; j++) {
                    const nextNextX = nextX + dx[j]
                    const nextNextY = nextY + dy[j]
                    if (nextNextX >= 0 && nextNextX < 5 && nextNextY >= 0 && nextNextY < 5) {
                        if (nextNextX !== curX || nextNextY !== curY) {
                            if (place[nextNextX][nextNextY] === "P") {
                                return false
                            }
                        }
                    }     
                }
            }
        }
    }
    return true
}
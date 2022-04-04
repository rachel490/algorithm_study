function checkDistance(coor1, coor2) {
    return Math.abs(coor1[0] - coor2[0]) + Math.abs(coor1[1] - coor2[1]);
}

function checkCompliance(place) {
    const coordinates = [];
    for (let i = 0; i < place.length; i++) {
        for (let j = 0; j < place[i].length; j++) {
            if (place[i][j] === 'P') {
                coordinates.push([i,j]);
                if (coordinates.length > 0) {
                    for (let coordinate of coordinates) {
                        const distance = checkDistance(coordinate, [i,j]);
                        if (distance > 2 || distance === 0) {
                            continue;
                        } else if (distance === 1) {
                            return 0
                        } else if (distance === 2) {
                            if (coordinate[0] === i) {
                                if (j >= 1 && place[i][j-1] === 'O') {
                                    return 0
                                }
                            } else if (coordinate[1] === j) {
                                if (i < 4 && place[i+1][j] === 'O') {
                                    return 0
                                }
                            } else {
                                if (!(place[coordinate[0]][j] === 'X' && place[i][coordinate[1]] === 'X')) {
                                    return 0
                                } 
                            }
                        }
                    }
                }
            }
        }
    }
    return 1;
}


function solution(places) {
    var answer = [];
    for (let place of places) {
        answer.push(checkCompliance(place));
    }
    return answer;
}
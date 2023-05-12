function nclRandom(lowBoundary, highBoundary) {
    let interval = highBoundary - lowBoundary;
    return Math.random() * interval + lowBoundary;
}

function nclMap(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
}

module.exports = {
    nclRandom: nclRandom,
    nclMap: nclMap
};
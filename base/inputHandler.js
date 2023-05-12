var pairs = [];

function addPair(sid, func) {
    pairs.push({
        id: sid,
        func: func
    });
}

function receiveInput(id, inputs) {
    for (let i = 0; i < pairs.length; i++) {
        if(pairs[i].id == id) {
            pairs[i].func(inputs);
        }
    }
}

module.exports = {
    pairs: pairs,
    addPair: addPair,
    receiveInput: receiveInput
};
// #1

const myObj = {
    1: true,
    string: '123',
    num: 12345,
    4: false
}

function printObj(obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)){
            console.log(i, obj[i])
        }
    }
}

printObj(myObj)
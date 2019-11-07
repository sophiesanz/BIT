var msg = "1. Soy el primer mensaje"
setTimeout(() => {
    if (msg != undefined) {
        console.log(msg);
    } else {
        console.log("no existe primer mensaje");
    }
}, 20000);

var msg1 = "2. Soy el segundo mensaje"
setTimeout(() => {
    if (msg1 != undefined) {
        console.log(msg1);
    } else {
        console.log("no existe segundo mensaje");
    }
}, 15000)

var msg2 = "3. Soy el tercer mensaje"
setTimeout(() => {
    if (msg2 != undefined) {
        console.log(msg2);
    } else {
        console.log("no existe tercer mensaje");
    }
}, 10000)

var msg3 = "4. Soy el ultimo mensaje"
setTimeout(() => {
    if (msg3 != undefined) {
        console.log(msg3);
    } else {
        console.log("no existe ultimo mensaje");
    }
}, 5000)
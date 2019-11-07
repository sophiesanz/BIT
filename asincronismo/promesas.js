new Promise((resolve, reject) => {
    var msg = "1. Soy el primer mensaje"
    setTimeout(() => {
        if (msg != undefined) {
            return resolve(msg);
        } else {
            return reject(new Error(
                "no existe primer mensaje")
                );
        }
    }, 20000);
}).then((msg) => {
    console.log(msg)
    var msg1 ;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg1 != undefined) {
                return resolve(msg1);
            } else {
                return reject(new Error(
                    "no existe segundo mensaje"
                    ));
            }
        }, 15000);
    })
}).then((msg1) => {
    console.log(msg1)
    var msg2 = "3. Soy el tercer mensaje"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg2 != undefined) {
                return resolve(msg2);
            } else {
                return reject(new Error(
                    "no existe tercer mensaje"));
            }
        }, 10000)
    })
}).then((msg2) => {
    console.log(msg2)
    var msg3 = "4. Soy el ultimo mensaje"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg3 != undefined) {
                return resolve(msg3);
            } else {
                return reject(new Error("no existe ultimo mensaje"));
            }
        }, 5000)
    })
}).then((msg3) => {
    console.log(msg3)
}).catch((err) => {
    console.log(err.message)
})


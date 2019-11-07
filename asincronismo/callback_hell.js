function uno() {
    setTimeout(function () {
        console.log('1. Soy el primer mensaje');
        setTimeout(function () {
            console.log('2. Soy el segundo mensaje');
            setTimeout(function () {
                console.log('3. Soy el tercer mensaje');
                setTimeout(function () {
                    console.log('4. Soy el último mensaje');
                }, 5000);
            }, 10000);
        }, 15000);
    }, 20000);
};

uno();
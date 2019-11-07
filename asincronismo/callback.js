function uno(pri) {
    pri(seg);
}

function seg(ter) {
    setTimeout(() => {
        console.log('2. Soy el segundo mensaje');
        ter(cua);
    }, 15000);
}

function ter(cua) {
    setTimeout(() => {
        console.log('3. Soy el tercer mensaje');
        cua();
    }, 10000);
}

function cua() {
    setTimeout(() => {
        console.log('4. Soy el ultimo mensaje');
    }, 5000);
}


function pri(seg) {
    setTimeout(() => {
        console.log('1. Soy el primer mensaje');
        seg(ter);
    }, 20000);
}

uno(pri);
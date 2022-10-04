function primeFactors(n) {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor == 0) {
            if (factors.includes(divisor)) {
                break;
            }
            else {
                factors.push(divisor);
                n = n / divisor;
            }

        } else {
            divisor++;
        }
    }
    return factors;
}
for (let i = 1; i <= 6; i++) {
    if (i === 1) {

        console.log('Prime factors of', i + ':', 1)
    }
    else {
        const randomNumber = i;
        console.log('Prime factors of', randomNumber + ':', primeFactors(randomNumber).join(' '))
    }
}


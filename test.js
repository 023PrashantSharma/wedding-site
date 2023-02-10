function checkwraper(num) {
    let count = 0
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i)
            count++;
            // i--
        }
    }
    console.log("count", count)
    return count
}
checkwraper(10)
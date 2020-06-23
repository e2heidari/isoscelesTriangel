triangel = ""
for (let i = 1; i < 20; i++) {
    for (let j = 1; j < 20; j++) {
        if (i <= 10 && j >= 10 - (i - 1) && j <= 10 + (i - 1)) {
            triangel = triangel.concat("*")
        } else {
            triangel = triangel.concat("")

        }

    }
    triangel = triangel.concat("\r\n")
}
console.log(triangel)
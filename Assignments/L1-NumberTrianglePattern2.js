// 2) WAP  to display the pattern like right angle triangle with a number.
// The pattern like :
// 1
// 12
// 123
// 1234

let Numberpattern = (num) => {
    let str = ''
    for (let i = 1; i <= num; i++) {
        str = str +`${i}`
        console.log(str)
    }
}
Numberpattern(4)
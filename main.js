function evenChars(string) {
      return (string.length < 2 || string.length > 100) ? 'invalid string' :
      [...string].filter((x, i) => i % 2 !== 0)
    }


console.log(evenChars('abcdefgd')) // => [ 'b', 'd', 'f', 'd' ]
console.log(evenChars('hello there, guvner')) // => ['e', 'l', ' ', 'h', 'r', ',','g', 'v', 'e']
console.log(evenChars('a')) // => 'invalid string'
const fs = require("fs");
const [n, ...arr] = (process.platform === "win32"
  ? fs.readFileSync("/dev/stdin").toString()
  : `5`
)
  .trim()
  .split("\n");

let answer = "";

for (let i = 1; i <= n; i++) {
  let stars = Array(i + 1).join("*");
  answer += `${stars}` + "\n";
}

console.log(answer);

// const fs = require("node:fs");

// const response1 = fs.readFileSync("./temp.txt","utf-8");

// console.log(response1);
// console.log("----MID------")

// const response2 = fs.readFileSync("./student.txt","utf-8");

// console.log(response2);
// console.log("----END------")

const fs = require("node:fs");

const response1 = fs.readFile("./temp.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error reading files", err.message);
  } else {
    console.log("temp.txt--->", data);
  }
});

console.log(response1);
console.log("----MID------");

const response2 = fs.readFile("./student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error reading files", err.message);
  } else {
    console.log("student.txt--->", data);
  }
});

console.log(response2);
console.log("----END------");

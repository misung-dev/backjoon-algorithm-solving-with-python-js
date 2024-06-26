const fs = require("fs");
const input = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((x) => x.split(" "));

const scoreTable = {
	"A+": 4.5,
	A0: 4.0,
	"B+": 3.5,
	B0: 3.0,
	"C+": 2.5,
	C0: 2.0,
	"D+": 1.5,
	D0: 1.0,
	F: 0.0,
};

let creditSum = 0, // 학점 총계
	totalSum = 0; // 학점 총합(학점 * 전공 평점)

for (let [subject, credit, grade] of input) {
	if (grade !== "P") {
		creditSum += +credit;
		totalSum += credit * scoreTable[grade]; // string * string = number
	}
}

console.log(totalSum / creditSum);

import { createInterface } from "readline";

const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('数値を入力してください', (line) => {
	//文字列が入力されたら実行
	const num = Number(line);
	//1000を足して出力
	console.log(num + 1000);
	rl.close();
});
//二つ目の引数はコールバック

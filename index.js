//leitura
const entrada = require("prompt-sync")({ sigint: true });

const initLine = ["LET", "READ", "PRINT", "GO", "IF", "END"];

const run = () => {
	let s = "";
	let line = 0;
	let code = [];
	while (s !== "END") {
		s = entrada(`${line}: `);
		code.push(s);
		line++;
	}

	code.forEach((line, i) => {
		//verifica ";"
		const hasEnd = line.includes("END");
		verifyTermination(line, i, hasEnd);

		//Verifica se a ultima linha é exatamente o END
		if (code.length - 1 === i) {
			verifyEndWord(line, i);
		}

		const s = line.split(" ")[0];
		initLine.includes(s)
			? console.error(`A linha ${i} contém a palavra ${s}`)
			: console.error(
					`Erro na linha ${i}! Nao Reconhecemos essa referencia ${s}`
			  );
	});
};

const verifyTermination = (line, i, hasEnd) => {
	!line.endsWith(";") &&
		!hasEnd &&
		console.error(`Erro na linha ${i}!. Era esperado um ";" no final`);
};

const verifyEndWord = (line, i) => {
	line !== "END" &&
		console.log(
			`Erro na linha ${i}!. O codigo deve ser encerrado com a palavra "END"`
		);
};

run();

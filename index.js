//leitura
const entrada = require("prompt-sync")({ sigint: true });

const initLine = ["LET", "READ", "PRINT", "GO", "IF", "END"];

// const comando = {
// 	atribuicao: (identificador, expressao) => `LET ${identificador} ::= ${expressao}`,
// 	desvio: {
// 	  goToRotulo: (rotulo) => `GO TO ${rotulo}`,
// 	  goToIdentificador: (identificador, listaDeRotulos) => `GO TO ${identificador} OF [${listaDeRotulos.join(", ")}]`,
// 	},
// 	leitura: (listaDeIdentificadores) => `READ [${listaDeIdentificadores.join(", ")}]`,
// 	impressao: (listaDeExpressoes) => `PRINT [${listaDeExpressoes.join(", ")}]`,
// 	decisao: (comparacao, comandoThen, comandoElse) => `IF ${comparacao} THEN ${comandoThen} ELSE ${comandoElse}`,
// 	rotulo: (identificador, comando) => `${identificador}: ${comando}`,
//   };

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
		i === code.length - 1 && verifyTermination(line, i);

		const s = line.split(" ")[0];
		initLine.includes(s)
			? //aqui eu devo levar a linha pra verifição de acordo com a primeira palavra digitada (s)
			  console.log(`A linha ${i} contém a palavra ${s}`)
			: console.error(
					`Erro na linha ${i}! Nao Reconhecemos essa referencia ${s}`
			  );
	});
};

const verifyTermination = (line, i) => {
	line.endsWith(";") &&
		console.error(`Erro na linha ${i}!. Era esperado um ";" no final`);
};

run();

//verificaçao

const compilador = (code) => {};

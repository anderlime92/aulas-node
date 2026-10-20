import chalk from 'chalk'; // importando Chalk para deixar saidas de terminal coloridas
import chalkAnimation from 'chalk-animation'; // importando Chalk Animation para deixar saidas de terminal animadas

console.log("Gerenciando Pacotes com NPM");

const nome = "Ejor Composto";
const idade = 17;

/* if (idade >= 18) {
    console.log("maior de idade");
    
} else {
    console.log("menor de idade");
    
} */

if (idade < 18) {
    // console.log(chalk.red(`${nome} é menor de idade`));
    
} else {
    console.log(chalk.blue(nome + " maior de idade"));
    chalkAnimation.radar(`${nome} é menor de idade`);
}

console.log(chalk.blue('Hello world!'));

// chalkAnimation.rainbow('Lorem ipsum dolor sit amet');

chalkAnimation.radar('Lorem ipsum dolor sit amet');

// NPM - Node Package Manager
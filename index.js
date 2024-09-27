const express = require('express');
const moment = require('moment');

const app = express();
const port = 3000;
const yargs = require('yargs');

app.get('/fecha', (req, res) => {
    const fecha = moment().add(10, 'days').format('dddd');
    res.send(`La fecha dentro de 10 días será: ${fecha}`);
});

yargs.command({
    command: 'saludar',
    describe: 'Enviar un saludo',
    builder:{
        nombre: {
            describe: 'Nombre de la persona a saludar',
            demandOption: true,
            alias: 'n'
        }
    },
    handler(argv){
        console.log('Hola '+argv.nombre+' Bienvendido a la fiesta');
    }
});

yargs.command({
    command: 'salir',
    describe: 'Enviar un saludo de despedida',
    builder:{
        nombre: {
            describe: 'Nombre de la persona a saludar',
            demandOption: true,
            alias: 'n'
        }
    },
    handler(argv){
        console.log('Hola '+argv.nombre+' Nos vemos pronto');
    }
});
yargs.help().argv;

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
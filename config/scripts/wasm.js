const { spawn } = require('node:child_process');
const chalk = require('react-dev-utils/chalk');
const paths = require('../paths.js');

const wasmBuild = () => new Promise((resolve, reject) => {
  const build = spawn('wasm-pack', ['build', paths.appPath, '--out-dir', paths.wasmBuild, '--target', 'web']);

  build.stdout.on('data', (data) => {
    console.error(`${data}`);
  });

  build.stderr.on('data', (data) => {
    console.error(chalk.yellow(`${data}`));
    reject();
  });

  build.on('close', (code) => {
    console.log(chalk.greenBright('Sucess! wasm build!'));
    resolve();
  });
})

const cleanWasmBuild = () => new Promise((resolve, reject) => {
  const cleanDir = spawn('rm', ['-rf', paths.wasmBuild]);

  cleanDir.stdout.on('data', (data) => {
    console.error(`${data}`);
  });

  cleanDir.stderr.on('data', (data) => {
    console.error(chalk.yellow(`${data}`));
    reject();
  });

  cleanDir.on('close', (code) => {
    console.log(chalk.greenBright('Fully clean wasm directory.'));
    resolve();
  });
});


cleanWasmBuild().then(wasmBuild).catch((err) => console.log(err));


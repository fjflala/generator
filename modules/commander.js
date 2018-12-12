const program = require('commander');
const Generator = require('./generator');

program
  .option('--dir [path]', 'Path')
  .command('scaffolding [path]')
  .alias('s')
  .description('Scaffolding generator')
  .action((path, opts) => {
    Generator.createScaffolding(null, opts.parent.dir);
  });

program
  .command('component')
  .alias('c')
  .description('Component generator')
  .action((env, opts) => {
    console.log('component');
  });

program.parse(process.argv);

  

module.exports = program;

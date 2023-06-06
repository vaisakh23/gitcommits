#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "$0",
    "gitcommits",
    () => {},
    (args) => {
        console.log('default command')
    }
  )
  //   .command('serve [port]', 'start the server', (yargs) => {
  //     return yargs
  //       .positional('port', {
  //         describe: 'port to bind on',
  //         default: 5000
  //       })
  //   }, (argv) => {
  //     if (argv.verbose) console.info(`start server on :${argv.port}`)
  //   })
  //   .option('verbose', {
  //     alias: 'v',
  //     type: 'boolean',
  //     description: 'Run with verbose logging'
  //   })
  .help()
  .parse();
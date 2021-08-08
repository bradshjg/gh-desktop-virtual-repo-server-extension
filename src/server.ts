import * as express from 'express';

import { execFile } from 'child_process';
import { Readable } from 'stream';
import * as FSE from 'fs-extra';

export const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('OK');
});

// run git command based on JSON body
app.post('/git', (req, res) => {
  const payload = req.body;
  const stdin = payload.options?.stdin;

  // HACK HACK HACK replace environment until we do a better job of handling this
  // right now we are hackily getting only the capitalized environment variables
  // in the environment of the remote server so it's less Node-noisy.
  const osEnvEntries = Object.entries(process.env);
  payload.options.env = Object.fromEntries(osEnvEntries.filter(([key, value]) => key.toUpperCase() === key));

  const spawnedProcess = execFile('git', payload.args, payload.options, (error, stdout, stderr) => {
    const result = {
      error: error,
      stdout: stdout,
      stderr: stderr
    };

    // send response
    res.json(result);
  });
  if (stdin) {
    const stdinStream = new Readable();
    stdinStream.push(stdin);
    stdinStream.push(null);
    if (spawnedProcess.stdin) {
      stdinStream.pipe(spawnedProcess.stdin);
    }
  }
});

// run fs-extra command based on JSON body
app.post('/fse', (req, res) => {
  const payload = req.body;
  const fn = payload.function;
  const args = payload.args;
  const options = payload.options;

  // @ts-ignore this is a hack
  let result = FSE[fn](...args);

  result.then( (result: any) => {
    switch (fn) {
      case 'readFile':
        result = result.toString();
        break;
    }
    res.json({ result: result });
  }).catch( (result: any) => {
    console.log(result.toString());
  });
});

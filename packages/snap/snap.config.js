/* eslint-disable node/no-process-env */
const through = require('through2');
const envify = require('envify/custom');
require('dotenv').config();

module.exports = {
  cliOptions: {
    src: './src/index.ts',
    port: 8080,
  },
  bundlerCustomizer: (bundler) => {
    bundler
      .transform(function () {
        let data = '';
        return through(
          function (buffer, _encoding, callback) {
            data += buffer;
            callback();
          },
          function (callback) {
            this.push("globalThis.Buffer = require('buffer/').Buffer;");
            this.push(data);
            callback();
          },
        );
      })
      .transform(
        envify({
          TATUM_API_KEY: process.env.TATUM_API_KEY,
        }),
      );
  },
};

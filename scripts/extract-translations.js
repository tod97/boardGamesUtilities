const fs = require('fs-extra');
const { resolve } = require('path');
const i18nFilesPath = resolve(__dirname, '../src/assets/i18n');
const { exec } = require('child_process');

fs.readdir(i18nFilesPath, (err, dirCont) => {
  let files = dirCont.filter((file) => file.match(/.*\.(json)/gi));
  files = files.map((file) => `"${resolve(`${i18nFilesPath}/${file}`)}"`.replace(' ', ' '));

  const command = `ngx-translate-extract -i ./src -o ${files.join(
    ' '
  )} --clean --sort --format namespaced-json`;
  console.log(command);
  exec(command, (err, stdout) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(stdout);
  });
});

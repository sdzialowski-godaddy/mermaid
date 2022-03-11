const path = require("path");

const fs = require("fs");

const log = console.log;

const source = path.resolve(__dirname, "README-template.md");

const target = path.resolve(__dirname, "README.md");

const content = fs.readFileSync(source, 'utf8').toString();

const result = content.replace(/(?:^|\n)```mermaid(.*?)```/gs, (original, ref) => {
  return `\n\`\`\`${ref}\`\`\`\n${original}\n`;
});

fs.writeFileSync(target, result);

/**
 * from: https://stackoverflow.com/a/1349426
 */
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

console.log(makeid(50).substring(0, parseInt((Math.random() * 45) + 5, 10)));

(function keepalive() {
  setInterval(keepalive, Number.MIN_SAFE_INTEGER);
});



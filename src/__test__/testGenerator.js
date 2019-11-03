const { readFileSync, writeFileSync } = require('fs');

const lines = readFileSync(`${__dirname}/../../README.md`, 'utf-8')
  .split('\n')
  .filter(Boolean);

let testCode =
  "import { array as arrayUtils, object as objectUtils } from '../index';";

for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('[example]')) {
    const exampleName = lines[i - 1].slice(2, -1);
    const exampleOutput = JSON.parse(
      lines[i].slice(lines[i].indexOf('(') + 1, -2)
    );

    const normalAssertionCode = Object.keys(exampleOutput.normal | {}).map(
      key =>
        `expect(${key}).toEqual(${JSON.stringify(exampleOutput.normal[key])})\r`
    );

    const strictAssertionCode = Object.keys(exampleOutput.strict | {}).map(
      key =>
        `expect(${key}).toStrictEqual(${JSON.stringify(exampleOutput.strict[key])})\r`
    );
    
    const assertionCode = normalAssertionCode + strictAssertionCode

    const potentialCodeBlockLines = lines.slice(i + 3, -1);
    const exampleCode = potentialCodeBlockLines
      .slice(0, potentialCodeBlockLines.indexOf('```\r'))
      .join('')
      .replace('js-immutable-utils', './src/index')
      .replace(/console\.log\(.*\)/g, '');

    testCode += `\ntest('${exampleName.replace("'", "\\'")}', () => {
            ${exampleCode}
            ${assertionCode}
        })`;
  }
}

writeFileSync(`${__dirname}/examples.test.ts`, testCode);

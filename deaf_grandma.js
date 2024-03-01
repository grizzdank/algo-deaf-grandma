// Imitates a grandma who is hard of hearing
// Author: Dave Graham
// Date: 03012024

/* // this is the implementation for a browser
function deafGrandma() {
  let bye = 0;
  console.log('HEY KID!');
  while (bye < 2) {
    let kid = prompt('>');
    if (kid === 'GOODBYE') {
      bye += 1;
      if (bye === 1) {
        console.log('LEAVING SO SOON?');
        continue;
      }
      else if (bye === 2) {
        console.log('LATER SKATER!');
        return;
      }
    }
    if (kid === kid.toUpperCase() && kid !== '') {
      console.log('NO, NOT SINCE 1946!');
    }
    else if (kid === '') {
      console.log('WHAT?!');
    }
    else {
      console.log('SPEAK UP, KID!');
    }
  }
}

deafGrandma(); */

// below is the implementation for CLI

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let bye = 0;
console.log('HEY KID!');
const deafGrandma = () => {
  readline.question('>', kid => {
    if (kid === 'GOODBYE!') {
      bye += 1;
      if (bye === 1) {
        console.log('LEAVING SO SOON?');
        deafGrandma();
      }
      else if (bye === 2) {
        console.log('LATER, SKATER!');
        readline.close();
      }
    }
    else if (kid === kid.toUpperCase() && kid !== '') {
      console.log('NO, NOT SINCE 1946!');
      deafGrandma();
    }
    else if (kid === '') {
      console.log('WHAT?!');
      deafGrandma();
    }
    else {
      console.log('SPEAK UP, KID!');
      deafGrandma();
    }
  });
}

deafGrandma();

const transpose = require('./transpose');

const wordSearch = (letters, word) => { 
  //Horizontal
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word)) return true;
  }

  //Vertical
  const lettersTransposed = transpose(letters);
  const verticalJoin = lettersTransposed.map(ls => ls.join(''))
  for (l of verticalJoin) {
      if (l.includes(word)) return true;
  }

  return false;
}

module.exports = wordSearch;

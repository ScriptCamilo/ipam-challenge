function removeAccent(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function convertString(word: string) {
  const wordWithoutAccent = removeAccent(word);
  const wordLowerCase = wordWithoutAccent.toLowerCase();
  return wordLowerCase;
}
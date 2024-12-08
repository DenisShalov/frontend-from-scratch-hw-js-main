/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let words = str.split(' ')
  for (let i = 0; i < words.length; i++) {
    let word = String(words[i])
    word = word[0].toUpperCase() +  word.slice(1).toLowerCase()
    words.splice(i, 1, word)
  }
  
  return words.join(' ')
}

console.log(capitalizeWords("hello world from javascript"));

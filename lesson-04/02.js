/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
let newArray = [];
let count = 0;
for(let i=0; i<array.length; i++){
    newArray[i] = !includesElement(newArray, array[i]) ? array[i]: null;
    if(newArray[i] !== null){
        if(i != count){
            let init = newArray[count];
            newArray[count] = newArray[i];
            newArray[i] = init;
        }
        count++;
    }
}
let newArrays = [];
for(let i = 0; newArray[i] !== null; i++){
newArrays.push(newArray[i])
}

return newArrays;
}

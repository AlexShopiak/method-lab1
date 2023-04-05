## TEST BRANCH. NOT FOR Methodologies LABS
## Quadratic Equation Solver - консольний застосунок, що обраховує корені квадратного рівняння.

### Застосунок працює у 2 режимах:
1) Інтерактивний: користувач сам, почергово уводить 3 коефіцієнти a, b, c.
- node index.js
2) Неінтерактивний: користувач викликає застосунок, передаючи шлях до файлу з коефіцієнтами
- node index.js file.txt

### Початок роботи
1) Завантажити пакет node.js v16.14.0 або вище
- https://nodejs.org/en/
2) Викликати програму в одному з режимів
- node index.js
- або
- node index.js file.txt

### Вимоги до текстового файлу для неінтерактивного режиму
Формат файлу мусить відповідати масці типу A\sB\sC\n де
- A B C : дійсні числа, коефіцієнти рівняння (У якості десяткового символу очікується крапка)
- \s : пробіл
- \n : перехід на новий рядок

### Revert commit
 - <code><a href="https://github.com/AlexShopiak/method-lab1/commit/71bfccee3a8c158236ff5923d5d756934c522e66">Revert commit</a></code>

### Алгоритм роботи програми
<img width="522" alt="3 drawio" src="https://user-images.githubusercontent.com/90408822/225413545-d977ec83-6102-4da3-87b6-d983425e13c5.png">

ГІЛКА ДЛЯ ПРОВЕДЕННЯ ПІСЛЯДЕДЛАЙНОВОГО РЕФАКТОРИНГУ. НЕ ДЛЯ ОЦІНКИ
## Quadratic Equation Solver - консольний застосунок, що обраховує корені квадратного рівняння.

### Застосунок працює у 2 режимах:
1) Інтерактивний: користувач сам, почергово уводить 3 коефіцієнти a, b, c.
2) Неінтерактивний: користувач викликає застосунок, передаючи шлях до файлу з коефіцієнтами

### Початок роботи
1) Встановити <code><a href="https://nodejs.org/en">Node.js</a></code>
2) Встановити <code><a href="https://www.npmjs.com/package/npm">Node Package Manager</a></code>
3) У корені проекту оновити пакети командою <code>npm i</code>
4) У корені проекту запустити тести командою <code>npm test</code>
5) Викликати програму в одному з режимів
- Інтерактивний <code>node app.js</code>
- Неінтерактивний <code>node app.js file.txt</code>

### Вимоги до текстового файлу для неінтерактивного режиму
Формат файлу мусить відповідати масці типу A\sB\sC\n де
- A B C : дійсні числа, коефіцієнти рівняння (У якості десяткового символу очікується крапка)
- \s : пробіл
- \n : перехід на новий рядок

### Опис проекту
#### 1) ./
- <code>app.js</code> Точка входу в програму, що ідентифікує режим, ініціює його та виводить результати обчислень
#### 2) ./lib/logic
- <code>ansi-colors.js</code> Набір кольорів для стандартного виводу
- <code>checkers.js</code> Функції - обробники помилок
- <code>counter.js</code> Функція, що обраховує корені по коефіцієнтам квадратного рівняння
#### 2) ./lib/mods
- <code>interactive.js</code> Інтерактивний режим. Цикл опитування в консолі та перевірка значень
- <code>non-interactive.js</code> Неінтерактивний режим. Зчитування значень з файлу та їх перевірка
#### 3) ./test
- <code>app.test.js</code> Середовище тестування для функції обчислення коренів

### Revert commit
 - <code><a href="https://github.com/AlexShopiak/method-lab1/commit/71bfccee3a8c158236ff5923d5d756934c522e66">Revert commit</a></code>

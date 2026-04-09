/* БАЗА ЗАДАНИЙ: Системы линейных неравенств 8 класс 
   Особенности: Использование фигурных скобок через LaTeX cases
*/

const systems_8_data = [
    {
        topic_id: "inequality_systems_8",
        topic_name: "Системы линейных неравенств",
        fgos_code: "1.2.7", 
        questions: [
            {
                id: 1,
                text: "Решите систему неравенств: $\\begin{cases} x > 3 \\\\ x < 7 \\end{cases}$",
                hint: "Найдите пересечение промежутков: числа, которые одновременно больше 3 и меньше 7.",
                solution: "Пересечение лучей $(3; +\\infty)$ и $(-\\infty; 7)$ дает интервал $(3; 7)$.",
                correct: "$(3; 7)$",
                options: ["$(3; 7)$", "$[3; 7]$", "$(3; +\\infty)$", "нет решений"]
            },
            {
                id: 2,
                text: "Решите систему неравенств: $\\begin{cases} 2x \\le 10 \\\\ x - 1 > 2 \\end{cases}$",
                hint: "Решите каждое неравенство отдельно: $x \\le 5$ и $x > 3$.",
                solution: "$x \\in (3; 5]$.",
                correct: "$(3; 5]$",
                options: ["$(3; 5]$", "$[3; 5]$", "$(3; 5)$", "$(-\\infty; 5]$"]
            },
            {
                id: 3,
                text: "Решите систему неравенств: $\\begin{cases} x > 5 \\\\ x > 8 \\end{cases}$",
                hint: "Если оба знака 'больше', выбираем больше большего.",
                solution: "Числа, которые одновременно больше 5 и больше 8 — это числа больше 8.",
                correct: "$(8; +\\infty)$",
                options: ["$(8; +\\infty)$", "$(5; +\\infty)$", "$(5; 8)$", "нет решений"]
            },
            {
                id: 4,
                text: "Решите систему неравенств: $\\begin{cases} x < 2 \\\\ x < -1 \\end{cases}$",
                hint: "Если оба знака 'меньше', выбираем меньше меньшего.",
                solution: "Общая часть: $(-\\infty; -1)$.",
                correct: "$(-\\infty; -1)$",
                options: ["$(-\\infty; -1)$", "$(-\\infty; 2)$", "$(-1; 2)$", "нет решений"]
            },
            {
                id: 5,
                text: "Найдите решение системы: $\\begin{cases} x \\le 4 \\\\ x \\ge 6 \\end{cases}$",
                hint: "Может ли число быть одновременно меньше 4 и больше 6?",
                solution: "Промежутки $(-\\infty; 4]$ и $[6; +\\infty)$ не пересекаются.",
                correct: "нет решений",
                options: ["нет решений", "$(4; 6)$", "$[4; 6]$", "$(-\\infty; +\\infty)$"]
            },
            {
                id: 6,
                text: "Решите систему: $\\begin{cases} 3x - 9 < 0 \\\\ 5 - x > 1 \\end{cases}$",
                hint: "Решите: $3x < 9 \\Rightarrow x < 3$ и $-x > -4 \\Rightarrow x < 4$.",
                solution: "Общая часть $x < 3$ и $x < 4$ — это $x < 3$.",
                correct: "$(-\\infty; 3)$",
                options: ["$(-\\infty; 3)$", "$(-\\infty; 4)$", "$(3; 4)$", "нет решений"]
            },
            {
                id: 7,
                text: "Укажите количество целых решений системы: $\\begin{cases} x > 1,2 \\\\ x \\le 4,8 \\end{cases}$",
                hint: "Целые числа в промежутке $(1,2; 4,8]$ — это 2, 3, 4.",
                solution: "Целые решения: 2, 3, 4. Всего 3 решения.",
                correct: "3",
                options: ["3", "4", "2", "5"]
            },
            {
                id: 8,
                text: "Решите систему: $\\begin{cases} 2(x - 1) < 4 \\\\ 3x + 1 > 7 \\end{cases}$",
                hint: "$x - 1 < 2 \\Rightarrow x < 3$ и $3x > 6 \\Rightarrow x > 2$.",
                solution: "$x \\in (2; 3)$.",
                correct: "$(2; 3)$",
                options: ["$(2; 3)$", "$[2; 3]$", "нет решений", "$(-\\infty; 3)$"]
            },
            {
                id: 9,
                text: "Решите систему: $\\begin{cases} \\frac{x}{2} \\ge 1 \\\\ \\frac{x}{3} \\le 2 \\end{cases}$",
                hint: "Умножьте на знаменатели: $x \\ge 2$ и $x \\le 6$.",
                solution: "$x \\in [2; 6]$.",
                correct: "$[2; 6]$",
                options: ["$[2; 6]$", "$(2; 6)$", "$[2; 3]$", "$[1; 2]$"]
            },
            {
                id: 10,
                text: "Укажите наибольшее целое решение: $\\begin{cases} 2x < 11 \\\\ x > 2 \\end{cases}$",
                hint: "$x < 5,5$ и $x > 2$. Целые: 3, 4, 5.",
                solution: "Наибольшее целое из интервала $(2; 5,5)$ — это 5.",
                correct: "5",
                options: ["5", "6", "4", "2"]
            },
            {
                id: 11,
                text: "Решите систему: $\\begin{cases} 1 - x \\ge 0 \\\\ x - 4 < 0 \\end{cases}$",
                hint: "$-x \\ge -1 \\Rightarrow x \\le 1$ и $x < 4$.",
                solution: "Общее решение: $x \\le 1$.",
                correct: "$(-\\infty; 1]$",
                options: ["$(-\\infty; 1]$", "$[1; 4)$", "$(-\\infty; 4)$", "нет решений"]
            },
            {
                id: 12,
                text: "Решите систему: $\\begin{cases} 0,5x + 1 > 0 \\\\ 2 - x < 5 \\end{cases}$",
                hint: "$0,5x > -1 \\Rightarrow x > -2$ и $-x < 3 \\Rightarrow x > -3$.",
                solution: "Выбираем 'больше большего': $x > -2$.",
                correct: "$(-2; +\\infty)$",
                options: ["$(-2; +\\infty)$", "$(-3; +\\infty)$", "$(-3; -2)$", "нет решений"]
            },
            {
                id: 13,
                text: "Решите систему: $\\begin{cases} 4x - 1 < x + 8 \\\\ 3x \\ge x - 4 \\end{cases}$",
                hint: "$3x < 9 \\Rightarrow x < 3$ и $2x \\ge -4 \\Rightarrow x \\ge -2$.",
                solution: "$x \\in [-2; 3)$.",
                correct: "$[-2; 3)$",
                options: ["$[-2; 3)$", "$(-2; 3]$", "$[-2; 3]$", "$(-3; 2]$"]
            },
            {
                id: 14,
                text: "Найдите сумму целых решений системы: $\\begin{cases} x \\ge -1 \\\\ x < 3 \\end{cases}$",
                hint: "Целые решения: -1, 0, 1, 2. Сложите их.",
                solution: "$-1 + 0 + 1 + 2 = 2$.",
                correct: "2",
                options: ["2", "3", "0", "5"]
            },
            {
                id: 15,
                text: "Решите систему: $\\begin{cases} x/2 < 0 \\\\ 2x + 6 > 0 \\end{cases}$",
                hint: "$x < 0$ и $2x > -6 \\Rightarrow x > -3$.",
                solution: "$x \\in (-3; 0)$.",
                correct: "$(-3; 0)$",
                options: ["$(-3; 0)$", "$[ -3; 0]$", "нет решений", "$(-\\infty; -3)$"]
            }
        ]
    }
];

if (!window.AppRegistry) window.AppRegistry = [];

systems_8_data.forEach(topic => {
    window.AppRegistry.push({
        subject: "Алгебра",
        grade: "8",
        topic_id: topic.topic_id,
        topic_name: topic.topic_name,
        fgos_code: topic.fgos_code,
        questions: topic.questions
    });
});
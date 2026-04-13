/* БАЗА ЗАДАНИЙ: Таблица значений тригонометрических функций (11 класс, ЕГЭ) */

const trig_values_11_data = [
    {
        topic_id: "trig_table_11",
        topic_name: "Таблица значений тригонометрических функций",
        fgos_code: "1.3.1", 
        questions: [
            // БЛОК 1: Базовые табличные значения (радианы)
            {
                id: 1,
                text: "Вычислите: $\\sin \\frac{\\pi}{3}$",
                hint: "Вспомните значение синуса для угла 60 градусов.",
                solution: "$\\sin \\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$.",
                correct: "$\\frac{\\sqrt{3}}{2}$",
                options: ["$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "1"]
            },
            {
                id: 2,
                text: "Найдите значение: $\\cos \\frac{5\\pi}{6}$",
                hint: "Угол находится во второй четверти. Косинус там отрицательный.",
                solution: "$\\cos \\frac{5\\pi}{6} = \\cos(\\pi - \\frac{\\pi}{6}) = -\\cos \\frac{\\pi}{6} = -\\frac{\\sqrt{3}}{2}$.",
                correct: "$-\\frac{\\sqrt{3}}{2}$",
                options: ["$-\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{1}{2}$", "$-\\frac{\\sqrt{2}}{2}$"]
            },
            {
                id: 3,
                text: "Вычислите: $\\text{tg} \\frac{\\pi}{4}$",
                hint: "Тангенс 45 градусов всегда равен единице.",
                solution: "$\\text{tg} \\frac{\\pi}{4} = 1$.",
                correct: "1",
                options: ["1", "0", "$\\sqrt{3}$", "$\\frac{\\sqrt{3}}{3}$"]
            },
            {
                id: 4,
                text: "Найдите значение: $\\sin \\frac{3\\pi}{2}$",
                hint: "Угол соответствует нижней точке на единичной окружности.",
                solution: "Ордината точки в $270^\\circ$ равна $-1$.",
                correct: "-1",
                options: ["-1", "0", "1", "не существует"]
            },

            // БЛОК 2: Отрицательные углы (Четность/Нечетность)
            {
                id: 5,
                text: "Вычислите: $\\cos(-\\frac{\\pi}{4})$",
                hint: "Косинус — четная функция: $\\cos(-x) = \\cos x$.",
                solution: "$\\cos(-\\frac{\\pi}{4}) = \\cos \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$.",
                correct: "$\\frac{\\sqrt{2}}{2}$",
                options: ["$\\frac{\\sqrt{2}}{2}$", "$-\\frac{\\sqrt{2}}{2}$", "$\\frac{1}{2}$", "$-\\frac{1}{2}$"]
            },
            {
                id: 6,
                text: "Найдите значение: $\\sin(-\\frac{\\pi}{6})$",
                hint: "Синус — нечетная функция: $\\sin(-x) = -\\sin x$.",
                solution: "$\\sin(-\\frac{\\pi}{6}) = -\\sin \\frac{\\pi}{6} = -\\frac{1}{2} = -0,5$.",
                correct: "-0,5",
                options: ["-0,5", "0,5", "$-\\frac{\\sqrt{3}}{2}$", "0"]
            },
            {
                id: 7,
                text: "Вычислите: $\\text{tg}(-\\frac{\\pi}{3})$",
                hint: "Тангенс — нечетная функция: $\\text{tg}(-x) = -\\text{tg} x$.",
                solution: "$-\\text{tg} \\frac{\\pi}{3} = -\\sqrt{3}$.",
                correct: "$-\\sqrt{3}$",
                options: ["$-\\sqrt{3}$", "$\\sqrt{3}$", "$-\\frac{\\sqrt{3}}{3}$", "-1"]
            },

            // БЛОК 3: Комбинированные выражения (Тип ЕГЭ)
            {
                id: 8,
                text: "Найдите значение выражения: $4\\sqrt{3} \\cos \\frac{\\pi}{6}$",
                hint: "Подставьте табличное значение косинуса и сократите дроби.",
                solution: "$4\\sqrt{3} \\cdot \\frac{\\sqrt{3}}{2} = 2 \\cdot 3 = 6$.",
                correct: "6",
                options: ["6", "$2\\sqrt{3}$", "12", "3"]
            },
            {
                id: 9,
                text: "Вычислите: $2\\sin \\frac{\\pi}{4} \\cdot \\cos \\frac{\\pi}{4}$",
                hint: "Используйте значения $\\frac{\\sqrt{2}}{2}$ или формулу двойного угла.",
                solution: "$2 \\cdot \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{2}}{2} = 2 \\cdot \\frac{2}{4} = 1$.",
                correct: "1",
                options: ["1", "$\\sqrt{2}$", "0,5", "2"]
            },
            {
                id: 10,
                text: "Найдите значение: $\\sin^2 \\frac{\\pi}{3} + \\cos^2 \\frac{\\pi}{3}$",
                hint: "Вспомните основное тригонометрическое тождество.",
                solution: "Для любого угла $\\sin^2 x + \\cos^2 x = 1$.",
                correct: "1",
                options: ["1", "0,5", "1,5", "0,75"]
            },
            {
                id: 11,
                text: "Вычислите: $\\sqrt{2} \\cos(-\\frac{\\pi}{4}) + \\sin(-\\frac{\\pi}{2})$",
                hint: "Учтите знаки функций от отрицательных углов.",
                solution: "$\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} + (-1) = 1 - 1 = 0$.",
                correct: "0",
                options: ["0", "1", "-1", "2"]
            },
            {
                id: 12,
                text: "Найдите значение: $12 \\text{tg} \\frac{\\pi}{4} \\cdot \\sin \\frac{\\pi}{6}$",
                hint: "Тангенс $\\pi/4$ равен 1, синус $\\pi/6$ равен 0,5.",
                solution: "$12 \\cdot 1 \\cdot 0,5 = 6$.",
                correct: "6",
                options: ["6", "12", "3", "4"]
            },
            {
                id: 13,
                text: "Вычислите: $\\cos \\pi - \\sin \\frac{3\\pi}{2}$",
                hint: "Косинус 180 градусов равен -1, синус 270 градусов равен -1.",
                solution: "$-1 - (-1) = -1 + 1 = 0$.",
                correct: "0",
                options: ["0", "-2", "1", "-1"]
            },
            {
                id: 14,
                text: "Найдите значение: $\\text{tg}^2 \\frac{\\pi}{6}$",
                hint: "Возведите $\\frac{\\sqrt{3}}{3}$ в квадрат.",
                solution: "$(\\frac{\\sqrt{3}}{3})^2 = \\frac{3}{9} = \\frac{1}{3}$.",
                correct: "$\\frac{1}{3}$",
                options: ["$\\frac{1}{3}$", "3", "$\\frac{1}{9}$", "$\\frac{\\sqrt{3}}{3}$"]
            },
            {
                id: 15,
                text: "Вычислите: $8 \\sin(-\\frac{5\\pi}{6})$",
                hint: "$\\sin(-x) = -\\sin x$. Угол $5\\pi/6$ во второй четверти, синус там положителен.",
                solution: "$-8 \\cdot \\sin \\frac{5\\pi}{6} = -8 \\cdot 0,5 = -4$.",
                correct: "-4",
                options: ["-4", "4", "$-4\\sqrt{3}$", "0"]
            },
            {
                id: 16,
                text: "Найдите значение: $\\cos \\frac{2\\pi}{3}$",
                hint: "Угол $120^\\circ$. Косинус во второй четверти отрицателен.",
                solution: "$\\cos(120^\\circ) = -0,5$.",
                correct: "-0,5",
                options: ["-0,5", "0,5", "$-\\frac{\\sqrt{3}}{2}$", "-1"]
            },
            {
                id: 17,
                text: "Вычислите: $\\frac{\\sqrt{3}}{\\text{tg} \\frac{\\pi}{3}}$",
                hint: "Чему равен тангенс 60 градусов?",
                solution: "$\\frac{\\sqrt{3}}{\\sqrt{3}} = 1$.",
                correct: "1",
                options: ["1", "3", "$\\sqrt{3}$", "0"]
            },
            {
                id: 18,
                text: "Чему равен $\\cos(-\\pi)$?",
                hint: "Косинус — функция четная, а точка $-\\pi$ совпадает с $\\pi$.",
                solution: "$\\cos(-\\pi) = \\cos \\pi = -1$.",
                correct: "-1",
                options: ["-1", "1", "0", "не существует"]
            },
            {
                id: 19,
                text: "Вычислите: $2\\cos \\frac{\\pi}{3} + 4\\sin \\frac{\\pi}{6}$",
                hint: "Оба значения равны 0,5.",
                solution: "$2 \\cdot 0,5 + 4 \\cdot 0,5 = 1 + 2 = 3$.",
                correct: "3",
                options: ["3", "2", "4", "1"]
            },
            {
                id: 20,
                text: "Найдите значение выражения: $\\text{tg} \\frac{\\pi}{4} - \\sin 0 + \\cos \\frac{\\pi}{2}$",
                hint: "Подставьте значения для каждого слагаемого.",
                solution: "$1 - 0 + 0 = 1$.",
                correct: "1",
                options: ["1", "0", "2", "-1"]
            }
        ]
    }
];

// Регистрация в глобальном реестре приложения
if (!window.AppRegistry) window.AppRegistry = [];

trig_values_11_data.forEach(topic => {
    window.AppRegistry.push({
        subject: "Алгебра",
        grade: "11",
        topic_id: topic.topic_id,
        topic_name: topic.topic_name,
        fgos_code: topic.fgos_code,
        questions: topic.questions
    });
});
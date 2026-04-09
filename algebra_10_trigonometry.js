/* БАЗА ЗАДАНИЙ: Тригонометрические уравнения 10 класс 
   Используется нотация LaTeX для MathJax
*/

const trigonometry_10_data = [
    {
        topic_id: "basic_trig_equations",
        topic_name: "Простейшие тригонометрические уравнения",
        fgos_code: "1.3.1", 
        questions: [
            {
                id: 1,
                text: "Решите уравнение: $\\sin x = 1$",
                hint: "Это частный случай. Точка находится в самой верхней части единичной окружности.",
                solution: "$x = \\frac{\\pi}{2} + 2\\pi n, n \\in \\mathbb{Z}$",
                correct: "$\\frac{\\pi}{2} + 2\\pi n$",
                options: ["$\\frac{\\pi}{2} + 2\\pi n$", "$\\pi + 2\\pi n$", "$\\frac{\\pi}{2} + \\pi n$", "$2\\pi n$"]
            },
            {
                id: 2,
                text: "Решите уравнение: $\\cos x = 0$",
                hint: "Это частный случай. Косинус равен нулю на вертикальной оси.",
                solution: "$x = \\frac{\\pi}{2} + \\pi n, n \\in \\mathbb{Z}$",
                correct: "$\\frac{\\pi}{2} + \\pi n$",
                options: ["$\\frac{\\pi}{2} + \\pi n$", "$\\frac{\\pi}{2} + 2\\pi n$", "$\\pi n$", "$\\pi + \\pi n$"]
            },
            {
                id: 3,
                text: "Решите уравнение: $\\sin x = 0$",
                hint: "Синус равен нулю на горизонтальной оси (в точках $0$ и $\\pi$).",
                solution: "$x = \\pi n, n \\in \\mathbb{Z}$",
                correct: "$\\pi n$",
                options: ["$\\pi n$", "$2\\pi n$", "$\\frac{\\pi}{2} + \\pi n$", "$\\pi + 2\\pi n$"]
            },
            {
                id: 4,
                text: "Решите уравнение: $\\cos x = 1$",
                hint: "Это частный случай. Точка находится в крайней правой части единичной окружности.",
                solution: "$x = 2\\pi n, n \\in \\mathbb{Z}$",
                correct: "$2\\pi n$",
                options: ["$2\\pi n$", "$\\pi n$", "$\\frac{\\pi}{2} + 2\\pi n$", "$\\pi + 2\\pi n$"]
            },
            {
                id: 5,
                text: "Решите уравнение: $\\tan x = 1$",
                hint: "Вспомните, при каком угле тангенс равен 1. Период тангенса — $\\pi n$.",
                solution: "$x = \\arctan(1) + \\pi n = \\frac{\\pi}{4} + \\pi n, n \\in \\mathbb{Z}$",
                correct: "$\\frac{\\pi}{4} + \\pi n$",
                options: ["$\\frac{\\pi}{4} + \\pi n$", "$\\frac{\\pi}{4} + 2\\pi n$", "$\\frac{\\pi}{2} + \\pi n$", "$\\pm\\frac{\\pi}{4} + \\pi n$"]
            },
            {
                id: 6,
                text: "Решите уравнение: $\\cos x = \\frac{1}{2}$",
                hint: "Общая формула: $x = \\pm \\arccos(a) + 2\\pi n$.",
                solution: "$x = \\pm \\frac{\\pi}{3} + 2\\pi n, n \\in \\mathbb{Z}$",
                correct: "$\\pm\\frac{\\pi}{3} + 2\\pi n$",
                options: ["$\\pm\\frac{\\pi}{3} + 2\\pi n$", "$\\pm\\frac{\\pi}{6} + 2\\pi n$", "$\\frac{\\pi}{3} + \\pi n$", "$\\pm\\frac{\\pi}{3} + \\pi n$"]
            },
            {
                id: 7,
                text: "Решите уравнение: $\\sin x = \\frac{\\sqrt{3}}{2}$",
                hint: "Используйте формулу: $x = (-1)^n \\arcsin(a) + \\pi n$.",
                solution: "$x = (-1)^n \\frac{\\pi}{3} + \\pi n, n \\in \\mathbb{Z}$",
                correct: "$(-1)^n \\frac{\\pi}{3} + \\pi n$",
                options: ["$(-1)^n \\frac{\\pi}{3} + \\pi n$", "$(-1)^n \\frac{\\pi}{6} + \\pi n$", "$\\pm\\frac{\\pi}{3} + 2\\pi n$", "$\\frac{\\pi}{3} + 2\\pi n$"]
            },
            {
                id: 8,
                text: "Решите уравнение: $\\cos x = -1$",
                hint: "Точка находится в крайней левой части единичной окружности.",
                solution: "$x = \\pi + 2\\pi n, n \\in \\mathbb{Z}$",
                correct: "$\\pi + 2\\pi n$",
                options: ["$\\pi + 2\\pi n$", "$2\\pi n$", "$\\pi n$", "$-\\frac{\\pi}{2} + 2\\pi n$"]
            },
            {
                id: 9,
                text: "Решите уравнение: $\\tan x = \\sqrt{3}$",
                hint: "Тангенс равен $\\sqrt{3}$ при угле $60^\\circ$.",
                solution: "$x = \\frac{\\pi}{3} + \\pi n, n \\in \\mathbb{Z}$",
                correct: "$\\frac{\\pi}{3} + \\pi n$",
                options: ["$\\frac{\\pi}{3} + \\pi n$", "$\\frac{\\pi}{6} + \\pi n$", "$\\frac{\\pi}{3} + 2\\pi n$", "$\\pm\\frac{\\pi}{3} + \\pi n$"]
            },
            {
                id: 10,
                text: "Решите уравнение: $\\sin x = -\\frac{1}{2}$",
                hint: "Помните, что $\\arcsin(-a) = -\\arcsin(a)$.",
                solution: "$x = (-1)^n (-\\frac{\\pi}{6}) + \\pi n = (-1)^{n+1} \\frac{\\pi}{6} + \\pi n$",
                correct: "$(-1)^{n+1} \\frac{\\pi}{6} + \\pi n$",
                options: ["$(-1)^{n+1} \\frac{\\pi}{6} + \\pi n$", "$(-1)^n \\frac{\\pi}{6} + \\pi n$", "$\\pm\\frac{5\\pi}{6} + 2\\pi n$", "$-\\frac{\\pi}{6} + 2\\pi n$"]
            }
        ]
    }
];

if (!window.AppRegistry) window.AppRegistry = [];

trigonometry_10_data.forEach(topic => {
    window.AppRegistry.push({
        subject: "Алгебра",
        grade: "10",
        topic_id: topic.topic_id,
        topic_name: topic.topic_name,
        fgos_code: topic.fgos_code,
        questions: topic.questions
    });
});
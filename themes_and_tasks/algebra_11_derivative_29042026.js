const derivative_11_data = [
    {
        topic_id: "elementary_derivatives_11",
        topic_name: "Производная элементарных функций",
        fgos_code: "1.5.1", 
        questions: [
            // БЛОК 1: Табличные значения и константы (7 заданий)
            {
                id: 1,
                text: "Найдите производную функции: $f(x) = 5$",
                hint: "Производная любого постоянного числа (константы) всегда равна нулю.",
                solution: "$f'(x) = 0$.",
                correct: "0",
                options: ["0", "5", "$5x$", "1"]
            },
            {
                id: 2,
                text: "Найдите производную функции: $f(x) = x$",
                hint: "Используйте формулу $(x^n)' = n \\cdot x^{n-1}$ при $n=1$.",
                solution: "$f'(x) = 1 \\cdot x^0 = 1$.",
                correct: "1",
                options: ["1", "0", "$x$", "$x^2$"]
            },
            {
                id: 3,
                text: "Чему равна производная функции $f(x) = x^7$?",
                hint: "Показатель степени выносится вперед как множитель, а сама степень уменьшается на 1.",
                solution: "$f'(x) = 7x^6$.",
                correct: "$7x^6$",
                options: ["$7x^6$", "$6x^7$", "$7x^8$", "$x^6$"]
            },
            {
                id: 4,
                text: "Найдите производную функции: $f(x) = \\sin x$",
                hint: "Это табличное значение. Производная синуса — это косинус.",
                solution: "$f'(x) = \\cos x$.",
                correct: "$\\cos x$",
                options: ["$\\cos x$", "$-\\cos x$", "$\\sin x$", "$-\\sin x$"]
            },
            {
                id: 5,
                text: "Найдите производную функции: $f(x) = \\cos x$",
                hint: "Внимание! Производная косинуса берется со знаком минус.",
                solution: "$f'(x) = -\\sin x$.",
                correct: "$-\\sin x$",
                options: ["$-\\sin x$", "$\\sin x$", "$\\cos x$", "$-\\cos x$"]
            },
            {
                id: 6,
                text: "Чему равна производная функции $f(x) = e^x$?",
                hint: "Экспонента — уникальная функция, производная которой равна ей самой.",
                solution: "$f'(x) = e^x$.",
                correct: "$e^x$",
                options: ["$e^x$", "$xe^{x-1}$", "$1/e^x$", "$0$"]
            },
            {
                id: 7,
                text: "Найдите производную: $f(x) = \\ln x$",
                hint: "Производная натурального логарифма — это единица, деленная на аргумент.",
                solution: "$f'(x) = 1/x$.",
                correct: "$1/x$",
                options: ["$1/x$", "$e^x$", "$x$", "$1/x^2$"]
            },

            // БЛОК 2: Линейные комбинации и множители (10 заданий)
            {
                id: 8,
                text: "Найдите производную функции: $f(x) = 4x^3$",
                hint: "Константа 4 выносится за знак производной: $4 \\cdot (x^3)'$.",
                solution: "$4 \\cdot 3x^2 = 12x^2$.",
                correct: "$12x^2$",
                options: ["$12x^2$", "$7x^2$", "$12x^3$", "$4x^2$"]
            },
            {
                id: 9,
                text: "Найдите производную функции: $f(x) = x^2 + 5x$",
                hint: "Производная суммы равна сумме производных каждого слагаемого.",
                solution: "$(x^2)' + (5x)' = 2x + 5$.",
                correct: "$2x + 5$",
                options: ["$2x + 5$", "$2x + 1$", "$x^2 + 5$", "$7x$"]
            },
            {
                id: 10,
                text: "Найдите производную функции: $f(x) = \\sqrt{x}$",
                hint: "Представьте корень как $x^{1/2}$ или вспомните табличную формулу $1/(2\\sqrt{x})$.",
                solution: "$f'(x) = \\frac{1}{2\\sqrt{x}}$.",
                correct: "$\\frac{1}{2\\sqrt{x}}$",
                options: ["$\\frac{1}{2\\sqrt{x}}$", "$\\frac{1}{\\sqrt{x}}$", "$\\sqrt{x}$", "$2\\sqrt{x}$"]
            },
            {
                id: 11,
                text: "Найдите производную функции: $f(x) = -3\\cos x + 2$",
                hint: "Производная константы 2 равна 0, а $(-3\\cos x)' = -3 \\cdot (-\\sin x)$.",
                solution: "$3\\sin x$.",
                correct: "$3\\sin x$",
                options: ["$3\\sin x$", "$-3\\sin x$", "$3\\cos x$", "$3\\sin x + 2$"]
            },
            {
                id: 12,
                text: "Вычислите $f'(x)$, если $f(x) = \\frac{1}{x}$",
                hint: "Представьте как $x^{-1}$ или используйте формулу $-1/x^2$.",
                solution: "$f'(x) = -x^{-2} = -1/x^2$.",
                correct: "$-\\frac{1}{x^2}$",
                options: ["$-\\frac{1}{x^2}$", "$\\frac{1}{x^2}$", "$\\ln x$", "$1$"]
            },
            {
                id: 13,
                text: "Найдите производную функции: $f(x) = 2x^5 - 4x^3 + 10$",
                hint: "Продифференцируйте каждое слагаемое отдельно.",
                solution: "$10x^4 - 12x^2$.",
                correct: "$10x^4 - 12x^2$",
                options: ["$10x^4 - 12x^2$", "$10x^4 - 12x^2 + 10$", "$5x^4 - 3x^2$", "$2x^4 - 4x^2$"]
            },
            {
                id: 14,
                text: "Найдите производную функции: $f(x) = 3\\sin x + 4\\ln x$",
                hint: "Примените правила для синуса и логарифма.",
                solution: "$3\\cos x + 4/x$.",
                correct: "$3\\cos x + \\frac{4}{x}$",
                options: ["$3\\cos x + \\frac{4}{x}$", "$3\\cos x + 4x$", "$-3\\cos x + \\frac{4}{x}$", "$3\\sin x + \\frac{1}{x}$"]
            },
            {
                id: 15,
                text: "Чему равно значение производной функции $f(x) = x^2$ в точке $x = 3$?",
                hint: "Сначала найдите $f'(x)$, а затем подставьте вместо $x$ число 3.",
                solution: "$f'(x) = 2x \\Rightarrow f'(3) = 2 \\cdot 3 = 6$.",
                correct: "6",
                options: ["6", "9", "5", "3"]
            },
            {
                id: 16,
                text: "Найдите производную функции: $f(x) = 10^x$",
                hint: "Формула для показательной функции: $(a^x)' = a^x \\ln a$.",
                solution: "$10^x \\ln 10$.",
                correct: "$10^x \\ln 10$",
                options: ["$10^x \\ln 10$", "$x \\cdot 10^{x-1}$", "$10^x$", "$10^x / \\ln 10$"]
            },
            {
                id: 17,
                text: "Найдите производную функции: $f(x) = \\text{tg } x$",
                hint: "Производная тангенса равна единице, деленной на квадрат косинуса.",
                solution: "$1/\\cos^2 x$.",
                correct: "$\\frac{1}{\\cos^2 x}$",
                options: ["$\\frac{1}{\\cos^2 x}$", "$\\frac{1}{\\sin^2 x}$", "$\\text{ctg } x$", "$-\\frac{1}{\\cos^2 x}$"]
            },

            // БЛОК 3: Произведение и частное (8 заданий)
            {
                id: 18,
                text: "Найдите производную функции: $f(x) = x \\cdot e^x$",
                hint: "Используйте правило произведения: $(uv)' = u'v + uv'$.",
                solution: "$1 \\cdot e^x + x \\cdot e^x = e^x(1 + x)$.",
                correct: "$e^x(1 + x)$",
                options: ["$e^x(1 + x)$", "$e^x$", "$x e^x$", "$e^x + 1$"]
            },
            {
                id: 19,
                text: "Найдите производную функции: $f(x) = x^2 \\sin x$",
                hint: "Примените правило $(uv)'$: $(x^2)' \\sin x + x^2 (\\sin x)'$.",
                solution: "$2x \\sin x + x^2 \\cos x$.",
                correct: "$2x \\sin x + x^2 \\cos x$",
                options: ["$2x \\sin x + x^2 \\cos x$", "$2x \\cos x$", "$2x \\sin x - x^2 \\cos x$", "$x^2 \\sin x + 2x$"]
            },
            {
                id: 20,
                text: "Найдите производную частного: $f(x) = \\frac{x}{e^x}$",
                hint: "Используйте формулу $(\\frac{u}{v})' = \\frac{u'v - uv'}{v^2}$.",
                solution: "$\\frac{1 \\cdot e^x - x \\cdot e^x}{(e^x)^2} = \\frac{e^x(1-x)}{e^{2x}} = \\frac{1-x}{e^x}$.",
                correct: "$\\frac{1 - x}{e^x}$",
                options: ["$\\frac{1 - x}{e^x}$", "$\\frac{1 + x}{e^x}$", "$\\frac{x - 1}{e^x}$", "$1/e^x$"]
            },
            {
                id: 21,
                text: "Чему равен угловой коэффициент касательной к графику $y = x^3$ в точке $x_0 = 1$?",
                hint: "Угловой коэффициент $k$ равен значению производной в данной точке: $f'(x_0)$.",
                solution: "$y' = 3x^2 \\Rightarrow y'(1) = 3 \\cdot 1^2 = 3$.",
                correct: "3",
                options: ["3", "1", "0", "2"]
            },
            {
                id: 22,
                text: "Найдите производную функции: $f(x) = 5\\sqrt[3]{x}$",
                hint: "Представьте как $5x^{1/3}$ и используйте степенную формулу.",
                solution: "$5 \\cdot \\frac{1}{3} x^{-2/3} = \\frac{5}{3\\sqrt[3]{x^2}}$.",
                correct: "$\\frac{5}{3\\sqrt[3]{x^2}}$",
                options: ["$\\frac{5}{3\\sqrt[3]{x^2}}$", "$\\frac{5}{3}x^2$", "$15x^2$", "$\\frac{1}{3\\sqrt[3]{x^2}}$"]
            },
            {
                id: 23,
                text: "Найдите производную функции: $f(x) = \\frac{\\sin x}{x}$",
                hint: "Используйте правило частного: $(\\frac{\\sin x}{x})' = \\frac{(\\sin x)'x - \\sin x(x)'}{x^2}$.",
                solution: "$\\frac{x\\cos x - \\sin x}{x^2}$.",
                correct: "$\\frac{x\\cos x - \\sin x}{x^2}$",
                options: ["$\\frac{x\\cos x - \\sin x}{x^2}$", "$\\frac{\\cos x}{1}$", "$\\frac{\\sin x - x\\cos x}{x^2}$", "$\\frac{x\\cos x + \\sin x}{x^2}$"]
            },
            {
                id: 24,
                text: "Найдите производную: $f(x) = \\ln x + \\cos x$",
                hint: "Дифференцируйте каждое слагаемое.",
                solution: "$1/x - \\sin x$.",
                correct: "$\\frac{1}{x} - \\sin x$",
                options: ["$\\frac{1}{x} - \\sin x$", "$\\frac{1}{x} + \\sin x$", "$e^x - \\sin x$", "$\\ln x - \\sin x$"]
            },
            {
                id: 25,
                text: "Найдите производную функции $f(x) = \\frac{3}{x^4}$",
                hint: "Представьте как $3x^{-4}$ и примените формулу степени.",
                solution: "$3 \\cdot (-4)x^{-5} = -12/x^5$.",
                correct: "$-\\frac{12}{x^5}$",
                options: ["$-\\frac{12}{x^5}$", "$\\frac{12}{x^5}$", "$-\\frac{12}{x^3}$", "$-\\frac{3}{x^5}$"]
            }
        ]
    }
];

// Регистрация в глобальном реестре приложения
if (!window.AppRegistry) window.AppRegistry = [];

derivative_11_data.forEach(topic => {
    window.AppRegistry.push({
        subject: "Алгебра",
        grade: "11",
        topic_id: topic.topic_id,
        topic_name: topic.topic_name,
        fgos_code: topic.fgos_code,
        questions: topic.questions
    });
});

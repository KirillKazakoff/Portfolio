const eng = {
    nav: ['main', 'about', 'skills', 'portfollio', 'contacts'],
    greeting: {
        title: 'Cat in bread',
        myname: 'Kirill Kazakov',
        myinfo: 'Magadan 22 y.o',
    },
    about: {
        title: 'about',
        text: "I'm a junior frontend developer... Love coding so much... and I'm a rapper as well, bruhhh! \n\n I've graduated the course on Netology on program “Frontend-developer from scratch” \n\n Generally speaking, I'm great person... \n Employ me, please!\"",
    },
    skills: {
        title: 'skills',
        list: [
            'JavaScript, knowledge of basic OOP principles',
            'TypeScript',
            'React, React-Router',
            'Redux',
            'HTTP/HTTPS, WebSocket, hands-on experience relating to interaction with server API and Node.js. Experienced with ServiceWorker, WebWorker technologies',
            'HTML, CSS, SCSS, BEM-metodology, having experience with CSS-IN-JS',
            'GIT',
            'Webpack',
            'Unit, e2e-tests',
        ],
    },
    portfolio: {
        title: 'portfolio',
        list: [
            {
                main: 'Main Project',
                title: 'Railway ticket booking system',
                desc: 'React-Redux + TS (only PC screen)',
            },
            {
                title: 'WhatsApp Notes',
                desc: 'JS-Node.js + WebWorker, ServiceWorker (only PC screen)',
            },
            {
                title: 'Angular CRUD',
                desc: 'Project on Angular with Template Driven Forms use (only PC screen)',
            },
            { title: 'Online-chat', desc: 'WebSocket (only PC screen)' },
            { title: 'Card recognizer', desc: 'Unit and e2e-tests (only PC screen)' },
            { title: 'Site-blog', desc: 'HTML-CSS (adaptive)' },
        ],
    },
    contacts: {
        title: 'contacts',
        desc: 'Want to know more or just chat? \n You are welcome!',
    },
    footer: {
        desc: 'Check out my music! Like me on VK and SoundCloud!',
    },
};

type ContentT = typeof eng;

const ru: ContentT = {
    nav: ['главная', 'о себе', 'навыки', 'портфолио', 'контакты'],
    greeting: {
        title: 'Кот в хлебе',
        myname: 'Кирилл Казаков',
        myinfo: 'Магадан, 22 года',
    },
    about: {
        title: 'о себе',
        text: 'Я начинающий фронтенд-разработчик... \n Люблю писать код... и еще рэп! \n\n Закончил курс на Нетологии по программе “Frontend-разработчик с нуля”... \n\n А вообще, человек я неплохой... \n Возьмите меня на работу!',
    },
    skills: {
        title: 'навыки',
        list: [
            'JavaScript, понимание базовых принципов ООП',
            'TypeScript',
            'React, React-Router',
            'Redux',
            'Протокол HTTP/HTTPS, WebSocket, опыт взаиодействия с серверным API, Node.js. Ознакомлен с воркерами (ServiceWorker, WebWorker)',
            'HTML, CSS, SCSS, БЭМ, опыт работы с CSS-IN-JS',
            'GIT',
            'Webpack',
            'Unit, e2e-тесты',
        ],
    },
    portfolio: {
        title: 'портфолио',
        list: [
            {
                main: 'Главный Проект',
                title: 'Система бронирования ЖД билетов',
                desc: 'React-Redux + TS (только для ПК мониторов)',
            },
            {
                title: 'WhatsApp Notes',
                desc: 'JS-Node.js + WebWorker, ServiceWorker (только для ПК мониторов)',
            },
            {
                title: 'Angular CRUD',
                desc: 'Проект на Angular с использованием Template Driven Forms (только для ПК мониторов)',
            },
            { title: 'Онлайн-чат', desc: 'WebSocket (только для ПК-мониторов)' },
            {
                title: 'Card recognizer',
                desc: 'Unit и e2e-tests (только для ПК-мониторов)',
            },
            {
                title: 'Сайт-блог',
                desc: 'HTML-CSS (адаптивная верстка)',
            },
        ],
    },
    contacts: {
        title: 'контакты',
        desc: 'Если хотите со мной связаться,\n то пишите сюда...',
    },
    footer: {
        desc: 'Поддержите начинающего авангард-исполнителя своим вниманием... \n\n Слушайте рифмы, ставьте лайки !',
    },
};

export const myDictionary: { [key: string]: ContentT } = {
    eng,
    ru,
};

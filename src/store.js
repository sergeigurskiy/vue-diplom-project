import {createStore} from 'vuex'
import {openDrop, redirect} from './helpers/linksSupport';

export default createStore({
    state(){
        return {
            isOpen: false,
            navigateData:[
                {href:null, title:'ГЛАВНАЯ', id:1, to:"/primary", sublinks:null},
                {href:null, title:'ОСНОВНЫЕ НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ', id:2, to:"/osnovnye_napravleniya_deyatelnosti",  sublinks:null},
                {href:null, title:'СОТРУДНИКИ', id:3, to:"/sotrudniki",  sublinks:null},
                {isOpenDrop:false, href:null, title:'СТАНДАРТИЗАЦИЯ', id:4, to:null, sublinks:[
                    {title:'ФОНД ТНПА', href:null, to:"/fond_tnpa",id:1},
                    {title:'ПЕРИОДИЧЕСКИЕ ИЗДАНИЯ', href:null, to:"/periodicheskie_izdaniya",id:2},
                    {title:'ДОКУМЕНТЫ', href:null, to:null, id:3},
                    {title:'СТП 05-2011 ДИПЛОМНЫЕ РАБОТЫ', id:4, href:"https://drive.google.com/file/d/1avO2sDitY7aEGpYXYA3gVNZolEEIIfga/preview", to:null},
                    {title:'СТП 04-2011 КУРСОВЫЕ РАБОТЫ', id:5, href:"https://drive.google.com/file/d/1jJqlo5SossLtExTI6xkYjrpnGq5WE0m-/preview", to:null},
                ]},
                {isOpenDrop:false, href:null, title:'система МЕНЕДЖМЕНТа КАЧЕСТВА', id:5, to:null, sublinks:[
                    {id:1,title:"О СМК университета", href:'https://drive.google.com/file/d/19j8zVizUB-pfnl1-WWhzLUNHDx2eo4oC/preview', to:null},
                    {id:2,title:"Документы СМК университета", href:'https://www.gsu.by/ru/quality-management-system',  to:null},
                    {id:3,title:"Анкетирование. Удовлетворенность потребителей", href:'https://drive.google.com/file/d/1yHR4O8bCTCce90pb7tanwpdVqvpwSodo/preview',  to:null},
                    {id:4,title:"сертификация СМК", href:'https://drive.google.com/file/d/13DsYpjAryZg9gBX6N0Ae3zwjSQzW6FYS/preview',  to:null},
                ]},
                {isOpenDrop:false, href:null, title:'МЕТРОЛОГИЧЕСКОЕ ОБЕСПЕЧЕНИЕ', id:6, to:null, sublinks:[
                    {id:1,title:"нормативные документы", href:null, to:null},
                    {id:2,title:"перечень СИ ГГУ", href:null, to:null},
                    {id:3,title:"Метрологическая  оценка СИ", href:null, to:null},
                    {id:4,title:"метрологические проработки НИР", href:null, to:null},
                ]},
                {isOpenDrop:false, href:null, title:'ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ ', id:7, to:null, sublinks:[
                    {id:1,title:"Национальное регулирование", href:null, to:null},
                    {id:2,title:"Локальные НПА", href:null, to:'/zashchita_personal_dannykh'},
                    {id:3,title:"Информационная безопасность", href:null, to:null},
                    {id:4,title:"Внутренний контроль", href:null, to:null},
                ]},
            ],
            dataLinks:{
                standardization:{
                    mapName:'standardization',
                    title:'Стандартизация',
                    data:[
                        {sublinks:null, title:'ФОНД ТНПА', href:null, to:"/fond_tnpa",id:1},
                        {sublinks:null, title:'ПЕРИОДИЧЕСКИЕ ИЗДАНИЯ', href:null, to:"/periodicheskie_izdaniya",id:2},
                        {sublinks:null, title:'ДОКУМЕНТЫ', href:null, to:null, id:3},
                        {sublinks:null, title:'СТП 05-2011 ДИПЛОМНЫЕ РАБОТЫ', id:4, href:"https://drive.google.com/file/d/1avO2sDitY7aEGpYXYA3gVNZolEEIIfga/preview", to:null},
                        {sublinks:null, title:'СТП 04-2011 КУРСОВЫЕ РАБОТЫ', id:5, href:"https://drive.google.com/file/d/1jJqlo5SossLtExTI6xkYjrpnGq5WE0m-/preview", to:null},
                    ]
                },
                qualManagement:{
                    mapName:'qualManagement',
                    title:'Система менеджмента качества',
                    data:[
                        {sublinks:null, id:1,title:"О СМК университета", href:'https://drive.google.com/file/d/19j8zVizUB-pfnl1-WWhzLUNHDx2eo4oC/preview', to:null},
                        {sublinks:null, id:2,title:"Документы СМК университета", href:'https://www.gsu.by/ru/quality-management-system',  to:null},
                        {sublinks:null, id:3,title:"Анкетирование. Удовлетворенность потребителей", href:'https://drive.google.com/file/d/1yHR4O8bCTCce90pb7tanwpdVqvpwSodo/preview',  to:null},
                        {sublinks:null, id:4,title:"сертификация СМК", href:'https://drive.google.com/file/d/13DsYpjAryZg9gBX6N0Ae3zwjSQzW6FYS/preview',  to:null},
                    ]
                },
                metrologicSupport:{
                    mapName:'metrologicSupport',
                    title:'Метрологическое обеспечение',
                    data:[
                        {sublinks:null, id:1,title:"нормативные документы", href:'https://drive.google.com/file/d/1HSooShMZxY5t3f4LqOk_L_E5jDbuAybu/preview', to:null},
                        {sublinks:null, id:2,title:"перечень СИ ГГУ", href:null, to:null},
                        {sublinks:null, id:3,title:"Метрологическая оценка СИ", href:null, to:null},
                        {sublinks:null, id:4,title:"образец акта метрологического обеспечения и проработки НИР", href:"https://drive.google.com/file/d/1ZveAOZ6F3lJwHbDBlXF9tfGtX3vZNHPX/preview", to:null},
                    ]
                },
                dataProtection:{
                    mapName:'dataProtection',
                    title:'Защита персональных данных',
                    data:[
                        {sublinks:null, id:1,title:"Национальное регулирование", href:"https://drive.google.com/file/d/1HSooShMZxY5t3f4LqOk_L_E5jDbuAybu/preview", to:null},
                        {id:2, isOpenDrop:true, title:"Локальные НПА", href:null, to:null, sublinks:[
                            {id:1,title:"ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ В УЧРЕЖДЕНИИ ОБРАЗОВАНИЯ ГГУ. Скорины", href:'https://drive.google.com/file/d/1hAvoJ6pB0fR_rfrvsJN84A2acfEcD3F-/preview', to:null},
                            {id:2,title:"Приказ ЗПДн обучающихся", href:'https://drive.google.com/file/d/1A5TdbXkLOKanuJYjvdGGJTyAi_UxJV7c/preview', to:null},
                            {id:3,title:"Приказ ЗПДн сотрудников", href:'https://drive.google.com/file/d/1GqN--4K3hazxpJjZx_gCv79fiZlMb3pk/preview', to:null},
                            {id:4,title:"положение о ЗПДн ГГУ всех субъектов кроме обучающихся и абитуриентов", href:'https://drive.google.com/file/d/1TGDfj16J_o8r63hJpcGWT9hV7B2gZsKx/preview', to:null},
                            {id:5,title:"положение о ЗПДн для обучающихся и абитуриентов", href:'https://drive.google.com/file/d/1LdNtDFshweHWAJSufO1JaE-cInayvcWR/preview', to:null},
                        ]},
                        {sublinks:null, id:3,title:"Информационная безопасность", href:null, to:null},
                        {sublinks:null, id:4,title:"Внутренний контроль", href:null, to:null},
                    ]
                }
            },
            pageLinks:[
                {to:'/standartizatsiya',name:'СТАНДАРТИЗАЦИЯ'},
                {to:'/quality_menegment',name:'система МЕНЕДЖМЕНТа КАЧЕСТВА'},
                {to:'/metrologicheskoe_obespechenie',name:'МЕТРОЛОГИЧЕСКОЕ ОБЕСПЕЧЕНИЕ'},
                {to:'/zashchita_personal_dannykh',name:'ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ'}
            ],
            communicationLinks:[
                {title:'Адрес:', desc:'246028, г. Гомель, ул. Советская, 102 (учебный корпус № 5, каб. 3-6, 3-9, 3-8)'},
                {title:'Электроная почта:', desc:'aleshkevich@gsu.by'},
                {title:'Телефон:', desc:'(0232) 50-38-23'},
                {title:'Факс:', desc:'(0232) 56-30-02'},
            ],
            sevicesContent:[
                {title:'Предоставление необходимых документов, имеющихся в наличии, дляознакомления при посещении бюро'},
                {title:'Регистрация и актуализация копий ТНПА'},
                {title:'Предоставление оперативной библиографической информации о документах (о введении ТНПА, сроках действия, внесенных изменениях, пересмотре, замене и отмене и т. д.)'},
                {title:'Оказание помощи в поиске и подборе нормативно-технической документации по требуемой тематике'},
                {title:'Абонементное обслуживание'},
                {title:'Прием заявок на заказ и приобретение ТНПА'},
                {title:'Практическая помощь студентам и преподавателям в оформлении курсовых и дипломных работ, отчетов по НИР'},
            ],
            employessPersons:[
                {name:'АЛЕШКЕВИЧ Николай Александрович', place:'(к. 5, ауд. 3-6)', jobName:'Начальник'},
                {name:'МАТЬКУНОВА Татьяна Владимировна', place:'(к. 5, ауд. 3-9)', jobName:'Ведущий специалист'},
                {name:'ЛОСЕВА Ольга Валентиновна', place:'(к. 5, ауд. 3-9)', jobName:'Ведущий специалист'},
                {name:'КРАВЧЕНКО Владимир Владимирович', place:'(к. 5, ауд. 3-8)', jobName:'Ведущий инженер'},
            ]
        }
    },
    mutations:{
        openDropdown(state, {id}){
            return state.navigateData = openDrop(state.navigateData, id)
        },
        openLinks(state, {id, map}){
            state.dataLinks[map].data = openDrop(state.dataLinks[map].data, id)
        },
        redirectTo(state, {id, idLink}){
            return redirect(state.navigateData, (id - 1), idLink, null)
        },
        redirectLinks(state, {id, mapName, mainId}){
            return redirect(state.dataLinks, mapName, id, mainId)
        },
        handlerOpen(state) {
            document.body.classList.add("fixed");
            state.isOpen = !state.isOpen;
            if (!state.isOpen) {
                document.body.classList.remove("fixed");
            }
        },
        handlerClose(state) {
            document.body.classList.remove("fixed");
            state.isOpen = false;
        },
    },
    getters:{
        isOpen(state){
            return state.isOpen
        },
        navigateData(state){
            return state.navigateData
        },
        standartData(state){
            return state.dataLinks.standardization
        },
        qualitiData(state){
            return state.dataLinks.qualManagement
        },
        metrologyData(state){
            return state.dataLinks.metrologicSupport
        },
        protectionData(state){
            return state.dataLinks.dataProtection
        },
        pageCards(state){
            return state.pageLinks
        },
        communicationLinks(state){
            return state.communicationLinks
        },
        sevicesContent(state){
            return state.sevicesContent
        },
        employessPersons(state){
            return state.employessPersons
        }
    }
})
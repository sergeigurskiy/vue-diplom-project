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
                    {title:'ПЕРЕОДИЧЕСКИЕ ИЗДАНИЯ', href:null, to:"/periodicheskie_izdaniya",id:2},
                    {title:'ДОКУМЕНТЫ', href:null, to:null, id:3},
                    {title:'СТП 05-2011 ДИПЛОМНЫЕ РАБОТЫ', id:4, href:"https://drive.google.com/file/d/1avO2sDitY7aEGpYXYA3gVNZolEEIIfga/preview", to:null},
                    {title:'СТП 04-2011 КУРСОВЫЕ РАБОТЫ', id:5, href:"https://drive.google.com/file/d/1jJqlo5SossLtExTI6xkYjrpnGq5WE0m-/preview", to:null},
                ]},
                {isOpenDrop:false, href:null, title:'МЕНЕДЖМЕНТ КАЧЕСТВА', id:5, to:null, sublinks:[
                    {id:1,title:"О СМК университета", href:'https://drive.google.com/file/d/19j8zVizUB-pfnl1-WWhzLUNHDx2eo4oC/preview', to:null},
                    {id:2,title:"Документы СМК университета", href:'https://www.gsu.by/ru/quality-management-system',  to:null},
                    {id:3,title:"Анкетирование. Удовлетворенность потребителей", href:'https://drive.google.com/file/d/1yHR4O8bCTCce90pb7tanwpdVqvpwSodo/preview',  to:null},
                    {id:4,title:"сертификация СМК", href:'https://drive.google.com/file/d/13DsYpjAryZg9gBX6N0Ae3zwjSQzW6FYS/preview',  to:null},
                ]},
                {isOpenDrop:false, href:null, title:'МЕТРОЛОГИЧЕСКОЕ ОБЕСПЕЧЕНИЕ', id:6, to:null, sublinks:[
                    {id:1,title:"нормативные документы", href:null, to:null},
                    {id:2,title:"перечень СИ ГГУ", href:null, to:null},
                    {id:3,title:"Метрологические  оценки СИ", href:null, to:null},
                    {id:4,title:"метрологические проработки НИР", href:null, to:null},
                ]},
                {isOpenDrop:false, href:null, title:'ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ ', id:7, to:null, sublinks:[
                    {id:1,title:"Национальное регулирование", href:null, to:null},
                    {id:2,title:"Локальные НПА", href:null, to:null},
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
                        {sublinks:null, title:'ПЕРЕОДИЧЕСКИЕ ИЗДАНИЯ', href:null, to:"/periodicheskie_izdaniya",id:2},
                        {sublinks:null, title:'ДОКУМЕНТЫ', href:null, to:null, id:3},
                        {sublinks:null, title:'СТП 05-2011 ДИПЛОМНЫЕ РАБОТЫ', id:4, href:"https://drive.google.com/file/d/1avO2sDitY7aEGpYXYA3gVNZolEEIIfga/preview", to:null},
                        {sublinks:null, title:'СТП 04-2011 КУРСОВЫЕ РАБОТЫ', id:5, href:"https://drive.google.com/file/d/1jJqlo5SossLtExTI6xkYjrpnGq5WE0m-/preview", to:null},
                    ]
                },
                qualManagement:{
                    mapName:'qualManagement',
                    title:'Менеджмент качества',
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
                        {sublinks:null, id:1,title:"нормативные документы", href:null, to:null},
                        {sublinks:null, id:2,title:"перечень СИ ГГУ", href:null, to:null},
                        {sublinks:null, id:3,title:"Метрологические  оценки СИ", href:null, to:null},
                        {sublinks:null, id:4,title:"метрологические проработки НИР", href:null, to:null},
                    ]
                },
                dataProtection:{
                    mapName:'dataProtection',
                    title:'Защита персональных данных',
                    data:[
                        {sublinks:null, id:1,title:"Национальное регулирование", href:null, to:null},
                        {id:2, isOpenDrop:false, title:"Локальные НПА", href:null, to:null, sublinks:[
                            {id:1,title:"положение о ЗПДн ГГУ всех субъектов кроме обучающихся и абитуриентов", href:'https://drive.google.com/file/d/1TGDfj16J_o8r63hJpcGWT9hV7B2gZsKx/preview', to:null},
                            {id:2,title:"положение о ЗПДн для обучающихся и абитуриентов", href:'https://drive.google.com/file/d/1LdNtDFshweHWAJSufO1JaE-cInayvcWR/preview', to:null},
                            {id:3,title:"Приказ Положение ЗПДн обучающихся", href:'https://drive.google.com/file/d/1A5TdbXkLOKanuJYjvdGGJTyAi_UxJV7c/preview', to:null},
                            {id:4,title:"Приказ Положение ЗПДн сотрудников", href:'https://drive.google.com/file/d/1GqN--4K3hazxpJjZx_gCv79fiZlMb3pk/preview', to:null},
                            {id:5,title:"ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ В УЧРЕЖДЕНИИ ОБРАЗОВАНИЯ ГГУ. Скорины", href:'https://drive.google.com/file/d/1hAvoJ6pB0fR_rfrvsJN84A2acfEcD3F-/preview', to:null}
                        ]},
                        {sublinks:null, id:3,title:"Информационная безопасность", href:null, to:null},
                        {sublinks:null, id:4,title:"Внутренний контроль", href:null, to:null},
                    ]
                }
            }
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
            return redirect(state.navigateData, (id - 1), idLink)
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
        }
    }
})
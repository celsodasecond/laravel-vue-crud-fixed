import { createStore } from "vuex"
import axiosClient from "../axios";

// const tmpSurveys = [
//     {
//         id: 100,
//         title: "Jollibee Food Review",
//         slug: "jollibee-food-review",
//         status: "draft",
//         image:
//             "https://1000logos.net/wp-content/uploads/2019/04/Jollibee-Logo-1996.jpg",
//         description:
//             "Jollibee - known for crispylicious, juicylicious Chickenjoy, Jolly Spaghetti, and Yumburger is the country's No. 1 restaurant for years.",
//         created_at: "2022-12-23 18:00:00",
//         updated_at: "2022-12-23 18:00:00",
//         expire_date: "2022-12-31 18:00:00",
//         questions: [
//             {
//                 id: 1,
//                 type: "select",
//                 question: "From which branch did you buy your meal?",
//                 description: null,
//                 data: {
//                     options: [
//                         {
//                             uuid: "bdd2acdc-8224-4b04-a3b9-3a2727e49c29",
//                             text: "Manila-Bustillos"
//                         },
//                         {
//                             uuid: "c7814879-09d6-4e60-a7bd-39c938cbde89",
//                             text: "Manila-San Lazaro"
//                         },
//                         {
//                             uuid: "c6c0c014-30a0-42d1-92be-8129ac63dc5a",
//                             text: "Manila-Mendiola"
//                         },
//                         {
//                             uuid: "3daf1c16-ea0c-4567-84f1-de48a072545f",
//                             text: "Manila-Sta.Mesa"
//                         },
//                         {
//                             uuid: "d229d09f-8c04-4377-b621-6ccbbf0d9672",
//                             text: "Manila-Manila"
//                         },
//                     ],
//                 },
//             },
//             {
//                 id: 2,
//                 type: "checkbox",
//                 question: "Where did you come from?",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate magni voluptatibus temporibus, facilis nobis, similique repudiandae sequi adipisci nostrum quam accusamus minima, sit cum velit sapiente voluptas culpa. Voluptates?",
//                 data: {
//                     options: [
//                         {
//                             uuid: "7f48c13b-17f0-4a32-9d07-29af196e400e",
//                             text: "Manila"
//                         },
//                         {
//                             uuid: "f5d972d6-0d8a-49b6-a410-8a453bd51461",
//                             text: "San Juan"
//                         },
//                         {
//                             uuid: "3f56c742-4307-48c5-afff-461bd60d5cd1",
//                             text: "Makati"
//                         },
//                         {
//                             uuid: "a3814e76-2d68-4cc1-8a37-f1e32eb5ba0a",
//                             text: "Caloocan"
//                         },
//                         {
//                             uuid: "f75f915a-ba1c-44e5-bbc7-d6131936d0f2",
//                             text: "Quezon City"
//                         },
//                     ],
//                 },
//             },
//             {
//                 id: 3,
//                 type: "checkbox",
//                 question: "What is your favorite Jollibee Food?",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate magni voluptatibus temporibus, facilis nobis, similique repudiandae sequi adipisci nostrum quam accusamus minima, sit cum velit sapiente voluptas culpa. Voluptates?",
//                 data: {
//                     options: [
//                         {
//                             uuid: "a0492e11-35d5-484a-aa76-3f973413949c",
//                             text: "Chicken"
//                         },
//                         {
//                             uuid: "ed191aac-b16a-424b-9f1e-02fa41b58f86",
//                             text: "Fries"
//                         },
//                         {
//                             uuid: "e8829817-aa5a-459d-998a-90312dc405d4",
//                             text: "Pie"
//                         },
//                         {
//                             uuid: "86f4ef3e-ba2c-44ee-a05e-d38597ec1d13",
//                             text: "Float"
//                         },
//                         {
//                             uuid: "39fbd4ae-76e8-46f3-bde8-1924b2059c91",
//                             text: "Spaghetti"
//                         },
//                     ],
//                 },
//             },
//             {
//                 id: 4,
//                 type: "radio",
//                 question: "How good is your experience?",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate magni voluptatibus temporibus, facilis nobis, similique repudiandae sequi adipisci nostrum quam accusamus minima, sit cum velit sapiente voluptas culpa. Voluptates?",
//                 data: {
//                     options: [
//                         {
//                             uuid: "4d8a524b-ff61-4576-b20d-b72c54ec8fb5",
//                             text: "Unsatisfactory"
//                         },
//                         {
//                             uuid: "0f5eeaf1-1e87-416c-92df-088afa246181",
//                             text: "Satisfactory"
//                         },
//                         {
//                             uuid: "98d7aa80-e620-4ee3-8237-c630f0db6b5b",
//                             text: "Fair"
//                         },
//                         {
//                             uuid: "3317ed94-9d41-4f93-a732-dd21612726a0",
//                             text: "Good"
//                         },
//                         {
//                             uuid: "4607964b-d7e1-41b4-885c-a045e96dcf66",
//                             text: "Excellent"
//                         },
//                     ],
//                 },
//             },
//             {
//                 id: 5,
//                 type: "checkbox",
//                 question: "What are the things that are needed to improve?",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate magni voluptatibus temporibus, facilis nobis, similique repudiandae sequi adipisci nostrum quam accusamus minima, sit cum velit sapiente voluptas culpa. Voluptates?",
//                 data: {
//                     options: [
//                         {
//                             uuid: "b3de7556-643f-4511-902e-ae756f5f61e3",
//                             text: "Customer Service"
//                         },
//                         {
//                             uuid: "18f869cd-3836-43f6-8560-918ec7a5ee77",
//                             text: "Food"
//                         },
//                         {
//                             uuid: "394fdfac-5875-4f9f-88be-5d773295707a",
//                             text: "Place"
//                         },
//                         {
//                             uuid: "5113643f-06ea-4b6a-87a4-c0875e84b750",
//                             text: "Cleanliness"
//                         },
//                         {
//                             uuid: "88d1b15b-aa82-4874-b120-04692aa08423",
//                             text: "Comfort"
//                         },
//                     ],
//                 },
//             },
//             {
//                 id: 6,
//                 type: "text",
//                 question: "Describe your experience furthur",
//                 description: null,
//                 data: {},
//             },
//             {
//                 id: 7,
//                 type: "textarea",
//                 question: "Comments/Suggestions",
//                 description: "Write Everything",
//                 data: {},
//             },
//         ],
//     },
//     {
//         id: 200,
//         title: "Mcdonalds Food Review",
//         slug: "mcdonalds-food-review",
//         status: "active",
//         image:
//             "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-Logo-1993.png",
//         description:
//             "McDonald's Corporation is an American multinational fast food chain, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.",
//         created_at: "2022-12-23 18:00:00",
//         updated_at: "2022-12-23 18:00:00",
//         expire_date: "2022-12-31 18:00:00",
//         questions: [],
//     },
//     {
//         id: 300,
//         title: "KFC Food Review",
//         slug: "kfc-food-review",
//         status: "active",
//         image:
//             "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
//         description:
//             "KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the world's second-largest restaurant chain after McDonald's, with 22,621 locations globally in 150 countries as of December 2019. The chain is a subsidiary of Yum!",
//         created_at: "2022-12-23 18:00:00",
//         updated_at: "2022-12-23 18:00:00",
//         expire_date: "2022-12-31 18:00:00",
//         questions: [],
//     },
//     {
//         id: 400,
//         title: "Greenwich Food Review",
//         slug: "greenwich-food-review",
//         status: "active",
//         image:
//             "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Greenwich_Pizza_logo.svg/640px-Greenwich_Pizza_logo.svg.png",
//         description:
//             "Greenwich Pizza, also known as Greenwich, is a pizza and pasta chain in the Philippines. It was founded in 1971 by Cresida Tueres. Greenwich Pizza started in 1971 as a small store at Greenhills Shopping Center in San Juan, Rizal.",
//         created_at: "2022-12-23 18:00:00",
//         updated_at: "2022-12-23 18:00:00",
//         expire_date: "2022-12-31 18:00:00",
//         questions: [],
//     },
// ];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        currentSurvey: {
            loading: false,
            data: {}
        },
        surveys: {
            loading: false,
            data: []
        },
        questionTypes: ["text", "select", "radio", "checbox", "textarea"],
    },
    getters: {},
    actions: {
        getSurvey({ commit }, id) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
                .get(`/survey/${id}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
        },
        saveSurvey({ commit }, survey) {
            delete survey.image_url;
            let response;
            if (survey.id) {
                response = axiosClient
                    .put(`/survey/${survey.id}`, survey)
                    .then((res) => {
                        commit("setCurrentSurvey", res.data);
                        return res;
                    });
            } else {
                response = axiosClient.post("/survey", survey).then((res) => {
                    commit("setCurrentSurvey", res.data);
                    return res;
                });
            }

            return response;
        },
        deleteSurvey({ }, id) {
            return axiosClient.delete(`/survey/${id}`);
        },
        getSurveys({ commit }) {
            commit('setSurveysLoading', true)
            return axiosClient.get("/survey").then((res) => {
                commit('setSurveysLoading', false)
                commit("setSurveys", res.data);
                return res;
            });
        },
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                })
        },
        login({ commit }, user) {
            return axiosClient.post('/login', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                })
        },
        logout({ commit }) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout')
                    return response;
                })
        }
    },
    mutations: {
        setCurrentSurveyLoading: (state, loading) => {
            state.currentSurvey.loading = loading;
        },
        setSurveysLoading: (state, loading) => {
            state.surveys.loading = loading;
        },
        setCurrentSurvey: (state, survey) => {
            state.currentSurvey.data = survey.data;
        },
        setSurveys: (state, surveys) => {
            state.surveys.data = surveys.data;
        },
        logout: state => {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {}
})

export default store;
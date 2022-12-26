<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex items-center justify-between">
                <h1
                    class="text-3xl font-bold leading-tight text-gray-900 animate__animated animate__fast animate__fadeInLeft">
                    {{ model.id ? model.title : "Create a Survey" }}
                </h1>

            </div>
        </template>
        <form @submit.prevent="saveSurvey">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <!-- SURVEY FIELDS -->
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <!-- IMAGE -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700">
                            Image
                        </label>
                        <div class="mt-1 flex items-center">
                            <img v-if="model.image" :src="model.image" :alt="model.title"
                                class="w-64 h-48 object-cover" />
                            <span v-else
                                class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="h-[80%] w-[80%] text-gray-300">
                                    <path fill-rule="evenodd"
                                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            <button type="button"
                                class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <input type="file"
                                    class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer">
                                Change
                            </button>
                        </div>
                    </div>
                    <!--/ IMAGE -->

                    <!-- TITLE -->
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" name="title" id="title" v-model="model.title" auto-complete="survey_title"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                    <!--/ TITLE -->

                    <!-- DESCRIPTION -->
                    <div>
                        <label for="about" class="block text-sm font-medium text-gray-700">Description</label>
                        <div class="mt-1">
                            <textarea name="description" id="description" v-model="model.description"
                                autocomplete="survey_description" placeholder="Describe your Survey."
                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm-text-sm border border-gray-300 rounded-md"></textarea>
                        </div>
                    </div>
                    <!--! DESCRIPTION -->

                    <!-- EXPIRE DATE -->
                    <div>
                        <label for="expire_date" class="block text-sm font-medium text-gray-700">
                            Expire Date
                        </label>
                        <input type="date" name="expire_date" id="expire_date" v-model="model.expire_date"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm-text-sm border border-gray-300 rounded-md">
                    </div>
                    <!--/ EXPIRE DATE -->

                    <!-- STATUS -->
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input type="checkbox" id="status" name="status" v-model="model.status"
                                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="status" class="font-medium text-gray-700">
                                Active
                            </label>
                        </div>
                    </div>
                    <!--/ STATUS -->
                </div>
                <!-- SURVEY FIELDS -->
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <h3 class="text-2x1 font-semibold flex items-center justify-between">
                        Survey Questions

                        <!-- ADD NEW -->
                        <button type="button" @click="addQuestion()"
                            class="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-4 h-4 mr-2">
                                <path fill-rule="evenodd"
                                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                            Add Questions
                        </button>
                        <!-- ADD NEW -->
                    </h3>
                    <div v-if="!model.questions.length" class="text-center text-gray-600">
                        NO QUESTIONS CREATED AT THE MOMENT
                    </div>
                    <div v-for="(question, index) in model.questions" :key="question.id">
                        <QuestionEditor :question="question" :index="index" @change="questionChange"
                            @addQuestion="addQuestion" @deleteQuestion="deleteQuestion">
                        </QuestionEditor>
                    </div>
                </div>
                <!--/ SURVEY FIELDS -->

                <!-- FOOTER -->
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </button>
                </div>
            </div>
        </form>
    </PageComponent>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid"
import store from '../store';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import PageComponent from '../components/PageComponent.vue';
import QuestionEditor from '../components/Editor/QuestionEditor.vue';

const router = useRouter();

const route = useRoute();

// Create Empty Survey
let model = ref({
    title: "",
    status: false,
    description: null,
    image: null,
    expire_date: null,
    questions: [],
})

if (route.params.id) {
    model.value = store.state.surveys.find(
        (s) => s.id === parseInt(route.params.id)
    );
}

function addQuestion(index) {
    const newQuestion = {
        id: uuidv4(),
        type: "text",
        question: "",
        description: null,
        data: {},
    }

    model.value.questions.splice(index, 0, newQuestion)
}

function deleteQuestion(question) {
    model.value.questions = model.value.questions.filter(
        (q) => q !== question
    )
}

function questionChange(question) {
    model.value.questions = model.value.questions.map(
        (q) => {
            if (q.id === question.id) {
                return JSON.parse(JSON.stringify(question))
            }
            return q
        }
    )
}

function saveSurvey() {
    store.dispatch("saveSurvey", model.value).then(({ data }) => {
        router.push({
            name: "SurveyView",
            params: { id: data.data.id },
        });
    });
}

</script>
<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900 animate__animated animate__fadeInLeft">Surveys</h1>
                <router-link :to="{ name: 'SurveyCreate' }"
                    class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-4 h-4 -mt-1 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add New Survey
                </router-link>
            </div>
        </template>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 animate__animated animate__slideInUp">
            <SurveyListItem 
            v-for="survey in surveys" 
            :key="survey.id" 
            :survey="survey"
            @delete="deleteSurvey(survey)"
            ></SurveyListItem>
        </div>
    </PageComponent>
</template>

<script setup>
import store from '../store';
import { computed } from 'vue';
import PageComponent from '../components/PageComponent.vue';
import SurveyListItem from '../components/SurveyListItem.vue';

const surveys = computed(() => store.state.surveys.data);

store.dispatch('getSurveys')

function deleteSurvey(survey) {
    if (confirm(`Are you sure you really want to delete this survey? This Operation is cannot be undone.`)) {
        store.dispatch('deleteSurvey', survey.id)
        .then(() => {
            store.dispatch('getSurveys')
        })
    }
}
</script>
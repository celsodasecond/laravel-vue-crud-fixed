<template>
    <!-- QUESTION INDEX -->
    <div class="flex items-center justify-between">
        <h3 class="text-lg font-bold">{{ index + 1 }}. {{ model.question }}</h3>

        <div class="flex items-center">
            <!-- ADD -->
            <button type="button" @click="addQuestion()"
                class="flex items-center text-xs py-1 px-3 mr-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2">
                    <path fill-rule="evenodd"
                        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                        clip-rule="evenodd" />
                </svg>
                Add
            </button>
            <!--/ ADD -->
            <!-- DELETE -->
            <button type="button" @click="deleteQuestion()"
                class="flex items-center text-xs py-1 px-3 mr-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2">
                    <path fill-rule="evenodd"
                        d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z"
                        clip-rule="evenodd" />
                </svg>
                Delete
            </button>
            <!--/ DELETE -->
        </div>
    </div>
    <!--/ QUESTION INDEX -->
    <div class="grid gap-3 grid-cols-12">
        <!-- QUESTION -->
        <div class="mt-3 col-span-9">
            <label :for="'question_text_' + model.data" class="block text-sm font-medium text-gray-700">Question
                Text</label>
            <input type="text" :name="'question_text_' + model.data" v-model="model.question" @change="dataChange"
                :id="'question_text' + model.data"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <!--/ QUESTION -->
        <!-- QUESTION TYPE -->
        <div class="mt-3 col-span-3">
            <label for="question_type" class="block text-sm font-medium text-gray-700">
                Select Question Type
            </label>
            <select name="question_type" id="question_type" v-model="model.type" @change="typeChange"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option v-for="type in questionTypes" :key="type" :value="type">
                    {{ upperCaseFirst(type) }}
                </option>
            </select>
        </div>
        <!--/ QUESTION TYPE -->
    </div>

    <!-- QUESTION DESCRIPTION -->
    <div class="mt-3 col-span-9">
        <label :for="'question_description_' + model.id"
            class="block text-sm font-medium text-gray-700">Description</label>
        <textarea :name="'question_description_' + model.id" :id="'question_description_' + model.id"
            v-model="model.description"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
    </div>
    <!--/ QUESTION DESCRIPTION -->

    <!-- DATA -->
    <div>
        <div v-if="shouldHaveOptions()" class="mt-2">
            <h4 class="text-sm font-semibold mb-1 flex justify-between items-center">
                Options

                <!-- ADD -->
                <button type="button" @click="addOption()"
                    class="flex items-center text-xs py-1 px-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        class="w-4 h-4 mr-2">
                        <path fill-rule="evenodd"
                            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                            clip-rule="evenodd" />
                    </svg>
                    Add Option
                </button>
                <!--/ ADD -->
            </h4>

            <div v-if="!model.data.options.length" class="text-xs text-gray-600 text-center py-3">
                You don't have any options defined.
            </div>
            <div v-for="(option, index) in model.data.options" :key="option.uuid" class="flex items-center mb-1">
                <span class="w-6 text-sm"> {{ index + 1 }}.</span>
                <input type="text" v-model="option.text" @change="dataChange"
                    class="w-full rounded-sm py-1 px-2 text-xs border border-gray-300 focus:border-indigo-500" />
                <!-- DELETE -->
                <button type="button" @click="removeOption(option)"
                    class="h-6 w-6 rounded-full flex items-center justify-center border border-transparent transition-colors hover:hover-red-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        class="w-4 h-4 mr-2">
                        <path fill-rule="evenodd"
                            d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <!--/ DELETE -->
            </div>
            <!--/ OPTION LIST -->
        </div>
    </div>
    <!--/ DATA -->

    <hr class="my-4" />
</template>

<script setup>
import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import store from "../../store";

const props = defineProps({
    question: Object,
    index: Number,
});

const emit = defineEmits(["change", "addQuestion", "deleteQuestion"]);

const model = ref(JSON.parse(JSON.stringify(props.question)));
const questionTypes = computed(() => store.state.questionTypes);

function upperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function shouldHaveOptions() {
    return ["select", "radio", "checkbox"].includes(model.value.type);
}

function getOptions() {
    return model.value.data.options;
}

function setOptions(options) {
    model.value.data.options = options;
}

function addOption() {
    setOptions([...getOptions(), { uuid: uuidv4(), text: "" }]);
    dataChange();
}

function removeOption(op) {
    setOptions(getOptions().filter((opt) => opt !== op));
    dataChange;
}

function typeChange() {
    if (shouldHaveOptions()) {
        setOptions(getOptions() || []);
    }
    dataChange()
}

function dataChange() {
    const data = JSON.parse(JSON.stringify(model.value))
    if (!shouldHaveOptions()) {
        delete data.data.options
    }

    emit("change", data)
}

function addQuestion() {
    emit("addQuestion", props.index + 1)
}

function deleteQuestion() {
    emit("deleteQuestion", props.question)
}



</script>

<style>

</style>

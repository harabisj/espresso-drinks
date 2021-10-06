<template>
	<div class="col-md-6">
        <h1>{{ page.title }}</h1>
        <p v-if="page.description">
            {{ page.description }}
        </p>

        <img class="img-fluid" :src="page.image" :alt="'Obrázek nápoje' + page.title" v-if="page.image">

        <div class="mt-5 d-flex justify-content-around align-items-center" v-if="page.actions">
            <button class="btn btn-primary btn-lg px-4" v-for="action in page.actions" :key="action.page" @click="$emit('change-page', action.page)">
                {{ action.title }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['page'],
}
</script>

<template>
	<div id="app">
		<div class="container py-4 vh-100">
			<div class="d-flex justify-content-center align-items-center w-100 h-100 content rounded-lg">
				<render :page="pages[this.page]" @change-page="page = $event"></render>
			</div>
		</div>
	</div>
</template>

<script>
import Render from './components/Render.vue';
import { pages } from "./data.js";

export default {
	data() {
		return {
			page: 'milk',
			pages: pages,
		}
	},
	components: { Render },
}
</script>

<style scoped>
	.content {
		background-color: #efefef;
	}
</style>

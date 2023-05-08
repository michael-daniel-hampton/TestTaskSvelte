<script lang="ts">
	import type { PageData } from './$types';
	import Posts from '$lib/posts/posts.svelte';
	export let data: PageData;
	//console.log(data);
</script>

<div class="pt-section pb-section">
	<Posts all_posts={data.dataArr} page_size={8} />
</div>

<style lang="scss">
@import '../../scss/global.scss';
</style>
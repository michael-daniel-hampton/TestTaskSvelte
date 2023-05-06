<script lang="ts">
	import type { PageData } from './$types';
	import Posts from '$lib/posts/posts.svelte';
	export let data: PageData;
	//console.log(data);
	


</script>

<Posts all_posts={data.dataArr} page_size={8} />

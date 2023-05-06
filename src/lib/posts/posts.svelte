<script lang="ts">
	import type { PostType } from '$lib/post/post.d.ts';
	import Post from '$lib/post/post.svelte';
	export let all_posts: [PostType];
	export let page_size = 100;

	$: posts = all_posts.slice(0, page_size);
	$: more_page = page_size < all_posts.length;

	function loadMore() {
		page_size = more_page ? page_size + page_size : page_size;
	}
</script>

<div class="posts_section">
	<div class="posts_list">
		{#each posts as post}
			<div class="post_wrapper">
				<Post {post} />
			</div>
		{/each}
	</div>
	{#if more_page}
		<button on:click={loadMore}>Load More</button>
	{/if}
</div>

<style lang="scss">
	@use './posts.scss';
</style>

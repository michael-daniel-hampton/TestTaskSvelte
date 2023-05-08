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
			<a class="posts_wrapper" href={`/posts/${post.id}`}>
					<Post {post} trunc={100} />
			</a>
		{/each}
	</div>
	{#if more_page}
	<div class="w-100 text-center pt-section">
		<span class="btn_blue_pill" on:click={loadMore}>Load More</span>
	</div>
	{/if}
</div>

<style lang="scss">
	@use './posts.scss';
</style>

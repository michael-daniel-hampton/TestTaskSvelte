<script lang="ts">
	import Post from '$lib/post/post.svelte';
	import type { PageData } from './$types';
	import type { PostType } from '$lib/post/post.d.ts';

	export let data: PageData;
	let post = data as PostType;
</script>
<div class="pt-section">
<Post {post} />
</div>
<style lang="scss">
	@import '../../../scss/global.scss'
</style>
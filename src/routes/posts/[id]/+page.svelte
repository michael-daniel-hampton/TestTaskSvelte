<script lang="ts">
	import Post from '$lib/post/post.svelte';
	import Comments from '$lib/comments/comments.svelte';
	import type { PageData } from './$types';
	import type { PostType } from '$lib/post/post.d.ts';
	import type { CommentType } from '$lib/comments/comments.d.ts';

	export let data: PageData;
	let post = data.data as PostType;
	let comments = data.comments as [CommentType];
</script>

<div class="pt-section pb-between">
	<Post {post} />
</div>
<hr />
<div class="pb-section pt-between">
	<h3>Comments</h3>
	<Comments {comments} />
</div>

<style lang="scss">
	@import '../../../scss/global.scss';
</style>

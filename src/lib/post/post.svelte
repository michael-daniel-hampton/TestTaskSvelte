<script lang="ts">
	import type { PostType } from './post';
	export let post: PostType;
	export let trunc = -1;

	let check = trunc > 0 && post.body.length > trunc;
	let body = check ? post.body.slice(0, trunc - 1) + '...' : post.body;
</script>

<div class="post">
	<h3>{post.title}</h3>
	<p>{body}</p>
</div>

<style lang="scss">
	@use './post.scss';
</style>

<script lang="ts">
    import type { PostType } from './post';
	export let post: PostType;
</script>

<div class="post">
	<a href={`posts/${post.id}`}>
		{post.userId}<br />
		{post.id}<br />
		{post.title}<br />
		{post.body}<br />
	</a>
</div>

<style lang="scss">
@use './post.scss';
</style>

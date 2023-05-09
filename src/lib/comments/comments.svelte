<script lang="ts">
	import type { CommentType } from './comments';
	export let comments: [CommentType];
</script>

<div class="comments_section">
	{#each comments as comment}
		<div class="comments_item">
			<h4>{comment.name}</h4>
			<p>{comment.body}</p>
			<a href={`mailto:${comment.email}`}>
				<small>{comment.email}</small>
			</a>
		</div>
	{/each}
</div>

<style lang="scss">
	@use './comments.scss';
</style>

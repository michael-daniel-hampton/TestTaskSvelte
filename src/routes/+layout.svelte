<script lang="ts">
	import Nav from '$lib/nav/nav.svelte';
</script>

<div class="contain">
	<Nav />
	<slot />
</div>

<style lang="scss">
	@import '../scss/global.scss'; //TODO: Globally import to whole app using Global.scss
</style>

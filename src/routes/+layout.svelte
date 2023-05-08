<script lang="ts">
	import Nav from '$lib/nav/nav.svelte';
</script>

<Nav />
<div class="contain">
	<slot />
</div>

<style lang="scss">
	@import '../scss/global.scss'; //TODO: Globally import to whole app using Global.scss
</style>

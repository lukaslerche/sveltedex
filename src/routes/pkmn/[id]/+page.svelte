<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let p = data.pokemon;
</script>

<div>
	ID: {p.id}
</div>
<div>Name: {p.name}</div>

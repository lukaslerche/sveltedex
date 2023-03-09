<script lang="ts">
	import { id, cap } from '$lib/strings';

	export let url: string;
	export let name: string;
</script>

<a href="/{id(url)}" class="icon">
	<div class="row">
		<span>{id(url)}.</span>
		<img
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id(url)}.png"
			alt="Sprite of Pokemon {cap(name)}"
		/>
	</div>
	<div>{cap(name)}</div>
</a>

<style>
	img {
		height: 96px;
		width: 96px;
	}
	span {
		font-size: larger;
	}
	a {
		color: black;
	}
	a:link {
		text-decoration: none;
	}

	a:visited {
		text-decoration: none;
	}

	a:hover {
		text-decoration: none;
	}

	a:active {
		text-decoration: none;
	}
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.icon {
		width: 170px;
		height: 130px;
		background-color: white;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

<script lang="ts">
	import 'modern-normalize';
	import '$lib/pokedex.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="pokedexWrapper">
	<div class="pokedexTop left">
		<div id="top_left">
			<div id="buttonGlass">
				<div id="reflect" />
			</div>
			<div id="miniButtonGlass1" />
			<div id="miniButtonGlass2" />
			<div id="miniButtonGlass3" />
		</div>
		<div class="block1 left" />
		<div class="block2 left" />
		<div class="block3 left" />
	</div>
	<div class="pokedexTop right">
		<div class="block1 right" />
		<div class="block2 right" />
		<div class="block3 right" />
	</div>
	<div class="content">
		<slot />
	</div>
	<div class="pokedexBot">
		<div class="leftBottom">
			<div id="bigbluebutton" />
			<div id="barbuttons">
				<div id="barbutton1" />
				<div id="barbutton2" />
			</div>
			<div id="cross">
				<div id="leftcross">
					<div id="leftT" />
				</div>
				<div id="topcross">
					<div id="upT" />
				</div>
				<div id="rightcross">
					<div id="rightT" />
				</div>
				<div id="midcross">
					<div id="midCircle" />
				</div>
				<div id="botcross">
					<div id="downT" />
				</div>
			</div>
		</div>
		<div class="rightBottom">
			<div class="flexcol" id="rlcol">
				<div class="flexrow">
					<div id="miniButtonGlass4" />
					<div id="miniButtonGlass5" />
				</div>

				<div id="yellowBox1" />
			</div>
			<div id="blueButtons">
				<div id="blueButtons1">
					<div class="blueButton" />
					<div class="blueButton" />
					<div class="blueButton" />
					<div class="blueButton" />
					<div class="blueButton" />
				</div>
				<div id="blueButtons2">
					<div class="blueButton" />
					<div class="blueButton" />
					<div class="blueButton" />
					<div class="blueButton" />
					<div class="blueButton" />
				</div>
			</div>
			<div class="flexcol rightjust" id="rrcol">
				<div class="flexrow">
					<div id="barbutton3" />
					<div id="barbutton4" />
				</div>

				<div id="yellowBox2" />
			</div>
		</div>
	</div>
</div>

<style>
	* {
		padding: 0;
		margin: 0;
	}
</style>

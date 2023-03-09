<script lang="ts">
	import 'modern-normalize';
	import '@16bits/nes.css/css/nes.min.css';
	import '@fontsource/press-start-2p';
	import '$lib/pokedex.css';
</script>

<div class="pokedexWrapper">
	<div class="pokedexTop left">
		<div id="top_left">
			<a href="/">
				<div id="buttonGlass" class="highlight-low">
					<div id="reflect" />
				</div>
			</a>
			<div id="miniButtonGlass1" class="highlight-low" />
			<div id="miniButtonGlass2" class="highlight-low" />
			<div id="miniButtonGlass3" class="highlight-low" />
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
		<div class="content-inner">
			<slot />
		</div>
	</div>
	<div class="pokedexBot">
		<div class="leftBottom">
			<div id="bigbluebutton" class="highlight" />
			<div>
				<div id="barbuttons">
					<div id="barbutton1" class="highlight" />
					<div id="barbutton2" class="highlight" />
				</div>
				<div id="about"><a href="/about">About</a></div>
			</div>

			<div id="cross">
				<div id="leftcross" class="highlight">
					<div id="leftT" />
				</div>
				<div id="topcross" class="highlight">
					<div id="upT" />
				</div>
				<div id="rightcross" class="highlight">
					<div id="rightT" />
				</div>
				<div id="midcross">
					<div id="midCircle" />
				</div>
				<div id="botcross" class="highlight">
					<div id="downT" />
				</div>
			</div>
		</div>
		<div class="rightBottom">
			<div class="flexcol" id="rlcol">
				<div class="flexrow">
					<div id="miniButtonGlass4" class="highlight" />
					<div id="miniButtonGlass5" class="highlight" />
				</div>

				<div id="yellowBox1" class="highlight-low" />
			</div>
			<div id="blueButtons">
				<div id="blueButtons1">
					<div class="blueButton highlight" />
					<div class="blueButton highlight" />
					<div class="blueButton highlight" />
					<div class="blueButton highlight" />
					<div class="blueButton highlight" />
				</div>
				<div id="blueButtons2">
					<div class="blueButton highlight" />
					<div class="blueButton highlight" />
					<div class="blueButton highlight" />
					<div class="blueButton highlight" />
					<div class="blueButton highlight" />
				</div>
			</div>
			<div class="flexcol rightjust" id="rrcol">
				<div class="flexrow">
					<div id="barbutton3" class="highlight" />
					<div id="barbutton4" class="highlight" />
				</div>

				<div id="yellowBox2" class="highlight-low" />
			</div>
		</div>
	</div>
</div>

<style>
	:global(body, code, html, kbd, pre, samp) {
		font-family: 'Press Start 2P';
	}
	#about a {
		color: #000;
	}
	
</style>

<script lang="ts">
	import { Radar } from 'svelte-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		PointElement,
		RadialLinearScale,
		LineElement
	} from 'chart.js';
	import type PokeAPI from 'pokedex-promise-v2';
	ChartJS.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement);

	export let stats: PokeAPI.StatElement[];

	$: statdata = {
		labels: stats.map((stat) => stat.stat.name),
		datasets: [
			{
				label: 'Stats',
				data: stats.map((stat) => stat.base_stat),
				fill: true,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgb(255, 99, 132)',
				pointBackgroundColor: 'rgb(255, 99, 132)',
				pointBorderColor: '#000',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(255, 99, 132)'
			}
		]
	};
</script>

<Radar
	data={statdata}
	options={{
		responsive: true,
		scales: {
			r: {
				angleLines: {
					display: true
				},
				suggestedMin: 0,
				suggestedMax: 255
			}
		}
	}}
/>

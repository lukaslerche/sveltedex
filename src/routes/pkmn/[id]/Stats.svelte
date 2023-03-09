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
	ChartJS.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement);


    export let pkmn;

	$: statdata = {
		labels: [ 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
		datasets: [
			{
				label: 'Stats',
				data: [65, 59, 90, 81, 56, 55],
				fill: true,
				backgroundColor: 'rgba(255, 99, 132, 1)',
				borderColor: 'rgb(255, 99, 132)',
				pointBackgroundColor: 'rgb(255, 99, 132)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(255, 99, 132)'
			}
		]
	};
</script>
<Radar data={statdata} />
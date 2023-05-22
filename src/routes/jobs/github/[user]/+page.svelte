<script lang='ts'>
	import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface';

	export let data;

	const user = data.user;
	const status = data.status;
	const offers = data.offers as OfferItemAdapter[];
</script>

<head>
	<title>
		{user} | offers
	</title>
</head>
<main>
	<h1>{user}</h1>
	<h2 class='text-green text-3xl'>{status}</h2>
	<ul>
		{#each offers as { position } }
			<li>
				<article>
					<h2>{position}</h2>
				</article>
			</li>

		{/each}
	</ul>
</main>

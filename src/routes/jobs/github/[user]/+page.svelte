<script lang='ts'>
	import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface';

	export let data;

	const user = data.user;
	const status = data.status;
	const offers = data.offers as OfferItemAdapter[];
</script>


<svelte:head>
	<title>
		Offers for {user} | DavJobsHub
	</title>
</svelte:head>
<main class='bg-black px-6 py-12 rounded-3xl w-full h-full '>
	<div class='h-full'>
		<h1>
			Offers for {user}
		</h1>
	</div>
</main>

<script lang='ts'>
	import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface'

	export let data

	const user = data.user
	const status = data.status
	const offers = data.offers as OfferItemAdapter[]
</script>


<svelte:head>
	<title>
		Offers for {user} | DavJobsHub
	</title>
</svelte:head>
<div
	class='bg-[rgba(0,0,0,0)] border border-white border-solid  px-6 py-12 rounded-3xl w-full h-full min-h-[480px]  sticky top-4  flex justify-center items-center'>
	<h1 class=' text-3xl font-bold text-center'>
		<span class='text-white opacity-80 block'>
			Select an offer to see
		</span>
		<span class='text-blue text-center'>
			more details
		</span>
	</h1>
</div>

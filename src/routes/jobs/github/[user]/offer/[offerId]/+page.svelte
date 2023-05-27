<script lang='ts'>
	import type { OfferModel } from '~lib/interfaces/Offer.interface'
	import PreviewOffer from '~routes/jobs/github/[user]/offer/[offerId]/components/PreviewOffer.svelte'

	export let data

	const offer = data.offer as OfferModel

	console.log(offer)
</script>

<svelte:head>
	<title>
		Offers for {offer.name} | DavJobsHub
	</title>
</svelte:head>


<PreviewOffer {offer} />
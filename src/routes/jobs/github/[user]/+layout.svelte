<script lang='ts'>
	import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface'
	import HeaderJobsList from '~routes/jobs/github/[user]/components/HeaderJobsList.svelte'
	import GridOffers from '~routes/jobs/github/[user]/components/GridOffers.svelte'

	export let data

	const error = data?.error as string

	const offers = data?.offers as OfferItemAdapter[] ?? []
	const user = data?.user as string ?? ''

	const langs = Array.from(data.topLangs.keys() ?? []) as []

</script>

{#if !error}
	<HeaderJobsList {user}  {langs} />
	<div class='flex flex-col lg:flex-row justify-start items-start gap-4 xl:gap-8 relative z-30'>
		<!-- * @ Grid offers		+layout-->
		<GridOffers {offers} {user} />
		<!-- * @children  +page-->
		<slot></slot>
	</div>
{/if}

{#if error}
	<p>{error}</p>
{/if}
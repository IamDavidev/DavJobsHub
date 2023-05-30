<script lang='ts'>
	import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface'
	import HeaderJobsList from '~routes/jobs/github/[user]/components/HeaderJobsList.svelte'
	import OfferItem from '~routes/jobs/github/[user]/components/OfferItem.svelte'

	export let data

	const error = data?.error as string

	const offers = data?.offers as OfferItemAdapter[] ?? []
	const user = data?.user as string ?? ''

	const langs = Array.from(data.topLangs.keys() ?? []) as []

</script>

{#if !error}
	<HeaderJobsList {user} {langs} />
	<div class='flex flex-col lg:flex-row justify-start items-start gap-4 xl:gap-8 relative z-30'>
		<!-- * @ Grid offers		+layout-->
		<section
			class='border border-white border-solid bg-[rgba(0,0,0,0)] px-2 xl:px-6 py-2 xl:py-12 rounded-3xl flex flex-col xl:gap-8 max-w-[95vw] overflow-x-scroll xl:overflow-x-hidden p-4 relative gap-2'>
			<header class='sticky left-0 xl:top-0 py-4 flex flex-row gap-4'>
				<h2 class='text-2xl font-bold '>
					Related Job
				</h2>
			</header>
			<div class='w-full'>
				<ul class='flex flex-row lg:flex-col gap-2'>
					{#each offers as { position, id, company, published }}
						<OfferItem {id} {user} {position} logoCompany={company.logo} updatedAt={published}
											 nameCompany={company.name} />
					{/each}
				</ul>
			</div>
		</section>
		<!--		<GridOffers {offers} {user} />-->
		<!-- * @children  +page-->
		<slot></slot>
	</div>
{/if}

{#if error}
	<p>{error}</p>
{/if}
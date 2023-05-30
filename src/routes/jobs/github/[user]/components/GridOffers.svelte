<script lang='ts'>
	import OfferItem from '~routes/jobs/github/[user]/components/OfferItem.svelte'
	import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface'
	import Arrow from '~routes/components/icons/Arrow.svelte'

	export let user: string
	export let offers: OfferItemAdapter[]
</script>

<section
	class='border border-white border-solid bg-[rgba(0,0,0,0)] px-2 xl:px-6 py-2 xl:py-12 rounded-3xl flex flex-col xl:gap-8 max-w-[95vw] overflow-x-scroll xl:overflow-x-hidden p-4 relative gap-2'>
	<header class='sticky left-0 xl:top-0 py-4 flex flex-row gap-4'>
		<h2 class='text-2xl font-bold '>
			Related Job
		</h2>
<!--		<span>-->
<!--			<Arrow className='w-6 h-6 lg:animate-bounce rotate-90' />-->
<!--		</span>-->
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
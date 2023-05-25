<script lang='ts'>
	import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface'
	import OfferItem from '~routes/jobs/github/[user]/components/OfferItem.svelte'

	export let data

	const error = data?.error as string

	const offers = data?.offers as OfferItemAdapter[] ?? []
	const user = data?.user as string ?? ''
</script>

{#if !error}
	<div class='flex flex-row justify-start items-start gap-4 xl:gap-8 relative'>
		<section class='bg-black px-6 py-12 rounded-3xl'>
			<ul class='flex flex-col gap-7'>
				{#each offers as { position, id, company, published } (id)}
					<OfferItem {id} {user} {position} logoCompany={company.logo} updatedAt={published}
										 nameCompany={company.name} />
				{/each}
			</ul>
		</section>
		<!-- * @children -->
		<slot></slot>
	</div>
{/if}

{#if error}
	<p>{error}</p>
{/if}
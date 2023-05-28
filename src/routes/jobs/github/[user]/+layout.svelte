<script lang='ts'>
	import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface'
	import OfferItem from '~routes/jobs/github/[user]/components/OfferItem.svelte'
	import UserIcon from '~routes/components/icons/UserIcon.svelte'

	export let data

	const error = data?.error as string

	const offers = data?.offers as OfferItemAdapter[] ?? []
	const user = data?.user as string ?? ''

	const langs = Array.from(data.topLangs.keys() ?? []) as []

</script>

{#if !error}
	<div class='mb-12 flex flex-col gap-8 justify-center items-center mt-4 relative z-30'>
		<div class='w-ful flex justify-center items-center'>
			<div
				class='bg-[rgba(0,0,0,0)] mx-auto px-32 py-2 rounded-2xl flex gap-4 flex-row border border-solid border-white'>
				<UserIcon className='w-6 h-6' stroke={"#fff"} />
				<span>
					{user}
				</span>
			</div>
		</div>
		<form
			class='flex flex-row justify-center items-center gap-8'
		>

			<input type='text' placeholder='new search for user'
						 class=' border border-green-500 rounded-lg w-[320px] p-2 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-black' />
			<button
				class='bg-[rgba(0,0,0,0)] border border-solid text-white border-cream rounded-lg py-2 px-8 hover:border-blue hover:bg-[rgba(0,0,0,0)] hover:text-blue hover:transition-all hover:duration-500'>
				Search
			</button>
		</form>
		<div class='flex flex-row justify-center gap-8'>
			{#each langs as lang}
			<span
				class='bg-black  px-12 py-2 rounded-2xl font-base text-white'
			>
				{lang}
			</span>
			{/each}
		</div>
	</div>
	<div class='flex flex-row justify-start items-start gap-4 xl:gap-8 relative z-30'>
		<section class='border border-white border-solid bg-[rgba(0,0,0,0)] px-6 py-12 rounded-3xl flex flex-col gap-8'>
			<header>
				<h2 class='text-2xl font-bold '>
					Related Jobs
				</h2>
			</header>
			<section class='preview-offer'>
				<ul class='flex flex-col gap-7'>
					{#each offers as { position, id, company, published }}
						<OfferItem {id} {user} {position} logoCompany={company.logo} updatedAt={published}
											 nameCompany={company.name} />
					{/each}
				</ul>
			</section>
		</section>
		<!-- * @children -->
		<slot></slot>
	</div>
<!--	<img src='/bg-stars.webp' alt='bg github' class='absolute top-0 left-0 w-full h-full opacity-50 object-cover'>-->
{/if}

{#if error}
	<p>{error}</p>
{/if}
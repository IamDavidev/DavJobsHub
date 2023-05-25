<script lang='ts'>
	import type { OfferModel } from '~lib/interfaces/Offer.interface'

	export let data

	const offer = data.offer as OfferModel

	console.log(offer)
</script>

<svelte:head>
	<title>
		Offers for {offer.name} | DavJobsHub
	</title>
</svelte:head>
<article class='bg-black px-6 py-12 rounded-3xl w-full h-full flex sticky top-4 gap-4 flex-row items-start '>
	<div class='h-full w-full border-r border-white border-solid'>
		<header class='flex flex-row gap-4 w-full border-b border-white border-solid pb-8'>
			<img src={offer.company.logo} alt={offer.company.name} class='h-[124px] w-[124px] rounded-2xl' />
			<div class='w-full'>
				<div class='flex h-full flex-col justify-evenly'>
					<h2 class='text-2xl font-bold text-white'>{offer.position}</h2>
					<h3 class='uppercase opacity-50'>{offer.company.name}</h3>
				</div>
			</div>
		</header>
		<div class='py-8 flex flex-col gap-12'>
			<div>
				<h3 class='text-2xl font-bold'>Job Description : </h3>
				<p class='py-2'>
					{offer.jobDescription}
				</p>
			</div>
			{#if offer.minRequirements}
				<div>
					<h3 class='text-2xl font-bold'>
						Min Requirements :
					</h3>
					<p class='py-2'>
						{offer.minRequirements}
					</p>
				</div>
			{/if}
			<div>
				<h3 class='text-2xl font-bold'>Requirements Skill : </h3>
				<ul class='flex flex-row flex-wrap gap-8 py-4'>
					{#each offer.skills as skill}
						<li class='px-12 py-4 rounded-2xl bg-white'>
							<span class='text-black opacity-80 font-bold'>
								{skill}
							</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class='min-w-[240px]'>
		<div>
			<h2>About Client </h2>
			<div>
				<h3>Client Name</h3>
				<span>					{offer.company.name}				</span>
			</div>
			<div>
				<h3>Joined Time</h3>
				<span>January 12 2016</span>
			</div>
			<div>
				<h3>Location</h3>
				<!--				<span>					{offer.company.location}				</span>-->
				<span> Eua, Boston				</span>
			</div>
		</div>
		<!--		<div></div>-->
		<div>
			<button>
				Apply Now
			</button>
			<button>
				Save Job
			</button>
		</div>
	</div>
</article>
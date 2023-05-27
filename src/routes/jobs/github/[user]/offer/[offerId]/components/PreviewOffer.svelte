<script lang='ts'>
	import type { OfferModel } from '~lib/interfaces/Offer.interface'

	export let offer: OfferModel

</script>

<article
	class='bg-[rgba(0,0,0,0)] px-6 py-12 rounded-l-xl w-full h-full flex sticky top-4 gap-4 flex-row items-stretch  lg:max-h-[97vh] overflow-y-scroll preview-offer overflow-x-hidden border border-solid border-white'>
	<div class='h-full w-full border-r border-white border-solid px-6 py-4'>
		<header class='flex flex-row gap-4 w-full border-b border-white border-solid pb-8'>
			<!--			<img src={offer.company.logo} alt={offer.company.name} class='h-[124px] w-[124px] rounded-2xl' />-->
			<img src='/planetFake.jpg' alt='google ' class='h-[124px] w-[124px] rounded-2xl object-cover' />
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
				<p class='py-2 font-light'>
					{offer.jobDescription}
				</p>
			</div>
			{#if offer.minRequirements}
				<div>
					<h3 class='text-2xl font-bold'>
						Min Requirements :
					</h3>
					<p class='py-2 font-light'>
						{offer.minRequirements}
					</p>
				</div>
			{/if}
			<div>
				<h3 class='text-2xl font-bold'>Requirements Skill : </h3>
				<ul class='flex flex-row flex-wrap gap-4 py-4 justify-center items-center my-4'>
					{#each offer.skills as skill}
						<li class='rounded-2xl'>
							<span
								class='bg-cream  px-12 py-2 rounded-2xl font-base text-black'>
								{skill}
							</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class='min-w-[240px]  flex flex-col h-auto p-4  justify-between gap-8'>
		<div class='w-full h-full'>
			<h2 class='text-2xl mb-12 text-blue'>About Client </h2>
			<div class='flex flex-col items-start justify-center mb-6'>
				<h3 class='text-2xl'>Client Name</h3>
				<span class='opacity-70 text-base'>{offer.company.name}</span>
			</div>
			<div class='flex flex-col items-start justify-center mb-6'>
				<h3 class='text-2xl'>Joined Time</h3>
				<span class='opacity-70 text-base font-medium'>January 12 2016</span>
			</div>
			<div class='flex flex-col items-start justify-center mb-6'>
				<h3 class='text-2xl'>Location</h3>
				<!--				<span>					{offer.company.location}				</span>-->
				<span class='opacity-70 text-base font-medium'> Eua, Boston				</span>
			</div>
		</div>
		<div class='w-full border-t border-white border-solid border-b py-12'>
			<h2
				class='text-2xl mb-4'
			>
				Offer Details
			</h2>
			<div class='flex flex-col items-start justify-center gap-4'>
				<h3 class='text-2xl my-'>Salary</h3>
				<span class='opacity-70 text-base font-medium'>{offer.salaryDescription}</span>
			</div>
		</div>
		<div class='w-full flex justify-center flex-col gap-6  py-4'>
			<button class='w-full mx-auto bg-green text-black rounded-2xl py-2'>
				Apply Now
			</button>
			<button class='w-full mx-auto border border-solid border-white rounded-2xl text-white bg-[rgba(0,0,0,0)] py-2'>
				Save Job
			</button>
		</div>
	</div>
</article>
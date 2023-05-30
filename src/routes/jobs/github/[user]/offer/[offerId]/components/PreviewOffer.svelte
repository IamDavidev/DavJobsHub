<script lang='ts'>
	import type { OfferModel } from '~lib/interfaces/Offer.interface'
	import AboutClient from '~routes/jobs/github/[user]/offer/[offerId]/components/AboutClient.svelte'
	import DescriptionOffer from '~routes/jobs/github/[user]/offer/[offerId]/components/DescriptionOffer.svelte'
	import HeaderOffer from '~routes/jobs/github/[user]/offer/[offerId]/components/HeaderOffer.svelte'

	export let offer: OfferModel
	export let user: string

	const offerId = offer.id
	
	console.log('rendering offer view')
	
	export const urlTestProfile = `/jobs/github/${user}/offer/${offerId}/test-profile`
	console.log(urlTestProfile)

</script>

<article
	class='bg-[gba(0,0,0,0)] px-6 py-12 rounded-l-xl w-full h-full flex sticky top-4 gap-4 flex-col xl:flex-row items-stretch  lg:max-h-[97vh] overflow-y-scroll preview-offer overflow-x-hidden border border-solid border-white'>
	<div class='h-full w-full  border-b xl:border-b-0  xl:border-r border-white border-solid px-6 py-4'>
		<HeaderOffer position={offer.position} company={offer.company} companyLogo={offer.company.logo} />
		<DescriptionOffer jobDescription={offer.jobDescription} minRequirements={offer.minRequirements}
											skills={offer.skills} />
	</div>

	<AboutClient companyName={offer.company.name} location={"missing"} salaryDescription={offer.salaryDescription}>
<!--		<TestProfile githubUser={user} offerId={offerId} position={offer.position} />-->
		<a href={urlTestProfile}
			 class='w-full py-2 rounded-2xl text-black text-center bg-gradient-to-r from-[#F88EFD] to-[#0FA47F] transition-all duration-300 font-bold '
		>
			test profile
		</a>
	</AboutClient>

</article>
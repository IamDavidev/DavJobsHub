<script lang='ts'>

	export let id
	export let user
	export let logoCompany
	export let position: string
	export let nameCompany
	// export let updatedAt


	const href = `/jobs/github/${user}/offer/${id}/`
	const positionFmt = (position.length > 47 ? position.substring(0, 50) + ' ...' : position)
	const nameCompanyFmt = nameCompany.split(' ').slice(0, 2).join(' ')

</script>

<li {id}
		class='min-w-[320px] xl:min-w-auto w-full border-white border-solid border-r lg:border-r-0 lg:border-t text-white text-base p-4 lg:py-4 overflow-x-hidden'>
	<a {href} target='_self'>
		<article class='flex flex-col xl:flex-row gap-4 w-full'>
			<picture class='min-w-[240px] xl:min-w-[124px] xl:w-[124px] xl:h-[124px] lg:max-w-[140px] h-auto flex m-auto max-w-fit test-picture'>
				<img src={logoCompany} alt={nameCompanyFmt}  class='w-full h-full object-cover rounded-2xl' />
<!--				<img src={"/planetFake.jpg"} alt={"planet-fake"}  />-->
			</picture>
			<header class='flex flex-col xl:flex-row justify-between py-4 gap-4 w-full'>
				<div class='flex flex-col h-full justify-between items-center xl:items-start text-center xl:text-left gap-2'>
					<h2
						class={`font-bold ${position.length < 20 ? 'text-base': "text-sm"} `}
					>{positionFmt}</h2>
					<div class='flex flex-row gap-2 items-center opacity-50 font-medium truncate'>
						<span class="text-sm">{nameCompanyFmt}</span>
<!--						<span> - </span>-->
<!--						<span>{"Day a go "}</span>-->
					</div>
				</div>
				<div
					class='h-full flex flex-row xl:flex-col gap-0  items-end opacity-50 font-medium text-sm text-center lg:text-left w-full justify-between'>
					<span class='text-end'>Remote Work</span>
					<span class='text-end'>Junior</span>
				</div>
			</header>
		</article>
	</a>
</li>

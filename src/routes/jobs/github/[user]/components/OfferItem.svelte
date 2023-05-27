<script lang='ts'>

	export let id
	export let user
	export let logoCompany
	export let position: string
	export let nameCompany
	export let updatedAt


	const href = `/jobs/github/${user}/offer/${id}`
	const positionFmt = (position.length > 47 ? position.substring(0, 50) + ' ...' : position)
	const nameCompanyFmt = nameCompany.split(' ').slice(0, 2).join(' ')

</script>

<li {id}
		class='min-w-[320px] lg:max-w-[320px] xl:max-w-[640px] w-full xl:min-w-[480px] border border-white border-t border-r-0 border-l-0 border-b-0 pt-4 text-white text-base'>
	<a {href}>
		<article class='flex flex-row gap-4 w-full'>
			<picture class='min-w-[160px] h-[124px] max-w-[140px] max-h-[124px] flex'>
<!--								<img src={logoCompany} alt={nameCompany} class='w-full h-full object-cover rounded-2xl' />-->
				<img src={"/planetFake.jpg"} alt={"planet-fake"} class='w-full h-full object-cover rounded-2xl' />
			</picture>
			<header class='flex flex-row justify-between py-4 gap-4 w-full'>
				<div class='flex flex-col h-full justify-between items-start'>
					<h2
						class={`font-bold ${position.length < 20 ? 'text-lg': "text-base"} `}
					>{positionFmt}</h2>
					<div class='flex flex-row gap-2 items-center opacity-50 font-medium truncate'>
						<span>{nameCompanyFmt}</span>
						<span> - </span>
						<span>{"Day a go "}</span>
					</div>
				</div>
				<div class='h-full flex flex-col gap-0 justify-between items-end opacity-50 font-medium text-sm'>
					<span class='text-end'>Remote Work</span>
					<span class='text-end'>Junior</span>
				</div>
			</header>
		</article>
	</a>
</li>

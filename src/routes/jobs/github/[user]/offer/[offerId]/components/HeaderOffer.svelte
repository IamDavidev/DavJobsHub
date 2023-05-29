<script>
	export let companyLogo
	export let companyName
	export let position
	export let company
</script>

<header class='flex flex-row gap-4 w-full border-b border-white border-solid pb-8'>
<!--				<img src={logo} alt={name} class='h-[124px] w-[124px] rounded-2xl' />-->
	<img src='/planetFake.jpg' alt='google ' class='h-[124px] w-[124px] rounded-2xl object-cover' />
	<div class='w-full'>
		<div class='flex h-full flex-col justify-evenly'>
			<h2 class='text-2xl font-bold text-white'>{position}</h2>
			<h3 class='uppercase opacity-50'>{company.name}</h3>
		</div>
	</div>
</header>

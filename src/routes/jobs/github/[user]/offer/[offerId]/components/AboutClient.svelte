<script lang='ts'>
	export let companyName
	export let location
	export let salaryDescription
</script>

<div class='min-w-[240px]  flex flex-col h-auto p-4  justify-between gap-8'>
	<div class='w-full h-full'>
		<h2 class='text-2xl mb-12 text-blue'>About Client </h2>
		<div class='flex flex-col items-start justify-center mb-6'>
			<h3 class='text-xl 2xl:text-2xl '>Client Name</h3>
			<span class='opacity-70 text-base'>{companyName}</span>
		</div>
		<div class='flex flex-col items-start justify-center mb-6'>
			<h3 class='text-xl 2xl:text-2xl'>Joined Time</h3>
			<span class='opacity-70 text-sm 2xl:text-base font-medium'>January 12 2016</span>
		</div>
		<div class='flex flex-col items-start justify-center mb-6'>
			<h3 class='text-2xtext-xl 2xl:text-2xl'>Location</h3>
			<span class='opacity-70 text-sm 2xl:text-base font-medium'> Eua, Boston				</span>
		</div>
	</div>
	<div class='w-full border-t border-white border-solid border-b py-12'>
		<h2
			class='text-xl 2xl:text-2xl mb-4'
		>
			Offer Details
		</h2>
		<div class='flex flex-col items-start justify-center gap-4'>
			<h3 class='text-xl 2xl:text-2xl my-'>Salary</h3>
			<span class='opacity-70 text-sm 2xl:text-base font-medium'>{salaryDescription}</span>
		</div>
	</div>
	<div class='w-full flex justify-center flex-col gap-6  py-4'>
		<slot></slot>
		<!--		<button class='w-full mx-auto bg-green text-black rounded-2xl py-2'-->
		<!--						on:click={openChatIA}-->
		<!--		>-->
		<!--			Apply Now-->
		<!--		</button>-->
		<!--		<button class='w-full mx-auto border border-solid border-white rounded-2xl text-white bg-[rgba(0,0,0,0)] py-2'>-->
		<!--&lt;!&ndash;			Save Job&ndash;&gt;-->
		<!--			Test Profile-->
		<!--		</button>-->
	</div>
</div>

<!--{#if isOpenChatIA}-->
<!--	<ChatIA closeChatIA={closeChatIA} />-->
<!--{/if}-->
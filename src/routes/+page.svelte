<script lang='ts'>
	// import { goto } from '$app/navigation'
	import HeaderHome from '~routes/components/HeaderHome.svelte'
	import FormSearchGithub from '~routes/components/FormSearchGithub.svelte'
	import UserToTest from '~routes/components/UserToTest.svelte'
	import BlobIcon from '~routes/components/icons/BlobIcon.svelte'
</script>


<svelte:head>
	<title> DavJobsHub </title>
	<meta name='description' content='DavJobsHub is a job board for developers' />
</svelte:head>

<div class='min-w-full w-full min-h-full relative'>
	<HeaderHome />
	<section class='h-full w-full my-6 rounded-3xl flex flex-col gap-8 p-20 relative z-50'>
		<FormSearchGithub />
		<UserToTest />
	</section>
	<span class=' absolute -top-0 left-0 w-full h-full overflow-hidden flex justify-start'>
		<BlobIcon  className='w-auto h-auto'/>
	</span>
	<span class=' absolute top-0 right-0 w-full h-full overflow-hidden flex justify-end'>
		<BlobIcon className='w-auto h-auto'/>
	</span>
</div>

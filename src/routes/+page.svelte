<script lang='ts'>
	// import { goto } from '$app/navigation'
	import HeaderHome from '~routes/components/HeaderHome.svelte'
	import FormSearchGithub from '~routes/components/FormSearchGithub.svelte'
	import UserToTest from '~routes/components/UserToTest.svelte'
</script>


<svelte:head>
	<title> DavJobsHub </title>
	<meta name='description' content='DavJobsHub is a job board for developers' />
</svelte:head>

<div class='min-w-full w-full min-h-full'>
	<HeaderHome />
	<section class='h-full w-full my-6 bg-black rounded-3xl flex flex-col gap-8 p-20'>
		<FormSearchGithub />
		<UserToTest />
	</section>
</div>

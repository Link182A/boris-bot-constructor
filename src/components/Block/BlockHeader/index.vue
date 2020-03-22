<template>
	<header class="row no-wrap block-header">
		<header-block-name/>
		<header-options/>
	</header>
</template>

<script>
	import HeaderOptions from './HeaderOptions'
	import HeaderBlockName from './HeaderBlockName'

	export default {
		name: 'block-header',
		components:{
			HeaderOptions,
			HeaderBlockName
		}
	}

</script>

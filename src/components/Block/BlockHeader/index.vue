<template>
	<div>
		<header class="row no-wrap">
			<header-block-name/>
			<header-options/>
		</header>

		<div @touchstart.stop @mousedown.stop>
			<q-select v-model="model" :options="options" label="Standard" />
		</div>
	</div>
</template>

<script>
	import HeaderOptions from './HeaderOptions';
	import HeaderBlockName from './HeaderBlockName';

	export default {
		name: 'block-header',
		components: {
			HeaderOptions,
			HeaderBlockName
		},
		data () {
			return {
				model: 'Google',
				options: [
					'Google', 'Facebook'
				]
			};
		}
	};

</script>

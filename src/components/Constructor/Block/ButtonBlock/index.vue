<template>
	<base-block :block="block">
	</base-block>
</template>

<script>
	import BaseBlock from '../BaseBlock';

	export default {
		name: 'button-block',
		components: {
			BaseBlock
		},
		props: {
			block: {
				type: Object
			}
		}
	};
</script>

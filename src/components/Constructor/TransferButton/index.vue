<template>
	<q-btn
		@touchstart.stop @mousedown.stop
		round
		color="primary"
		size="xs"
		icon="fas fa-plus"
	/>
</template>

<script>
	export default {
		name: 'transfer-button'
	};
</script>

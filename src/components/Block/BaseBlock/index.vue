<template>
	<q-card class="no-shadow block"
	        bordered
	        :disable="draggingFab"
	        v-touch-pan.prevent.mouse="moveFab"
	        :style="{ transform: `translate3d(${this.position.x}px, ${this.position.y}px, 0)`}"
	>
		<q-card-section>
			hello card
		</q-card-section>
	</q-card>
</template>

<script>
	export default {
		name: 'base-block',
		data() {
			return {
				position: {
					x: 20,
					y: 50
				},
				draggingFab: false
			}
		},
		methods: {
			moveFab(event) {
				this.draggingFab = event.isFirst !== true && event.isFinal !== true;

				this.position = {
					x: this.position.x + event.delta.x,
					y: this.position.y + event.delta.y
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../styles/quasar.variables';

	.block {
		position: absolute;
		top: 0;
		left: 0;
		width: 350px;
		cursor: pointer;
	}
</style>

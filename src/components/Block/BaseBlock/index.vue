<template>
	<q-card class="cursor-pointer block"
	        bordered
	        v-touch-pan.prevent.stop.self.mouse="moveFab"
	        :disable="isDragging"
	        :class="{active: isDragging, 'no-shadow ': !isDragging}"
	        :style="{ transform: `translate3d(${this.position.x}px, ${this.position.y}px, 0)`}"
	>
		<q-card-section>
			<slot name="header">
				<block-header/>
			</slot>

			<slot>
				hello card
			</slot>

		</q-card-section>
	</q-card>
</template>

<script>
	import BlockHeader from '../BlockHeader'

	export default {
		name: 'base-block',
		components: {
			BlockHeader
		},

		data() {
			return {
				position: {
					x: 20,
					y: 50
				},
				isDragging: false
			}
		},

		methods: {
			moveFab(event) {
				this.isDragging = event.isFirst !== true && event.isFinal !== true;

				this.position = {
					x: this.position.x + event.delta.x,
					y: this.position.y + event.delta.y
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.block {
		position: absolute;
		top: 0;
		left: 0;
		width: 350px;

		&.active {
			z-index: 1;
		}
	}
</style>

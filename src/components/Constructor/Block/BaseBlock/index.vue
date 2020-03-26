<template>
	<q-card class="block cursor-grab"
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

		<transfer-button class="transfer-button"/>
	</q-card>
</template>

<script>
	import BlockHeader from '../BlockHeader/index';
	import TransferButton from '../../TransferButton';

	export default {
		name: 'base-block',
		components: {
			BlockHeader,
			TransferButton
		},

		data() {
			return {
				position: {
					x: 20,
					y: 50
				},
				isDragging: false
			};
		},

		methods: {
			moveFab(event) {
				this.isDragging = event.isFirst !== true && event.isFinal !== true;

				this.position = {
					x: this.position.x + event.delta.x,
					y: this.position.y + event.delta.y
				};
			}
		}
	};
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

	.transfer-button {
		position: absolute;
		bottom: -18px;
		left: 50%;
		transform: scale(.8) translateX(-50%);
	}
</style>

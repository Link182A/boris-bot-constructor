<template>
	<q-card class="block cursor-grab"
	        bordered
	        v-touch-pan.prevent.stop.self.mouse="moveBlock"
	        :disable="isDragging"
	        :class="{active: isDragging, 'no-shadow ': !isDragging}"
	        :style="{ transform: `translate3d(${block.x}px, ${block.y}px, 0)`}"
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
	import { mapMutations } from 'vuex';
	import BlockHeader from '../BlockHeader/index';
	import TransferButton from '../../TransferButton';

	export default {
		name: 'base-block',
		components: {
			BlockHeader,
			TransferButton
		},
		props: {
			block: {
				type: Object
			}
		},

		data() {
			return {
				isDragging: false
			};
		},

		methods: {
			...mapMutations('blockController', {
				setPosition: 'SET_BLOCK_POSITION'
			}),

			moveBlock(event) {
				this.isDragging = event.isFirst !== true && event.isFinal !== true;

				this.setPosition({
					id: this.block.id,
					x: this.block.x + event.delta.x,
					y: this.block.y + event.delta.y
				});
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

<template>
	<q-card class="block cursor-grab"
	        bordered
	        v-touch-pan.prevent.stop.self.mouse="moveBlock"
	        :disable="hasTransit"
	        :class="{active: isDragging || showMenu, 'no-shadow ': !isDragging}"
	        :style="{ transform: `translate3d(${block.x}px, ${block.y}px, 0)`}"
	>
		<q-card-section>
			<slot name="header">
				<block-header :block="block"/>
			</slot>

			<slot>
				hello card 404
			</slot>

		</q-card-section>

		<transfer-button class="transfer-button"
		                 v-show="!hasTransit || model==='Phone'"
		                 :class="{'next-transit' : model==='Phone'}"
		                 @clickOnAction="clickOnAction"
		                 @onMenuShow="onMenuShow"
		                 @onMenuHide="onMenuHide"/>

		<q-btn @touchstart.stop @mousedown.stop
		       v-show="hasTransit"
		       @click="cancelActionTransit"
		       round
		       class="transfer-button"
		       size="md"
		       color="primary"
		       icon="fas fa-times"/>

		<div v-show="hasTransit"
		     class="pick-action"
		     @touchstart.stop @mousedown.stop>

			<q-input
				v-show="model === 'Phone'"
				v-model="phone"
				class="bg-white"
				label="Phone"
				mask="+7(###) ### - ####"
				fill-mask
				outlined
			/>

			<q-select v-show="!model"
			          v-model="model"
			          :options="options"
			          outlined
			          options-cover
			          label="Standard"
			          ref="actionRef"
			/>
		</div>
	</q-card>
</template>

<script>
	import { mapMutations } from 'vuex';
	import BlockHeader from '../../BlockHeader/index';
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
				isDragging: false,
				showMenu: false,
				hasTransit: false,

				model: null,
				phone: null,
				options: [
					'Phone', 'Facebook', 'Twitter', 'Apple', 'Oracle'
				]
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
					index: this.block.index,
					x: this.block.x + event.delta.x,
					y: this.block.y + event.delta.y
				});
			},

			onMenuShow(e = true) {
				if (!this.hasTransit) this.showMenu = e;
			},

			onMenuHide() {
				this.onMenuShow(false);
			},

			clickOnAction() {
				this.hasTransit = true;
				this.$refs.actionRef.showPopup();
			},
			cancelActionTransit() {
				this.model = null;
				this.hasTransit = false;
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "./src/styles/quasar.variables";

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
		transform: scale(.8) translateX(-62%);

		transition: bottom .1s linear;
	}

	.next-transit {
		bottom: -98px;
	}

	.pick-action {
		position: absolute;
		bottom: -80px;
		left: 50%;
		width: 80%;
		transform: translateX(-50%);
		z-index: -1;

		&:before {
			content: '';
			position: absolute;
			bottom: 100%;
			left: 50%;
			width: 1px;
			height: 25px;
			background-color: $primary;
			transform: translateX(-50%);
		}
	}
</style>

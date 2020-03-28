<template>
	<base-block :block="block">
		<input-with-emoji/>

		<div @touchstart.stop @mousedown.stop
			 class="button-wrapper">
			<button-input/>
			<button-input/>
			<div class="line">
				<div class="line_horizontal">
					<div class="line_vertical"/>
				</div>
			</div>

			<q-slide-transition>
				<div v-show="showOption">
					<add-button-popup class="custom-border q-mb-sm"
									  @clickOnCancel="showOption=false"
									  :label="$t('buttons.inputLabel')"/>
				</div>
			</q-slide-transition>
		</div>

		<div class="flex justify-end">
			<q-btn @touchstart.stop @mousedown.stop
				   flat
				   rounded
				   icon="fas fa-plus-circle"
				   :color="showOption?'primary':null"
				   @click="showOption=!showOption"
				   :label="$t('buttons.addButton')"/>
		</div>
	</base-block>
</template>

<script>
	import BaseBlock from '../BaseBlock';
	import InputWithEmoji from '../../InputWithEmoji';
	import ButtonInput from './ButtonInput';
	import CheckAction from '../../CheckAction';

	export default {
		name: 'button-block',
		components: {
			BaseBlock,
			InputWithEmoji,
			ButtonInput,
			AddButtonPopup: CheckAction
		},
		props: {
			block: {
				type: Object
			}
		},
		data() {
			return {
				showOption: false
			};
		}
	};
</script>

<style lang="scss">
	@import "src/styles/quasar.variables";

	.button-wrapper {
		position: relative;

		.line {
			position: absolute;
			top: 20px;
			left: -9px;
			content: '';
			width: 1px;
			height: 100%;
			background-color: $primary;

			&_horizontal {
				position: absolute;
				bottom: 0;
				height: 1px;
				width: 171px;
				background-color: $primary;
			}

			&_vertical {
				position: absolute;
				right: 0;
				width: 1px;
				height: 30px;
				background-color: $primary;
			}
		}
	}
</style>

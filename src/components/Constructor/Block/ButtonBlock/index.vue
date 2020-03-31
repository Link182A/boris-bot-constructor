<template>
	<base-block :block="block">
		<input-with-emoji/>

		<div @touchstart.stop @mousedown.stop
		     class="button-wrapper">

			<draggable
				class="list-group"
				tag="div"
				v-model="buttons"
				v-bind="dragOptions"
				handle=".drag-icon"
				@start="isDragging = true"
				@end="isDragging = false"
			>
				<transition-group type="transition"
				                  name="flip-list">

					<button-input v-for="button in buttons"
					              :key="button.order"/>
				</transition-group>
			</draggable>

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
			       :disable="showOption"
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
	import draggable from 'vuedraggable';

	const buttons = [
		{
			order: 1
		},
		{
			order: 2
		},
		{
			order: 3
		},
		{
			order: 4
		}
	];

	export default {
		name: 'button-block',
		components: {
			BaseBlock,
			InputWithEmoji,
			ButtonInput,
			draggable,
			AddButtonPopup: CheckAction
		},
		props: {
			block: {
				type: Object
			}
		},
		data() {
			return {
				showOption: false,
				buttons: buttons.map((item) => item),
				dragOptions: {
					animation: 0,
					group: 'description',
					disabled: false,
					ghostClass: 'ghost',
					forceFallback: true
				}
			};
		}
	};
</script>

<style lang="scss">
	@import "src/styles/quasar.variables";

	.flip-list-move {
		transition: transform 0.5s;
	}

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

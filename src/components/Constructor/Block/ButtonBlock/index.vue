<template>
	<base-block :block="block">
		<input-with-emoji/>
		<div class="button-wrapper">
			<button-input/>
			<button-input/>
		</div>
	</base-block>
</template>

<script>
	import BaseBlock from '../BaseBlock';
	import InputWithEmoji from '../../InputWithEmoji';
	import ButtonInput from './ButtonInput';

	export default {
		name: 'button-block',
		components: {
			BaseBlock,
			InputWithEmoji,
			ButtonInput
		},
		props: {
			block: {
				type: Object
			}
		}
	};
</script>

<template>
	<base-block>
		<q-input v-model="text"
		         class="q-mb-md"
		         :label="$t('timeout.inputLabel')"/>

		<div class="row items-baseline">
			<b class="q-mr-md">{{$t('timeout.text')}}</b>

			<q-input
				v-model.number="delay"
				type="number"
				style="width: 40%"
				lazy-rules
				dense
				outlined
				:rules="[
                    val => val !== null
                        && val !== ''
                        && val >= 0 && val < 10
                        || $t('timeout.emptyError'),
                ]"
			/>
		</div>
	</base-block>
</template>

<script>
	import BaseBlock from '../BaseBlock';

	export default {
		name: 'timeout-block',
		components: {
			BaseBlock
		},
		data() {
			return {
				text: '',
				delay: 0
			};
		}
	};
</script>

<style lang="scss" scoped>
	b {
		line-height: 2;
	}
</style>

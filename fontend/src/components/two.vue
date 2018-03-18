<template>
	<div id="two">
		This is two !!!
	</div>
</template>

<script>
	const twy = {
		template:'<span>{{ message }}</span>',
		props:['message']
	}
	export default {
	  	name: 'two',
	}
</script>
<template>
	<div id="vue_view">
		<h1>Name Views</h1>
		<ul>
			<li>
				<router-link to="/one">/one</router-link>
			</li>
			<li>
				<router-link to="/two">/two</router-link>
			</li>
		</ul>
		<router-view class="one" name="b"></router-view>
		<router-view class="two" name="a"></router-view>
	</div>
</template>



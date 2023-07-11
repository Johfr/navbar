<script setup>
</script>

<template>
	<div class="home">
		<div class="slider">
			<div class="plant-container">
				<img src="../assets/img/plants1.png" alt="plant1" />
			</div>
			<div class="plant-container">
				<img src="../assets/img/plants3.png" alt="plant2" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$primary: #34bb6c;
.home {
	margin: 0 auto;
	min-height: 100vh;
	max-height: 100vh;
	padding: 30px;
	overflow-x: hidden;
	position: relative;
}

.slider {
	// width: 100%;
	display: flex;
	align-items: flex-end;
	height: 400px;
	gap: 20px;
	overflow-x: scroll;
}

.plant-container {
	display: inline-block;
	min-width: 70%;
	height: 300px;
	background-color: $primary;
	background: linear-gradient(#7ae1b7, #49be90);
	border-top-left-radius: 40%;
	border-top-right-radius: 40%;
	border-bottom-left-radius: 20%;
	border-bottom-right-radius: 20%;
	position: relative;

	img {
		// width: 100%;
		height: 400px;
		position: absolute;
		bottom: 0px;
		// height: 200px;
	}
}
</style>

<script setup>
import { onMounted, ref } from 'vue'
import SearchIcon from './SearchIcon.vue'
import HeartIcon from './HeartIcon.vue'
import HomeIcon from './HomeIcon.vue'
import UserIcon from './UserIcon.vue'

// list of items displayed on mounted (from template ref)
const itemsRef = ref([])

// 5,6,7,8
// the only variable you must increment or decrement depending on the number of navbar items (icons) you want to display
const items  = ref([
	1,2,3,4,
])

let itemPosition = ref()
let itemBublePosition = ref()
let itemBgPosition = ref()

// get the position of the first element on init
onMounted(() => {
	getPosition(1)
	// just for the demo. navbar will be permanent. Can be deleted
	window.addEventListener("resize", () => {
		getPosition(itemPosition.value)
	})
	//end
})
// just for the demo. navbar will be permanent. Can be deleted
onMounted(() => {
	window.removeEventListener("resize", getPosition(itemPosition.value))
})
//end

// supa function that do miracles !!
const getPosition = (item) => {
	itemPosition.value = item
	itemBublePosition.value = itemsRef.value[item - 1].offsetLeft - 0 + "px"
	itemBgPosition.value = itemsRef.value[item - 1].offsetLeft - 30.5 + "px"
}
</script>

<template>
	<nav>
		<ul class="list">
			<li v-for="item in items" :key="item.id" @click="getPosition(item)" :class="[{ active: itemPosition === item }]" ref="itemsRef">
				<!-- List of Your icons : should be the same as variable items -->
				<RouterLink v-if="item === 1" to="/">
					<HomeIcon />
				</RouterLink>
				<RouterLink v-if="item === 2" to="/search">
					<SearchIcon />
				</RouterLink>
				<RouterLink v-if="item === 3" to="/favorite">
					<HeartIcon />
				</RouterLink>
				<RouterLink v-if="item === 4" to="/preference">
					<UserIcon />
				</RouterLink>
				<HomeIcon v-if="item === 5" />
				<SearchIcon v-if="item === 6" />
				<HeartIcon v-if="item === 7" />
				<UserIcon v-if="item === 8" />

			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
$primary: #34bb6c;
// You have nothing to touch here
nav {
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	bottom: 0;
	z-index: 3;
	background-color: #34bb6c;
	
	.list {
		display: flex;
		justify-content: space-around;
		align-items: center;
    width: 100%;
		position: relative;

		&::before {
			content: "";
			display: block;
			width: 40px;
			height: 40px;
			position: absolute;
			top: -21px;
			left: v-bind(itemBublePosition);
			transition: .4s ease;
			border-radius: 50%;
			box-shadow: 4px 3px 5px #34bb6c78;
			background-color: #fff;
		}
		&::after {
			content: url("../assets/icons/navtabBg.svg");
			display: block;
			width: 100px;
			position: absolute;
			top: -38px;
			left: v-bind(itemBgPosition);
			z-index: -1;
			transition: .4s ease;
		}

		li {
			width: 40px;
			height: 40px;
			padding: 10px;
			transition: .4s ease;
			position: relative;
			top: 0;
			cursor: pointer;

			&.active {
				top: -20px;

				svg {
					fill: $primary;
				}
			}
		}

		svg {
			width: 20px;
			height: 20px;
			fill: #fff;
			transition: .4s ease;
		}
	}
}

</style>

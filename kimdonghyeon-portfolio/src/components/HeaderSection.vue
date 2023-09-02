<template>
	<haeder id="header">
		<div class="header_wrap">
			<h1 class="header_logo">
				<a href="#">portfolio<em>vue.js</em></a>
			</h1>
			<nav class="header_nav" :class="{show : isNavVisible}">
				<ul>
					<li v-for="(nav, index) in headerNav" :key="index">
						<a :href="nav.url">{{ nav.title }}</a>
					</li>
				</ul>
			</nav>
			<div 
			class="header_nav_mobile" 
			id="headerToggle" 
			:class="{show: isNavVisible}" 
			@click="toggleMobileMenu">
				<span></span>
			</div>
		</div>
	</haeder>
</template>

<script>
export default {
	data() {
		return {
			isNavVisible: false,
			headerNav: [
				{
					title: "intro",
					url: "#intro",
				},
				{
					title: "skill",
					url: "#skill",
				},
				{
					title: "site",
					url: "#site",
				},
				{
					title: "portfolio",
					url: "#port",
				},
				{
					title: "contact",
					url: "#contact",
				},
			],
		}
	},
	methods: {
		toggleMobileMenu() {
			this.isNavVisible = !this.isNavVisible;
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/scss/index.scss';

	#header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99999;

		.header_wrap {
			@include center-sb;
			background-color: rgba(166, 99, 99, .1);
			backdrop-filter: blur(15px);
			padding: 1rem;

			.header_logo {
				font-size: 0.9rem;
				text-align: center;
				text-transform: uppercase;
				line-height: 1;

				em {
					font-size: 10px;
					display: block;
					color: #444;
				}
			}

			.header_nav {
				@media (max-width: 800px) {
					display: none;

					&.show {
						display: block;

						ul {
							display: block;
							position: absolute;
							right: 0;
							top: 68px;
							background-color: rgba(166, 99, 99, .1);
							backdrop-filter: blur(15px);
							z-index: 999999;
							min-width: 150px;
							padding: 20px 0;

							li {
								display: block;
								text-align: right;

								a {
									display: inline-block;
									padding: 10px;
								}
							}
						}
					}

					&.show + .header_nav_mobile span::before {
						width: 20px;
					}
					&.show + .header_nav_mobile span::after {
						width: 20px;
					}
				}

				li {
					display: inline;

					a {
						text-transform: uppercase;
						font-size: 14px;
						padding: 14px;
						position: relative;

						&::before {
							content: '';
							width: calc(100% - 28px);
							height: 1px;
							background-color: black;
							position: absolute;
							left: 14px;
							bottom: 10px;
							transform: scaleX(0);
							transition: all .3s;
						}

						&:hover::before {
							transform: scaleX(1);
						}
					}
				}
			}

			.header_nav_mobile {
				display: none;
				width: 40px;
				height: 40px;
				cursor: pointer;

				@media (max-width: 800px) {
					display: block;
				}

				span {
					display: block;
					width: 40px;
					height: 2px;
					background-color: black;
					margin-top: 19px;
					position: relative;

					&::before {
						content: "";
						width: 40px;
						height: 2px;
						background-color: black;
						position: absolute;
						right: 0;
						top: 6px;
						transition: width 0.3s;
					}
					&::after {
						content: "";
						width: 40px;
						height: 2px;
						background-color: black;
						position: absolute;
						left: 0;
						bottom: 6px;
						transition: width 0.3s;
					}
				}
			}
		}
	}
</style>


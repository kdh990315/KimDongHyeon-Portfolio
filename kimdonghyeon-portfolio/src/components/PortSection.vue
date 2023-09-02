<template>
	<section id="port">
		<div class="port_wrap">
			<div class="port_title">
				portfolio <em>자바스크립트 작업물</em>
			</div>
			<div class="port_container">
				<article class="port_item" v-for="(text, index) in portText" :key="index">
					<span class="num">{{ index + 1 }}.</span>
					<a href="#" target="_blank" class="img">
						<img src="http://placehold.it/150X150" :alt="text.alt">
					</a>
					<h3 class="title">{{ text.title }}</h3>
					<p class="info">
						{{ text.info }}
					</p>
					<a :href="text.view" target="_blank" class="site">사이트 보기</a>
				</article>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			portText: [
				{
					num: "01",
					title: "title 더미 텍스트입니다.",
					info: "info 더미 텍스트입니다.",
					code: "http://localhost:8080/#/",
					view: "http://localhost:8080/#/",
					alt: "alt 더미 텍스트"
				},
				{
					num: "02",
					title: "title 더미 텍스트입니다.",
					info: "info 더미 텍스트입니다.",
					code: "http://localhost:8080/#/",
					view: "http://localhost:8080/#/",
					alt: "alt 더미 텍스트"
				},
				{
					num: "03",
					title: "title 더미 텍스트입니다.",
					info: "info 더미 텍스트입니다.",
					code: "http://localhost:8080/#/",
					view: "http://localhost:8080/#/",
					alt: "alt 더미 텍스트"
				},
				{
					num: "04",
					title: "title 더미 텍스트입니다.",
					info: "info 더미 텍스트입니다.",
					code: "http://localhost:8080/#/",
					view: "http://localhost:8080/#/",
					alt: "alt 더미 텍스트"
				},
				{
					num: "05",
					title: "title 더미 텍스트입니다.",
					info: "info 더미 텍스트입니다.",
					code: "http://localhost:8080/#/",
					view: "http://localhost:8080/#/",
					alt: "alt 더미 텍스트"
				},
				{
					num: "06",
					title: "title 더미 텍스트입니다.",
					info: "info 더미 텍스트입니다.",
					code: "http://localhost:8080/#/",
					view: "http://localhost:8080/#/",
					alt: "alt 더미 텍스트"
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
@import '@/scss/index.scss';

#port {
	width: 100%;
	margin-top: 30vh;
	//overflow: hidden;

	.port_wrap {
		padding: 16px;

		.port_title {
			width: 100%;
			height: 5vw;
			font-size: 4vw;
			font-weight: 900;
			line-height: 1.6;
			font-family: 'Noto Sans KR', sans-serif;
			text-transform: uppercase;
			color: #000;
			border-bottom: 0.4vw solid #000;
			margin-bottom: 16px;
			text-indent: -0.26vw;

			em {
				font-size: 1.25rem;
				font-weight: 400;
				line-height: 2;
			}
		}
		.port_item {
			width: 500px;
			height: 70vh;
			background-color: #cdc0b1;
			padding: 2.5rem;
			margin-right: 20px;

			&.p1 {
				background-color: #cdc0b1;
			}

			&.p2 {
				background-color: #afa395;
			}
			&.p3 {
				background-color: #81887c;
			}

			&.p4 {
				background-color: #afa7a2;
			}
			&.p5 {
				background-color: #a6afa2;
			}
			&.p6 {
				background-color: #cdc0b1;
			}
			&.p7 {
				background-color: #afa395;
			}
			&.p8 {
				background-color: #81887c;
			}
			&.p9 {
				background-color: #afa7a2;
			}
			&.p10 {
				background-color: #a6afa2;
			}

			.num {
				font-size: 2rem;
			}

			.img {
				display: block;
				margin: -20px;
				transition: margin-top 0.3s;

				img {
					border-radius: 5px;
					filter: saturate(0%);
				}

				&:hover {
					margin-top: 0;

					img {
						filter: saturate(100%);
					}
				}
			}

			.title {
				font-size: 1.5rem;
				text-align: center;
				padding: 0.8rem 0;
				font-weight: 700;
				color: #000;
				border-bottom: 2px solid #000;
				margin-bottom: 1rem;
			}

			.info {
				font-size: 1rem;
			}
			
			.site {
				border: 1px solid #000;
				display: block;
				text-align: center;
				padding: 0.625rem 1.5rem;
				margin-top: 1.5rem;
				transition: all .2s;

				&:hover {
					background-color: #000;
					color: #fff;
				}
			}
		}
	}
}



</style>
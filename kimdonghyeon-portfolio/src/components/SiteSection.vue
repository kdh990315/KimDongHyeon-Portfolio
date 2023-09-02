<template>
	<section id="site">
		<div class="site_wrap">
			<h2 class="site_title">
				Project <em>저의 작업물을 보실 수 있습니다.</em>
			</h2>
			<div class="site_container">
				<article class="site_item" v-for="(site, index) in siteText" :key="index">
					<span class="num">{{ index + 1 }}.</span>
					<div class="text">
						<div>{{ site.text[0] }}</div>
						<div>{{ site.text[1] }}</div>
						<div>{{ site.text[2] }}</div>
					</div>
					<h3 class="title">더비 텍스트입니다.</h3>
					<div class="btn">
						<a :href="site.code">code</a>
						<a :href="site.view">view</a>
					</div>
					<div class="info">
						<span>{{ site.info[0] }}</span>
						<span>{{ site.info[1] }}</span>
						<span>{{ site.info[2] }}</span>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			siteText: [
				{
					text: ['dummy text1', 'dummy text2 dummy text2 dummy text2', 'dummy text3 dummy text3'],
					title: "더미 텍스트입니다.",
					code: "http://localhost:8080/",
					view: "http://localhost:8080/",
					info: [
						'dummy text1',
						'dummy text2 dummy text2',
						'dummy text3 dummy text3 dummy text3'
					]
				},
				{
					text: ['dummy text1', 'dummy text2 dummy text2 dummy text2', 'dummy text3 dummy text3'],
					title: "더미 텍스트입니다.",
					code: "http://localhost:8080/",
					view: "http://localhost:8080/",
					info: [
						'dummy text1',
						'dummy text2 dummy text2',
						'dummy text3 dummy text3 dummy text3'
					]
				},
				{
					text: ['dummy text1', 'dummy text2 dummy text2 dummy text2', 'dummy text3 dummy text3'],
					title: "더미 텍스트입니다.",
					code: "http://localhost:8080/",
					view: "http://localhost:8080/",
					info: [
						'dummy text1',
						'dummy text2 dummy text2',
						'dummy text3 dummy text3 dummy text3'
					]
				},
				{
					text: ['dummy text1', 'dummy text2 dummy text2 dummy text2', 'dummy text3 dummy text3'],
					title: "더미 텍스트입니다.",
					code: "http://localhost:8080/",
					view: "http://localhost:8080/",
					info: [
						'dummy text1',
						'dummy text2 dummy text2',
						'dummy text3 dummy text3 dummy text3'
					]
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/scss/index.scss';

.site_wrap {
	padding: 16px 0;

	.site_title {
		position: sticky;
		top: 70px;
		left: 0;
		width: 70%;
		height: 5vw;
		font-size: 4vw;
		font-weight: 900;
		line-height: 1.6;
		font-family: 'Noto Sans KR', sans-serif;
		text-transform: uppercase;
		color: #000;
		border-bottom: 0.4vw solid #000;
		margin-bottom: 100px;

		@media (max-width: 800px){ 
            width: 100%;
            margin-bottom: 10vw;
            font-size: 30px;
            height: auto;
            top: 68px;
            z-index: 1000;
            background-color: #f3ede8;
        }

		em {
			font-size: 1.25rem;
			font-weight: 400;
			line-height: 2;
		}
	}

	.site_container {
		
		.site_item {
			height: 70vh;
			@include center;
			flex-direction: column;
			position: sticky;
			left: 0;

			&:nth-child(1) {
                background-color: rgb(245, 245, 220);
                top: 180px;

                @media (max-width: 800px){ 
                    top: 140px;
                }
            }
            &:nth-child(2) {
                background-color: rgb(212, 212, 190);
                top: 200px;

                @media (max-width: 800px){ 
                    top: 160px;
                }
            }
            &:nth-child(3) {
                background-color: rgb(170, 170, 152);
                top: 220px;

                @media (max-width: 800px){ 
                    top: 180px;
                }
            }
            &:nth-child(4) {
                background-color: rgb(131, 131, 117);
                top: 240px;

                @media (max-width: 800px){ 
                    top: 200px;
                }
            }

			.num {
				font-size: 5vw;
				line-height: 1;
				font-weight: 900;
				position: absolute;
				left: 1vw;
				top: 1vw;

				@media (max-width: 800px) {
					font-size: 80px;
					left: 20px;
					top: 20px;
				}
			}
			.text {
				text-align: center;
				margin-bottom: 1rem;

				>div {
					font-size: 3vw;
					line-height: 1;
					font-weight: 900;
					text-transform: uppercase;
					text-decoration: underline;
					font-family: 'Poppins', sans-serif;

					@media (max-width: 800px) {
						font-size: 26px;
					}
				}
			}
			.title {
				font-family: 'Noto Sans KR', sans-serif;
				margin-bottom: 1rem;
			}

			.btn {
				
				a {
					text-decoration: underline;
                    text-transform: uppercase;
                    color: #333;
                    font-size: 1rem;
                    transition: all 0.3s;
                    margin: 0 2px;

                    &:hover {
                        color: black;
                    }
				}
			}
			.info {
				position: absolute;
				left: 0;
				bottom: 3%;
				width: 98%;
				margin-left: 1%;
				border-top: 1px solid black;
				border-bottom: 1px solid black;
				display: flex;
				justify-content: space-between;
				
				@media (max-width: 800px){ 
                    flex-direction: column;
                    width: 90%;
                    margin-left: 5%;
                    padding: 5px 0;
                }

                span {
                    font-size: 12px;
                    padding: 3px 0;
                    text-transform: uppercase;
                }
			}
		}
	}
}
</style>
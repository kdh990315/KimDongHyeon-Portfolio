<template>
	<section id="skill">
		<div class="skill_wrap">
			<h2 class="skill_title">
				About Me<em>저는 이런 사람입니다.</em>
			</h2>
			<div class="skill_content">
				<div v-for="(text, index) in skillText" :key="index">
					<span>{{ index + 1 }}</span>
					<h3>{{ text.title }}</h3>
					<p>{{ text.content }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			skillText: [
				{
					title: "더미 텍스트입니다1.",
					content: "외모 콤플렉스를 가진 평범한 직장인 김모미가 밤마다 마스크로 얼굴을 가린 채 인터넷 방송 BJ로 활동하면서 의도치 않은 사건에 휘말리며 벌어지는 이야기로, 김모미의 파란만장한 일대기를 그린 넷플릭스 시리즈 -마스크걸-"
				},
				{
					title: "더미 텍스트입니다2.",
					content: "외모 콤플렉스를 가진 평범한 직장인 김모미가 밤마다 마스크로 얼굴을 가린 채 인터넷 방송 BJ로 활동하면서 의도치 않은 사건에 휘말리며 벌어지는 이야기로, 김모미의 파란만장한 일대기를 그린 넷플릭스 시리즈 -마스크걸-"
				},
				{
					title: "더미 텍스트입니다3.",
					content: "외모 콤플렉스를 가진 평범한 직장인 김모미가 밤마다 마스크로 얼굴을 가린 채 인터넷 방송 BJ로 활동하면서 의도치 않은 사건에 휘말리며 벌어지는 이야기로, 김모미의 파란만장한 일대기를 그린 넷플릭스 시리즈 -마스크걸-"
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/scss/index.scss';

.skill_wrap {
	padding: 16px;
	display: flex;
	justify-content: space-between;

	@media (max-width: 800px) {
		flex-direction: column;
	}

	.skill_title {
		position: sticky;
		top: 70px;
		left: 0;
		width: 48%;
		height: 5vw;
		font-size: 4vw;
		font-weight: 900;
		line-height: 1.6;
		font-family: 'Noto Sans KR', sans-serif;
		text-transform: uppercase;
		color: #111;
		border-bottom: 0.4vw solid #111;

		@media (max-width: 800px) {
			width: 100%;
			margin-bottom: 10vw;
			font-size: 30px;
			height: auto;
			top: 68px;
			background-color: #f3ede8;
		}

		em {
			font-size: 1.25rem;
			font-weight: 400;
			line-height: 2;
			margin-left: 5px;
		}
	}
	
	.skill_content {
		width: 50%;

		@media (max-width: 800px) {
			width: 100%;
		}

		span {
			font-size: 5vw;
			line-height: 1;
			font-weight: 900;
			line-height: 1.3;
			font-family: 'Noto Sans KR', sans-serif;

			@media (max-width: 800px) {
				font-size: 20vw;
			}
		}
		h3 {
            font-size: 1.5rem;
            text-decoration: underline;
            text-underline-position: under;
            margin-bottom: 1vw;
        }
        p {
            margin-bottom: 30vh;
            font-size: 1.1rem;
        }
	}
}
</style>
<template>
	<footer id="footer">
		<div class="footer_wrap">
			<div class="footer_container">
				<div class="footer_text">
					<span>@ 2023 김동현의 포트폴리오</span>
					<span>이 사이트는 vue.js를 이용하여 제작하였습니다.</span>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
@import '@/scss/index.scss';

#footer {
	font-family: 'Noto Sans KR', sans-serif;
	margin-top: 300px;

	.footer_wrap {
		padding: 30px 16px;
		background-color: #f3ede8;

		.footer_text {
			font-size: 12px;
			text-transform: uppercase;
			border-top: 1px solid black;
			border-bottom: 1px solid black;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
}
</style>
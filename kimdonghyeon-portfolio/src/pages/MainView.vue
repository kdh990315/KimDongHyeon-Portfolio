<template>
	<HeaderNav></HeaderNav>
	<HeaderSection></HeaderSection>
	<main>
		<IntroSection></IntroSection>
		<SkillSection></SkillSection>
		<SiteSection></SiteSection>
		<PortSection></PortSection>
		<ContactSection></ContactSection>
	</main>
	<FooterSection></FooterSection>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import IntroSection from '@/components/IntroSection.vue';
import SkillSection from '@/components/SkillSection.vue';
import SiteSection from '@/components/SiteSection.vue';
import PortSection from '@/components/PortSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import HeaderNav from '@/components/HeaderNav.vue';


export default {
	components: {
		HeaderSection,
		FooterSection,
		IntroSection,
		SkillSection,
		SiteSection,
		PortSection,
		ContactSection,
		HeaderNav,
	}
}
</script>

<style lang="scss" scoped>

</style>
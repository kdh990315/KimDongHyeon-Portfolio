<template>
  <router-view></router-view>
</template>

<script>
import Lenis from "@studio-freight/lenis";

export default {
  mounted: function() {

  },
  methods: {
    scrollAnimation() {
      const lenis = new Lenis({
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
      });

      lenis.on('scroll', (e) => {
        console.log(e)
      });

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

    }
  }

}
</script>
<template>
  <main>
    <Hero />
    <About />
    <PracticeAreas />
    <Testimonials />
    <HireUs />
    <Clients />
  </main>
</template>

<script>
import Hero from "~/components/sections/Hero.vue";
import About from "~/components/sections/About.vue";
import PracticeAreas from "~/components/sections/PracticeAreas.vue";
import Testimonials from "~/components/sections/Testimonials.vue";
import HireUs from "~/components/sections/HireUs.vue";
import Clients from "~/components/sections/Clients.vue";
export default {
  name: "IndexPage",
  components: { Hero, About, PracticeAreas, Testimonials, HireUs, Clients },
};
</script>

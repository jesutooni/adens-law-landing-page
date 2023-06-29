<template>
  <section class="py-16 max-w-screen-xl mx-auto px-6">
    <h2 class="text-center font-extrabold text-black text-3xl">Our Clients</h2>
    <div class="flex justify-center items-center flex-wrap gap-10 mt-6">
      <template v-for="logo in logos" class="">
        <div class="gray">
          <img class="w-full h-auto" :src="`/logos/${logo}.svg`" :alt="logo" />
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        "dmw",
        "vdm",
        "chef-chi",
        "twenty-six",
        "medical-mart",
        "confam",
        "peruzzi",
      ],
    };
  },
};
</script>

<style scoped>
.gray {
  filter: grayscale(95%);
}
</style>

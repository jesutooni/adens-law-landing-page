<template>
  <section style="background-color: #fff4f1" class="py-10">
    <div class="max-w-screen-xl mx-auto px-6 lg:flex justify-between">
      <div class="text-center lg:text-left">
        <img class="mx-auto lg:mx-0" src="/icons/law.svg" alt="" />
        <h2 class="font-extrabold text-black text-xl sm:text-2xl lg:text-3xl">
          Our practice areas
        </h2>
        <p
          class="text-grey-200 leading-7 mt-3 text-sm md:text-base max-w-xs mx-auto lg:mx-0"
        >
          Our expertise on top level legal and business issues cuts across
          borders.
        </p>
        <AppButton
          text="Book an appointment"
          theme="black"
          size="md"
          class="mt-8"
        />
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 lg:w-2/3 mt-10 lg:mt-0"
      >
        <template v-for="area in areas">
          <div class="bg-white rounded-2xl lg:rounded-lg p-6">
            <div
              class="flex items-center justify-center w-20 h-20 rounded-full"
              :style="{ backgroundColor: area.color }"
            >
              <img :src="`/icons/${area.icon}.svg`" alt="area.icon" />
            </div>
            <h3 class="font-medium text-black text-lg mt-6">{{ area.name }}</h3>
            <p class="text-grey-200 text-sm mt-2 leading-7">
              {{ area.teaser }}
            </p>
            <div class="flex justify-end mt-8">
              <img src="/icons/circle-arrow.svg" alt="" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      areas: [
        {
          color: "#FFEEF5",
          icon: "video",
          name: "Media & Entertaiment",
          teaser:
            "Our media and entertainment practice group cuts across commercial, intellectual property and litigation in the media and entertainment industry.",
        },
        {
          color: "#EEF2FF",
          icon: "work",
          name: "Corporate Commercial",
          teaser:
            "We provide a full range of legal advisory services with a creative problem-solving approach to the commercial and business needs of our clients.",
        },
        {
          color: "#FFF1EE",
          icon: "home",
          name: "Real Estate",
          teaser:
            "Our real estate practice covers a wide variety of clients and interests. We engage in all aspects of real estate transactions including but not limited.",
        },
        {
          color: "#FFEFEE",
          icon: "document",
          name: "Commercial Arbitration",
          teaser:
            "Our dispute resolution team represents clients interests in courts and tribunals located in various states in Nigeria.",
        },
      ],
    };
  },
};
</script>

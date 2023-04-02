<template>
  <div class="bg-black py-6">
    <nav class="flex items-center justify-between max-w-screen-xl mx-auto px-6">
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>

      <ul class="hidden md:flex text-grey-300 gap-8 lg:gap-12">
        <li
          v-for="(nav, index) in navs"
          :key="index"
          class="text-lg cursor-pointer"
          :class="{ 'text-white-primary': index === 0 }"
        >
          {{ nav }}
        </li>
      </ul>
      <AppButton
        class="hidden lg:block"
        text="Get in touch"
        theme="transparent"
        size="sm"
      />
      <div class="md:hidden">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 0.72 0.72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.12 0.21a0.03 0.03 0 0 1 0.03 -0.03h0.42a0.03 0.03 0 1 1 0 0.06H0.15a0.03 0.03 0 0 1 -0.03 -0.03zm0 0.15a0.03 0.03 0 0 1 0.03 -0.03h0.42a0.03 0.03 0 1 1 0 0.06H0.15a0.03 0.03 0 0 1 -0.03 -0.03zm0 0.15a0.03 0.03 0 0 1 0.03 -0.03h0.42a0.03 0.03 0 1 1 0 0.06H0.15a0.03 0.03 0 0 1 -0.03 -0.03z"
            fill="#FEFEFE"
          />
        </svg>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: ["Home", "Areas", "Team", "Blog"],
    };
  },
};
</script>

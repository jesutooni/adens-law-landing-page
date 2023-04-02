<template>
  <footer class="bg-black py-10">
    <div class="max-w-screen-xl mx-auto px-6 flex flex-wrap justify-between gap-6">
      <div class="mb-10">
        <img src="/logo.svg" alt="logo" />
        <p class="text-grey-200 text-sm leading-6 max-w-xs">
          We offer top level legal and business services to both local and
          international clients. Our expertise on legal issues cuts across
          borders.
        </p>
      </div>
      <ul v-for="(nav, index) in navs" :key="index">
        <h6 class="text-grey-300 text-sm mb-4">{{ nav.name }}</h6>
        <li
          v-for="(item, index) in nav.items"
          :key="index"
          class="text-grey-100 mb-3 text-sm cursor-pointer" style="max-width: 212px"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <p style="color: #545454" class="text-sm mt-16 text-center"
      >©2022 Adens Law Group - RC 1405222</p
    >
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          name: "Areas",
          items: [
            "Media & Entertainment",
            "Corporate Commercial",
            "Real Estate",
            "Commercial Arbitration",
            "Regulatory & Compliance",
            "Intellectual Property Law",
          ],
        },
        {
          name: "Company",
          items: ["About Us", "Terms", "Privacy Policy"],
        },
        {
          name: "Socials",
          items: ["Twitter", "LinkedIn", "Instagram", "Youtube"],
        },
        {
          name: "Contact",
          items: [
            "Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.",
            "hello@adenslawgroup.com",
            "+234 123 456 789",
          ],
        },
      ],
    };
  },
};
</script>

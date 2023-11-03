<template>
  <div class="max-w-screen-xl mx-auto px-6 py-20">
    <div class="flex">
      <ExpertCard />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experts: [
        {
          image: "ademola-adeniyi",
          name: "Ademola Adeniyi",
          title: "Principal Partner",
        },
        {
          image: "kendrick-lawrence",
          name: "Kendrick Lawrence",
          title: "Managing Partner",
        },
        {
          image: "elizabeth-curry",
          name: "Elizabeth Curry",
          title: "Senior Associate",
        },
        {
          image: "janet-dorsey",
          name: "Janet Dorsey",
          title: "Senior Associate",
        },
        {
          image: "theresa-jacobs",
          name: "Theresa Jacobs",
          title: "Senior Associate",
        },
        {
          image: "mariah-jack",
          name: "Mariah Jack",
          title: "Senior Associate",
        },
        {
          image: "stephanie-anderson",
          name: "Stephanie Anderson",
          title: " Associate",
        },
        {
          image: "stella-smith",
          name: "Stella Smith",
          title: "Associate",
        },
      ],
    };
  },
};
</script>

<template>
  <button
    v-on="$listeners"
    :class="[themeClasses[theme], sizeClasses[size], `rounded-lg text-lg py-5`]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      themeClasses: {
        black: "bg-black text-white-primary",
        white: "bg-white text-black",
        transparent: "outline-white-primary text-white",
      },
      sizeClasses: {
        sm: "px-4",
        md: "px-6",
        lg: "px-8",
        xl: "px-12",
      },
    };
  },
};
</script>

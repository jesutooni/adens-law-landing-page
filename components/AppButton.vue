<template>
  <button
    v-on="$listeners"
    :class="[themeClasses[theme], sizeClasses[size], `rounded-lg text-lg `]"
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
        transparent: "border border-white-primary text-white-primary",
      },
      sizeClasses: {
        sm: "px-4 py-2",
        md: "px-6 py-5",
        lg: "px-8 py-5",
        xl: "px-12 py-5",
      },
    };
  },
};
</script>

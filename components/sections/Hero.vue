<template>
  <section
    class="bg-black py-16 px-6 flex flex-col-reverse md:flex-col items-center gap-8 relative"
  >
    <div class="rounded-lg md:w-40 overflow-hidden">
      <img
        class="md:h-10 object-cover w-full"
        src="/hero-image.svg"
        alt="hero-image"
      />
    </div>
    <div class="max-w-lg text-center">
      <h1
        class="text-white-primary font-bold md:font-extrabold text-2xl md:text-3xl md:leading-10"
      >
        Advocating for local and international clients since '90s
      </h1>
      <p class="w-4/5 mx-auto text-sm md:text-base text-grey-200 mt-3 mb-6">
        We offer top level legal and business services to both local and
        international clients. Our expertise on legal issues cuts across
        borders.
      </p>
      <AppButton text="Request a consultation" theme="white" size="lg" />
    </div>

    <div class="absolute bottom-12 right-4 sm:right-14 md:right-24 lg:right-60">
      <img src="/icons/the-law.svg" alt="the law" />
    </div>
  </section>
</template>

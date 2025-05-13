    <script lang="ts" setup>
    import i from '../assets/images/ss.png'
</script>
<template>
    <div class="px-6">
        <div
            class="container mx-auto flex flex-col xl:flex-row gap-12 md:gap-24 items-center justify-center xl:justify-between">
            <div class="xl:max-w-4xl ">
                <h1
                    class="font-bold  font-display text-4xl md:text-5xl md:text-center text-display text-pretty  xl:text-6xl xl:text-left ">
                    Tons of codes to be <span
                        class="bg-clip-text bg-gradient-to-t from-primary via-warning to-secondary text-transparent ">
                        found!
                    </span>
                </h1>
                <div class="mt-4 grid grid-cols-1 md:grid-cols-2 mx-auto xl:mx-0 gap-4 w-full">
                    <div class=" mt-3 p-[1px] bg-gradient-to-tl from-primary via-secondary  to-success">

                        <div class="  p-6  text-base-100">
                            <div class="">
                                <Icon name="ph:bank-duotone" size="40" />
                            </div>
                            <h3 class=" mt-3 mb-1 font-bold text-xl">
                                Prop Firm coupon codes
                            </h3>
                            <p>

                                Get the best deals out of your purchases with our funded account promo codes
                            </p>
                        </div>
                    </div>
                    <div class=" mt-3 p-[1px] bg-gradient-to-bl from-primary via-secondary  to-success">

                        <div class=" p-6  text-base-100">
                            <div class="">
                                <Icon name="ph:tag-duotone" size="40" />
                            </div>
                            <h3 class=" mt-3 mb-1 font-bold text-xl">
                                Dicount codes for tools
                            </h3>
                            <p>
                                From charting tools to backtesting, get great discounts and perks

                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full ">
                    <NuxtLink to="/promo" class="  btn btn-accent max-md:btn-block mt-6">View coupon
                        codes
                        <Icon name="ph:arrow-right" />
                    </NuxtLink>
                </div>
            </div>
            <div class="px-6 hidden md:block relative">
                <div class="mockup-phone">
                    <div
                        class="absolute top-3 -left-3 size-16 rounded shadow-xl bg-primary shadow-primary transform -rotate-[135deg] z-1">
                    </div>
                    <div
                        class="absolute top-3 -left-16 size-16 rounded shadow-xl bg-secondary shadow-secondary transform rotate-[135deg]  z-2">
                    </div>
                    <div
                        class="absolute bottom-3 -right-3 size-16 rounded shadow-xl bg-success shadow-success transform rotate-[135deg] z-1">
                    </div>
                    <div
                        class="absolute bottom-3 -right-16 size-16 rounded shadow-xl bg-neutral shadow-neutral transform -rotate-[135deg]  z-2">
                    </div>
                    <h2
                        class="text-9xl text-base-content/20 transform rotate-90  font-bold absolute top-1/2 right-2/4 ">
                        W2025</h2>
                    <h2
                        class="text-9xl text-base-content/20 transform rotate-90  font-bold absolute bottom-1/2 left-1/2 ">
                        GEM10</h2>
                    <div class="mockup-phone-camera"></div>
                    <div class="mockup-phone-display">
                        <img alt="wallpaper" :src="i" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

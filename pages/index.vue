<!-- homepage (you can delete this page to start your project) -->
<script lang="ts" setup>
definePageMeta({
    layout: 'default'
})
</script>

<template>
    <div class="px-6 pt-18    inset-0 bg-radial-pattern">

        <div class="container pb-12 flex-col flex justify-center items-center mx-auto">
            <div
                class="badge mb-4 shadow-md shadow-secondary badge-secondary uppercase flex items-center font-bold text-md min-lg:badge-xl font-mono mx-auto">
                <Icon name="ph:rocket-launch-duotone" />
                Launch
                week
            </div>
            <h1
                class="text-center font-display font-bold min-sm:text-6xl text-5xl text-pretty min-md:text-7xl  min-lg:text-8xl">
                Your <span class="text-primary">trusted resource</span> for forex trading excellence
            </h1>
            <div class="max-w-2xl mt-8 w-full flex flex-col justify-center items-center gap-8">
                <div class="mt-3 p-6  rounded-box  bg-base-100 w-full  min-md:w-3/4">
                    <div class="">
                        <Icon name="ph:chart-line-duotone" size="40" class="text-primary" />
                    </div>
                    <h3 class="font-display mt-3 mb-1 font-bold text-xl">
                        Learn how to learn stuff
                    </h3>
                    <p class="text-base-content/80">

                        Proper guidance on learning how to trade. We don't teach you trading, rather we teach you how to
                        learn
                        trading
                    </p>
                </div>
                <div class="flex flex-col min-md:flex-row gap-x-8">
                    <div class="mt-3 p-6  rounded-box  bg-base-100  w-full  min-md:w-1/2">
                        <div class="">
                            <Icon name="ph:star-duotone" size="40" class="text-primary" />
                        </div>
                        <h3 class="font-display mt-3 mb-1 font-bold text-xl">
                            Prop Firm reviews
                        </h3>
                        <p class="text-base-content/80">

                            Get honest reviews of prop firms we have workedwith,so you know what to expect
                        </p>
                    </div>
                    <div class="mt-3 p-6  rounded-box  bg-base-100  w-full  min-md:w-1/2">
                        <div class="">
                            <Icon name="ph:tag-duotone" size="40" class="text-primary" />
                        </div>
                        <h3 class="font-display mt-3 mb-1 font-bold text-xl">
                            Get coupons and discounts
                        </h3>
                        <p class="text-base-content/80">

                            Get exclusive discounts and coupons for prop firm challenges and other trading tools

                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>

</script>
<template>
    <div class="">
        <div class="   flex flex-col lg:flex-row ">

            <div class="xl:pl-12 pt-12 lg:px-6 lg:!w-4/5 w-full">
                <h1 class="text-3xl px-6 lg:px-0 font-bold font-display  ">Featured Today</h1>
                <div class="mt-6 flex flex-wrap items-center md:flex-nowrap gap-4">
                    <div class="md:w-1/2 w-full xl:w-3/5 bg-primary  text-black">
                        <div
                            class="p-6  border-b-0.5 transition  border-b-base-100 hover:bg-black hover:text-primary border border-transparent hover:border-primary">

                            <h2 class="font-black font-condensed md:text-5xl text-4xl xl:text-6xl">How to actually trade
                                options the right way</h2>
                            <p class="opacity-80  mt-6 font-medium xl:text-lg text-base line-clamp-2">Lorem ipsum dolor,
                                sit
                                amet
                                consectetur
                                adipisicing
                                elit. Quod
                                temporibus est
                                vel aut assumenda, dolorem vero similique eligendi mollitia? Expedita!</p>
                            <p class="mt-3 font-bold opacity-85 text-sm">
                                <NuxtTime :datetime="new Date()" year="numeric" month="long" day="numeric"
                                    class="mt-12 font-bold opacity-85 text-sm" />
                            </p>
                        </div>

                        <div
                            class="p-6 border-t-0.5 transition  border-t-base-100 hover:bg-black hover:text-primary border border-transparent hover:border-primary">

                            <h2 class="font-black font-condensed md:text-5xl text-4xl xl:text-6xl">The best traders are
                                the
                                patient ones</h2>
                            <p class="opacity-80  mt-6 font-medium xl:text-lg text-base line-clamp-2">Lorem ipsum dolor,
                                sit
                                amet
                                consectetur
                                adipisicing
                                elit. Quod
                                temporibus est
                                vel aut assumenda, dolorem vero similique eligendi mollitia? Expedita!</p>
                            <p class="mt-3 font-bold opacity-85 text-sm">
                                <NuxtTime :datetime="new Date()" year="numeric" month="long" day="numeric"
                                    class="mt-12 font-bold opacity-85 text-sm" />
                            </p>
                        </div>
                    </div>
                    <div class="xl:w-2/5 lg:h-max xl:h-auto md:w-1/2 w-full bg-secondary  text-black">
                        <img src="/stock-1.jpg" alt="" class="mb-2">
                        <div class="p-6">
                            <p class="uppercase tracking-widest mb-2">BY GEMTRADER</p>
                            <h2 class="font-black underline font-display md:text-4xl text-3xl xl:text-5xl">Your mentors
                                are
                                scamming you</h2>

                            <p class="mt-12 font-bold opacity-85 text-sm">
                                <NuxtTime :datetime="new Date()" year="numeric" month="long" day="numeric"
                                    class="mt-12 font-bold opacity-85 text-sm" />
                            </p>
                        </div>
                    </div>
                </div>

                <h1 class=" mt-12 px-6 lg:px-0 text-3xl font-bold font-display  ">Featured Firms</h1>
                <div
                    class="mt-6 px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 pb-12 gap-3">
                    <div v-for="i, key in useRange(0, 3)" :key="key"
                        class=" p-6 bg-base-200 shadow-2xl shadow-base-200">
                        <!-- <p class="uppercase tracking-widest mb-2">BY GEMTRADER</p> -->
                        <h2 class="font-black font-display text-xl">Goat Funded Trader</h2>

                        <div class="flex mt-3">
                            <Rating :rating="5" size="lg" :id="`rating-${key}`" theme="primary" />
                        </div>

                        <NuxtLink to="/" class="underline flex items-center-safe gap-x-2 mt-3 text-base-content">Read
                            review
                            <Icon name="ph:arrow-right" />
                        </NuxtLink>
                    </div>


                </div>

            </div>
            <div class="lg:w-2/5 w-full !min-h-full bg-white text-black p-3 py-12">
                <h1 class="text-5xl font-bold font-condensed  ">Popular</h1>
                <div class="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
                    <div v-for="i in useRange(0, 5)" class="flex bg-stone-100 p-3 gap-x-2">

                        <div class="w-full">
                            <NuxtTime :datetime="new Date()" year="numeric" month="long" day="numeric"
                                class="mb-6 opacity-85 text-sm" />
                            <h2 class="text-lg/tight xl:text-xl/tight font-display opacity-90   ">How to setup
                                copy-trading
                                on MT5
                            </h2>
                            <p class="line-clamp-1 text-sm opacity-80">Lorem ipsum, dolor sit amet consectetur
                                adipisicing
                                elit.
                                Facere
                                deserunt optio minima placeat, qui voluptates blanditiis dolorum voluptatem culpa quia.
                            </p>

                        </div>
                    </div>

                </div>
                <h1 class="text-2xl mt-12  font-display  ">Codes of the week</h1>
                <div class=" flex flex-wrap gap-4 w-full mt-3">
                    <div class="bg-black rounded-xl text-white p-3 ">

                        <h2
                            class="xl:text-5xl text-3xl !my-0 !py-0 font-condensed font-bold opacity-90  text-secondary ">
                            BLESS2025
                        </h2>

                    </div>
                    <div class="bg-black rounded-xl text-white p-3 ">

                        <h2
                            class="xl:text-5xl text-3xl !my-0 !py-0 font-condensed font-bold opacity-90  text-secondary ">
                            NEWCOMER
                        </h2>

                    </div>
                    <div class="bg-black rounded-xl text-white p-3 ">

                        <h2
                            class="xl:text-5xl text-3xl !my-0 !py-0 font-condensed font-bold opacity-90  text-secondary ">
                            BLESS2025
                        </h2>

                    </div>
                    <div class="bg-black rounded-xl text-white p-3 ">

                        <h2
                            class="xl:text-5xl text-3xl !my-0 !py-0 font-condensed font-bold opacity-90  text-secondary ">
                            NEWCOMER
                        </h2>

                    </div>
                    <div class="bg-black rounded-xl text-white p-3 ">

                        <h2
                            class="xl:text-5xl text-3xl !my-0 !py-0 font-condensed font-bold opacity-90  text-secondary ">
                            BLESS2025
                        </h2>

                    </div>
                    <div class="bg-black rounded-xl text-white p-3 ">

                        <h2
                            class="xl:text-5xl text-3xl !my-0 !py-0 font-condensed font-bold opacity-90  text-secondary ">
                            NEWCOMER
                        </h2>

                    </div>
                    <div class="bg-black rounded-xl text-white p-3 ">

                        <h2
                            class="xl:text-5xl text-3xl !my-0 !py-0 font-condensed font-bold opacity-90  text-secondary ">
                            BLESS2025
                        </h2>

                    </div>
                    <div class="bg-black rounded-xl text-white p-3 ">

                        <h2
                            class="xl:text-5xl text-3xl !my-0 !py-0 font-condensed font-bold opacity-90  text-secondary ">
                            NEWCOMER
                        </h2>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

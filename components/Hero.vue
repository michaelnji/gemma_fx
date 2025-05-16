<script lang="ts" setup>

</script>
<template>
    <div class="">
        <div class="   flex flex-col lg:flex-row ">

            <div class="xl:pl-12 pt-3 px-3 md:px-6 lg:!w-4/5 w-full">
                <h1 class="text-4xl lg:text-5xl  font-bold font-condensed  ">Featured Today</h1>
                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                    <div v-for="i, key in useRange(1, 3)" :class="{ 'md:!hidden xl:!inline': key === 0 }"
                        class="w-full bg-base-100 ">
                        <img src="https://cdn.sanity.io/images/1h1ec0mp/production/461903a5ddd82afd7385fdf8c59167e6ad259313-1400x700.png?w=1400&h=700&fm=webp"
                            alt="" class="">
                        <div class="p-4 border-l-2 border-r-2 border-b-2 border-base-300">
                            <p class="uppercase tracking-widest mb-2">BY GEMTRADER</p>
                            <h2 class="font-black text-pretty font-display  text-2xl">Your mentors
                                are
                                scamming you</h2>
                            <p class="mt-3 opacity-80 line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab mollitia amet sint eius
                                nemo voluptates debitis dicta harum repellat voluptatum distinctio cumque ullam, odio
                                totam laboriosam? Tempore eos qui obcaecati.
                            </p>
                            <p class="mt-3 font-bold opacity-85 text-sm">
                                <NuxtTime :datetime="new Date()" year="numeric" month="long" day="numeric"
                                    class="mt-12 font-bold opacity-85 text-sm" />
                            </p>
                        </div>
                    </div>
                </div>

                <div class="my-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                    <div v-for="i, key in useRange(1, 3)" :class="{ 'md:!hidden xl:!inline': key === 0 }"
                        class="w-full bg-secondary text-secondary-content ">

                        <div class="p-4">
                            <p class="mb-2 font-bold text-secondary bg-secondary-content py-1 px-3 w-max">OPINION</p>
                            <h2
                                class="font-bold underline text-pretty font-condensed text-4xl md:text-5xl  xl:text-6xl">
                                Why trading is the same
                                as
                                gambling</h2>

                            <p class="mt-3 font-bold opacity-85 text-sm">
                                <NuxtTime :datetime="new Date()" year="numeric" month="long" day="numeric"
                                    class="mt-12 font-bold opacity-85 text-sm" />
                            </p>
                        </div>
                    </div>
                </div>



            </div>
            <div class="lg:w-2/5 w-full !min-h-full bg-white text-black p-3 py-12">
                <h1 class="text-5xl font-bold font-condensed  ">Popular</h1>
                <div class="mt-6 grid grid-cols-1  gap-3">
                    <div v-for="i, key in useRange(0, 4)" :key="key" class="flex  bg-stone-500/5 p-4 gap-x-2">

                        <div class="">
                            <NuxtTime :datetime="new Date()" year="numeric" month="long" day="numeric"
                                class="mb-6 opacity-85 text-sm" />
                            <h2 class="text-lg/tight xl:text-xl/tight font-display opacity-90   ">How to setup
                                copy-trading
                                on MT5
                            </h2>
                            <p class="line-clamp-2 text-sm opacity-80">Lorem ipsum, dolor sit amet consectetur
                                adipisicing
                                elit.
                                Facere
                                deserunt optio minima placeat, qui voluptates blanditiis dolorum voluptatem culpa quia.
                            </p>

                        </div>
                        <img src="https://cdn.sanity.io/images/1h1ec0mp/production/461903a5ddd82afd7385fdf8c59167e6ad259313-1400x700.png?w=1400&h=700&fm=webp"
                            alt="" class=" hidden md:inline lg:hidden xl:inline w-[10rem] rounded-xl">
                    </div>

                </div>

            </div>
        </div>

    </div>
</template>

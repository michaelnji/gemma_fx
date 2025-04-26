    <script lang="ts" setup>
    const tags = ['analysis', 'forex', 'scams-alert']
</script>
<template>
    <div class="p-6 border border-stone-700/60 w-full">
        <div class="flex mb-3 items-center gap-3">
            <span v-for="tag in tags" class="badge  font-bold italic badge-secondary font-mono">
                {{ tag }}
            </span>
        </div>
        <h2 class="font-bold text-2xl text-pretty font-acro">Your fx gurus are scamming you</h2>
        <p class="mt-2 text-secondary font-bold font-mono">12th April 2025</p>
        <p class="mt-4 text-stone-200/80 text-pretty text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi aut illo eos id laborum recusandae
            ullam esse iusto excepturi!
        </p>
        <div class="mt-2 flex items-center gap-x-1">
            <p class=" text-stone-200/70 font-mono">[<span class="italic text-secondary">Gemtrader</span>]</p>

        </div>
        <div class="mt-6 flex items-center justify-between gap-x-4 w-full">
            <button class=" btn btn-primary btn-block  btn-outline ">Read article</button>

        </div>
    </div>
</template>

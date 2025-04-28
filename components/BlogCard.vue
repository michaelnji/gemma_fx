    <script lang="ts" setup>
    const tags = ['analysis', 'forex', 'scams-alert']
</script>
<template>
    <div class="p-6 border border-stone-700/80 hover:border-stone-500/80 w-full">
        <div class="flex mb-3 items-center flex-wrap gap-3">
            <span v-for="tag in tags" class="badge  font-bold  badge-secondary font-mono">
                #{{ tag }}
            </span>
        </div>
        <h2 class="font-bold text-2xl text-pretty font-display">Your fx gurus are scamming you</h2>
        <div class="flex items-center gap-x-3">
            <p class="mt-2  ">12th April 2025</p>
            <span class="     text-accent  flex items-center gap-x-1 ">
                <Icon name="ph:book-bookmark-duotone" size="18" /> Featured
            </span>
        </div>
        <p class="mt-4 text-stone-200/80 text-pretty !text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi aut illo eos id laborum recusandae
            ullam esse iusto excepturi!
        </p>
        <div class="mt-2 flex items-center gap-x-1">
            <span class="    font-bold font-mono  text-secondary  flex items-center gap-x-1 ">
                <Icon name="solar:pen-2-line-duotone" size="18" /> Gemtrader
            </span>

        </div>
        <div class="mt-6 flex items-center justify-between gap-x-4 w-full">
            <button class=" btn btn-primary btn-block  btn-outline ">Read article</button>

        </div>
    </div>
</template>

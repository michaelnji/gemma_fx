    <script lang="ts" setup>
    const tags = ['analysis', 'forex']
</script>
<template>
    <div
        class="  p-[1.5px] hover:!bg-gradient-to-tr hover:from-primary hover:via-secondary  hover:to-success bg-stone-700/80 transition duration-300 w-full">
        <div class="p-6 bg-base-100  cursor-pointer  ">
            <div class="flex mb-3 items-center flex-wrap gap-3">
                <span v-for="tag in tags" class="badge  font-bold badge-outline font-mono">
                    #{{ tag }}
                </span>
            </div>
            <h2 class="font-bold text-2xl text-pretty font-display">Your fx gurus are scamming you</h2>
            <div class="flex items-center gap-x-3">
                <p class="mt-2  ">12th April 2025</p>
                <span class="     text-secondary  flex items-center gap-x-1 ">
                    <Icon name="ph:book-bookmark-duotone" size="18" /> Featured
                </span>
            </div>
            <p class="mt-4 text-stone-200/80 text-pretty !text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi aut illo eos id laborum recusandae
                ullam esse iusto excepturi!
            </p>
            <div class="mt-2 flex items-center gap-x-1">
                <span class="    font-bold   flex items-center gap-x-1 ">
                    <Icon name="solar:pen-2-line-duotone" size="18" /> Gemtrader
                </span>

            </div>
            <!-- <div class="mt-6 flex items-center justify-between gap-x-4 w-full">
            <button class=" btn btn-primary btn-block  btn-outline ">Read article</button>

        </div> -->
        </div>
    </div>
</template>

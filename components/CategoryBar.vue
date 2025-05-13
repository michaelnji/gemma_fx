    <script lang="ts" setup>
    const emit = defineEmits<(e: 'category-change', tab: string) => void>()
    defineProps<{
        tab: string
    }>()


    function changeTabs(tab: string
    ) { emit("category-change", tab) }
</script>
<template>

    <div class=" w-full bg-base-100 ">
        <div class=" w-screen justify-center     flex items-center ">
            <button @click="() => changeTabs('featured')"
                class="flex hover:bg-accent/80 cursor-pointer w-full justify-center hover:text-accent-content font-semibold  p-4 transition  items-center-safe gap-x-2 col-auto"
                :class="{ '!bg-accent !text-accent-content': tab === 'featured' }">

                <div class=" md:hidden">
                    <Icon name="ph:star-duotone" />
                </div>
                <p class="hidden md:block text-lg  font-medium font-display">Featured</p>
            </button>
            <!-- <button @click="() => changeTabs('analysis')" :class="{
    '!bg-accent !text-accent-content': tab === 'analysis'
}" class=" flex hover:bg-accent/80 cursor-pointer w-full justify-center hover:text-accent-content font-semibold p-4 transition items-center
                    gap-x-2">

                <div class=" md:hidden">
                    <Icon name="ph:chart-line-up-duotone" />
                </div>
                <p class="hidden md:block text-lg  font-medium font-display"> Analysis</p>
            </button> -->
            <button @click="() => changeTabs('rookies')" :class="{
    '!bg-accent !text-accent-content': tab === 'rookies'
}" class="flex hover:bg-accent/80 cursor-pointer w-full justify-center hover:text-accent-content font-semibold  p-4 transition  items-center-safe gap-x-2">

                <div class=" md:hidden">
                    <Icon name="ph:baby-duotone" />
                </div>
                <p class="hidden md:block text-lg  font-medium font-display">Novice</p>
            </button>
            <button @click="() => changeTabs('software')" :class="{
                '!bg-accent !text-accent-content': tab === 'software'
            }"
                class="flex hover:bg-accent/80 cursor-pointer w-full justify-center hover:text-accent-content font-semibold  p-4 transition  items-center-safe gap-x-2">

                <div class=" md:hidden">
                    <Icon name="ph:laptop-duotone" />
                </div>
                <p class="hidden md:block text-lg  font-medium font-display">Sotfware</p>
            </button>
            <button @click="() => changeTabs('tools')" :class="{
                '!bg-accent !text-accent-content': tab === 'tools'
            }"
                class="flex hover:bg-accent/80 cursor-pointer w-full justify-center hover:text-accent-content font-semibold  p-4 transition  items-center-safe gap-x-2">

                <div class=" md:hidden">
                    <Icon name="ph:wrench-duotone" />
                </div>
                <p class="hidden md:block text-lg  font-medium font-display"> Tools</p>
            </button>
        </div>
    </div>
</template>

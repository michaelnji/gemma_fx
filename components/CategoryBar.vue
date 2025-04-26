    <script lang="ts" setup>
    const emit = defineEmits<(e: 'category-change', tab: string) => void>()
    defineProps<{
        tab: string
    }>()


    function changeTabs(tab: string
    ) { emit("category-change", tab) }
</script>
<template>

    <div class=" w-full">
        <div class=" w-screen justify-center     flex items-center ">
            <button @click="() => changeTabs('featured')"
                class="flex hover:bg-primary/80 cursor-pointer w-full justify-center hover:text-primary-content  p-4 transition  items-center gap-x-3 col-auto"
                :class="{ '!bg-primary !text-primary-content': tab === 'featured' }">
                <div class="hidden md:inline-flex">
                    <Icon name="ph:star-duotone" size="30" />
                </div>
                <div class=" md:hidden">
                    <Icon name="ph:star-duotone" />
                </div>
                <p class="hidden md:block text-lg  font-black">Featured</p>
            </button>
            <button @click="() => changeTabs('analysis')" :class="{
                '!bg-primary !text-primary-content': tab === 'analysis'
            }" class=" flex hover:bg-primary/80 cursor-pointer w-full justify-center hover:text-primary-content p-4 transition items-center
                    gap-x-3">
                <div class="hidden md:inline-flex">
                    <Icon name="ph:chart-line-up-duotone" size="30" />
                </div>
                <div class=" md:hidden">
                    <Icon name="ph:chart-line-up-duotone" />
                </div>
                <p class="hidden md:block text-lg  font-black"> Analysis</p>
            </button>
            <button @click="() => changeTabs('rookies')" :class="{
                '!bg-primary !text-primary-content': tab === 'rookies'
            }"
                class="flex hover:bg-primary/80 cursor-pointer w-full justify-center hover:text-primary-content  p-4 transition  items-center gap-x-3">
                <div class="hidden md:inline-flex">
                    <Icon name="ph:baby-duotone" size="30" />
                </div>
                <div class=" md:hidden">
                    <Icon name="ph:baby-duotone" />
                </div>
                <p class="hidden md:block text-lg  font-black">Rookies</p>
            </button>
            <button @click="() => changeTabs('software')" :class="{
                '!bg-primary !text-primary-content': tab === 'software'
            }"
                class="flex hover:bg-primary/80 cursor-pointer w-full justify-center hover:text-primary-content  p-4 transition  items-center gap-x-3">
                <div class="hidden md:inline-flex">
                    <Icon name="ph:laptop-duotone" size="30" />
                </div>
                <div class=" md:hidden">
                    <Icon name="ph:laptop-duotone" />
                </div>
                <p class="hidden md:block text-lg  font-black">Sotfware</p>
            </button>
            <button @click="() => changeTabs('tools')" :class="{
                '!bg-primary !text-primary-content': tab === 'tools'
            }"
                class="flex hover:bg-primary/80 cursor-pointer w-full justify-center hover:text-primary-content  p-4 transition  items-center gap-x-3">
                <div class="hidden md:inline-flex">
                    <Icon name="ph:toolbox-duotone" size="30" />
                </div>
                <div class=" md:hidden">
                    <Icon name="ph:toolbox-duotone" />
                </div>
                <p class="hidden md:block text-lg  font-black"> Tools</p>
            </button>
        </div>
    </div>
</template>

    <script lang="ts" setup>
    const tags = ['analysis', 'forex']
</script>
<template>
    <div class=" w-full  text-primary-content">
        <div class=" bg-base-300 ">
            <div
                class=" w-full border-4  border-base-300 duration-300 cursor-pointer  transition-all md:hover:-translate-4 -translate-3  group ">
                <div
                    class="p-3 bg-base-200 text-base-content border-b-4 border-base-300 flex justify-between items-center gap-x-2">
                    <h2 class="font-display text-xl">
                        Article
                    </h2>
                    <span
                        class="badge badge-primary border border-primary-content font-bold sh-badge transition-all">Featured</span>
                </div>
                <div class="p-6 bg-base-100 text-base-content">
                    <h2 class="font-display text-primary text-2xl">
                        Forex trading is Gambling
                    </h2>
                    <p class="mt-1 opacity-90">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem hic officiis!
                        Quibusdam molestiae amet qui dignissimos deserunt dolor sed.
                    </p>

                    <div class="flex py-3 justify-between items-center gap-x-2">

                        <div class="flex gap-3  items-center">
                            <span class=" badge  font-mono" v-for="tag in tags">#{{
                                tag }}</span>
                            <span class=" badge  font-mono">+2</span>
                        </div>

                    </div>
                </div>
                <div
                    class="p-6 border-t-4 group-hover:border-base-300 transition-all border-base-300/80 border-dashed bg-base-100 text-base-content flex items-center justify-between gap-x-3">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-200 w-8 rounded-full ring-2 ring-offset-2">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                    </div>
                    <div class="flex gap-x-3 items-center-safe">
                        <div class="flex gap-x-2 items-center">
                            <Icon name="ph:eye-duotone" /> <span class="font-bold font-mono">24.0K</span>
                        </div>
                        <div class="flex gap-x-2 items-center">
                            <Icon name="ph:heart-fill" class="text-primary" /> <span
                                class="font-bold font-mono">2.6K</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.sh-badge {
    box-shadow: 2px 2px var(--color-primary-content);
}

.group:hover .sh-badge {
    box-shadow: 5px 5px var(--color-primary-content);

}
</style>
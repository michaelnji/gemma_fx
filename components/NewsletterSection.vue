            <script lang="ts" setup>

</script>
<template>
    <div class="container px-6 max-w-5xl mx-auto">
        <div class=" bg-base-100 border border-stone-700/60 boom  ">
            <div class="">
                <div class=" p-6">
                    <h2 class="font-extrabold text-6xl font-mono">

                    </h2>
                    <h1 class="  !font-bold font-display text-4xl md:text-5xl text-pretty py-1 ">
                        <b> Premium
                            articles, </b>right in your inbox.
                    </h1>
                    <div class="mt-8">
                        <div class="flex flex-col gap-x-3 gap-y-6 md:flex-row items-center gap-x- w-full max-w-3xl">
                            <div>
                                <label class="input validator ">
                                    <Icon name="ph:user-duotone" />
                                    <input type="text" placeholder="Jane Doe" required class=" input-xl " />
                                </label>
                                <div class="validator-hint hidden">Enter a name</div>
                            </div>
                            <div>
                                <label class="input validator ">
                                    <Icon name="ph:envelope-duotone" />
                                    <input type="email" placeholder="mail@site.com" required class=" input-xl " />
                                </label>
                                <div class="validator-hint hidden">Enter valid email address</div>
                            </div>
                            <button class="btn btn-accent uppercase  max-sm:w-full  ">Join Newsletter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.boom {
    box-shadow: 5px 5px 0px var(--color-primary),
        10px 10px 0px var(--color-secondary),
        15px 15px 0px var(--color-success);

}
</style>
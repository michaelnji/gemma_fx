    <script lang="ts" setup>
    import img from '../assets/images/pf.png';
</script>
<template>
    <div class="">
        <div class="inset-0 bg-radial-pattern px-6">
            <div class="container mx-auto py-12 md:pt-24">

                <h1 class="font-extrabold text-center text-5xl lg:text-6xl font-display ">
                    Affiliate <span
                        class="bg-clip-text bg-gradient-to-t from-secondary-content via-secondary  to-accent text-transparent ">
                        Promo codes</span>
                </h1>
            </div>
        </div>

        <div>
            <div class="px-6 container mx-auto !pt-6 md:pt-12">

                <div class="overflow-x-auto !w-full ">
                    <table class="table w-max min-w-full p-6 bg-base-200">
                        <!-- head -->
                        <thead>
                            <tr>
                                <!-- <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th> -->
                                <th>Name</th>
                                <th>Status</th>
                                <th>Type</th>

                                <th>Perks</th>
                                <th>Activated on</th>
                                <th>Code</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>

                                <td>
                                    <div class="flex items-center gap-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle h-12 w-12">
                                                <img :src="img" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">Replay.fx</div>
                                            <div class="text-sm opacity-50">backtesting</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="font-medium py-1 px-3 text-sm bg-success/10 text-success uppercase">
                                        Active
                                    </span>
                                </td>
                                <td>
                                    <span
                                        class="font-medium py-1 px-3 text-sm bg-secondary/10 text-secondary uppercase">
                                        Code
                                    </span>
                                </td>
                                <td>
                                    <div class="max-w-xs">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit
                                        doloremque beatae.
                                    </div>
                                </td>
                                <td>
                                    <div class="max-w-xs">
                                        12/03/2025
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        <span
                                            class="font-medium py-1 px-3 text-sm bg-primary/10 text-primary uppercase flex items-center-safe gap-x-2 w-max">
                                            GEM20
                                            <Icon name="ph:copy-simple-duotone" />
                                        </span>
                                    </div>
                                </td>
                                <th>
                                    <button class=" text-primary  link flex items-center gap-x-2">Purchase via link
                                        <Icon name="ph:share-duotone" size="18" />
                                    </button>
                                </th>
                            </tr>
                            <tr>

                                <td>
                                    <div class="flex items-center gap-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle h-12 w-12">
                                                <img :src="img" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">Prop Funded</div>
                                            <div class="text-sm opacity-50">Prop firm</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="font-medium py-1 px-3 text-sm bg-success/10 text-success uppercase">
                                        Active
                                    </span>
                                </td>
                                <td>
                                    <span
                                        class="font-medium py-1 px-3 text-sm bg-secondary/10 text-secondary uppercase">
                                        Link
                                    </span>
                                </td>
                                <td>
                                    <div class="max-w-xs">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit
                                        doloremque beatae.
                                    </div>
                                </td>
                                <td>
                                    <div class="max-w-xs">
                                        12/03/2025
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        N/A
                                    </div>
                                </td>
                                <th>
                                    <button class=" text-primary  link flex items-center gap-x-2">Purchase via link
                                        <Icon name="ph:share-duotone" size="18" />
                                    </button>
                                </th>
                            </tr>


                        </tbody>


                    </table>
                </div>
                <div class="mt-8">
                    <div class="font-medium p-4 max-w-sm  bg-primary/10 text-primary w-max mx-auto">
                        <Icon name="ph:info-duotone" size="24" />
                        <p class="mt-3">Every time you use a code or link from my list, I get a small commision. This
                            helps me to keep Gemma_fx going</p>
                    </div>
                </div>
                <div class="my-12 md:mt-24 xl:mt-48">
                    <NewsletterSection />
                </div>
            </div>
        </div>
    </div>
</template>

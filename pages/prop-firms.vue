    <script lang="ts" setup>
    import img from '../assets/images/pf.png'
</script>
<template>
    <div class="">
        <div class="inset-0 bg-radial-pattern px-6">
            <div class="container mx-auto py-12 md:pt-24">

                <h1 class="font-extrabold text-center text-6xl lg:text-6xl font-display ">
                    Prop firm <span
                        class="bg-clip-text bg-gradient-to-t from-secondary-content via-secondary  to-accent text-transparent ">
                        Reviews</span>
                </h1>
            </div>
        </div>
        <div class="my-12 container max-w-4xl mx-auto px-6">
            <div class="p-[1px] bg-gradient-to-bl from-primary via-secondary  to-success">

                <div class=" bg-base-200 p-6 ">
                    <h1 class="t font-display font-bold text-2xl md:text-3xl text-pretty text-secondary ">
                        Featured
                    </h1>
                    <div class="mt-4 space-y-2">
                        <div class="flex gap-x-4">
                            <div class="min-w-max">
                                <div class="size-18 rounded-full overflow-hidden">
                                    <img :src="img" alt="">
                                </div>
                            </div>
                            <div class="">
                                <h2 class="font-bold text-xl">Prop Funded</h2>
                                <div class="mt-2 flex items-center gap-x-2">
                                    <Rating :rating="4.5" id="pf-featured" theme="yellow-500" size="xs" />
                                    <span class="text-base-content/80 font-bold hidden md:inline-flex">4.5/5
                                        rating</span>
                                </div>
                            </div>
                        </div>
                        <div class=" mt-4 w-max max-w-full text-sm bg-primary/10 text-primary py-2 px-2 flex  gap-x-2">
                            <Icon name="ph:star-fill" size="18" /> <span class="!py0"> balance based
                                drawdown</span>
                        </div>
                        <div class=" text-base-content/80 mt-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, placeat velit!
                            Nulla, cupiditate repellat doloribus ea ratione sunt necessitatibus quae autem
                            sapiente molestias ex ad id ipsam nam neque voluptas.
                        </div>
                        <div class="flex mt-6 gap-4 flex-col md:flex-row">
                            <button class=" btn btn-primary max-md:btn-block     ">View full review
                                <Icon name="ph:arrow-right" />
                            </button>
                            <button class=" btn btn-accent btn-outline max-md:btn-block     ">View on Prop
                                firm Match
                                <Icon name="ph:share" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="px-6 container mx-auto !pt-12 md:pt-48">
                <h1 class="mb-6 font-display font-bold text-3xl md:text-4xl text-pretty ">
                    Our Reviews
                </h1>
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
                                <th>Firm</th>
                                <th>Rating</th>
                                <th>Favorite feature</th>
                                <th>Worst feature</th>
                                <th>Regulated?</th>
                                <th></th>
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
                                            <div class="font-bold">Prop Funded</div>
                                            <div class="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class=" flex flex-col  gap-y-1">
                                        <Rating :rating="3" id="0" theme="yellow-500" size="xs" />
                                        <span class="text-base-content/50 font-bold">3/5
                                            rating</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="max-w-xs">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tempora ratione
                                        dolore, error repudiandae quis id dolorum eos veritatis odit.
                                    </div>
                                </td>
                                <td>
                                    <div class="max-w-xs">
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        YES
                                    </div>
                                </td>
                                <th>
                                    <button class="btn btn-primary btn-sm">Read full review</button>
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
                                            <div class="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class=" flex flex-col  gap-y-1">
                                        <Rating :rating="0.5" id="pf" theme="yellow-500" size="xs" />
                                        <span class="text-base-content/50 font-bold">0.5/5
                                            rating</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="max-w-xs">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tempora ratione
                                        dolore, error repudiandae quis id dolorum eos veritatis odit.
                                    </div>
                                </td>
                                <td>
                                    <div class="max-w-xs">
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        YES
                                    </div>
                                </td>
                                <th>
                                    <button class="btn btn-primary btn-sm">Read full review</button>
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
                                            <div class="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class=" flex flex-col  gap-y-1">
                                        <Rating :rating="4.5" id="pfm" theme="yellow-500" size="xs" />
                                        <span class="text-base-content/50 font-bold">4.5/5
                                            rating</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="max-w-xs">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tempora ratione
                                        dolore, error repudiandae quis id dolorum eos veritatis odit.
                                    </div>
                                </td>
                                <td>
                                    <div class="max-w-xs">
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        YES
                                    </div>
                                </td>
                                <th>
                                    <button class="btn btn-primary btn-sm">Read full review</button>
                                </th>
                            </tr>

                        </tbody>


                    </table>
                </div>
                <div class="my-12 md:mt-24 xl:mt-48">
                    <NewsletterSection />
                </div>
            </div>
        </div>
    </div>
</template>

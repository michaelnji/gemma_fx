<script lang="ts" setup>
import type { Coupon } from '~/server/types/coupon.type';
import type { StatusCodes, ServerResponse } from 'nexus-req'
const isLoading = ref(true)
const coupons = ref<Coupon[] | undefined>()
onMounted(async () => {
    try {


        isLoading.value = true

        const couponResp = await $fetch<ServerResponse<StatusCodes, Coupon[]>>('/api/coupon-codes/fetch')

        if (couponResp.ok && couponResp.data) {

            coupons.value = couponResp.data
            console.log(coupons.value)
        }
        isLoading.value = false


    } catch (error) {
        throw createError(`${error}`)
    }
})
</script>
<template>
    <div>
        <div class="px-6 container mx-auto !pt-6 md:pt-12">

            <div class="overflow-x-auto !w-full ">
                <table v-if="!isLoading && coupons && coupons.length > 0"
                    class="table w-max min-w-full p-6 bg-base-200">
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
                            <th>Added on</th>
                            <th>Code</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="coupon in coupons">

                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle h-12 w-12">
                                            <NuxtImg
                                                :src="`https://cdn.brandfetch.io/${coupon.software_url}/w/400/h/400?c=1idunDyDtbQdblaeYsE`"
                                                :custom="true" v-slot="{ src, isLoaded, imgAttrs }">

                                                <!-- Show the actual image when loaded -->
                                                <img v-if="isLoaded" v-bind="imgAttrs" :src="src">

                                                <!-- Show a placeholder while loading -->
                                                <div class="h-12 w-12 skeleton bg-base-300 lg:bg-base-200 "
                                                    v-if="!isLoaded">
                                                </div>
                                            </NuxtImg>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{{ coupon.name }}</div>
                                        <div class="text-sm opacity-50">{{ coupon.software_type }}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="font-medium py-1 px-3 text-sm bg-success/10 text-success uppercase">
                                    {{ coupon.status.toUpperCase() }}
                                </span>
                            </td>
                            <td>
                                <span class="font-medium py-1 px-3 text-sm bg-secondary/10 text-secondary uppercase">
                                    {{ coupon.code ? "CODE" : "LINK" }}
                                </span>
                            </td>
                            <td>
                                <div class="max-w-xs">
                                    {{ coupon.perks }}
                                </div>
                            </td>
                            <td>
                                <div class="max-w-xs">
                                    <NuxtTime :datetime="coupon.publishedAt" year="numeric" month="long"
                                        day="numeric" />

                                </div>
                            </td>
                            <td>
                                <div class="">
                                    <PromoCopy :code="coupon.code" />
                                </div>
                            </td>
                            <th>
                                <NuxtLink :to="coupon.link" v-if="!coupon.code && coupon.link"
                                    class=" text-primary  link flex items-center gap-x-2">Purchase via link
                                    <Icon name="ph:share-duotone" size="18" />
                                </NuxtLink>
                                <NuxtLink target="_blank" :to="`https://${coupon.software_url}`" v-else
                                    class=" text-primary  link flex items-center gap-x-2">Visit website
                                    <Icon name="ph:share-duotone" size="18" />
                                </NuxtLink>
                            </th>
                        </tr>



                    </tbody>


                </table>
                <table v-if="isLoading" class="table w-max min-w-full p-6 bg-base-200">
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
                            <th>Added on</th>
                            <th>Code</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>


                        <tr v-for="l in useRange(0, 3)">

                            <td>
                                <div class="flex items-center gap-3">

                                    <div class="mask mask-squircle skeleton h-12 w-12">

                                    </div>

                                    <div>
                                        <div class="skeleton w-30 h-4"></div>
                                        <div class="skeleton w-15 h-4 mt-2"></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="skeleton w-20 h-6">

                                </div>
                            </td>
                            <td>
                                <div class="skeleton w-20 h-6"></div>
                            </td>
                            <td>
                                <div class="max-w-xs grid gap-2">
                                    <div v-for="i in useRange(1, 2)" class="skeleton w-2xs h-3"></div>
                                </div>
                            </td>
                            <td>
                                <div class="skeleton w-30 h-6">

                                </div>
                            </td>
                            <td>
                                <div class="skeleton w-20 h-6">

                                </div>
                            </td>
                            <th>
                                <div class="skeleton w-40 h-6">

                                </div>
                            </th>
                        </tr>


                    </tbody>


                </table>

            </div>
            <div class="mt-8" v-if="coupons && coupons.length > 0">
                <div class="font-medium p-4 max-w-xl  bg-primary/10 text-primary w-full mx-auto">
                    <Icon name="ph:info-duotone" size="24" />
                    <p class="mt-3">Every time you use a code or link from my list, I get a small commision. This
                        helps me to keep Gemma_fx going</p>
                </div>
            </div>

        </div>
    </div>
</template>

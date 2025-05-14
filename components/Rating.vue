<script lang="ts" setup>
const props = defineProps<{
    rating: number;
    size?: "lg" | "sm" | 'xs';
    id: string;
    theme?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'black'
}>();
const themeClass = computed(() => {
    switch (props.theme) {
        case 'primary':
            return 'bg-primary';
        case 'secondary':
            return 'bg-secondary';
        case 'success':
            return 'bg-success';
        case 'danger':
            return 'bg-danger';
        case 'warning':
            return 'bg-warning';
        case 'info':
            return 'bg-info';
        case 'black':
            return 'bg-black';
        default:
            return 'bg-base-content';
    }
});
</script>
<template>
    <div class="rating  rating-half pointer-events-none !px-0 !mx-0"
        :class="{ 'rating-lg': size === 'lg', 'rating-sm': size === 'sm', 'rating-xs': size === 'xs' }">
        <input type="radio" :name="id" class="rating-hidden" />

        <input type="radio" :name="id" class="!mx-0 !px-0 mask mask-star-2 mask-half-1 " aria-label="0.5 star"
            :class="themeClass" :checked="rating === 0.5" />

        <input type="radio" :name="id" class="!mx-0 !px-0 mask mask-star-2 mask-half-2 " aria-label="1 star"
            :class="themeClass" :checked="rating === 1" />

        <input type="radio" :name="id" class="!mx-0 !px-0 mask mask-star-2 mask-half-1 " aria-label="1.5 star"
            :class="themeClass" :checked="rating === 1.5" />

        <input type="radio" :name="id" class="!mx-0 !px-0 mask mask-star-2 mask-half-2 " aria-label="2 star"
            :class="themeClass" :checked="rating === 2" />
        <input type="radio" :name="id" class="!mx-0 !px-0 mask mask-star-2 mask-half-1 " aria-label="2.5 star"
            :class="themeClass" :checked="rating === 2.5" />
        <input type="radio" :name="id" class="!mx-0 !px-0 mask mask-star-2 mask-half-2 " aria-label="3 star"
            :class="themeClass" :checked="rating === 3" />
        <input type="radio" :name="id" class="!mx-0 !px-0 mask mask-star-2 mask-half-1 " aria-label="3.5 star"
            :class="themeClass" :checked="rating === 3.5" />
        <input type="radio" :name="id" class="!mx-0 !px-0 mask mask-star-2 mask-half-2 " aria-label="4 star"
            :class="themeClass" :checked="rating === 4" />
        <input type="radio" :name="id" class="!mx-0 !px-0 mask mask-star-2 mask-half-1 " aria-label="4.5 star"
            :class="themeClass" :checked="rating === 4.5" />
        <input type="radio" :name="id" class="!mx-0 !px-0 mask mask-star-2 mask-half-2 " aria-label="5 star"
            :class="themeClass" :checked="rating === 5" />

    </div>
</template>

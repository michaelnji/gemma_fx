<script lang="ts" setup>

</script>
<template>
    <div>
        <div class=" pl-3 z-0 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 place-items-center gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />


        </div>
        <div class="mt-12 mx-auto max-w-xs w-full">
            <button class=" btn btn-primary btn-block btn-lg   ">View all articles
                <Icon name="ph:arrow-right" />
            </button>
        </div>
    </div>
</template>
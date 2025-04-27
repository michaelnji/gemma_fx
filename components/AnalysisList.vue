<script lang="ts" setup>

</script>
<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-4">
            <AnalysisCard />
            <AnalysisCard />
            <AnalysisCard />
            <AnalysisCard />

        </div>
        <div class="mt-12 mx-auto max-w-xs w-full">
            <button class=" btn btn-primary btn-block btn-lg   ">View all
                <Icon name="ph:arrow-right" />
            </button>
        </div>
    </div>
</template>
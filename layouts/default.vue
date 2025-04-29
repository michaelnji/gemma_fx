<script lang="ts" setup>

</script>
<template>
    <div class="  bg-base-100 relative">
        <Navbar class="!z-2" />
        <div class="">
            <slot></slot>
        </div>
        <div class="pt-12">
            <Footer />
        </div>
    </div>
</template>

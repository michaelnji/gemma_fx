<script lang="ts" setup>

</script>
<template>
    <div>
        <footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
                <Logo />
            </aside>
            <nav>
                <h6 class="footer-title">Blog</h6>
                <NuxtLink to="/articles?topic=all&tag=all" class="link link-hover"> All Articles</NuxtLink>

                <NuxtLink to="/articles?topic=Featured&tag=all" class="link link-hover"> Featured</NuxtLink>
                <NuxtLink to="/articles?topic=Novice&tag=all" class="link link-hover">Novice
                </NuxtLink>
                <NuxtLink to="/articles?topic=Software&tag=all" class="link link-hover">Software reviews</NuxtLink>
                <NuxtLink to="/articles?topic=Tools&tag=all" class="link link-hover">Forex Tools</NuxtLink>
            </nav>
            <nav>
                <h6 class="footer-title">Services</h6>
                <NuxtLink to="/promo" class="link link-hover">Coupon codes</NuxtLink>
                <NuxtLink to="/prop-firms" class="link link-hover">Prop firm reviews</NuxtLink>
            </nav>
            <nav>
                <h6 class="footer-title">Legal</h6>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    </div>
</template>

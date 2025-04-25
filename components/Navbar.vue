<script lang="ts" setup>
import { animate, utils } from 'animejs';

const route = useRoute();
const isMenuToggled = ref(false)
function toggleMenu() {
    const menuElement = utils.$('.nav-menu-animate')[0]
    // intro
    if (!isMenuToggled.value) {
        animate(
            menuElement,
            {
                translateX: '20rem',
                duration: 300
            }
        )
        return
    }
    // outro
    animate(
        menuElement,
        {
            translateX: '-0rem',
            duration: 300
        }
    )
}

</script>
<template>
    <div>
        <div class="navbar justify-between p-y5  bg-base-100 shadow-sm">
            <div class="">


                <Logo />

            </div>
            <!-- lg <-> 2xl -->
            <div
                class="navbar-center max-w-max font-mono xl:text-lg font-semibold hidden lg:flex rounded-box bg-base-300 px-3 py-1">
                <ul class="menu menu-horizontal items-center-safe px-1 gap-x-3">
                    <li class=" rounded-box hover:bg-base-100/10 hover:text-base-content transition duration-150"
                        :class="{ '!bg-primary rounded-full !text-primary-content': route.path === '/' }">
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>

                    <li class=" rounded-box hover:bg-base-100/10 hover:text-base-content transition duration-150"
                        :class="{ '!bg-primary rounded-full !text-primary-content': route.path === '/articles' }">
                        <NuxtLink to="/articles">Articles</NuxtLink>
                    </li>
                    <li class=" rounded-box hover:bg-base-100/10 hover:text-base-content transition duration-150"
                        :class="{ '!bg-primary rounded-full !text-primary-content': route.path === '/tutorials' }">
                        <NuxtLink to="/tutorials">Tutorials

                        </NuxtLink>
                    </li>
                    <li class=" rounded-box hover:bg-base-100/10 hover:text-base-content transition duration-150"
                        :class="{ '!bg-primary rounded-full !text-primary-content': route.path === '/prop-firms' }">
                        <NuxtLink to="/prop-firms">Prop firm reviews</NuxtLink>
                    </li>
                    <li class=" rounded-box hover:bg-base-100/10 hover:text-base-content transition duration-150"
                        :class="{ '!bg-primary rounded-full !text-primary-content': route.path.includes('/promo') }">
                        <NuxtLink to="/promo">Promo codes <span class="badge badge-sm badge-accent">new!</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/newsletter" class="btn btn-secondary font-sans lg:btn-sm  ">
                            <Icon name="ph:envelope-duotone" /> Join our newsletter

                        </NuxtLink>
                    </li>

                </ul>
            </div>

            <!-- md <-> xs -->
            <div class="lg:hidden z-0 relative   w-max">
                <button class="btn  btn-ghost  flex justify-between items-center swap swap-rotate text-primary"
                    :class="{ 'swap-active': isMenuToggled }" @click="() => {
                        isMenuToggled = !isMenuToggled
                        toggleMenu()
                    }">
                    <Icon name="cil:hamburger-menu" class="swap-off" v-if="!isMenuToggled" />
                    <Icon name="cil:x" class="swap-on" v-if="isMenuToggled" />

                </button>
                <div style="transform:translateX(20rem);"
                    class="nav-menu-animate border translate-2 border-base-300 absolute right-0     w-max  font-mono xl:text-lg font-semibold  rounded-l-2xl bg-base-100   px-3 py-1">
                    <ul class="menu px-1 gap-y-3">
                        <li class=" rounded-box hover:bg-base-100/10 text-base hover:text-base-content transition duration-150"
                            :class="{ '!bg-primary rounded-full !text-primary-content': route.path === '/' }">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>

                        <li class=" rounded-box hover:bg-base-100/10 text-base hover:text-base-content transition duration-150"
                            :class="{ '!bg-primary rounded-full !text-primary-content': route.path === '/articles' }">
                            <NuxtLink to="/articles">Articles</NuxtLink>
                        </li>
                        <li class=" rounded-box hover:bg-base-100/10 text-base hover:text-base-content transition duration-150"
                            :class="{ '!bg-primary rounded-full !text-primary-content': route.path === '/tutorials' }">
                            <NuxtLink to="/tutorials">Tutorials

                            </NuxtLink>
                        </li>
                        <li class=" rounded-box hover:bg-base-100/10 text-base hover:text-base-content transition duration-150"
                            :class="{ '!bg-primary rounded-full !text-primary-content': route.path === '/prop-firms' }">
                            <NuxtLink to="/prop-firms">Prop firm reviews</NuxtLink>
                        </li>
                        <li class=" rounded-box hover:bg-base-100/10 text-base hover:text-base-content transition duration-150"
                            :class="{ '!bg-primary rounded-full !text-primary-content': route.path.includes('/promo') }">
                            <NuxtLink to="/promo">Promo codes <span class="badge badge-sm badge-accent">new!</span>
                            </NuxtLink>
                        </li>
                        <li class="mt-4">
                            <NuxtLink to="/newsletter" class="btn btn-secondary font-sans lg:btn-sm  ">
                                <Icon name="ph:envelope-duotone" /> Join our newsletter

                            </NuxtLink>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

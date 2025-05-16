<script lang="ts" setup>
import { animate, createSpring, utils } from 'animejs';

const route = useRoute();
const isMenuToggled = ref(false)
const target = useTemplateRef<HTMLElement>('mobile-menu')

// closes menu on click outside of menu
onClickOutside(target, event => {
    if (isMenuToggled.value) {
        isMenuToggled.value = !isMenuToggled.value
        toggleMenu()
    }
})
// toggles menu on small screens with animation
function toggleMenu() {
    const menuElement = utils.$('.nav-menu-animate')[0]
    // intro
    if (!isMenuToggled.value) {
        animate(
            menuElement,
            {
                translateX: '20rem',
                duration: 600,
                // easing: 'outBounce'
            }
        )
        return
    }
    // outro
    animate(
        menuElement,
        {
            translateX: '-0rem',
            duration: 200,
            ease: createSpring({ stiffness: 40 })
        }
    )
    isMenuToggled.value = true
}



</script>
<template>
    <div>
        <div class="navbar justify-between py-3  bg-base-100 shadow-sm">
            <div class="">


                <Logo />

            </div>
            <!-- lg <-> 2xl -->
            <div
                class="navbar-center max-w-max text-base xl:text-lg font-semibold hidden lg:flex rounded-none bg-base-300 px-3 py-1">
                <ul class="menu menu-horizontal items-center-safe px-1 gap-x-3">
                    <li>
                        <NuxtLink
                            :class="{ '!bg-primary focus:!bg-primary focus:!text-primary-content active:!bg-primary active:!text-primary-content  !text-primary-content': route.path === '/' }"
                            class=" rounded-none hover:bg-primary/10  hover:text-primary transition duration-150"
                            to="/">Home</NuxtLink>
                    </li>

                    <li>
                        <NuxtLink
                            :class="{ '!bg-primary focus:!bg-primary focus:!text-primary-content active:!bg-primary active:!text-primary-content  !text-primary-content': route.path === '/articles' }"
                            class=" rounded-none hover:bg-primary/10  hover:text-primary transition duration-150"
                            to="/articles">Articles</NuxtLink>
                    </li>

                    <li>
                        <NuxtLink
                            :class="{ '!bg-primary focus:!bg-primary focus:!text-primary-content active:!bg-primary active:!text-primary-content  !text-primary-content': route.path === '/prop-firms' }"
                            class=" rounded-none hover:bg-primary/10  hover:text-primary transition duration-150"
                            to="/prop-firms">Prop firm reviews</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            :class="{ '!bg-primary focus:!bg-primary focus:!text-primary-content active:!bg-primary active:!text-primary-content  !text-primary-content': route.path.includes('/promo') }"
                            class=" rounded-none hover:bg-primary/10  hover:text-primary transition duration-150"
                            to="/promo">Promo codes <span class="badge badge-sm badge-primary"
                                :class="{ '!bg-black !text-primary !shadow-none !border-primary': route.path.includes('/promo') }">new!</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="  btn btn-secondary font-sans lg:btn-sm   transition duration-150"
                            to="/newsletter">
                            <Icon name="ph:envelope-duotone" /> Join our newsletter

                        </NuxtLink>
                    </li>

                </ul>
            </div>

            <!-- md <-> xs -->
            <div ref="mobile-menu" class="lg:hidden   w-max">
                <button class="btn  btn-ghost  flex justify-between items-center swap swap-rotate "
                    :class="{ 'swap-active': isMenuToggled }" @click="() => {
                        isMenuToggled = !isMenuToggled
                        toggleMenu()
                    }">
                    <Icon name="cil:hamburger-menu" class="swap-off" v-if="!isMenuToggled" />
                    <Icon name="ph:x" class="swap-on" v-if="isMenuToggled" />

                </button>
                <div style="transform:translateX(20rem);"
                    class="nav-menu-animate border translate-2 border-base-300 absolute right-0 !z-[9999]     w-max   xl:text-lg font-semibold   !bg-base-100   px-3 py-1">
                    <ul class="menu px-1 gap-y-3">
                        <li @click="() => {
                            isMenuToggled = false
                            toggleMenu()
}" class=" rounded-none hover:bg-base-100/10  text-base hover:text-base-content transition duration-150"
                            :class="{ '!bg-primary focus:!bg-primary focus:!text-primary-content active:!bg-primary active:!text-primary-content  !text-primary-content': route.path === '/' }">
                            <NuxtLink
                                class=" rounded-none hover:bg-primary/10  hover:text-primary transition duration-150"
                                to="/">Home</NuxtLink>
                        </li>

                        <li @click="() => {
                            isMenuToggled = false
                            toggleMenu()
                        }" class=" rounded-none hover:bg-base-100/10  text-base hover:text-base-content transition duration-150"
                            :class="{ '!bg-primary focus:!bg-primary focus:!text-primary-content active:!bg-primary active:!text-primary-content  !text-primary-content': route.path === '/articles' }">
                            <NuxtLink
                                class=" rounded-none hover:bg-primary/10  hover:text-primary transition duration-150"
                                to="/articles">Articles</NuxtLink>
                        </li>
                        <!-- <li @click="() => {
                            isMenuToggled = false
                            toggleMenu()
}" class=" rounded-none hover:bg-base-100/10  text-base hover:text-base-content transition duration-150"
                            :class="{ '!bg-primary focus:!bg-primary focus:!text-primary-content active:!bg-primary active:!text-primary-content  !text-primary-content': route.path === '/tutorials' }">
                            <NuxtLink class=" rounded-none hover:!/10bg-primary  hoveprimary-content focus:!bg-primary focus:!text-primary-content active:!bg-primary active:!text-primary-content transition duration-150" to="/tutorials">Tutorials

                            </NuxtLink>
                        </li> -->
                        <li @click="() => {
                            isMenuToggled = false
                            toggleMenu()
                        }" class=" rounded-none hover:bg-base-100/10  text-base hover:text-base-content transition duration-150"
                            :class="{ '!bg-primary focus:!bg-primary focus:!text-primary-content active:!bg-primary active:!text-primary-content  !text-primary-content': route.path === '/prop-firms' }">
                            <NuxtLink
                                class=" rounded-none hover:bg-primary/10  hover:text-primary transition duration-150"
                                to="/prop-firms">Prop firm reviews</NuxtLink>
                        </li>
                        <li @click="() => {
                            isMenuToggled = false
                            toggleMenu()
                        }" class=" rounded-none hover:bg-base-100/10  text-base hover:text-base-content transition duration-150"
                            :class="{ '!bg-primary focus:!bg-primary focus:!text-primary-content active:!bg-primary active:!text-primary-content  !text-primary-content': route.path.includes('/promo') }">
                            <NuxtLink
                                class=" rounded-none hover:bg-primary/10  hover:text-primary transition duration-150"
                                to="/promo">Promo codes <span class="badge badge-sm badge-accent"
                                    :class="{ '!bg-black !text-primary !shadow-none !border-primary': route.path.includes('/promo') }">new!</span>
                            </NuxtLink>
                        </li>
                        <li @click="() => {
                            isMenuToggled = false
                            toggleMenu()
                        }" class="mt-4">
                            <NuxtLink class=" btn btn-secondary font-sans lg:btn-sm   transition duration-150"
                                to="/newsletter">
                                <Icon name="ph:envelope-duotone" /> Join our newsletter

                            </NuxtLink>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

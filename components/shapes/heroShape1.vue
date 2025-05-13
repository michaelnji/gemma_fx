<script lang="ts" setup>
import { animate, svg, utils } from 'animejs';
onMounted(() => {

    const [$path1, $path2] = utils.$('polygon');

    function animateRandomPoints() {
        // Update the points attribute on #path-2
        utils.set($path2, { points: generatePoints() });
        // Morph the points of #path-1 into #path-2
        animate($path1, {
            points: svg.morphTo($path2),
            ease: 'inOutCirc',
            duration: 5000,
            onComplete: animateRandomPoints
        });
    }

    // Start the animation
    animateRandomPoints();

    // A function to generate random points on #path-2 on each iteration
    // For demo purpose only
    function generatePoints() {
        const total = utils.random(4, 14);
        const r1 = utils.random(4, 16);
        const r2 = 56;
        const isOdd = (n: number) => n % 2;
        let points = '';
        for (let i = 0, l = isOdd(total) ? total + 1 : total; i < l; i++) {
            const r = isOdd(i) ? r1 : r2;
            const a = (2 * Math.PI * i / l) - Math.PI / 2;
            const x = 152 + utils.round(r * Math.cos(a), 0);
            const y = 56 + utils.round(r * Math.sin(a), 0);
            points += `${x},${y} `;
        }
        return points;
    }
})
</script>
<template>
    <div>
        <div class="rounded bg-base-100  size-30 overflow-hidden rotate-45">
            <svg id="visual" viewBox="0 0 304 112" class="w-full h-full" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">

                <g stroke-width="2" stroke="currentColor" stroke-linejoin="round" fill="none" fill-rule="evenodd">
                    <polygon id="path-1" points="152,4 170,38 204,56 170,74 152,108 134,74 100,56 134,38"></polygon>
                    <polygon style="opacity: 0" id="path-2"
                        points="152,4 170,38 204,56 170,74 152,108 134,74 100,56 134,38"></polygon>
                </g>

            </svg>
        </div>
    </div>
</template>

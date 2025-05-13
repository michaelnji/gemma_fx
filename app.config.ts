export default defineAppConfig({
    // customize icon defaults
    icon: {
        size: '24px', // default <Icon> size applied
        class: 'icon', // default <Icon> class applied
        mode: 'svg', // default <Icon> mode applied

        // aliase for icons
        aliases: {
            'nuxt': 'logos:nuxt-icon',
        }
    }
})

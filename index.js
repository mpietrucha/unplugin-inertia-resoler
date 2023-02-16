module.exports = function InertiaResolver(config = { except: [] }) {
    const components = ['Head', 'Link'].filter(component => ! config.except.includes(component))

    return name => {
        if (! components.includes(name)) {
            return
        }

        return { name, from: '@inertiajs/vue3' }
    }
}

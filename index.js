const from = '@inertiajs/vue3'

const components = (config = { except: [] }) => {
    const components = ['Head', 'Link'].filter(component => ! config.except.includes(component))

    return name => {
        if (! components.includes(name)) {
            return
        }

        return { name, from }
    }
}

const composables = (config = { except: [] }) => {
    const composables = ['useForm'].filter(component => ! config.except.includes(component))

    return name => {
        if (! composables.includes(name)) {
            return
        }

        return { name, from }
    }
}

module.exports = { components, composables }

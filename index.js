const process = (config, names) => name => {
    const components = names.filter(name => ! config.except.includes(name))

    if (! components.includes(name)) {
        return;
    }

    return { name, from: '@inertiajs/vue3' }
}

const defaultConfig = { except: [] }

const components = (config = defaultConfig) => process(config, ['Head', 'Link'])

const composables = (config = defaultConfig}) => process(config, ['useForm', 'router'])

module.exports = { components, composables }

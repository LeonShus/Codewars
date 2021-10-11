function hello(name) {
    return name ? `Hello, ${name.slice(0,1).toUpperCase() + name.slice(1,).toLowerCase()}!` : 'Hello, World!'
}
function abbrevName(name){
    return name.split(' ').map(el => el.slice(0,1).toUpperCase()).join('.')
}
String.prototype.isUpperCase = function() {
    if(this === undefined){
        return
    }
    return this.toUpperCase() == this
}
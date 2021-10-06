function areYouPlayingBanjo(name) {
    return (name.toUpperCase().slice(0,1) === 'R') ? `${name} plays banjo` : `${name} does not play banjo`
}
export function verifyFavs() {
    const favs = localStorage.getItem('favs');
    if (!favs) {
        localStorage.setItem('favs', JSON.stringify([]))
    }

    return favs;
}
function extract(content) {
    let contents = document.getElementById("content").textContent
    const regExp = /(?<=\()[^)]+(?=\))/g;
    const matches = [...contents.match(regExp)];
    return matches
}
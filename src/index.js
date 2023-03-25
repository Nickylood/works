

async function loadJSON(url) {
    const response = await fetch(url);
    return await response.json();
}

loadJSON('../your.json').then(data => {
    console.log(data);
});
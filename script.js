// script.js (optional)
async function fetchApod() {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=PBryuVzcdJbTXFVYXqTuwmd7gupsltssNZMsppUQ');
    const data = await response.json();
    const apodContainer = document.querySelector('.apod-container');
    apodContainer.innerHTML = `
        <img src="${data.url}" alt="APOD Image">
        <h2>${data.title}</h2>
        <p>${data.explanation}</p>
    `;
}

fetchApod();
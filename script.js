function playVideo(element) {
    const videoSrc = element.getAttribute("data-src");
    const videoTitle = element.getAttribute("data-title");
    const videoCanal = element.getAttribute("data-canal");
    const videoDescribe = element.getAttribute("data-describe");

    const player = document.getElementById("player");
    const source = document.getElementById("video-source");

    source.src = videoSrc;
    player.load();

    document.getElementById("video-title").textContent = videoTitle;

    const infoArea = document.getElementById("video-info");
    infoArea.innerHTML = `
        <p><strong>Canal:</strong> ${videoCanal}</p>
        <p><strong>Descrição:</strong> ${videoDescribe}</p>
    `;
}

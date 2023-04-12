function toggleSongs() {
    document.getElementById("songs-second-half").classList.toggle("hidden")
    return ;
}

document.getElementById("toggle-button").onclick = toggleSongs;
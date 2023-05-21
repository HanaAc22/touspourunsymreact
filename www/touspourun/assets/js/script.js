let mediaButton = document.getElementById("mediaButton");

if(mediaButton != null){
    mediaButton.addEventListener('click', () => {
        document.getElementById("mainListDiv").classList.toggle('show_list');
        mediaButton.classList.toggle('active');
    });
}

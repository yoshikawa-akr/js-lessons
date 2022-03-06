function startLoading() {
    const loadingPlace = document.getElementById('js-loading');
    const loadingImg = document.createElement('img');
    loadingImg.src = 'loading-circle.gif';
    loadingImg.alt = 'ローディング画像';
    loadingPlace.appendChild(loadingImg);
}

function stopLoading() {
    document.getElementById('js-loading').remove(loadingImg);
}

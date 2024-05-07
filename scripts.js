const parisColumns = document.querySelectorAll('.column.paris'),
      dallasColumns = document.querySelectorAll('.column.dallas');

function parallax() {
    let top = document.scrollingElement.scrollTop;
    for (let i = 0; i < parisColumns.length; i++) {
        parisColumns[i].style.backgroundPosition = '0 ' + ((top - parisColumns[i].offsetTop) * .1) + '%';
        dallasColumns[i].style.backgroundPosition = '0 ' + ((top - dallasColumns[i].offsetTop) * .1) + '%';
    }
}

window.onscroll = parallax;
parallax();

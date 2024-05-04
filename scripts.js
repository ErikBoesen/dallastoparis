const parisColumns = document.querySelectorAll('.column.paris'),
      dallasColumns = document.querySelectorAll('.column.dallas');

window.onscroll = function() {
    let top = document.scrollingElement.scrollTop;
    for (let i = 0; i < parisColumns.length; i++) {
        parisColumns[i].style.backgroundPosition = '0 ' + (top * (-0.1)) + '%';
        dallasColumns[i].style.backgroundPosition = '0 ' + (top * (-0.1)) + '%';
    }
}
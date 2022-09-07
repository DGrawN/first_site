window.addActiveClass = function (event) {
    document.querySelectorAll('a.active').forEach(function (item) {
        item.classList.remove('active');
    })
    event.target.classList.add("active");
    
    let anchors = document.querySelectorAll('a.navbar_link')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let blockID = anchor.getAttribute('href');
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

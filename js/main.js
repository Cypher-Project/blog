(() => {
    const page = new fullpage('#app', {
        v2compatible: true,
        responsiveWidth: 700,
        anchors: ['home', 'about', 'presentation', 'contact'],
        parallax: true
    });

    $('#home-section .scroller > div').on('click', (evt) => {
        page.moveSectionDown();
    })

    var i = 0;
    var txt = 'Cypher Project';
    var speed = 100;
    var text = '';
    setTimeout(typeWriter, 1000);
    function typeWriter() {
        if (i < txt.length) {
            text += txt.charAt(i);
            $('#home-section h1').text(text);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
})();
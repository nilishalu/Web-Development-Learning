$('h1').addClass('margin-50 big-title')

$('h1').hover(function () {
    $('h1').addClass('color-purple')
})

$('button').click(function () {
    $('h1').toggleClass('color-purple')
})

$('input').keypress(function (event) {
    var txt = $('p').text();
    $('p').text(txt + event.key)
})
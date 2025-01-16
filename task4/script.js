const button = document.getElementById('colorButton');

const colors = ['rgb(241 144 134)', 'rgb(222 158 247) ', ' rgb(150 246 190)', ' rgb(167 212 243)', ' rgb(224 183 241)', 'rgb(150 239 222) ', 'rgb(140 233 180)', 'rgb(246 223 128)', ];

let currentIndex = 0;

button.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});

 
var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById('output').style.cssText = 'border: 0.3rem solid white; border-radius: 1.5rem';
};
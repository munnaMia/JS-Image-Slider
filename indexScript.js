let image = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

let imageCount = 0;

let imageView = document.querySelector('#Image');
imageView.src = image[imageCount];

function next(){
    imageCount++;

    if(imageCount==image.length )imageCount=0;

    imageView.src = image[imageCount];


}

function back(){
    imageCount--;

    if(imageCount== -1)imageCount = image.length-1;

    imageView.src = image[imageCount];

}


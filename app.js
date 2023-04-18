const images = document.querySelectorAll(".images li img");
const src_image = document.querySelector(".image1");
const div_color = document.querySelector(".circle");
for (let img of images) {
    img.addEventListener('click', function (e) {
        console.dir(img);
        // if(img.className == 'a'){
        //     src_image.setAttribute(src,'')
        // }
        src_image.setAttribute('src', img.getAttribute('src'));

        if (img.className === "b") {
            div_color.style.background = "green";
        }
        else {
            div_color.style.background = "#017143";
        }
    })
}
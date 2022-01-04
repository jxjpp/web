(function () {
    let mainRight = document.getElementsByClassName('main-right')[0];
    let leftbtn = document.querySelector('.main-right .leftbtn');
    let rightbtn = document.querySelector('.main-right .rightbtn');
    let picli = document.querySelectorAll('.main-right ul li');
    let pointer = document.querySelectorAll('ol li');
    let curpicindex = 0;
    function change(indexImg) {
        if (indexImg < 0) {
            indexImg = picli.length - 1;
        }
        else if (indexImg >= picli.length) {
            indexImg = 0;
        }
        picli[curpicindex].style.zIndex = '';
        pointer[curpicindex].className = '';
        picli[curpicindex].style.opacity = 0;
        picli[indexImg].style.zIndex = 1;
        pointer[indexImg].classList.add('current');
        picli[indexImg].style.opacity = 1;
        curpicindex = indexImg;
    }
    for (let i = 0; i < pointer.length; i++){
        pointer[i].index = i;
    }
    let changepic = document.getElementById('change');
    changepic.addEventListener('click', function (event) {
        let name = event.target;
        // alert(name);
        if (name == leftbtn) {
            change(curpicindex-1);
        }
        else if (name == rightbtn) {
            change(curpicindex+1);
        }
        else if (name == '[object HTMLLIElement]') {
            // alert(name.index);
            change(name.index);
        }
    });
    let autoplay = true;
    mainRight.addEventListener('mouseenter', function (event) {
        autoplay = false;
    });
    mainRight.addEventListener('mouseleave', function (event) {
        autoplay = true;
    });
    setTimeout(function auto() {
        if (autoplay == true) {
            change(curpicindex+1);
        }
        setTimeout(auto,4000)
    },4000)();
/* leftbtn.addEventListener('click', function (event) {
    // alert(picli.length);
    change(curpicindex-1);
    // picli[curpicindex].style.zIndex = '';
    // pointer[curpicindex].className = '';
    // picli[curpicindex].style.opacity = 0;
    // curpicindex--;
    // if (curpicindex < 0) {
    //     curpicindex = picli.length-1;
    // }
    // picli[curpicindex].style.zIndex = 1;
    // pointer[curpicindex].className = 'current';
    // picli[curpicindex].style.opacity = 1;     
    });
    rightbtn.addEventListener('click', function (event) {
        change(curpicindex+1);
        // picli[curpicindex].style.zIndex = '';
        // pointer[curpicindex].className = '';
        // picli[curpicindex].style.opacity = 0;
        // curpicindex++;
        // if (curpicindex >= picli.length) {
        //     curpicindex = 0;
        // }
        // picli[curpicindex].style.zIndex = 1;
        // pointer[curpicindex].className = 'current';
        // picli[curpicindex].style.opacity = 1; 
    }); */

})();

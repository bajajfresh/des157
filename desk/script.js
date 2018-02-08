'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('reading script');

    //capture images into variables
    var juice = document.getElementById('juice');
    var perfume = document.getElementById('perfume');
    var wallet = document.getElementById('wallet');
    var phone = document.getElementById('phone');

    //capture closing variables
    var x1 = document.getElementById('x1');
    var x2 = document.getElementById('x2');
    var x3 = document.getElementById('x3');
    var x4 = document.getElementById('x4');


    //juice hover event listener
    juice.addEventListener('mouseover', function() {
        juice.style.opacity = 1;
        juice.src = 'images/juice.png';
    });
    //juice mouseout event listener
    juice.addEventListener('mouseout', function() {
        juice.style.opacity = 0;
        juice.src = 'images/juice.png';
    });

    //juice click
    juice.addEventListener('click', function() {
        juiceMsg.style.opacity = 1;
    });
    //x Msg
    x1.addEventListener('click', function() {
        juiceMsg.style.opacity = 0;
    });


    //---------
    //perfume hover event listener
    perfume.addEventListener('mouseover', function() {
        perfume.style.opacity = 1;
        perfume.src = 'images/perfume.png';
    });
    //perfume mouseout event listener
    perfume.addEventListener('mouseout', function() {
        perfume.style.opacity = 0;
        perfume.src = 'images/perfume.png';
    });
    //perfume click
    perfume.addEventListener('click', function() {
        perfumeMsg.style.opacity = 1;
    });
    //x Msg
    x2.addEventListener('click', function() {
        perfumeMsg.style.opacity = 0;
    });



    //---------
    //wallet hover event listener
    wallet.addEventListener('mouseover', function() {
        wallet.style.opacity = 1;
        wallet.src = 'images/wallet.png';
    });
    //wallet mouseout event listener
    wallet.addEventListener('mouseout', function() {
        wallet.style.opacity = 0;
        wallet.src = 'images/wallet.png';
    });
    //wallet click
    wallet.addEventListener('click', function() {
        walletMsg.style.opacity = 1;
    });
    //x Msg
    x3.addEventListener('click', function() {
        walletMsg.style.opacity = 0;
    });




    //---------
    //phone hover event listener
    phone.addEventListener('mouseover', function() {
        phone.style.opacity = 1;
        phone.src = 'images/phone.png';
    });
    //phone mouseout event listener
    phone.addEventListener('mouseout', function() {
        phone.style.opacity = 0;
        phone.src = 'images/phone.png';
    });
    //phone click
    phone.addEventListener('click', function() {
        phoneMsg.style.opacity = 1;
    });
    //x Msg
    x4.addEventListener('click', function() {
        phoneMsg.style.opacity = 0;
    });


});

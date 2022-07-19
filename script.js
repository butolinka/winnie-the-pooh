const input=document.querySelector('.input');
const btn = document.querySelector('.btn');
const answer = Math.floor (Math.random()*20)+1;

input.addEventListener('keypress', function(e){
    if (e.keyCode===13)
    play();
})

btn.addEventListener('click', play);

function play(){
    const userAttempt=document.querySelector('input').value;
    if (userAttempt<1||userAttempt>20){
        input.value = '';
        Swal.fire({
            imageUrl: 'https://avatars.mds.yandex.net/get-zen_doc/3985268/pub_5fcab3ee702d845a133d5343_5fcab79c702d845a133fd0be/scale_600',
            imageHeight: 350,
            imageWidth: 350,
            title: 'Piglet, it looks like we have a problem',
            text: 'Enter a number between 1 and 20',
            imageAlt: 'A tall image'
          })
    }
    else if(isNaN(userAttempt)){
        input.value = '';
        Swal.fire({
            imageUrl: 'https://regnum.ru/uploads/pictures/news/2018/11/29/regnum_picture_1543487507289327_normal.jpg',
            imageHeight: 350,
            imageWidth: 350,
            title: 'We must be careful',
            text: 'You have to enter a number',
            imageAlt: 'A tall image'
          })
    }
    else{
        if (userAttempt< answer){
            input.value = '';
            Swal.fire({
                imageUrl: 'https://i.ytimg.com/vi/YPiQGDgrBzg/sddefault.jpg',
                imageHeight: 350,
                imageWidth: 350,
                title: 'Rabbit, we are very hungry. Can we have some more?',
                text: 'Try to enter a bigger number',
                imageAlt: 'A tall image'
              })
        }
        else if (userAttempt>answer){
            input.value = '';
            Swal.fire({
                imageUrl: 'https://regnum.ru/uploads/pictures/news/2018/12/07/regnum_picture_1544177818103678_normal.jpg',
                imageHeight: 350,
                imageWidth: 350,
                title: 'Looks like someone eating too much',
                text: 'Try to enter a lower number',
                imageAlt: 'A tall image'
              })
        }

    else{
        input.value = '';
        Swal.fire({
            imageUrl: 'https://deti-skazki.ru/wp-content/uploads/2019/10/vinni-puh-i-vse-vse-vse-%E2%80%94-alan-miln-696x484.jpg',
            imageHeight: 350,
            imageWidth: 350,
            title: 'Finally we got here!',
            text: 'Huppy birthday Eeyore!',
            imageAlt: 'A tall image'
          })
         btn.style.display='none';
          const restart=document.querySelector('.restart');
          restart.style.display='block';
          restart.addEventListener('click', reload);
          function reload(){
            location.reload();
          }
    }
}
}

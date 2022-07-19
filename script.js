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
        Swal.fire({
            imageUrl: 'https://avatars.mds.yandex.net/get-zen_doc/3985268/pub_5fcab3ee702d845a133d5343_5fcab79c702d845a133fd0be/scale_600',
            imageHeight: 350,
            imageWidth: 350,
            title: 'Пятачок, неси ружье',
            text: 'Введи число от 1 до 20',
            imageAlt: 'A tall image'
          })
    }
    else if(isNaN(userAttempt)){
        Swal.fire({
            imageUrl: 'https://regnum.ru/uploads/pictures/news/2018/11/29/regnum_picture_1543487507289327_normal.jpg',
            imageHeight: 350,
            imageWidth: 350,
            title: 'Это какие-то неправильные пчелы',
            text: 'Ты должен ввести цифру',
            imageAlt: 'A tall image'
          })
    }
    else{
        if (userAttempt< answer){
            Swal.fire({
                imageUrl: 'https://i.ytimg.com/vi/YPiQGDgrBzg/sddefault.jpg',
                imageHeight: 350,
                imageWidth: 350,
                title: 'И того и другого. И можно без хлеба.',
                text: 'Попробуй цифру побольше',
                imageAlt: 'A tall image'
              })
        }
        else if (userAttempt>answer){
            Swal.fire({
                imageUrl: 'https://regnum.ru/uploads/pictures/news/2018/12/07/regnum_picture_1544177818103678_normal.jpg',
                imageHeight: 350,
                imageWidth: 350,
                title: 'Кажется, кто-то слишком много ест.',
                text: 'Попробуй цифру поменьше',
                imageAlt: 'A tall image'
              })
        }

    else{
        Swal.fire({
            imageUrl: 'https://deti-skazki.ru/wp-content/uploads/2019/10/vinni-puh-i-vse-vse-vse-%E2%80%94-alan-miln-696x484.jpg',
            imageHeight: 350,
            imageWidth: 350,
            title: 'И я, и я, и я того же мнения!',
            text: 'С днем рождения Иа!!!',
            imageAlt: 'A tall image'
          })
    }
}
}
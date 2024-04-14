$('.voice__content--list').slick({  
    autoplay: true, //自動再生
        speed: 5000,//スライドするスピード
        arrows: true, // 左右のナビゲーションを有効にする
        dots: true, // ドットを表示
        infinite: true, //スライドのループ
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,

        responsive: [{
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "8%",
            }
        }]
    });
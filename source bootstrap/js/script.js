"use strict"

//var siteType = prompt("Какой вы хотите сайт: Визитка(5000) или Корпоративный(10000)?");
//siteType = siteType.trim();
//siteType = siteType.toLowerCase();
//console.log(siteType);
//
//var siteDesign = prompt("Какой вы хотите сайт: Минимализм или Красивая топографика(цена увеличится в 1.1 раз)?");
//siteDesign = siteDesign.trim();
//siteDesign = siteDesign.toLowerCase();
//console.log(siteDesign);
//
//var siteAdaptive = prompt("Какой вы хотите сайт: Обычный или Адаптивный(цена увеличится в 1.2 раза)?");
//siteAdaptive = siteAdaptive.trim();
//siteAdaptive = siteAdaptive.toLowerCase();
//console.log(siteAdaptive);
//
//var site = {
//    type: siteType,
//    design: siteDesign,
//    adaptive: siteAdaptive,
//    cost: function(type, design, adaptive) {
//        let price = 0;
//        if (type == "визитка") price = 5000;
//        else price = 10000;
//        if (design == "красивая топографика") price *= 1.1;
//        if (adaptive == "адаптивный") price *= 1.2;
//        return price;
//    },
//}
//alert(`Стоимость сайта равна: ${site.cost(siteType, siteDesign, siteAdaptive)} руб.`);

//Плавный скролин с учётом расстояния nav бара————————————————————————————————————————————————
$('a[href^="#"]').click(function () {
    //    let link = $(this).attr("href");
    //    let height = $(link).offset().top;
    //    console.log(height);
    //    height -= 160;
    //    console.log(height);
    //    window.scrollBy(0, height);
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 160 + "px"
    });
})
//————————————————————————————————————————————————————————————————————————————————————————————

//Изменения цвета в <a> в nav при нахождении в соответсвующем разделе—————————————————————————
$(window).scroll(function () {
    let scrollDistance = $(this).scrollTop();

    $("section").each((i, el) => {
        if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
            $("nav a").each((i, el) => {
                if ($(el).hasClass("js_nav")) {
                    $(el).removeClass("js_nav");
                }
            });
            $("nav li:eq('+ i +')").find('a').addClass("js_nav");
        }
    });
});
//————————————————————————————————————————————————————————————————————————————————————————————

//Изменение картинок с низкого качества на высокое когда пользователь долистывает до них——————
let options = {
    threshold: [0]
};
let laptop_img_observer = new IntersectionObserver(laptop_img, options);
let laptop_img_el = $('.laptop img');
laptop_img_el.each((i, el) => {
    laptop_img_observer.observe(el);
});

function laptop_img(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.setAttribute('src', 'img/laptop.png');
        }
    });
}

let staples_img_observer = new IntersectionObserver(staples_img, options);
let staples_img_el = $('.staples img');
staples_img_el.each((i, el) => {
    staples_img_observer.observe(el);
});

function staples_img(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.setAttribute('src', 'img/staples.png');
        }
    });
}

let rocket_img_observer = new IntersectionObserver(rocket_img, options);
let rocket_img_el = $('.rocket img');
rocket_img_el.each((i, el) => {
    rocket_img_observer.observe(el);
});

function rocket_img(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.setAttribute('src', 'img/rocket.png');
        }
    });
}

let loudspeaker_img_observer = new IntersectionObserver(loudspeaker_img, options);
let loudspeaker_img_el = $('.loudspeaker img');
loudspeaker_img_el.each((i, el) => {
    loudspeaker_img_observer.observe(el);
});

function loudspeaker_img(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.setAttribute('src', 'img/loudspeaker.png');
        }
    });
}
//————————————————————————————————————————————————————————————————————————————————————————————


//Анимации текста в разделе что я умею когда пользователь доходит до них——————————————————————
options = {
    threshold: [1]
};

let laptop_h3_observer = new IntersectionObserver(laptop_h3, options);
let laptop_h3_el = $('.laptop h3');
laptop_h3_el.each((i, el) => {
    laptop_h3_observer.observe(el);
});

function laptop_h3(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('laptop_h3_animation');
        }
    });
}
let laptop_div_observer = new IntersectionObserver(laptop_div, options);
let laptop_div_el = $('.laptop div');
laptop_div_el.each((i, el) => {
    laptop_div_observer.observe(el);
});

function laptop_div(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('laptop_div_animation');
        }
    });
}

let staples_h3_observer = new IntersectionObserver(staples_h3, options);
let staples_h3_el = $('.staples h3');
staples_h3_el.each((i, el) => {
    staples_h3_observer.observe(el);
});

function staples_h3(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('staples_h3_animation');
        }
    });
}

let staples_div_observer = new IntersectionObserver(staples_div, options);
let staples_div_el = $('.staples div');
staples_div_el.each((i, el) => {
    staples_div_observer.observe(el);
});

function staples_div(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('staples_div_animation');
        }
    });
}

let rocket_h3_observer = new IntersectionObserver(rocket_h3, options);
let rocket_h3_el = $('.rocket h3');
rocket_h3_el.each((i, el) => {
    rocket_h3_observer.observe(el);
});

function rocket_h3(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('rocket_h3_animation');
        }
    });
}

let rocket_div_observer = new IntersectionObserver(rocket_div, options);
let rocket_div_el = $('.rocket div');
rocket_div_el.each((i, el) => {
    rocket_div_observer.observe(el);
});

function rocket_div(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('rocket_div_animation');
        }
    });
}

let loudspeaker_h3_observer = new IntersectionObserver(loudspeaker_h3, options);
let loudspeaker_h3_el = $('.loudspeaker h3');
loudspeaker_h3_el.each((i, el) => {
    loudspeaker_h3_observer.observe(el);
});

function loudspeaker_h3(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('loudspeaker_h3_animation');
        }
    });
}

let loudspeaker_div_observer = new IntersectionObserver(loudspeaker_div, options);
let loudspeaker_div_el = $('.loudspeaker div');
loudspeaker_div_el.each((i, el) => {
    loudspeaker_div_observer.observe(el);
});

function loudspeaker_div(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('loudspeaker_div_animation');
        }
    });
}
//————————————————————————————————————————————————————————————————————————————————————————————

//————————————————————————————————————————————————————————————————————————————————————————————
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
//————————————————————————————————————————————————————————————————————————————————————————————

//Калькулятор—————————————————————————————————————————————————————————————————————————————————
$(".prices input").click(function () {
    let siteType = $("#count_siteType").val();
    let siteDesign = $("#count_siteDesign").val();
    let siteAdaptive = $("#count_siteAdaptive").val();

    if (siteType == "option2") {
        var count = 5000;
        var period = 7;
    } else {
        var count = 12000;
        var period = 14;
    };

    if (siteDesign == "option3") {
        count *= 1.4;
        period += 7;
    }

    if (siteAdaptive == "option3") {
        count *= 1.8;
        period += 7;
    }

    let price = $(".wrapup_input:eq(1)");
    price.text(count.toString() + " руб.");
    let periodCount = $(".wrapup_input:eq(0)");
    periodCount.text(period.toString() + " дней");
});
//————————————————————————————————————————————————————————————————————————————————————————————

//Набегающие числа в разделе "Статистика"—————————————————————————————————————————————————————
options = {
    threshold: [0.5]
};
let statistic_observer = new IntersectionObserver(statistic, options);
let statistic_el = $('.statistic .smile');
statistic_el.each((i, el) => {
    statistic_observer.observe(el);
});

let statistic2_observer = new IntersectionObserver(statistic2, options);
let statistic2_el = $('.statistic .check_mark');
statistic2_el.each((i, el) => {
    statistic2_observer.observe(el);
});

function statistic(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            $(function () {
                $({
                    numberValue: 0
                }).animate({
                    numberValue: 120
                }, {
                    duration: 1500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
                    easing: "linear",
                    step: function (val) {
                        $("#smile_h3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    }
                });
            });
            
            $(function () {
                $({
                    numberValue: 0
                }).animate({
                    numberValue: 4600
                }, {
                    duration: 1500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
                    easing: "linear",
                    step: function (val) {
                        $("#orangeStaples_h3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    }
                });
            });
        }
    });
}

function statistic2(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            $(function () {
                $({
                    numberValue: 0
                }).animate({
                    numberValue: 340
                }, {
                    duration: 1500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
                    easing: "linear",
                    step: function (val) {
                        $("#checkMark_h3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    }
                });
            });
            
            $(function () {
                $({
                    numberValue: 0
                }).animate({
                    numberValue: 23
                }, {
                    duration: 1500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
                    easing: "linear",
                    step: function (val) {
                        $("#cup_h3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    }
                });
            });
        }
    });
}
//————————————————————————————————————————————————————————————————————————————————————————————

//Посявление модального окна——————————————————————————————————————————————————————————————————
$("document").ready(function () {
    setTimeout(function () {
        $('#modal').modal('show'); // set command for show 
    }, 5000);
});
//————————————————————————————————————————————————————————————————————————————————————————————

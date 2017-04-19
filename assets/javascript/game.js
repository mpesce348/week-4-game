var firstPlayer;
var secondPlayer;

//hero objects
var ironMan = {
    hp: 180,
    attack: 6,
    counter: 27,
}
var spiderMan = {
    hp: 130,
    attack: 4,
    counter: 21,
}
var captainAmerica = {
    hp: 110,
    attack: 4,
    counter: 19,
}
var scarletWitch = {
    hp: 170,
    attack:7,
    counter: 27,
}


$(".one").on("click", function() {
    if (!firstPlayer) {
        $(".hero").append($(".one"));
        $(".enemies").append($(".two"));
        $(".enemies").append($(".three"));
        $(".enemies").append($(".four"));
        $(".playerChoice").remove();
        firstPlayer = ironMan;
    }

    $(".two").on("click", function() {
        $(".opponent").append($(".two"));
        secondPlayer = spiderMan;
        $(".hpsecondPlayer").html(secondPlayer.hp);
    });
    $(".three").on("click", function() {
        $(".opponent").append($(".three"));
        secondPlayer = captainAmerica;
        $(".hpsecondPlayer").html(secondPlayer.hp);
    });
    $(".four").on("click", function() {
        $(".opponent").append($(".four"));
        secondPlayer = scarletWitch;
        $(".hpsecondPlayer").html(secondPlayer.hp);
    });

});
$(".two").on("click", function() {
    if (!firstPlayer) {
        $(".hero").append($(".two"));
        $(".enemies").append($(".one"));
        $(".enemies").append($(".three"));
        $(".enemies").append($(".four"));
        $(".playerChoice").remove();
        firstPlayer = spiderMan;
    }

    $(".one").on("click", function() {
        $(".opponent").append($(".one"));
        secondPlayer = ironMan;
        $(".hpsecondplayer").html(secondPlayer.hp);
    });
    $(".three").on("click", function() {
        $(".opponent").append($(".three"));
        secondPlayer = captainAmerica;
        $(".hpsecondplayer").html(secondPlayer.hp);
    });
    $(".four").on("click", function() {
        $(".opponent").append($(".four"));
        secondPlayer = scarletWitch;
        $(".hpsecondplayer").html(secondPlayer.hp);
    });

});
$(".three").on("click", function() {
    if (!firstPlayer) {
        $(".hero").append($(".three"));
        $(".enemies").append($(".two"));
        $(".enemies").append($(".one"));
        $(".enemies").append($(".four"));
        $(".playerChoice").remove();
        firstPlayer = captainAmerica;
    }

    $(".two").on("click", function() {
        $(".opponent").append($(".two"));
        secondPlayer = spiderMan;
        $(".hpsecondplayer").html(secondPlayer.hp);
    });
    $(".one").on("click", function() {
        $(".opponent").append($(".one"));
        secondPlayer = ironMan;
        $(".hpsecondplayer").html(secondPlayer.hp);
    });
    $(".four").on("click", function() {
        $(".opponent").append($(".four"));
        secondPlayer = scarletWitch;
        $(".hpsecondplayer").html(secondPlayer.hp);
    });

});
$(".four").on("click", function() {
    if (!firstPlayer) {
        $(".hero").append($(".four"));
        $(".enemies").append($(".two"));
        $(".enemies").append($(".three"));
        $(".enemies").append($(".one"));
        $(".playerChoice").remove();
        firstPlayer = scarletWitch;
    }

    $(".two").on("click", function() {
        $(".opponent").append($(".two"));
        secondPlayer = spiderMan;
        $(".hpsecondplayer").html(secondPlayer.hp);
    });
    $(".three").on("click", function() {
        $(".opponent").append($(".three"));
        secondPlayer = captainAmerica;
        $(".hpsecondplayer").html(secondPlayer.hp);
    });
    $(".one").on("click", function() {
        $(".opponent").append($(".one"));
        secondPlayer = ironMan;
        $(".hpsecondplayer").html(secondPlayer.hp);
    });

});

$("#attackBtn").on("click", function() {
    secondPlayer.hp -= firstPlayer.attack;
    firstPlayer.attack += firstPlayer.attack;
    firstPlayer.hp -= secondPlayer.counter;
    $('.hpFirstPlayer').html(firstPlayer.hp);
    $('.hpSecondPlayer').html(secondPlayer.hp);


    if (secondPlayer == ironMan && secondPlayer.hp <= 0) {
        $('.one').remove();

    } else if (secondPlayer == spiderMan && secondPlayer.hp <= 0) {
        $('.two').remove();

    } else if (secondPlayer == captainAmerica && secondPlayer.hp <= 0) {
        $('.three').remove();

    } else if (secondPlayer == scarletWitch && secondPlayer.hp <= 0) {
        $('.four').remove();

    }

    if (firstPlayer.hp <= 0) {
        $(".hero").html("You Lose!");
        $(".hero").remove();
    }
});

$('[data-command="reset"]').click(function () {    
   window.location.href = window.location.href;
});

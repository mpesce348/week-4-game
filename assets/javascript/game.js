var firstPlayer;
//var firstPlayerBaseAttack = firstPlayer.attack;

var secondPlayer;

//hero objects
var ironMan = {
    hp: 100,
    attack: 30,
    counter: 30,
}
var spiderMan = {
    hp: 120,
    attack: 25,
    counter: 40,
}
var captainAmerica = {
    hp: 140,
    attack: 20,
    counter: 35,
}
var scarletWitch = {
    hp: 160,
    attack: 30,
    counter: 45,
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

//defender HP = 0, remove from defender area

//player chooses new opponent

//player wins by defeating all opponents

//player loses if HP goes to 0 or below
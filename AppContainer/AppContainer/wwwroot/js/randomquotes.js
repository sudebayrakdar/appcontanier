/////   
//// random quotes by rebai adnen 
///  flow me on twitter https://twitter.com/adnen_rebai
//



var quotes = [
    {
        "quoteText": "Go put your creed into the deed. Nor speak with double tongue",
        "Author": "Ralph Emerson"
    },

    {
        "quoteText": "Our lives are a sum total of the choices we have made.",
        "Author": "Wayne Dyer"
    }
    ,
    {
        "quoteText": "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.",
        "Author": "Pearl Buck"
    }
    ,
    {
        "quoteText": "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
        "Author": "Buddha"
    }
    ,
    {
        "quoteText": "Trusting our intuition often saves us from disaster.",
        "Author": "Wilson Schaef"
    }
    ,
    {
        "quoteText": "As soon as the fear approaches near, attack and destroy it.",
        "Author": "Chanakya"
    }
    ,
    {
        "quoteText": "Silence at the proper season is wisdom, and better than any speech.",
        "Author": "Plutarch"
    }
    ,
    {
        "quoteText": "Everyone thinks of changing the world, but no one thinks of changing himself.",
        "Author": "Leo Tolstoy"
    }
    ,
    {
        "quoteText": "Growth itself contains the germ of happiness.",
        "Author": "Pearl Buck"
    }
    ,
    {
        "quoteText": "Waste no more time arguing about what a good man should be. Be one.",
        "Author": "Marcus Aurelius"
    }];



function changeColor() {
    var color = ["#f44336", "#e91e63", "#9c27b0", "#03a9f4", "#9575cd", "#8bc34a", "#ff5722"];
    var c = Math.floor(Math.random() * color.length);
    $('body').css('background-color', color[c]);
    $('.copy').css('background-color', color[c]);
    $('.tweet').css('background-color', color[c]);
    $('.button').css('background-color'), color[c]);
    $('.fa-quote-left,.fa-quote-right').css('color', color[c]);

}






function myFunction() {


    var a = Math.floor(Math.random() * quotes.length);

    $("#text").html('<i class="fa fa-quote-left"></i>   ' + quotes[a].quoteText);
    $("#author").text('-' + quotes[a].Author);

    $("#quotes-box").effect('bounce', { distance: 15, times: 3 }, 1000);


}


$(document).ready(function () {
    myFunction();
    changeColor();




    $(".button").on("click", function () {
        myFunction();
        changeColor();


    });

    $("#tweet-me").on("click", function () {
        var quote = $("p").text();
        window.open("https://twitter.com/intent/tweet?text=" + quote);
    });



});
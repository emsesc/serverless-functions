$('#counter').click(function() {
    $('.count').html(function(i, val) { return val*1+1 });
    Materialize.toast('You have clicked me!', 2000)
});

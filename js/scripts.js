(function(){
  $('.container').on('click', '.ojo', function(){
    var id = $(this).data('id');
    $(this).toggleClass('activated');
    $('#element_' + id).toggle();
  });
})();
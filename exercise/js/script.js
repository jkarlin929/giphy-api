// $(function (){
//   $('form').on('submit', function(e) {
//     e.preventDefault();
//     var query = $('#search-term').val();
//     var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + query;

//     $.ajax(url, {
//       success: function(data) {
//         if(data.meta.status == 200) {
//           var markup = '';

//           markup = data.data.map(function(gif) {
//             return `<img src="${gif.images.fixed_width_downsampled.url}">`
//           })
    //       var $img = $('<img>');
    //       $img.attr('src', data.data.fixed_width_downsampled_url);
    //       $('#gif-gallery-container').append($img);

    // $.ajax({
    // url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
    // success: function(data) {
    //   if(data.meta.status == 200) {
    //     data.data.forEach()
//       }
//     }
//   })
//       }
//     }
//   )
// })});

$(function(){

  $('form').submit(function(e) {
    e.preventDefault();

    //3
    //alert('Form submitted');

    //4
    var searchTerm = $('#search-term').val();
    //alert('Form submitted with term: ' + searchTerm);

    //5, 6, 7
    //var APIUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';

    //8
    //var APIUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + searchTerm;

    //10
    var APIUrl = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + searchTerm;


    //5, 6, 7, 8, 12
    $.ajax({
      url: APIUrl,
      success: function(data) {
        //6
        //console.log(data);

        if(data.meta.status == 200) {
          //7, 8
          //$('<img>').attr('src', data.data.fixed_width_downsampled_url).appendTo('#gif-gallery-container');

          //10
          $('#gif-gallery-container').html('');

          for(var i = 0; i < data.data.length; i++) {
            $('<img>').attr('src', data.data[i].images.fixed_width_downsampled.url).appendTo('#gif-gallery-container');
          }
        }
      }
    });
  });

  //9
  //display trending GIFs on page load
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC' ,
    success: function(data) {
      if(data.meta.status == 200) {
        for(var i = 0; i < data.data.length; i++) {
          $('<img>').attr('src', data.data[i].images.fixed_width_downsampled.url).appendTo('#gif-gallery-container');
        }
      }
    }
  })
});
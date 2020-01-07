$( function() {
    var availableTags = [

"DENBARKER",
"DENDY",
"DENHAM",


    ];
    $( "#form, #to" ).autocomplete({
      source: availableTags
    });
  } );
  $(document).ready(function() {


      $(".addItem").click(function(){
          var html = $(".copy").html();
          $(".after-add-more").after(html);
      });


      $("body").on("click",".removeCopy",function(){
          $(this).parents(".control-group").remove();
      });
      });

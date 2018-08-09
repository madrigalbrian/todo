//user needs to be able to input values
//onclick the button(add to list) needs to append <li> to <ul>
//after input is added to the list input is reseted

var toDo = [];

$("#addList").on("click", function(){
  //for each value input you turn it as an item by declaring a VARIABLE ITEM
  var item = $("input").val();
  //here I am pushing the ITEM into the EMPTY ARRAY
  toDo.push(item);
  //this is erasing the value in the input after the function fired
  $("input").val("");

  //this posts the number of to do's in the DOM
  $("#number").html(toDo.length);
  $("ul").append("<li>" +item+ "</li>");


});

// var count = toDo.length;
// $("#addList").on("click", function() {
//     input1 = $("input").val();
//     var inputNum = toDo.length;
//     toDo.push({
//         "v": input1,
//         "num": inputNum
//     });
//     $("input").val("");
//     console.log(toDo);
//     $("ul").empty();
//     toDo.forEach(function(list) {
//         $("ul").append("<li>" + list.v + "<span class='" + list.num + "'></span></li>");
//         $("ul").css("listStyleType", "none");
//
//     });
//     //onclick adds to html <span> shows .LENGTH
//     $("#number").html(toDo.length);
// });

//onclick toggleClass to on <li> to show completed (css add strikethrough and change color)
$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
    //after <li> is selected/completed it updates the <span> in html
    var complete = $("li").length - $(".done").length;
    $("#number").html(complete);
});

//now user can clear list
$("#clearList").on("click", function() {
    $("li").remove();
    $("#number").empty();
    toDo.length = 0;
});

//user clear completed
$("#clearComplete").on("click", function(){
  $(".done").remove();



});







//user has to hover over li and when the mouse enters the edit and remove button popup next to it
//user can save edit <li>
//user can remove value in <li>

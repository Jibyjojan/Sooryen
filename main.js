// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked





// 2. Remove each item when we click on the closing X





// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items




//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page

$(document).ready(function(){

$("#title1").click(function(){
   	 	$("#description1").toggle();
  });
 
 $("#title2").click(function(){
   	 	$("#description2").toggle();
  });

 $("#title3").click(function(){
   	 	$("#description3").toggle();
  });

 $("#title4").click(function(){
   	 	$("#description4").toggle();
  });

$("#close1").click(function(){
  $("#item1").remove();
 });

$("#close2").click(function(){
  $("#item2").remove();
 });

$("#close3").click(function(){
    $("#item3").remove();
  });

$("#close4").click(function(){
    $("#item4").remove();
  });


});

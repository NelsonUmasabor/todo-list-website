// Check of completed to dos
$("ul").on("click", ".check", function () {
    $(this).parent().toggleClass("completed"); 
});


// Delete Todos
$("ul").on("click", "span",function (event) {
   $(this).parent().animate({ "left": "+=150px" }, 1000,function() {
    $(this).remove();  
   } );   
   event.stopPropagation();
}); 

// Adding Todos
$("input[type='text'").keypress(function (event) {
    if (event.which === 13) {
        let text = $(this).val();
        $(this).val("");
        $("ul").append("<li>"+" <input type='checkbox' class='check'>" + text + " <span><i class='bi bi-trash'></i> </span> </li>")
    }
})  
// Removing add new todo 
$(".bi-plus-lg").click(function () {
    $("input[type='text'").slideToggle();
})

// Adding date
let d = new Date();


let weekday = new Array(7);
weekday[0] = "Sunday 🖖";
weekday[1] = "Monday 💪😀";
weekday[2] = "Tuesday 😜";
weekday[3] = "Wednesday 😌☕️";
weekday[4] = "Thursday 🤗";
weekday[5] = "Friday 🍻";
weekday[6] = "Saturday 😴";


let n = weekday[d.getDay()];


let randomWordArray = Array(
  "Oh my, it's ",
  "Whoops, it's ",
  "Happy ",
  "Seems it's ",
  "Awesome, it's ",
  "Have a nice ",
  "Happy fabulous ",
  "Enjoy your "
);

let randomWord =
  randomWordArray[Math.floor(Math.random() * randomWordArray.length)];




$("#day").append(randomWord + n)
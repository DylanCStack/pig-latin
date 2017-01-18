$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

    var user_input = $("#user_input").val().toLowerCase();
    var words = user_input.split(" ");
    var output = "";
    var vowels = ["a", "e", "i", "o", "u", "y"];

    words.forEach(function(word) {
      var lastChar =word.charAt(word.length-1);
      var punctuation = "";
      if (lastChar.match(/\W/)) {
        console.log("regex worked!")
        punctuation = lastChar;
        word = word.substring(0,word.length-1);
      }
        for (var i=0; i <= 5; i++) {
          if(word[0]===vowels[i]){

            word += "ay"

          }

        }
        output += word + punctuation + " ";
    });

    $("#output").text(output);
  });
});

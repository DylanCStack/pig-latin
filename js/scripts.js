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
      var consonants = "";

      if (lastChar.match(/\W/)) {
        punctuation = lastChar;
        word = word.substring(0,word.length-1);
      }

      for (var i = 0; i < word.length; i++) {
        if ($.inArray(word[i], vowels) >= 0) {
          i = 3000000000;
        } else {
          consonants += word[i]
        }
      }

      output += word.substring(consonants.length)  + consonants + "ay" + punctuation + " ";
    });

    $("#output").text(output);
  });
});

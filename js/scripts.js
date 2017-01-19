var pigLatin = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(word[0]) > -1) {
    word += 'ay';
    return true;
  } else {
    return false;
  }
}






$(function() {
  $('form#pig-latin').submit(function(e) {
    var word = $('input#word').val();
    var wordLower = word.toLowerCase();
    var result = pigLatin(wordLower);
    $('#result').text(result);
    e.preventDefault();
  });
});

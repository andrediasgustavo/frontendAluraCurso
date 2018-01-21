
var $cards = document.querySelectorAll('.card');
var $cardColors = document.querySelectorAll('.card-options');

for (var i = 0; i < $cards.length; i++) {
  $cards[i].addEventListener('click', function() {
    var $this = event.target;
    var $card = this;

    if ($this.dataset.color) {
      $card.dataset.color = $this.dataset.color;

      for (var i = 0; i < $cardColors.length; i++) {
        $cardColors[i].classList.remove('isActive')
      }

      $this.classList.add('isActive');
    };

    if ($this.classList.contains('card_delete')) {
      $card.remove()
    };
  });
}

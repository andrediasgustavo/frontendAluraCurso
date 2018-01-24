
var $wrapCard = document.querySelector('.wrap-card');
var $cardColors = document.querySelectorAll('.card-options');

$wrapCard.addEventListener('click', function(event){
  var $this = event.target;
  console.log($this.parentNode.parentNode.parentNode);
  var $card = $this.parentNode.parentNode.parentNode;

  var $cardContent = $card.querySelector('.card-content');

  if ($this.dataset.color) {
    $card.dataset.color = $this.dataset.color;

    for (var i = 0; i < $cardColors.length; i++) {
      $cardColors[i].classList.remove('isActive');
    }

    $this.classList.add('isActive');
  };

  if ($this.classList.contains('card_delete')) {
    $card.remove()
  };

  if($this.classList.contains('card_edit')) {
    if ($cardContent.getAttribute('contenteditable') == 'false') {
      $cardContent.setAttribute('contenteditable', 'true');
      $cardContent.focus();
      $this.classList.add('isActive');
    } else {
      $cardContent.setAttribute('contenteditable', 'false');
      $cardContent.blur();
      $this.classList.remove('isActive');
    };
  };
});

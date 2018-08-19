// Added the crystals to the HTML
for (i = 1; i <= 3; i++) {
  $('.crystalRow').append(`
        <div class="col-md-4">
          <img class ="crystal" id="crystal_${i}" data-crystal=${Math.floor(Math.random() * 20) + 1} src="assets/images/crystal_${i}.png" alt="crystal image ${i}">
        </div>
  `)
}

let total = 0
let goal = Math.floor(Math.random() * 80) + 20
$('.goal').text(goal)

// Click on Crystal  
$('.crystal').on('click', function () {
  let crystalValue = $(this).attr('data-crystal')
  total += parseInt(crystalValue)
  $('.total').text(total)
  gameStatus()

})

//  Game Status Function
function gameStatus() {
  if (goal === total) {
    $('.message').text('Congratulations! You Win!')
    setTimeout(function () {
      $('.message').text('Click on Crystal to try and reach the Total.')
      reset()
    }, 1000)
  } else if (total > goal) {
    $('.message').text('You Lost! Bummer!!!')
    setTimeout(function () {
      $('.message').text('Click on Crystal to try and reach the Total.')
      reset()
    }, 1000)
  }
}

//  Reset Function
function reset() {
  total = 0
  $('.total').text(total)

  goal = Math.floor(Math.random() * 80) + 20
  $('.goal').text(goal)

  // Reset Crystal Value
  $('#crystal_1').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
  $('#crystal_2').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
  $('#crystal_3').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
}



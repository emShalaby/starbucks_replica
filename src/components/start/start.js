export function loadStart() {
  const $start = $('<div>');
  const $h2 = $('<h2>');
  const $p = $('<p>');
  const $a = $('<a>');
  const $steps = $('<div>');
  const $step = $('<div>');
  const $circle = $('<img>');
  const $steptext = $('<div>');
  //   const $stepText = $('<div>');
  $circle.width('48');
  $circle.height('48');
  $circle.addClass('self-start md:self-center');
  $start.addClass('flex flex-col place-items-center pt-28 gap-5');
  $h2.addClass('font-bold');

  $steps.addClass(
    'flex flex-col md:flex-row  gap-5 px-2 md:px-20 steps md:text-center mt-5'
  );
  $step.addClass('flex  md:flex-col place-items-center  step gap-5');
  $steptext.addClass('flex flex-col gap-4 pb-20');
  $a.addClass('underline hover:cursor-pointer hover:no-underline');
  $start.append(
    $h2.clone().text('Getting started is easy').addClass('font-bold text-3xl'),
    $p.clone().text('Earn Stars and get rewarded in a few easy steps'),
    $steps.append(
      $step.clone().append(
        $circle.clone().attr('src', 'src/assets/pngs/circle-1.png'),
        $steptext.clone().append(
          $h2.clone().append('Create an account'),
          $p
            .clone()
            .append(
              'To get started, ',
              $a.clone().text('join now. '),
              'You can also ',
              $a.clone().text('join in the app '),

              'to get access to the full range of Starbucks® Rewards benefits'
            )
            .addClass('hidden md:inline'),
          $p
            .clone()
            .append(
              $a.clone().text('Join in the app '),
              'to get access to the full range of Starbucks® Rewards benefits. You can also ',
              $a.clone().text('join online')
            ).addClass('md:hidden text-sm')
        )
      ),
      $step.clone().append(
        $circle.clone().attr('src', 'src/assets/pngs/circle-2.png'),
        $steptext.clone().append(
          $h2.clone().append('Order and pay how you\'d like'),
          $p
            .clone()
            .append(
              'Use cash, credit/debit card or save some time and pay right through the app. You\'ll collect Stars all ways. ',
              $a.clone().text('Learn how ')
            )

            .addClass('  text-sm md:text-base'),
        )
      ),
      $step
        .clone()
        .append(
          $circle.clone().attr('src', 'src/assets/pngs/circle-3.png'),
          $steptext
            .clone()
            .append(
              $h2.clone().append('Earn Stars, get Rewards'),
              $p
                .clone()
                .append(
                  'As you earn Stars, you can redeem them for Rewards-like free food, drinks, and more. Start redeeming with as little as 25 Stars!'
                )
                .addClass(' text-sm md:text-base')
            )
        )
    )
  );
  $('#app').append($start);
}

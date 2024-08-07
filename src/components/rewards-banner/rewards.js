export function loadRewards() {
  const $rewards = $('<div>');
  const $img = $('<img>');
  const $div = $('<div>');
  const $h2 = $('<h2>');
  const $p = $('<p>');
  const $btn = $('<button>');
  const $item = $('<div>');
  const $a = $('<a>');
  $img.addClass('md:w-[12rem] w-[12rem]');
  $item.addClass('flex md:flex-col place-items-center gap-5');
  $a.addClass('underline hover:no-underline');
  $btn.text('Join Starbucks® Rewards');
  $btn.addClass('bg-[#158159] text-white rounded-full py-2 px-4 font-bold md:mt-auto text-sm md:text-base');
  $rewards.append(
    $div
      .clone()
      .append(
        $h2
          .append('Keep the Rewards Coming')
          .addClass('md:text-3xl text-2xl font-bold'),
        $p
          .clone()
          .append(
            'The Rewards don\'t stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.'
          )
          .addClass('md:text-base text-sm'),
        $div
          .clone()
          .append(
            $item
              .clone()
              .append(
                $img.clone().attr('src', 'src/assets/pngs/delta-skymiles.png'),
                $p
                  .clone()
                  .append(
                    $a.clone().append('Link your Delta SkyMiles®'),
                    'and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.1'
                  ),
              ),            $item
              .clone()
              .append(
                $img.clone().attr('src', 'src/assets/pngs/bank-of-america.png'),
                $p
                  .clone()
                  .append(
                    $a.clone().append('Link your Delta SkyMiles®'),
                    'and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.1'
                  ),
              ),            $item
              .clone()
              .append(
                $img.clone().attr('src', 'src/assets/pngs/marriott-logo.png'),
                $p
                  .clone()
                  .append(
                    $a.clone().append('Link your Delta SkyMiles®'),
                    'and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.1'
                  ),
              )
          )
          .addClass('md:flex-row flex flex-col gap-10 md:mt-10'),$btn
      )
      .addClass(
        'flex flex-col h-[100%] w-[100%] bg-[#D4E9E2] place-items-center md:text-center p-5 md:p-10 gap-10 md:gap-5 '
      )
  );
  $rewards.addClass(
    'md:p-9 bg-[url(\'src/assets/pngs/rewards-bg.png\')] w-full h-[37.5rem]'
  );
  $('#app').append($rewards);
}

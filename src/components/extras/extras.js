export function loadExtras() {
  const $extras = $('<div>');
  const $h2 = $('<h2>');
  const $p = $('<p>');
  const $div = $('<div>');
  const $divItem = $('<div>');
  const $textDiv = $('<div>');
  const $img = $('<img>');
  const $a=$('<a>');

  $img.height('112');
  $img.width('112');
  $img.addClass('self-start md:self-center');
  $a.addClass('underline hover:cursor-pointer md:text-base text-sm');
  $a.text('Learn more');
  $divItem.addClass(
    'flex flex-row md:flex-col md:text-center place-items-center gap-5'
  );
  $textDiv.addClass('flex flex-col pb-20 gap-4 md:text-base text-sm');
  $extras.addClass('flex flex-col place-items-center pt-28 gap-5 md:text-center');
  $extras.append(
    $h2.clone().text('Endless Extras').addClass('font-bold text-3xl'),
    $p
      .clone()
      .text(
        'Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.'
      )
      .addClass('lg:px-96 md:px-32 px-10'),
    $div
      .clone()
      .append(
        $divItem
          .clone()
          .append(
            $img.clone().attr('src', 'src/assets/pngs/1-fun-freebies.png'),
            $textDiv
              .clone()
              .append(
                $h2.clone().append('Fun freebies').addClass('font-bold'),
                $p
                  .clone()
                  .append(
                    'Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.'
                  ),$a
              )
          ),
        $divItem
          .clone()
          .append(
            $img
              .clone()
              .attr('src', 'src/assets/pngs/2-order-and-pay-ahead.png'),
            $textDiv
              .clone()
              .append(
                $h2.clone().append('Order & pay ahead').addClass('font-bold'),
                $p
                  .clone()
                  .append(
                    'Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.'
                  ),$a.clone()
              )
          ),
        $divItem
          .clone()
          .append(
            $img
              .clone()
              .attr('src', 'src/assets/pngs/3-get-to-free-faster.png'),
            $textDiv
              .clone()
              .append(
                $h2.clone().append('Get to free faster').addClass('font-bold'),
                $p
                  .clone()
                  .append(
                    'Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.'
                  ),$a.clone()
              )
          )
      )
      .addClass(
        'flex flex-col md:flex-row gap-5 px-2 md:px-20 steps md:text-center mt-5'
      )
  );
  $('#app').append($extras);
}

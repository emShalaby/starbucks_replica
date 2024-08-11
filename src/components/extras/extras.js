import { loadExtrasModal } from './extras-modal.js';
export function loadExtras() {
  const $extras = $('<div>');
  const $h2 = $('<h2>');
  const $p = $('<p>');
  const $div = $('<div>');
  const $divItem = $('<div>');
  const $textDiv = $('<div>');
  const $img = $('<img>');
  const $a = $('<a>');

  $img.height('112');
  $img.width('112');
  $img.addClass('self-start md:self-center hover:cursor-pointer');
  $a.addClass('underline hover:cursor-pointer md:text-base text-sm');
  $a.text('Learn more');
  $divItem.addClass(
    'flex flex-row md:flex-col md:text-center place-items-center gap-5',
  );
  $textDiv.addClass('flex flex-col pb-20 gap-4 md:text-base text-sm');
  $extras.addClass(
    'flex flex-col place-items-center pt-28 gap-5 md:text-center',
  );
  $extras.append(
    $h2.clone().text('Endless Extras').addClass('font-bold text-3xl'),
    $p
      .clone()
      .text(
        'Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.',
      )
      .addClass('lg:px-96 md:px-32 px-10'),
    $div
      .clone()
      .append(
        $divItem.clone().append(
          $img.clone().attr('src', 'src/assets/pngs/1-fun-freebies.png'),
          $textDiv.clone().append(
            $h2.clone().append('Fun freebies').addClass('font-bold'),
            $p
              .clone()
              .append(
                'Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.',
              ),
            $a
              .clone()
              .on('click', () =>
                loadExtrasModal(
                  [
                    'src/assets/pngs/A1.png',
                    'src/assets/pngs/A2.png',
                    'src/assets/pngs/A3.png',
                  ],
                  [
                    'Free food, drinks & more',
                    ' Complimentary birthday treat',
                    'Brewed coffee & tea refills on us',
                  ],
                  [
                    'Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a coffee tumbler.',
                    'Every year on your birthday get a free drink or food item of your choice',
                    'More  Caffè Verona® Blend, please. We’re happy to refill your hot cup while you’re in the store. Just ask.',
                  ],
                ),
              ),
          ),
        ),
        $divItem.clone().append(
          $img.clone().attr('src', 'src/assets/pngs/2-order-and-pay-ahead.png'),
          $textDiv.clone().append(
            $h2.clone().append('Order & pay ahead').addClass('font-bold'),
            $p
              .clone()
              .append(
                'Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.',
              ),
            $a
              .clone()
              .on('click', () =>
                loadExtrasModal(
                  ['src/assets/pngs/B1.png', 'src/assets/pngs/B2.png'],
                  ['Tap,go.', 'Just for you'],
                  [
                    'Select your menu items in the app along with your store location. Then tell the barista your name when you swing by the pickup area to grab your order',
                    'Our app lets you customize your order and track an estimated pickup time. Make sure to save your favorites so they’re all ready for your next order.',
                  ],
                ),
              ),
          ),
        ),
        $divItem.clone().append(
          $img.clone().attr('src', 'src/assets/pngs/3-get-to-free-faster.png'),
          $textDiv.clone().append(
            $h2.clone().append('Get to free faster').addClass('font-bold'),
            $p
              .clone()
              .append(
                'Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.',
              ),
            $a
              .clone()
              .on('click', () =>
                loadExtrasModal(
                  [
                    'src/assets/pngs/C1.png',
                    'src/assets/pngs/C2.png',
                    'src/assets/pngs/C3.png',
                  ],
                  [
                    'Bonus Star challenges',
                    'Double Star Days',
                    'Member-only games',
                  ],
                  [
                    'Rack up the Stars with regular opportunities to get rewarded for what you love.',
                    'Watch for those special days where you’ll earn twice the Stars on almost everything.',
                    'Play for a chance to win exclusive prizes, free food and drinks, and more.',
                  ],
                ),
              ),
          ),
        ),
      )
      .addClass(
        ' flex flex-col  md:flex-row gap-5 px-2 md:px-20 steps md:text-center mt-5',
      ),
  );

  $('#app').append($extras);
}

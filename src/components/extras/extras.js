import { loadExtrasModal } from './extras-modal.js';
export function loadExtras(){
  $('.extras').load('src/components/extras/extras.html',function(){;
    $('.modal-1').on('click', () =>{
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
      );
    } );

    $('.modal-1-a').on('click', () =>{
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
      );
    });
    $('.modal-2')
      .on('click', () =>{
        loadExtrasModal(
          ['src/assets/pngs/B1.png', 'src/assets/pngs/B2.png'],
          ['Tap,go.', 'Just for you'],
          [
            'Select your menu items in the app along with your store location. Then tell the barista your name when you swing by the pickup area to grab your order',
            'Our app lets you customize your order and track an estimated pickup time. Make sure to save your favorites so they’re all ready for your next order.',
          ],
        );
      });
    $('.modal-2-a')
      .on('click', () =>{
        loadExtrasModal(
          ['src/assets/pngs/B1.png', 'src/assets/pngs/B2.png'],
          ['Tap,go.', 'Just for you'],
          [
            'Select your menu items in the app along with your store location. Then tell the barista your name when you swing by the pickup area to grab your order',
            'Our app lets you customize your order and track an estimated pickup time. Make sure to save your favorites so they’re all ready for your next order.',
          ]
        );
      });

    $('.modal-3').on('click', () =>{
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
      );
    });
    $('.modal-3-a').on('click', () =>
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
        ]
      )
    );});
}
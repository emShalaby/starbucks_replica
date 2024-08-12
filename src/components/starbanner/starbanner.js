export function loadStarBanner() {
  // const $banner = $('<div>');
  // const $star = $('<img>');
  // const $bannerText = $('<div>');
  // const $h2 = $('<h2>');
  // const $p = $('<p>');
  // const $button = $('<button>');
  // const $p2 = $('<p>');
  // const $p3 = $('<p>');
  // const $a = $('<a>');
  // const $div = $('<div>');
  // $star.attr('src', 'src/assets/pngs/star-img.png');
  // $star.addClass(
  //   ' mr-[-85%] mb-[-20%] scale-150 md:scale-125 md:mb-0 md:mr-[-34%] md:w-[87%] '
  // );
  // $banner.addClass(
  //   'banner overflow-hidden  flex flex-col gap-36  justify-between md:flex-row px-10 bg-[#D4E9E2] items-center '
  // );
  // $bannerText.addClass(
  //   '  text-center md:text-start self-center justify-self-center w-72  flex flex-col gap-8 font-semibold mt-10 mb-5'
  // );
  // $h2.text('FREE COFFEE IS A TAP AWAY');
  // $p.text('Join now to start earning Rewards');
  // $p2.text('Or');
  // $a.text('join in the app');
  // $a.addClass('hidden md:inline underline');
  // $p3.text('for the best experience');
  // $h2.addClass('  text-3xl md:text-4xl font-semibold');
  // $button.addClass(
  //   'rounded-full bg-[#00754A] text-white hidden md:flex self-center md:self-start px-3 py-2 font-semibold'
  // );
  // $button.text('Join now ');
  // $bannerText.append(
  //   $h2,
  //   $p,
  //   $button,
  //   $button
  //     .clone()
  //     .text('Join in the app')
  //     .toggleClass('hidden')
  //     .addClass('md:hidden '),
  //   $div.append(
  //     $a
  //       .clone()
  //       .toggleClass('hidden')
  //       .addClass('md:hidden ')
  //       .text('Or join online'),
  //     $p2,
  //     $a,
  //     $p3,
  //     $div
  //   )
  // );
  // $div.addClass('[&>p]:md:inline [&>*]:mr-1 [&>p]:hidden');
  // $banner.append($bannerText, $star);
  // $('#app').append($banner);
  $('.star-banner').load('src/components/starbanner/starbanner.html'),function(){
    console.log('hi');
  };

}

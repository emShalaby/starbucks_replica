import { loadSubheader } from './subheader.js';
import { loadSignUp } from '../signup/signup.js';
export function loadHeader() {
  const $header = $('<div>');
  const $container = $('<div>');
  const $icon = $('<img>');
  const $pageTitles = $('<ul>');
  const $menu = $('<li>');
  const $rewards = $('<li>');
  const $giftCards = $('<li>');
  const $menuLink = $('<a>');
  const $rewardsLink = $('<a>');
  const $giftCardsLink = $('<a>');
  const $signing = $('<div>');
  const $signIn = $('<button>');
  const $signUp = $('<button>');
  const $location = $('<div>');
  const $locationImg = $('<img>');
  const $locationText = $('<h5>');
  const $containerLeft = $('<div>');
  const $containerRight = $('<div>');
  const $activeList = $('<span>');
  const $stickyHeader = $('<div>');
  const $smJoin = $('<button>');
  const $hamburgerIcon = $('<img>');
  const $closeIcon=$('<img>');
  
  $signUp.on('click',()=> loadSignUp());
  $hamburgerIcon.attr('class', 'more-icon block md:hidden hover:bg-[#F0F0F0] hover:rounded-[70%] hover:cursor-pointer');
  $closeIcon.addClass('hidden md:hidden hover:bg=[#F0F0F0] hover:rounded-[70%] hover:cursor-pointer');
  $header.attr('class', 'flex flex-col');
  $smJoin.attr(
    'class',
    'px-5 py-1 rounded-full border border-white text-white text-sm font-bold hover:bg-black transition duration-300 md:hidden'
  );
  $stickyHeader.addClass(
    'bg-[#1E3932] text-[#F4F5F5] sticky-header md:px-8 px-5 py-4 font-bold sticky flex justify-between'
  );
  $stickyHeader.text('STARBUCKS® REWARDS');
  $smJoin.text('Join in the app');
  $container.attr(
    'class',
    'justify-between px-10 flex items-center md:flex-row   '
  );
  $containerLeft.attr('class', 'flex gap-4');
  $containerRight.attr('class', 'flex gap-4');
  $icon.attr('class', 'flex items-center m-2 my-6');
  $pageTitles.attr('class', '[&_li:hover]:text-[#288B66] [&_li:hover]:cursor-pointer hidden md:flex  ml-3 font-bold text-sm gap-3');
  $rewards.attr('class', 'flex items-center relative px-1');
  $giftCards.attr('class', 'flex items-center relative px-1');
  $menu.attr('class', 'flex items-center relative px-1');
  $location.attr('class', ' hidden md:flex items-center gap-2 mr-10 ');
  $signing.attr('class', 'gap-4 flex items-center');
  $signIn.attr(
    'class',
    'hidden px-5 py-1 rounded-full border border-black text-black text-sm font-bold hover:bg-gray-100 transition duration-300 md:flex'
  );
  $signUp.addClass(
    'hover:bg[#4C4C4C] transition duration-300 hidden px-5 py-1 bg-black text-white rounded-full text-sm font-bold md:flex sign-up-btn'
  );
  $activeList.attr('class', 'absolute bottom-0 left-0 w-full  block h-[6px] bg-[#00754A]');
  $locationText.addClass('hover:cursor-pointer hover:text-[#288B66] font-bold text-sm location-text');


  $hamburgerIcon.attr('src', 'src/assets/svgs/more.svg');
  $closeIcon.attr('src','src/assets/svgs/close-icon.svg');
  $icon.attr('src', 'src/assets/svgs/starbucks_icon.svg');
  $locationImg.attr('src', 'src/assets/svgs/location_icon.svg');


  $header.append($container);
  $header.append($stickyHeader);
  $container.append($containerLeft);
  $container.append($containerRight);
  $containerLeft.append($icon);
  $containerLeft.append($pageTitles);
  $containerRight.append($location);
  $containerRight.append($signing);
  $containerRight.append($hamburgerIcon);
  $containerRight.append($closeIcon);


  $locationImg.height('30');
  $locationImg.width('25');
  $icon.height('52');
  $icon.width('52');
  $locationText.text('Find a store');
  $signIn.text('Sign In');
  $signUp.text('Join Now');
  $signing.append($signIn, $signUp);
  $menuLink.text('MENU');
  $giftCardsLink.text('GIFT CARDS');

  $rewardsLink.text('REWARDS');
  $rewards.append($rewardsLink);
  $rewards.append($activeList);
  $menu.append($menuLink);
  $giftCards.append($giftCardsLink);
  $pageTitles.append($menu, $rewards, $giftCards);
  $location.append($locationImg);
  $location.append($locationText);

  $stickyHeader.append($smJoin);

  $('#app').append($header);
  loadSubheader($hamburgerIcon,$closeIcon);


}

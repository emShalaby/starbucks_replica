export  function loadHeader(active){
  const $container=$('<div>');
  const $icon=$('<img>');
  const $pageTitles=$('<ul>');
  const $menu=$('<li>');
  const $rewards=$('<li>');
  const $giftCards=$('<li>');
  const $menuLink=$('<a>');
  const $rewardsLink=$('<a>');
  const $giftCardsLink=$('<a>');
  const $signing=$('<div>');
  const $signIn=$('<button>');
  const $signUp=$('<button>');
  const $location=$('<div>');
  const $locationImg=$('<img>');
  const $locationText=$('<h5>');
  const $containerLeft=$('<div>');
  const $containerRight=$('<div>');
  const $activeList=$('<span>');
  $container.attr('class','container px-10 flex items-center md:flex-row  md:justify-between ');
  $containerLeft.attr('class','flex gap-4 ');
  $containerRight.attr('class','flex gap-4');
  $icon.attr('src','src/assets/svgs/starbucks_icon.svg');
  $icon.attr('class','flex items-center m-2 my-6');
  $pageTitles.attr('class','flex gap-6 ml-3 font-bold text-sm');
  $rewards.attr('class','flex items-center relative');
  $giftCards.attr('class','flex items-center relative');
  $menu.attr('class','flex items-center relative');
  $location.attr('class','flex items-center gap-2 mr-10 ');
  $locationImg.attr('src','src/assets/svgs/location_icon.svg');
  $signing.attr('class','gap-4 flex items-center');
  $signIn.attr('class','px-5 py-1 rounded-full border border-black text-black text-xs font-bold hover:bg-gray-100 transition duration-300');
  $signUp.attr('class','px-5 py-1 rounded-full bg-black text-white rounded-full text-xs transition duration font-bold ');
  $activeList.attr('class','absolute bottom-0 left-0 w-full h-2  block active');
  $locationText.attr('class','font-bold text-xs');
  
  $locationImg.height('30');
  $locationImg.width('25');
  $icon.height('52');
  $icon.width('52');

  $locationText.text('Find a store');
  $signIn.text('Sign In');
  $signUp.text('Join Now');
  $signing.append($signIn,$signUp);
  $menuLink.text('MENU');
  $giftCardsLink.text('GIFT CARDS');
  
  $rewardsLink.text('REWARDS');
  $rewards.append($rewardsLink);
  $rewards.append($activeList);
  $menu.append($menuLink);
  $giftCards.append($giftCardsLink);
  $pageTitles.append($menu,$rewards,$giftCards);
  $location.append($locationImg);
  $location.append($locationText);
  $containerRight.append($location);
  $containerRight.append($signing);
  $containerLeft.append($icon);
  $containerLeft.append($pageTitles);
  $container.append($containerLeft);
  $container.append($containerRight);
  $('#app').append($container);
  if(active=='rewards'){
    
    if($menu.children('.active'))$menu.children('.active').remove;
    if($menu.children('.active'))$menu.children('.active').remove();
    if($menu.children('.active'))$menu.children('.active').remove();
    $rewards.append($activeList);
  }
  else if(active=='menu'){
    if($menu.children('.active'))$menu.children('.active').remove;
    if($menu.children('.active'))$menu.children('.active').remove();
    if($menu.children('.active'))$menu.children('.active').remove();
    $menu.append($activeList);
  }
  else{
    if($menu.children('.active'))$menu.children('.active').remove;
    if($menu.children('.active'))$menu.children('.active').remove();
    if($menu.children('.active'))$menu.children('.active').remove();
    $giftCards.append($activeList);
  }
}
export  function loadHeader(active){
  const $header=$('<div>');
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
  const $stickyHeader=$('<div>');
  const $smJoin=$('<button>');
  const $moreIcon=$('<img>');
  const $smNav=$('<div>');
  const $smPagetitles=$('<ul>');
  const $smMenu=$('<li>');
  const $smRewards=$('<li>');
  const $smGiftCards=$('<li>');
  const $smBtngroup=$('<div>');
  const $smSignInBtn=$('<button>');
  const $smSignUpBtn=$('<button>');
  const $smLocation=$('<div>');
  const $smLocationText=$('<div>');
  const $smLocationIcon=$('<img>');
  $smBtngroup.append($smSignInBtn);
  $smBtngroup.append($smSignUpBtn);
  $smLocation.append($smLocationIcon);
  $smLocation.append($smLocationText);
  $smMenu.attr('class','px-6 py-5');
  $smRewards.attr('class','px-6 py-5');
  $smGiftCards.attr('class','px-6 py-5 ');

  $smNav.append($smPagetitles);
  $smPagetitles.append($smMenu);
  $smPagetitles.append($smRewards);
  $smPagetitles.append($smGiftCards);
  $smGiftCards.text('GIFT CARDS');
  $smRewards.text('REWARDS');
  $smMenu.text('MENU');
  $smNav.attr('class','md:hidden flex flex-col fixed self-end px-3 bg-white h-full sm-nav w-4/5');
  $moreIcon.attr('src','src/assets/svgs/more.svg');
  $moreIcon.attr('class','more-icon block md:hidden');
  $header.attr('class','flex flex-col');
  $smJoin.attr('class','px-5 py-1 rounded-full border border-white text-white text-sm font-bold hover:bg-black transition duration-300 md:hidden');
  $stickyHeader.attr('class','sticky-header md:px-8 px-5 py-4 font-bold sticky flex justify-between');
  $stickyHeader.text('STARBUCKS® REWARDS');
  $smJoin.text('Join in the app');
  $container.attr('class','justify-between px-10 flex items-center md:flex-row   ');
  $containerLeft.attr('class','flex gap-4 ');
  $containerRight.attr('class','flex gap-4');
  $icon.attr('src','src/assets/svgs/starbucks_icon.svg');
  $icon.attr('class','flex items-center m-2 my-6');
  $pageTitles.attr('class','hidden md:flex  ml-3 font-bold text-sm gap-3');
  $rewards.attr('class','flex items-center relative px-1');
  $giftCards.attr('class','flex items-center relative px-1');
  $menu.attr('class','flex items-center relative px-1');
  $location.attr('class',' hidden md:flex items-center gap-2 mr-10 ');
  $locationImg.attr('src','src/assets/svgs/location_icon.svg');
  $signing.attr('class','gap-4 flex items-center');
  $signIn.attr('class','hidden px-5 py-1 rounded-full border border-black text-black text-sm font-bold hover:bg-gray-100 transition duration-300 md:flex');
  $signUp.attr('class','hidden px-5 py-1 rounded-full bg-black text-white rounded-full text-sm font-bold md:flex sign-up-btn');
  $activeList.attr('class','absolute bottom-0 left-0 w-full  block active');
  $locationText.attr('class','font-bold text-sm location-text');
  $smPagetitles.attr('class','flex flex-col  font-bold  pb-8 mt-4 sm-page-titles');
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
  $containerRight.append($moreIcon);
  $containerLeft.append($icon);
  $containerLeft.append($pageTitles);
  $container.append($containerLeft);
  $container.append($containerRight);
  $stickyHeader.append($smJoin);
  
  $header.append($container);

  $header.append($stickyHeader);
  $header.append($smNav);
 

  $('#app').append($header);
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
    $stickyHeader.addClass('hidden');

  }
  else{
    if($menu.children('.active'))$menu.children('.active').remove;
    if($menu.children('.active'))$menu.children('.active').remove();
    if($menu.children('.active'))$menu.children('.active').remove();
    $giftCards.append($activeList);
    $stickyHeader.addClass('hidden');

  }
 
  $(document).on('click','.more-icon',()=>console.log('hi'));
  $smNav.append($smBtngroup);
  $smSignInBtn.attr('class',' px-5 py-1 rounded-full border border-black text-black text-sm font-bold hover:bg-gray-100 transition duration-300 md:flex');
  $smSignInBtn.text('Sign in');
  $smBtngroup.attr('class','mt-8 flex gap-5 px-3');
  $smSignUpBtn.attr('class',' px-5 py-1 rounded-full bg-black text-white rounded-full text-sm font-bold md:flex sign-up-btn');
  $smSignUpBtn.text('Join Now');
  $smLocationIcon.attr('src','src/assets/svgs/location_icon.svg');
  $smLocationIcon.width('20');
  $smLocation.attr('class','flex gap-3 mt-5 px-3');
  $smNav.append($smLocation);
  $smLocationText.text('Find a store');
  
}
export function loadSubheader(openIcon,closeIcon) {
  const $subHeader = $('<div>');
  const $layout = $('<div>');
  const $smPagetitles = $('<ul>');
  const $smMenu = $('<li>');
  const $smRewards = $('<li>');
  const $smGiftCards = $('<li>');
  const $smBtngroup = $('<div>');
  const $smSignInBtn = $('<button>');
  const $smSignUpBtn = $('<button>');
  const $smLocation = $('<div>');
  const $smLocationText = $('<div>');
  const $smLocationIcon = $('<img>');

  $smPagetitles.addClass('flex flex-col  font-bold  pb-8 mt-4 sm-page-titles border-b-2 border-solid border-b-[#EAEAEA]');
  
  $smPagetitles.append($smMenu, $smRewards, $smGiftCards);

  $smMenu.addClass('px-6 py-5');
  
  $smMenu.text('MENU');

  $smRewards.addClass('px-6 py-5');

  $smRewards.text('REWARDS');

  $smGiftCards.addClass('px-6 py-5 ');

  $smGiftCards.text('GIFT CARDS');

  $smLocation.addClass('flex gap-3 mt-5 px-3 sm-location-text');

  $smLocationIcon.attr('src', 'src/assets/svgs/location_icon.svg');

  $smLocation.append($smLocationIcon,$smLocationText);

  $smLocationIcon.width('20');

  $smLocationText.text('Find a store');

  $smLocationText.addClass('hover:text-[green] hover:cursor-pointer');

  $smBtngroup.addClass('mt-8 flex gap-5 px-3');

  $smBtngroup.append($smSignInBtn,$smSignUpBtn);


  
  $layout.addClass(
    ' top-0 right-0 w-[100vw] h-[100vh]  bg-[#00000080] justify-center place-items-center hidden'
  );
  $subHeader.addClass(
    'border-t-2 border-solid border-t-[#EAEAEA] translate-x-full mt-[100px] top-0 right-0 transition-transform duration-500 ease-in-out flex-col fixed self-end px-3 overflow-hidden bg-white h-[100vh] md:hidden sm-nav w-4/5 '
  );
  $('html').on('click', () => {
    if (!$subHeader.hasClass('hidden')) $subHeader.addClass('translate-x-full');
    if (!closeIcon.hasClass('hidden')) closeIcon.toggleClass('hidden');
    if (openIcon.hasClass('hidden')) openIcon.toggleClass('hidden');
    $('body').removeClass('overflow-hidden');
    
    // $layout.hide();
  });
  openIcon.parent().on('click', (e) => e.stopPropagation());
  openIcon.on('click', () => {
    $layout.show();
    setTimeout(()=>$subHeader.toggleClass('translate-x-full'),1);
    closeIcon.toggleClass('hidden');
    openIcon.toggleClass('hidden');
    $('body').addClass('overflow-hidden');
    
  });
  closeIcon.on('click', () => {
    $subHeader.toggleClass('translate-x-full');
    setTimeout(()=>$layout.hide(),500);

    closeIcon.toggleClass('hidden');
    openIcon.toggleClass('hidden');
    $('body').removeClass('overflow-hidden');
    
  });
  
  $subHeader.append($smPagetitles,$smBtngroup,$smLocation,$smBtngroup);
  $layout.append($subHeader);
  

  $('#app').append($layout);
}

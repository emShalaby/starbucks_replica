export function loadExtrasModal(imgs, headers, text) {
  const $layout = $('<div>');
  const $modal = $('<div>');
  const $img = $('<img>');
  const $header = $('<h2>');
  const $p = $('<p>');
  const $close = $('<img>');
  const $content = $('<div>');
  const $control = $('<div>');
  const $circleButton=$('<button>');
  $circleButton.width('12');
  $circleButton.height('12');
  $content.addClass('content');
  $img.height('200');
  $img.width('200');
  $close.width('24');
  $close.height('24');
  $circleButton.addClass('rounded-full bg-[#1E3932]');
  $close.attr('src', 'src/assets/svgs/close-icon.svg');
  $close.addClass('hover:cursor-pointer');
  $layout.addClass(
    'top-0 left-0 w-[100vw] h-[100vh] position fixed bg-[#00000080] flex justify-center place-items-center'
  );
  $modal.addClass('bg-white flex flex-col  p-3 pb-8 text-center w-[26.5rem] h-[26.5rem]  place-items-center rounded-lg');
  $content.addClass('flex flex-col gap-5 place-items-center');
  $close.addClass('self-end');
  $header.addClass('font-semibold text-xl');
  $p.addClass('text-sm');
  $control.addClass('mt-auto flex gap-3');
  $modal.append($close);
  for (let i = 0; i < imgs.length; i++) {
    $modal.append(
      $content.clone().append(
        $img.clone().attr('src', imgs[i]),
        $header.clone().text([headers[i]]),
        $p.clone().text(text[i]),
      ).addClass('hidden')
    
    );
    $control.append($circleButton.clone().on('click',(event)=>{
      $modal.children('.content').hide();

      
      if($modal.children('.content').eq(i).is(':hidden')) $modal.children('.content').eq(i).css('display','flex');
    }));    
  }
  $modal.children('.content').eq(0).toggleClass('hidden');
  $modal.append($control);
  
  $modal.on('click', (event) => event.stopPropagation());
  $layout.on('click', (event) => {
    if ($(event.target).is($layout)) {
      $layout.remove();
    }
  });
  $close.on('click',()=>$layout.remove());

  $('#app').append($layout.append($modal));

  return $modal;
}

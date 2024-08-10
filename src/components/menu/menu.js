export function loadMenu() {
  const $menu = $('<div>');
  const $h2 = $('<h2>');
  const $div = $('<div>');
  const $button = $('<button>');
  const $span = $('<span>');
  const $img = $('<img>');
  const $items = $('<div>');
  const $item = $('<div>');
  const $p = $('<p>');
  const $active=$('<div>');
  
  $button.addClass('text-2xl font-semibold py-2 px-10');
  $span.addClass('text-[#CBA258] text-base');
  $menu.addClass('flex flex-col place-items-center bg-[#F1F8F5] gap-10 p-10');
  $items.addClass('bg-[#D4E9E2]');
  $active.addClass('h-[2px] bg-black w-[100%]');
 
  $items.append(
    $item
      .clone()
      .append(
        $img.clone().attr('src', ''),
        $div.clone().append($h2.clone().append(), $p.clone().append())
      ),
    $item
      .clone()
      .append(
        $img.clone().attr('src', ''),
        $div.clone().append($h2.clone().append(), $p.clone().append())
      ),
    $item
      .clone()
      .append(
        $img.clone().attr('src', ''),
        $div.clone().append($h2.clone().append(), $p.clone().append())
      ),
    $item
      .clone()
      .append(
        $img.clone().attr('src', ''),
        $div.clone().append($h2.clone().append(), $p.clone().append())
      ),
    $item
      .clone()
      .append(
        $img.clone().attr('src', ''),
        $div.clone().append($h2.clone().append(), $p.clone().append())
      )
  );
  $menu.append(
    $h2
      .clone()
      .append('Get your favourites for free')
      .addClass('md:text-3xl font-semibold')
  );
  $menu.append(
    $div.clone().append(
      $div
        .clone()
        .append(
          $div.clone().append(
            $button
              .clone()
              .append('25', $span.clone().append('★'))
            ,$active),
          $div.clone().append(
            $button
              .clone()
              .append('25', $span.clone().append('★')),
            $active.clone()
          ),
          $div.clone().append(
            $button
              .clone()
              .append('25', $span.clone().append('★')),$active.clone()
          ),
          $div.clone().append(
            $button
              .clone()
              .append('25', $span.clone().append('★')),$active.clone()
          )   
        )
        .addClass('flex'),
      $items
    )
  );

  $('#app').append($menu);
}

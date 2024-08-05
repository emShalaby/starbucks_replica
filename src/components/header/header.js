export  function loadHeader(){
  const $icon=$('<img>');
  console.log($icon);
  $icon.attr('src','src/assets/svgs/starbucks_icon.svg');
  $('#app').append($icon);
}
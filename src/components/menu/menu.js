export function loadMenu() {

  $('.menu').load('src/components/menu/menu.html', function() {
    // Hide all elements in the item-container
    const items=['.item.index-1','.item.index-2','.item.index-3','.item.index-4','.item.index-5',];
    $('.item-container').find('*').css('display','hidden');
    const $slider = $('<div class="h-[2px] bg-black w-[100%]"></div>');
    $('.item.index-1').css('display','flex');
    $('.btn-container-1').append($slider);
    $('.btn.index-1').on('click',()=>{
      console.log('button 1 clicked');

      items.forEach((e)=>{
        $(e).hide();
        
      });
      
      $('.item.index-1').fadeIn().css('display','flex');
      $('.btn-container-1').append($slider);
    });

    $('.btn.index-2').on('click',()=>{
      console.log('button  clicked');

      items.forEach((e)=>{
        $(e).hide();
      });
      
      $('.item.index-2').fadeIn().css('display','flex');
      $('.btn-container-2').append($slider);
    });
    $('.btn.index-3').on('click',()=>{
      console.log('button 3 clicked');

      items.forEach((e)=>{
        $(e).hide();
      });
      $('.item.index-3').fadeIn().css('display','flex');
      $('.btn-container-3').append($slider);
    });
    $('.btn.index-4').on('click',()=>{
      console.log('button 4 clicked');

      items.forEach((e)=>{
        $(e).hide();
      });
      $('.item.index-4').fadeIn().css('display','flex');
      $('.btn-container-4').append($slider);
    });
    $('.btn.index-5').on('click',()=>{
      console.log('button 5 clicked');

      items.forEach((e)=>{
        $(e).hide();
      });

      $('.item.index-5').fadeIn().css('display','flex');
      $('.btn-container-5').append($slider);

    });
  });
}
export function loadPayments() {
  const $payments = $('<div>');
  const $h2 = $('<h2>');
  const $p = $('<p>');
  const $div = $('<div>');
  const $items = $('<div>');
  const $item = $('<div>');
  const $img = $('<img>');
  $img.addClass('w-[8rem]');
  $item.addClass('md:flex');
  $items.addClass('md:grid md:grid-rows-2 md:grid-cols-12 md:mt-auto  md:place-items-start flex flex-col gap-10 self-start pl-3 ');
  $payments.addClass(
    'bg-[#F2F0EB] md:h-[40rem]  w-full md:p-10 flex flex-col  md:text-center place-items-center gap-5'
  );
  $items.append(
    $item
      .clone()
      .append(
        $h2.clone().append('1★ per dollar').addClass('text-xl font-semibold'),
        $p.clone().append('Pay as you go')
      ).addClass('md:flex-col md:text-start  col-span-2 self-start justify-self-start'),
    $item
      .clone()
      .append(
        $img.clone().attr('src', 'src/assets/pngs/D1.png'),
        $div.clone().append($h2.clone().append('Scan and pay separately').addClass('text-xl font-semibold'),
          $p.clone().append('Use cash or credit/debt card at the register')).addClass('md:flex flex-col gap-5')
      ).addClass('text-start col-span-5 flex gap-5'),
    $item
      .clone()
      .append(
        $img.clone().attr('src', 'src/assets/pngs/D1.png'),
        $div.clone().append($h2.clone().append('Scan and pay separately').addClass('font-semibold text-xl'),
          $p.clone().append('Use cash or credit/debt card at the register')).addClass('md:flex flex-col gap-5')
      ).addClass('text-start col-span-5 flex gap-5'),
    $item
      .clone()
      .append(
        $h2.clone().append('1★ per dollar').addClass('text-xl font-semibold'),
        $p.clone().append('Pay as you go')
      ).addClass('md:flex-col text-start col-span-2'),
    $item
      .clone()
      .append(
        $img.clone().attr('src', 'src/assets/pngs/D1.png'),
        $div.clone().append($h2.clone().append('Scan and pay separately').addClass('text-xl font-semibold'),
          $p.clone().append('Use cash or credit/debt card at the register')).addClass('md:flex flex-col gap-5')
      ).addClass('text-start col-span-5 flex gap-5'),
    $item
      .clone()
      .append(
        $img.clone().attr('src', 'src/assets/pngs/D1.png'),
        $div.clone().append($h2.clone().append('Scan and pay separately').addClass('text-xl font-semibold'),
          $p.clone().append('Use cash or credit/debt card at the register')).addClass('md:flex flex-col gap-5')
      ).addClass('text-start col-span-5 flex gap-5')
  );

  $payments.append(
    $h2.clone().append('Cash or card, you earn Stars').addClass('text-xl font-semibold'),
    $p
      .clone()
      .append(
        'No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.'
      ).addClass('text-center'),
    $items
  );
  $('#app').append($payments);
}

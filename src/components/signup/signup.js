import { loadFooter } from '../footer/footer.js';
export function loadSignUp() {
  $('#app').remove();

  const $app = $('<div>').attr('id', 'app');
  const $signUpPage = $('<div>');
  const $header = $('<div>');
  const $icon = $('<img>');
  const $main = $('<div>');
  const $h1 = $('<h1>');
  const $h2 = $('<h2>');
  const $p = $('<p>');
  const $br = $('<br>');
  const $a = $('<a>');
  const $form = $('<form>');
  const $div = $('<div>');
  const $fieldset = $('<fieldset>');
  const $label = $('<label>');
  const $input = $('<input>');
  const $cardsButton = $('<button>');
  const $button = $('<button>');
  const $arrowIcon = $('<img>');
  const $span = $('<span>');
  const $img = $('<$img>');
  $button.attr('type', 'button');
  $cardsButton.attr('type', 'button');
  $cardsButton.on('click', (e) => {
    if ($('.cards-option').is(':hidden')) $('.cards-option').slideDown();
    else $('.cards-option').slideUp();
  });
  $arrowIcon.attr('src', 'src/assets/svgs/arrow-down.svg');
  $a.addClass('underline hover:cursor-pointer hover:no-underline');
  $signUpPage.addClass('flex flex-col');
  $icon.attr('src', 'src/assets/svgs/starbucks_icon.svg');
  $input.addClass('rounded-lg h-10 w-80 border-solid border-2 border-black');
  $form.addClass('flex flex-col');
  $form.append(
    $p.clone().append('* indicates required field'),
    $fieldset
      .clone()
      .append(
        $h2
          .clone()
          .append('Personal Information')
          .addClass('text-lg font-semibold mt-5'),
        $div
          .clone()
          .append(
            $input
              .clone()
              .append()
              .addClass('peer placeholder-transparent pl-2')
              .attr({ id: 'first-name', placeholder: 'First name' }),
            $label
              .clone()
              .append('First name')
              .addClass(
                'absolute -top-5 left-3 text-sm transition-all peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm text-gray-400 select-none pointer-events-none peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-1'
              )
              .attr('id', 'first-name')
          )
          .addClass('relative flex flex-col mt-5'),
        $div
          .clone()
          .append(
            $input
              .clone()
              .append()
              .addClass('peer placeholder-transparent pl-2')
              .attr({ id: 'last-name', placeholder: 'Last name' }),
            $label
              .clone()
              .append('Last name')
              .addClass(
                'absolute -top-5 left-3 text-sm transition-all peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm text-gray-400 select-none pointer-events-none peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-1'
              )
              .attr('id', 'last-name')
          )
          .addClass('relative flex flex-col mt-5')
      )
      .addClass('gap-3 flex flex-col'),
    $fieldset
      .clone()
      .append(
        $h2
          .clone()
          .append('Account Security')
          .addClass('text-lg font-semibold mt-5'),
        $div
          .clone()
          .append(
            $input
              .clone()
              .append()
              .addClass('peer placeholder-transparent pl-2')
              .attr({ id: 'email', placeholder: 'Email address' }),
            $label
              .clone()
              .append('Email address')
              .addClass(
                'absolute -top-5 left-3 text-sm transition-all peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm text-gray-400 select-none pointer-events-none peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-1'
              )
              .attr('id', 'email')
          )
          .addClass('relative flex flex-col mt-5'),
        $div
          .clone()
          .append(
            $input
              .clone()
              .append()
              .addClass('peer placeholder-transparent pl-2')
              .attr({ id: 'password', placeholder: 'Password' }),
            $label
              .clone()
              .append('Password')
              .addClass(
                'absolute -top-5 left-3 text-sm transition-all peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm text-gray-400 select-none pointer-events-none peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-1'
              )
              .attr('id', 'password'),
            $p
              .clone()
              .append(
                'Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.'
              )
              .addClass('max-w-80 mt-5 text-sm px-2')
          )
          .addClass('relative flex flex-col mt-5')
      )
      .addClass('gap-3 flex flex-col mt-8'),
    $fieldset.clone().append(
      $cardsButton
        .append('Already have a Starbucks gift card?', $arrowIcon)
        .addClass(' text-lg mt-5 flex text-green underline '),
      $div
        .clone()
        .append(
          $p
            .clone()
            .append(
              'Add your gift card to earn Stars when you pay and order ahead'
            )
            .addClass('mb-8 max-w-80 mt-2'),
          $div
            .clone()
            .append(
              $input
                .clone()
                .append()
                .addClass('peer placeholder-transparent pl-2')
                .attr({
                  id: 'card-number',
                  placeholder: 'Card number (16 digits)',
                }),
              $label
                .clone()
                .append('Card number (16 digits)')
                .addClass(
                  'absolute -top-5 left-3 text-sm transition-all peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm text-gray-400 select-none pointer-events-none peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-1'
                )
                .attr('id', 'email')
            )
            .addClass('relative flex flex-col mt-5 '),
          $div
            .clone()
            .append(
              $input
                .clone()
                .append()
                .addClass('peer placeholder-transparent pl-2')
                .attr({ id: 'email', placeholder: 'Email address' }),
              $label
                .clone()
                .append('Email address')
                .addClass(
                  'absolute -top-5 left-3 text-sm transition-all peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm text-gray-400 select-none pointer-events-none peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-1'
                )
                .attr('id', 'email')
            )
            .addClass('relative flex flex-col mt-5')
        )
        .addClass('hidden cards-option')
    ),
    $fieldset.clone().append(
      $p
        .clone()
        .append('COLLECT MORE STARS & EARN REWARDS')
        .addClass('text-gray-400 font-semibold text-sm mt-5'),
      $p
        .clone()
        .append(
          'Email is a great way to know about offers and what\'s new from Starbucks.'
        )
        .addClass('mt-5 max-w-80 text-sm'),
      $div
        .clone()
        .append(
          $button
            .clone()
            .append()
            .addClass(
              'min-w-5   h-5 border-solid border-green-300 border-2 rounded-md'
            ),
          $div
            .clone()
            .append(
              $p.clone().append('Yes, i\'d like email from Starbucks'),
              $p
                .clone()
                .append(
                  'Know about initiatives, announcements and product offers.'
                )
                .addClass('mt-3 text-sm text-gray-400')
            )
        )
        .addClass('flex mt-5 gap-3')
    ),
    $fieldset.clone().append(
      $p
        .clone()
        .append('TERMS OF USE')
        .addClass('text-gray-400 font-semibold text-sm mt-5'),
      $p
        .clone()
        .append(
          'Email is a great way to know about offers and what\'s new from Starbucks.'
        )
        .addClass('mt-5 max-w-80 text-sm'),
      $div
        .clone()
        .append(
          $button
            .clone()
            .append()
            .addClass(
              'min-w-5   h-5 border-solid border-green-300 border-2 rounded-md'
            ),
          $div
            .clone()
            .append(
              $p.clone().append('Yes, i\'d like email from Starbucks'),
              $p
                .clone()
                .append(
                  ' I agree to the Starbucks® Rewards Terms and the '
                )
                .addClass('mt-3 text-sm text-gray-400')
            )
        )
        .addClass('flex mt-5 gap-3')
    ),
    $button
      .append('Create account')
      .addClass(
        'rounded-full bg-[#00754A] place-self-end text-white font-bold px-5 py-4 text-lg mt-8'
      )
  );
  $main
    .append(
      $h1.append('Create an account').addClass('text-3xl font-bold'),
      $h2
        .clone()
        .append('STARBUCKS® REWARDS')
        .addClass('hidden md:block text-[#6B6B6B] mt-5'),
      $p
        .clone()
        .append(
          'Join Starbucks Rewards to earn Stars for free food and drinks, any way you',
          $br.clone().addClass('hidden md:block'),
          'pay. Get access to mobile ordering, a birthday Reward, and ',
          $a.clone().append('more')
        )
        .addClass('text-start md:text-center'),
      $div
        .clone()
        .append($form)
        .addClass('px-28 py-8 border-solid border-[3px] border-[#ECECEC]')
    )
    .addClass('flex flex-col   place-items-center p-10 gap-5');
  $header.append($icon);
  $header.addClass('border-b-4 p-5 border-solid border-[#ECECEC]');
  $('html').append($app);
  $signUpPage.append($header, $main);
  $app.append($signUpPage);

  loadFooter();
}

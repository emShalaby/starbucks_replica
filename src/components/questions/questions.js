export function loadQuestions() {
  const $questions = $('<div>');
  const $h2 = $('<h2>');
  const $topContainer = $('<div>');
  const $bottomContainer = $('<div>');
  const $p = $('<p>');
  const $a = $('<a>');
  const $br = $('<br>');
  const $gridDiv = $('<div>');
  const $div = $('<div>');
  $gridDiv.addClass('grid grid-rows-2 grid-cols-2 mt-10 gap-10');
  $a.addClass('underline hover:no-underline hover:cursor-pointer');
  $questions.addClass('w-full object-contain');
  $topContainer.addClass('py-28 px-80 flex flex-col gap-5 ');
  $bottomContainer.addClass('bg-[#F9F9F9] w-full object-contain flex flex-col');
  $topContainer.append(
    $h2
      .clone()
      .append('Questions?')
      .addClass('font-semibold text-3xl self-start'),
    $p
      .clone()
      .append(
        'We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked terms',
        $a
          .clone()
          .append(' right over here')
          .addClass('underline hover:no-underline hover:cursor-pointer')
      )
      .addClass('')
  );
  
  $bottomContainer
    .append(
      $p.clone().append('At participating stores. Restrictions apply.'),
      $br.clone(),
      $p
        .clone()
        .append(
          '1Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars. Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit ',
          $a.clone().append(' deltastarbucks.com')
        ),
      $br.clone(),
      $p
        .clone()
        .append(
          '2At participating stores only. Some restrictions apply. Linked Card members will earn 2% Cash Back on the full purchase price of every Qualifying Purchase. Extra Star offer excludes taxes and tips. Stars may not be earned on purchases of alcohol or on reloads of Starbucks Cards that are not registered. For details, visit ',
          $a.clone().append('Terms and Conditions'),
          $p.clone().append(' .  Bank of America, N.A. Member FDIC.↩')
        ),
      $br.clone(),
      $p
        .clone()
        .append(
          '3Individuals must link loyalty program accounts to participate in offer. Members with linked accounts will earn: (a) double Starbucks Rewards Stars on Qualifying Starbucks Transactions during Eligible Stays at Participating Marriott Bonvoy Hotels, excluding stays at Homes & Villas by Marriott Bonvoy and The Ritz-Carlton Yacht Collection, and (b) earn 100 Marriott Bonvoy Points upon completion of 3 Qualifying Starbucks Transactions during Marriott Bonvoy Week. Qualifying Starbucks Transactions must be made at U.S. participating Starbucks stores and exclude purchases of alcoholic beverages, Starbucks Card eGifts and physical Starbucks gift. To earn Double Stars, the applicable stay must qualify as an Eligible Stay at a Participating Marriott Bonvoy® Hotel under offer terms and conditions. Other restrictions and exclusions apply. For full offer terms and conditions, visit ',
          $a.clone().append('Starbucks.com/MarriottBonvoy'),
          '. Marriott Bonvoy® and its affiliated brands and hotels are the registered trademarks and/or service marks of Marriott International, Inc. and its affiliates. Used under license from Marriott International, Inc.↩'
        ),
      $gridDiv.append(
        $div
          .clone()
          .append(
            $h2.clone().append('EARNING STARS').addClass('text-lg font-semibold'),$br.clone(),
            $p
              .clone()
              .append(
                'Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.'
              ),
            $br.clone(),
            $p
              .clone()
              .append(
                'Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.'
              ),
            $br.clone(),
            $p
              .clone()
              .append(
                'Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.'
              )
          )
          .addClass(''),
        $div.clone().append($h2.clone().append('TERMS OF USE').addClass('text-lg font-semibold'),$br.clone(),$p.clone().append('For full program details visit',$a.clone().append(' starbucks.com/rewards/terms')),$br.clone(),$p.clone().append('Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the ',$a.clone().append('Starbucks Store Locator'), 'and search for locations honoring “Redeem Rewards”.')).addClass()
        ,$div.clone().append($h2.clone().append('BENEFITS').addClass('text-lg font-semibold'),$br.clone(),$p.clone().append('Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.')).addClass(),
        $div.clone().append($h2.clone().append('Redeeming Rewards').addClass('text-lg font-semibold'),$br.clone(),$p.clone().append('Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.')).addClass()
      )
    )
    .addClass('p-10');
  $questions.append($topContainer, $bottomContainer);
  $('#app').append($questions);
}

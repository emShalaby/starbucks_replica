export function loadFooter() {
  const $footer = $('<div>');
  const $topContainer = $('<div>');
  const $bottomContainer = $('<div>');
  const $aboutUs = $('<div>');
  const $careers = $('<div>');
  const $socialImpact = $('<div>');
  const $businessPartners = $('<div>');
  const $order = $('<div>');
  const $aboutUsH2 = $('<h2>');
  const $careersH2 = $('<h2>');
  const $socialImpactH2 = $('<h2>');
  const $businessPartnersH2 = $('<h2>');
  const $orderH2 = $('<h2>');
  const $ourCompany = $('<a>');
  const $ourCoffe = $('<a>');
  const $stories = $('<a>');
  const $archive = $('<a>');
  const $investors = $('<a>');
  const $customerService = $('<a>');
  const $contacts = $('<a>');
  const $aboutUsUl = $('<ul>');
  const $careersUl = $('<ul>');
  const $culture = $('<a>');
  const $inclusion = $('<a>');
  const $college = $('<a>');
  const $alumni = $('<a>');
  const $usCareers = $('<a>');
  const $internationalCareers = $('<a>');
  const $socialImpactUl = $('<ul>');
  const $people = $('<a>');
  const $planet = $('<a>');
  const $environment = $('<a>');
  const $businessPartnersUl = $('<ul>');
  const $landlord = $('<a>');
  const $suppliers = $('<a>');
  const $giftSales = $('<a>');
  const $office = $('<a>');
  const $orderUl = $('<ul>');
  const $appOrder = $('<a>');
  const $webOrder = $('<a>');
  const $delivery = $('<a>');
  const $orderOptions = $('<a>');
  const $orderExploring = $('<a>');
  const $arrowDown = $('<img>');
  const $socials = $('<div>');
  const $spotify = $('<a>');
  const $facebook = $('<a>');
  const $pintrest = $('<a>');
  const $instagram = $('<a>');
  const $youtube = $('<a>');
  const $twitter = $('<a>');
  const $pintrestIcon = $('<img>');
  const $spotifyIcon = $('<img>');
  const $facebookIcon = $('<img>');
  const $instagramIcon = $('<img>');
  const $youtubeIcon = $('<img>');
  const $twitterIcon = $('<img>');
  const $notices = $('<div>');
  const $notice = $('<a>');
  const $footNote = $('<p>');
  $footNote.attr('class','p-7 text-xs')
  $socials.attr('class', 'flex p-5 gap-2 socials');
  $twitterIcon.attr('src', 'src/assets/svgs/twitter-icon.svg');
  $youtubeIcon.attr('src', 'src/assets/svgs/youtube-icon.svg');
  $instagramIcon.attr('src', 'src/assets/svgs/instagram-icon.svg');
  $pintrestIcon.attr('src', 'src/assets/svgs/pintrest-icon.svg');
  $facebookIcon.attr('src', 'src/assets/svgs/facebook-icon.svg');
  $spotifyIcon.attr('src', 'src/assets/svgs/spotify-icon.svg');
  $notices.attr('class', 'flex flex-col px-7 gap-5');
  $arrowDown.attr({
    src: 'src/assets/svgs/arrow-down.svg',
    class: 'md:hidden',
  });
  $footer.attr('class', 'flex flex-col');
  $topContainer.attr(
    'class',
    'flex flex-col p-10 gap-16 md:grid md:grid-cols-5 md:py-10 md:pl-8 lg:pr-96 md:gap-6 footer-top '
  );
  $bottomContainer.attr('class', 'flex flex-col footer-bottom gap-3  pb-40');
  $aboutUs.attr('class', 'flex flex-col md:gap-10 gap-8 hover:cursor-pointer');
  $careers.attr('class', 'flex flex-col md:gap-10 gap-8 hover:cursor-pointer');
  $socialImpact.attr(
    'class',
    'flex flex-col md:gap-10 gap-8 hover:cursor-pointer'
  );
  $businessPartners.attr(
    'class',
    'flex flex-col md:gap-10 gap-8 hover:cursor-pointer'
  );
  $order.attr('class', 'flex flex-col md:gap-10 gap-8 hover:cursor-pointer');
  $aboutUsH2.attr('class', 'text-lg font-semibold flex justify-between');
  $careersH2.attr('class', 'text-lg font-semibold flex justify-between');
  $socialImpactH2.attr('class', 'text-lg font-semibold flex justify-between');
  $businessPartnersH2.attr(
    'class',
    'text-lg font-semibold flex justify-between'
  );
  $orderH2.attr('class', 'text-lg font-semibold flex justify-between');
  $aboutUsUl.attr('class', ' hidden flex  md:flex flex-col gap-6');
  $careersUl.attr('class', 'hidden flex  md:flex flex-col gap-6');
  $socialImpactUl.attr('class', ' hidden flex md:flex flex-col gap-6');
  $businessPartnersUl.attr('class', ' hidden flex md:flex flex-col gap-6');
  $orderUl.attr('class', 'hidden flex md:flex flex-col gap-6');

  $aboutUsH2.text('About Us');
  $careersH2.text('Careers');
  $socialImpactH2.text('Social Impact');
  $businessPartnersH2.text('For Business Partners');
  $orderH2.text('Order and Pick Up');
  $ourCompany.text('Our Company');
  $ourCoffe.text('Our Coffee');
  $stories.text('Stories and News');
  $archive.text('Starbucks Archive');
  $investors.text('Investor Relations');
  $customerService.text('Customer Service');
  $contacts.text('Contact Us');
  $culture.text('Culture and Values');
  $inclusion.text('Inclusion,Diversity, and Equity');
  $college.text('College Achievement Plan');
  $alumni.text('Alumni Community');
  $usCareers.text('U.S. Careers');
  $internationalCareers.text('International Careers');
  $people.text('People');
  $planet.text('Planet');
  $environment.text('Environmental and Social Impact Reporting');
  $landlord.text('Landlord Support Center');
  $suppliers.text('Suppliers');
  $giftSales.text('Corporate Gift Card Sales');
  $office.text('Office and Foodservice Coffee');
  $appOrder.text('Order on the App');
  $webOrder.text('Order on the Web');
  $delivery.text('Delivery');
  $orderOptions.text('Order and Pick Up Options');
  $orderExploring.text('Explore and Find Coffee for Home');

  $('#app').append($footer);
  $footer.append($topContainer);
  $footer.append($bottomContainer);
  $topContainer.append($aboutUs);
  $topContainer.append($careers);
  $topContainer.append($socialImpact);
  $topContainer.append($businessPartners);
  $topContainer.append($order);
  $aboutUs.append($aboutUsH2);
  $careers.append($careersH2);
  $socialImpact.append($socialImpactH2);
  $businessPartners.append($businessPartnersH2);
  $order.append($orderH2);
  $aboutUs.append($aboutUsUl);
  $aboutUsH2.append($arrowDown);
  $orderH2.append($arrowDown.clone());
  $careersH2.append($arrowDown.clone());
  $socialImpactH2.append($arrowDown.clone());
  $businessPartnersH2.append($arrowDown.clone());
  $aboutUsUl.append($ourCompany);
  $aboutUsUl.append($ourCoffe);
  $aboutUsUl.append($stories);
  $aboutUsUl.append($archive);
  $aboutUsUl.append($investors);
  $aboutUsUl.append($customerService);
  $aboutUsUl.append($contacts);
  $careers.append($careersUl);
  $careersUl.append($culture);
  $careersUl.append($inclusion);
  $careersUl.append($college);
  $careersUl.append($alumni);
  $careersUl.append($usCareers);
  $careersUl.append($internationalCareers);
  $socialImpact.append($socialImpactUl);
  $socialImpactUl.append($people);
  $socialImpactUl.append($planet);
  $socialImpactUl.append($environment);
  $businessPartners.append($businessPartnersUl);
  $businessPartnersUl.append($landlord);
  $businessPartnersUl.append($suppliers);
  $businessPartnersUl.append($giftSales);
  $businessPartnersUl.append($office);
  $order.append($orderUl);
  $orderUl.append($appOrder);
  $orderUl.append($webOrder);
  $orderUl.append($delivery);
  $orderUl.append($orderOptions);
  $orderUl.append($orderExploring);
  $bottomContainer.append(
    $socials,
    $notices,
    $footNote.text('© 2024 Starbucks Coffee Company. All rights reserved.')
  );
  $socials.append(
    $spotify,
    $facebook,
    $pintrest,
    $instagram,
    $youtube,
    $twitter
  );
  $spotify.append($spotifyIcon);
  $facebook.append($facebookIcon);
  $pintrest.append($pintrestIcon);
  $instagram.append($instagramIcon);
  $youtube.append($youtubeIcon);
  $twitter.append($twitterIcon);
  $notices.append(
    $notice.text('Privacy Notice'),
    $notice.clone().text('Consumer Health Privacy Notice'),
    $notice.clone().text('Terms of Use'),
    $notice.clone().text('Do Not Share My Personal Information'),
    $notice.clone().text('CA supply Chain Act'),
    $notice.clone().text('Accessibility'),
    $notice.clone().text('Cookie Preferences')
  );

  $aboutUsH2.on('click', () => {
    $aboutUsUl.toggleClass('hidden');
  });
  $careersH2.on('click', () => {
    $careersUl.toggleClass('hidden');
  });
  $socialImpactH2.on('click', () => {
    $socialImpactUl.toggleClass('hidden');
  });
  $businessPartnersH2.on('click', () => {
    $businessPartnersUl.toggleClass('hidden');
  });
  $orderH2.on('click', () => {
    $orderUl.toggleClass('hidden');
  });
}

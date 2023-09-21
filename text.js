const allTexts = {
  AED: `The national currency of the United Arab Emirates is the dirham, 
divided into 100 fils. As the currency of a small, young country, its history dates 
back centuries, connecting countries and peoples.`,
  AMD: `The "birth" date of the Armenian dram is considered to be November 22, 1993, 
  when the Central Bank of Armenia announced the abandonment of the Soviet ruble and 
  the introduction of its own national currency into circulation. However, Armenian 
  drams appeared long before this date.`,
  AUD: `The Australian dollar, as a decimal currency, was introduced on February 14, 
  1966. Its introduction replaced the previously used twelve-pence Australian pound.

  One of the main features of the Australian dollar that sets it apart from the entire 
  currency spectrum is the use of special thin plastic rather than the familiar paper.`,
  AZN: `The modern Azerbaijani currency is represented by the manat (AZN). The manat is 
  divided into 100 qəpiks. In circulation, there are coins ranging from 1 qəpik to 1 
  manat, as well as banknotes ranging from 1 manat to 200 manats.

  The manat is the national currency of Azerbaijan. It has the symbol "₼" and the code 
  AZN. The manat is widely used in all sectors of the country's economy.`,
  BGN: `
  The Bulgarian lev is the official currency of Bulgaria. Its banking code is BGN. 1 lev 
  is equal to 100 stotinki. The denominations of currently circulating banknotes are 100, 
  50, 20, 10, 5, and 2 leva, and there are coins for 1 lev, 50, 20, 10, 5, 2, and 1 
  stotinka.`,
  BRL: `The first coins and banknotes were designed and issued by the Central Bank of 
  Brazil in 1994. In 1998, a new series of coins was released, and in 2010, it was 
  announced that a new series of banknotes with enhanced security features would be issued. 
  As a result, both the first and second series of coins and banknotes are currently in 
  circulation in the country, and each denomination is still valid.
  
  Since the banknotes from the first series are gradually being phased out and becoming less 
  common, let's focus on the banknotes from the second series, which have been in circulation 
  in Brazil since 2010. These are Brazilian reais with denominations of 2, 5, 10, 20, 50, 100, 
  and 200 reais. It's worth noting that the largest denomination, the 200 real banknote, was 
  issued in 2020.`,
  BYN: `The ruble is the primary currency of Belarus. However, there is also a fractional unit 
  called the kopeck. In one Belarusian ruble, there are 100 kopecks. The minimum denomination 
  of money in circulation is 1 kopeck, and the maximum is 500 rubles.`,
  CAD: `The first banknotes issued by the Bank of Canada appeared in 1935. Banknotes with 
  denominations of 1, 2, 5, 10, 20, 25, 50, 100, 500, and 1000 Canadian dollars were introduced. 
  Over the following years, the Bank of Canada periodically updated the banknotes, introducing 
  new series with redesigned designs and enhanced security features to prevent counterfeiting.

  In 2021, there was a reduction in the denominations of Canadian dollar banknotes in 
  circulation. Banknotes with denominations of 1, 2, 25, and 1000 dollars were withdrawn and 
  are no longer considered legal tender.`,
  CHF: `Today, the Swiss Franc is a symbol of stability and reliability. It consistently maintains 
  its exchange rate, despite currency fluctuations and financial crises. That's why many people 
  seek to store their savings in Swiss Francs.

  Modern banknotes are issued with denominations ranging from 10 to 1000 Francs. The design of the 
  banknotes is periodically updated.`,
  CNY: `The first set of yuan banknotes was issued in 1948 when the national Chinese currency was 
  established. Banknotes and coins with 12 denominations were produced, and new ones were 
  introduced later. The highest denomination of a banknote reached 5000 yuan. In 1955, the first 
  set of yuan was withdrawn, and the second set with a conversion rate of 1:10,000 was introduced.

  In 1962, the third set of Chinese yuan was created. The banknotes were updated with added 
  watermarks, and the design was changed. In 1987, the fourth set was issued, introducing new 
  denominations and enhanced anti-counterfeiting features.
  
  In 1999, the fifth set of Chinese money was introduced, and it remains in use to this day.
  
  The banknotes of the fifth set have been regularly reissued, new denominations have been added,
  and new security elements have been created.`,
  CZK: `In circulation, there are banknotes and coins of the Czech crown, but nominally, there 
  used to be heller coins that became obsolete due to their extremely low denomination. The Czech 
  National Bank no longer mints heller coins at all, and their production ceased in 2009. 
  Previously, there were coins in denominations of 10, 20, and 50 hellers, but they are no longer 
  used as a means of payment in the country.

  The smallest denomination of money in the Czech Republic is 1 crown. Since hellers have been 
  withdrawn from circulation, amounts are rounded to the nearest 1 Czech crown when making 
  payments. Currently, the minimum denomination of a Czech crown banknote is 100.`,
  DKK: `The issuance and production of coins and banknotes in Denmark are solely handled by the 
  National Bank of Denmark. After analyzing the currency circulation, a decision was made to halt 
  the printing presses because the majority of the country's population primarily relies on 
  electronic transactions.

  Nevertheless, all coins and banknotes previously issued are still in circulation, and they can be 
  used for payments anywhere. If the need arises, the Central Bank will resume printing.`,
  EGP: `The Egyptian pound is the official currency of the Arab Republic of Egypt, and its issuance 
  is managed by the Central Bank of Egypt.

  The fractional unit of currency in Egypt is the piastre.
  
  In circulation, there are banknotes with denominations of twenty-five and fifty piastres, as well 
  as one, five, ten, twenty, fifty, one hundred, and two hundred Egyptian pounds. Additionally, there 
  are coins with denominations of twenty-five and fifty piastres, as well as one pound.`,
  EUR: `The bank code for the well-known currency EUR (Euro), and it is widely used across almost 
  all of Europe. Today, you can buy and sell this currency in exchange offices all around the world. 
  There is over 1 trillion euros in physical circulation, and this money supply continues to grow. The 
  European currency has surpassed the US dollar in terms of the absolute number of banknotes.`,
  GBP: `One of the world's major currencies, which ranks fourth in global circulation, is soon to 
  celebrate its millennium of existence. The first mentions of the pound sterling date back to the 
  mid-12th century, although its roots trace back to the 9th century. It can rightfully be called the 
  world's oldest currency.`,
  GEL: `As of today, there are two issues of currency in circulation in the territory of Georgia. The 
  first dates back to 1999, and the second to 2006. Banknotes and coins from both series have the same 
  appearance and security features. Additionally, there is a special series of coins with a 
  denomination of 10 lari that was issued for the anniversary of Georgia's national currency.`,
  HKD: `The official currency of Hong Kong is the Hong Kong dollar, which is divided into 100 cents.

  The Hong Kong Monetary Authority issues coins of the Hong Kong dollar, as well as the lowest 
  denomination banknote of 10 dollars. The right to issue banknotes of five other denominations 
  (20, 50, 100, 500, and 1000 dollars) is held by three commercial banks: Standard Chartered Bank 
  (Hong Kong) Limited, Bank of China (Hong Kong) Limited, and The Hongkong and Shanghai Banking 
  Corporation Limited.`,
  HUF: `Today, the forint is the primary currency of Hungary used by both local residents and visiting 
  tourists. Here's what you need to know about the national currency of the country:

  The currency code according to ISO 4217 is HUF, which stands for Hungarian Forint. It was introduced 
  on August 1, 1946, replacing the previous currency unit called the pengő. In circulation, there are 
  coins with denominations ranging from 5 to 200 forints, as well as banknotes from 500 to 20,000 
  forints. The issuance of forints is managed by the Hungarian National Bank, while coins are produced 
  by the Hungarian Mint.`,
  IDR: `The Indonesian rupiah is composed of 100 sen. Both coins and banknotes are in circulation. The 
  issuance of the national currency is managed by the Bank of Indonesia.

  Currently, there are banknotes with denominations of 1,000, 2,000, 5,000, 10,000, 50,000, and 100,000 
  rupiahs in circulation, as well as coins with values of 50, 100, 200, 500, and 1,000 rupiahs.`,
  INR: `India's currency is one of the oldest in the world. It was first issued in the mid-16th century, 
  and for hundreds of years, its name remained unchanged. This is a currency with a rich history that is 
  not only used in India but also serves as a parallel currency in some neighboring countries. The name 
  of the national Indian currency has remained the same for several centuries, and it is called the 
  Indian rupee. In addition to India, this currency is also valid in some other neighboring countries.`,
  JPY: `The primary banknotes currently in use in Japan have denominations of 1000, 2000, 5000, and 
  10,000 yen.

  In addition to banknotes, coins with denominations ranging from 1 to 500 yen are also minted.
  
  An interesting fact: the 2000 yen banknotes have a security feature called the "kippe effect" or 
  hidden image, which is used in their production. When examining these banknotes from various angles, 
  you can see the number "2000" in the bottom left corner.`,
  KGS: `The Kyrgyzstani som is the national currency of the Kyrgyz Republic. The international 
  code for this currency is KGS.

  In May 1993, the parliament of the republic approved the issuance of the national currency, and in 
  the same month, the National Bank of Kyrgyzstan introduced banknotes with denominations of one, 
  five, and twenty soms into circulation.`,
  KRW: `The Korean won is in circulation with denominations of one thousand, five thousand, ten 
  thousand, and fifty thousand. In addition to banknotes, bank checks with a value of one hundred 
  thousand won or more are used for transactions. It's important to note that when using such a 
  check, the reverse side must include the passport number of the holder, as well as the address 
  and phone number in the Republic of Korea.`,
  KZT: `The Kazakhstani tenge has repeatedly earned top honors in various numismatic and bonistics 
  competitions. This currency is largely unique and deserves special attention from collectors. 
  Here are a few interesting facts about this currency.

  The Kazakhstani tenge has 17 levels of security features, making it one of the most "equipped" 
  currencies in the world. These features include watermarks, security threads, a transparent 
  window, ultraviolet protection, serial numbers, and combined images, among others.`,
  MDL: `The leu is the primary currency of Moldova, its national currency. Initially, banknotes 
  were printed in denominations of 1, 5, 10, 20, 50 lei, and later, larger denominations such 
  as 100, 200, 500, and 1000 were added. The last update to the denominations and banknotes 
  in Moldova was in 2015. In addition to banknotes, there are coins in denominations of 1, 2, 
  5, and 10 lei.

  The bani are the fractional currency, with 1 leu consisting of 100 bani. As of the end of 
  2022, there are coins in circulation with denominations of 1, 5, 10, 25, and 50 bani.`,
  NOK: `Norway's currency is in use both within the country and in some areas of Sweden and 
  Finland. The issuance and circulation of Norwegian currency are overseen by the Central 
  Bank. It was the Central Bank that decided to remove the fractional currency, leaving only 
  the main denominations. The primary currency in Norway is the Norwegian krone. The 
  fractional currency in Norway is called the øre, with 100 øre in 1 krone.`,
  NZD: `Banknotes with denominations of 5, 10, 20, 50, and 100 NZ$ are in circulation. 
  Each banknote has its own design. For example, on the front side of the five-dollar 
  banknote, there is an image of the scientist, explorer, and adventurer Sir Edmund Hillary, 
  while on the reverse side, you can see the yellow-eyed penguin hoiho. The obverse of the 
  twenty-dollar banknote features a portrait of Queen Elizabeth II, and on the reverse 
  side, there is the New Zealand falcon. The denomination is indicated on the banknotes 
  in the right and left corners.`,
  PLN: `The term "Polish złoty" (PLN) refers to the national currency of Poland. The 
  currency is issued by the country's central bank and is regulated by it. In the foreign 
  exchange market, the złoty is abbreviated as PLN and is denoted by the symbol zł. One 
  złoty is divided into 100 groszy. Banknotes are issued in denominations ranging from 10 
  to 500 złoty. Coin denominations vary from one to 50 groszy and from 1 to 5 złoty.`,
  QAR: `The Qatari Riyal (QAR) is the national currency of Qatar, a country located on 
  the eastern Arabian Peninsula along the coast of the Persian Gulf. This currency was 
  introduced into circulation in 1966 after Qatar gained independence. The QAR is the 
  legal tender in the country.`,
  RON: `New Romanian lei are issued with denominations of 1 ban, followed by 5, 10, and 
  50 bani. Banknotes for the new lei are available in denominations of 1, 5, 10, 50, 100, 
  200, and 500 lei. The lowest denomination banknotes are the smallest in terms of both 
  width and length. The largest denomination banknote is the largest in size.`,
  RSD: `The dinar is the sole legal currency in Serbia. In circulation, there are coins 
  of various denominations and banknotes issued by the National Bank of Serbia. The dinar 
  is accepted in all banks, stores, markets, and other places in the country. In addition, 
  conducting non-cash payments using the dinar is a common practice.`,
  RUB: `The Russian ruble is the official currency of the Russian Federation.

  The 10-ruble banknote features an olive color and is associated with Krasnoyarsk. The 
  front side of the note depicts a bridge over the Yenisei River.
  
  The 50-ruble banknote, colored blue, represents St. Petersburg. The front side is 
  adorned with a sculpture at the base of a column and the Peter and Paul Fortress. 
  The reverse side features the Exchange Building.
  
  The 100-ruble banknote, in red-brown, represents the capital of Russia, Moscow. 
  The front side features the Bolshoi Theatre quadriga. The reverse side showcases the 
  facade of the renowned theater.
  
  The 500-ruble banknote, in violet, is associated with Arkhangelsk. The front side 
  displays a monument to Peter the Great and a ship in the port. The reverse side depicts 
  the Solovetsky Monastery.
  
  The 1000-ruble banknote, in blue-green, is linked to Yaroslavl. The front side features 
  a monument to Yaroslav the Wise and the Chapel of the Kazan Mother of God.
  
  The largest denomination, the 5000-ruble banknote, in red-brown, depicts a monument to 
  Muravyov-Amursky on the front side. The reverse side shows a bridge over the great 
  river named the Amur.`,
  SEK: `
  The Swedish krona is the official currency of Sweden. One krona is divided 
  into 100 öre, although öre coins have not been issued since 2010. Since 1995, Sweden 
  has been a member of the European Union. However, after a referendum in 2003, the country 
  chose not to adopt the euro as its currency. The national currency is issued by the 
  Bank of Sweden (Riksbank), founded in 1668 and headquartered in Stockholm.`,
  SGD: `The alphabetical code for the Singapore dollar in the international system is SGD, 
  and its numeric code is 702. The currency symbol for the Singapore dollar is "$," which 
  is the same as the widely recognized symbol for the US dollar. One Singapore dollar is 
  equivalent to one hundred cents. There are banknotes of various denominations in 
  circulation: 2, 5, 10, 50, 100, 1000, 10,000 dollars.
  There are also coins in circulation with the following values: 1 dollar/1, 2, 5, 10, 
  20, 50 cents.`,
  THB: `The Baht is the official currency of Thailand, and it is divided into 100 Satang. 
  The issuance of the currency is managed by the Bank of Thailand. As of January 2019, SWIFT 
  has ranked the Thai Baht as the 10th most frequently used global payment currency.`,
  TJS: `
  The official state currency of Tajikistan is called the Somoni. This monetary unit received 
  its name in honor of the founder of the first Tajik state, Ismail Samani.`,
  TMT: `The Manat is the currency of Turkmenistan. 1 Manat is equal to 100 Tenge. The currency 
  code is TMT, and the numerical code is 934. Currently, there are coins in denominations of 
  10, 20, 50 Tenge, and 1 and 2 Manats. Banknotes are available in denominations of 1, 5, 10, 
  20, 50, and 100 Manats.`,
  TRY: `The Turkish Lira is the official currency of Turkey. One Lira is divided into 100 
  Kurush. The name of the currency comes from the word "libra," which was used in medieval 
  times to refer to the Troy pound, a unit of weight used for measuring silver.`,
  UAH: `One Hryvnia is equal to 100 kopecks. There are coins in circulation with denominations 
  of 1, 2, 5, 10, 25, and 50 kopecks. On the obverse side of Ukrainian coins, you can see the 
  trident, which is the state emblem, and on the reverse side, you can find the denomination 
  surrounded by an ornament.

  Ukrainian banknotes come in the following denominations: 1, 2, 5, 10, 20, 50, 100, 
  200, 500.`,
  USD: `
  You don't need to be an advanced person to know what a dollar is. The national currency 
  of the United States is widespread worldwide, and practically every country values the dollar. 
  The American dollar is one of the world's currencies, and it is the major component in most 
  international transactions between states, accounting for approximately 60% of their foreign 
  exchange reserves.`,
  UZS: `
  On the international financial market, the Uzbek currency, the "sum," is denoted as UZS. 
  One Uzbek sum is divided into one hundred tiyin. There are paper banknotes in circulation with 
  denominations of one, three, five, ten, twenty-five, fifty, one hundred, two hundred, five 
  hundred, and one thousand sums. Additionally, metal coins with values of one, three, five, 
  ten, twenty, and fifty tiyin are also used. It's worth noting that both small-denomination paper 
  notes and metal coins are rarely used in practice.`,
  VND: `The "đồng" (currency code - VND) is the currency of Vietnam since May 3, 1978. It is issued 
  by the State Bank of Vietnam. The symbol for the đồng is ₫. One đồng is equal to 10 hào. However, 
  hào is not currently in circulation.`,
  XDR: `Special Drawing Rights (SDR or SDRs) is an artificial reserve and payment instrument issued 
  by the International Monetary Fund (IMF). It exists solely in non-physical form as accounting 
  entries on bank accounts. Banknotes and coins are not issued for SDRs.`,
  ZAR: `
  The Rand is the national currency of South Africa and the common currency of the countries in the 
  Common Monetary Area, which includes South Africa, Namibia, Eswatini, and Lesotho. 1 Rand 
  equals 100 cents.`,
};

const allEngName = {
  AED: `UAE Dirham`,
  AMD: `Armenian Drams`,
  AUD: `Australian Dollar`,
  AZN: `Azerbaijani Manat`,
  BGN: `Bulgarian Lev`,
  BRL: `Brazilian Real`,
  BYN: `Belarusian Ruble`,
  CAD: `Canadian Dollar`,
  CHF: `Swiss Franc`,
  CNY: `Chinese Yuan`,
  CZK: `Czech Crowns`,
  DKK: `Danish Krone`,
  EGP: `Egyptian Pounds`,
  EUR: `Euro`,
  GBP: `Pound Sterling of the United Kingdom`,
  GEL: `Georgian Lari`,
  HKD: `Hong Kong Dollar`,
  HUF: `Hungarian Forints`,
  IDR: `Indonesian Rupiahs`,
  INR: `Indian Rupees`,
  JPY: `Japanese Yen`,
  KGS: `Kyrgyzstani Som`,
  KRW: `South Korean Won`,
  KZT: `Kazakhstani Tenge`,
  MDL: `Moldovan Leu`,
  NOK: `Norwegian Kroner`,
  NZD: `New Zealand Dollar`,
  PLN: `Polish Zloty`,
  QAR: `Qatari Riyal`,
  RON: `Romanian Leu`,
  RSD: `Serbian Dinars`,
  SEK: `Swedish Kronor`,
  SGD: `Singapore Dollar`,
  THB: `Thai Baht`,
  TJS: `Tajikistani Somoni`,
  TMT: `New Turkmen Manat`,
  TRY: `Turkish Lira`,
  UAH: `Ukrainian Hryvnia`,
  USD: `United States Dollar`,
  UZS: `Uzbekistani Som`,
  VND: `Vietnamese Dong`,
  XDR: `Special Drawing Rights`,
  ZAR: `South African Rand`,
};

const allTextsRu = {
  AED: `Национальной валютой Объединенных Арабских Эмиратов является дирхам, разделенный на 100 филсов. 
  Как валюта маленькой, молодой страны, ее история насчитывает века и связывает разные страны и народы.`,
  AMD: `"Датой "рождения" армянского драма считается 22 ноября 1993 года,
  когда Центральный банк Армении объявил об отказе от советского рубля и
  введении в оборот собственной национальной валюты. Тем не менее, армянские
  драмы появились намного раньше этой даты."`,
  AUD: `Австралийский доллар, как десятичная валюта, был введен 14 февраля 1966 года. Его введение заменило 
  ранее используемый двенадцатипенсовый австралийский фунт.`,
  AZN: `Современной азербайджанской валютой является манат (AZN). Манат делится на 100 гяпиков. В обращении 
  существуют монеты от 1 гяпика до 1 маната, а также банкноты от 1 маната до 200 манатов.

  Манат - это национальная валюта Азербайджана. У него есть символ "₼" и код AZN. Манат широко используется
   во всех секторах экономики страны.`,
  BGN: `Болгарский лев - это официальная валюта Болгарии. Его банковский код - BGN. 1 лев равен 100 
   стотинкам. В обращении существуют банкноты номиналом 100, 50, 20, 10, 5 и 2 лева, а также монеты 
   достоинством 1 лев, 50, 20, 10, 5, 2 и 1 стотинка.`,
  BRL: `Первые монеты и банкноты были разработаны и выпущены Центральным банком Бразилии в 1994 году. 
   В 1998 году была выпущена новая серия монет, а в 2010 году было объявлено о выпуске новой серии 
   банкнот с усовершенствованными средствами безопасности. В результате обе серии монет и банкнот 
   все еще находятся в обращении в стране, и каждый номинал по-прежнему действителен.

   Поскольку банкноты из первой серии постепенно выводятся из обращения и становятся менее 
   распространенными, давайте сосредоточимся на банкнотах из второй серии, которые находятся в 
   обращении в Бразилии с 2010 года. Это бразильские реали с номиналами 2, 5, 10, 20, 50, 100 и 200 
   реалов. Следует отметить, что самый крупный номинал, банкнота номиналом 200 реалов, была выпущена
    в 2020 году.`,
  BYN: `Рубль - это основная валюта Беларуси. Однако также существует дробная единица, называемая 
    копейкой. В одном белорусском рубле содержится 100 копеек. Минимальный номинал денег в обращении 
    составляет 1 копейку, а максимальный - 500 рублей.`,
  CAD: `Первые банкноты, выпущенные Банком Канады, появились в 1935 году. Были представлены 
    банкноты номиналами 1, 2, 5, 10, 20, 25, 50, 100, 500 и 1000 канадских долларов. В течение 
    последующих лет Банк Канады периодически обновлял банкноты, выпуская новые серии с 
    переработанными дизайнами и усовершенствованными средствами безопасности для предотвращения 
    подделок.

    В 2021 году произошло уменьшение номиналов канадских долларовых банкнот в обращении. Банкноты 
    номиналом 1, 2, 25 и 1000 долларов были изъяты из обращения и больше не считаются законным 
    средством платежа.`,
  CHF: `Сегодня швейцарский франк символизирует стабильность и надежность. Он постоянно 
    удерживает свой обменный курс, несмотря на колебания валют и финансовые кризисы. Поэтому 
    многие люди стремятся хранить свои сбережения в швейцарских франках.

    Современные банкноты выпускаются номиналами от 10 до 1000 франков. Дизайн банкнот 
    периодически обновляется.`,
  CNY: `Первый набор китайских юаней был выпущен в 1948 году, когда была учреждена 
    национальная китайская валюта. Были произведены банкноты и монеты с 12 номиналами, 
    и позднее были введены новые. Самым высоким номиналом банкноты было 5000 юаней. В 
    1955 году первый набор юаней был изъят из обращения, и был введен второй набор с 
    коэффициентом конверсии 1:10 000.

    В 1962 году был создан третий набор китайских юаней. Банкноты были обновлены с 
    добавлением водяных знаков, и дизайн был изменен. В 1987 году был выпущен четвертый 
    набор, вводя новые номиналы и улучшенные средства защиты от подделок.
    
    В 1999 году был представлен пятый набор китайских денег, и он используется 
    до сих пор.
    
    Банкноты пятого набора регулярно переиздаются, вводятся новые номиналы и создаются новые 
    элементы безопасности.`,
  CZK: `В обращении существуют банкноты и монеты чешской короны, но номинально ранее 
    существовали монеты геллеров, которые ушли в прошлое из-за своего крайне низкого номинала. 
    Чешский Национальный Банк больше не чеканит монеты геллеров, и их производство прекратилось 
    в 2009 году. Ранее были монеты номиналом 10, 20 и 50 геллеров, но они больше не используются 
    в качестве средства платежа в стране.

    Самым маленьким номиналом денег в Чешской Республике является 1 корона. Поскольку геллеры 
    выведены из обращения, суммы округляются до ближайшей 1 чешской короны при совершении платежей. 
    В настоящее время минимальным номиналом банкноты в 1 чешскую корону является 100.`,

  DKK: `Выпуск и производство монет и банкнот в Дании полностью осуществляются Национальным 
    банком Дании. После анализа обращения валюты было принято решение остановить печать новых 
    банкнот, поскольку большинство населения страны в основном полагается на электронные транзакции.

    Тем не менее, все ранее выпущенные монеты и банкноты по-прежнему находятся в обращении и 
    могут использоваться для оплаты везде. Если возникнет потребность, Центральный банк возобновит 
    печать.`,
  EGP: `Египетский фунт - это официальная валюта Арабской Республики Египет, и его выпуск управляется Центральным банком Египта.

  Дробной единицей валюты в Египте является пиастр.
  
  В обращении существуют банкноты номиналами двадцать пять и пятьдесят пиастров, а также одного, пяти, десяти, 
  двадцати, пятидесяти, ста и двухсот египетских фунтов. Кроме того, есть монеты номиналами двадцать пять и 
  пятьдесят пиастров, а также одного фунта.`,
  EUR: `Банковский код для широко известной валюты EUR (Евро), которая широко используется практически во всей 
  Европе. Сегодня вы можете купить и продать эту валюту в обменных пунктах по всему миру. В обороте находится 
  более 1 триллиона евро в физической форме, и эта денежная масса продолжает расти. Европейская валюта превзошла 
  американский доллар по абсолютному количеству банкнот.`,
  GBP: `
  Одной из крупнейших валют в мире, занимающей четвертое место по глобальному обороту, скоро исполнится тысяча 
  лет с момента своего существования. Первые упоминания о фунте стерлинге относятся к середине XII века, хотя 
  его корни уходят в IX век. Его справедливо можно назвать самой старой валютой в мире.`,
  GEL: `На сегодняшний день в обращении на территории Грузии существует две серии валюты. Первая была выпущена в 
  1999 году, а вторая - в 2006 году. Банкноты и монеты из обеих серий имеют одинаковый внешний вид и 
  средства безопасности. Кроме того, есть специальная серия монет номиналом в 10 лари, которая была выпущена
  к юбилею национальной валюты Грузии.`,
  HKD: `Официальной валютой Гонконга является гонконгский доллар, который делится на 100 центов.

  Гонконгская монетарная власть выпускает монеты гонконгского доллара, а также банкноты наименьшего номинала 
  в 10 долларов. Право выпуска банкнот пяти других номиналов (20, 50, 100, 500 и 1000 долларов) принадлежит 
  трём коммерческим банкам: Standard Chartered Bank (Hong Kong) Limited, Bank of China (Hong Kong) Limited и 
  The Hongkong and Shanghai Banking Corporation Limited.`,
  HUF: `Сегодня форинт - это основная валюта Венгрии, используемая как местными жителями, так и приезжими 
  туристами. Вот, что вам нужно знать о национальной валюте страны:

  Код валюты согласно стандарту ISO 4217 - HUF, что означает венгерский форинт. Он был введен 1 августа 
  1946 года, заменив предыдущую валютную единицу, называемую пеньге. В обращении существуют монеты с 
  номиналами от 5 до 200 форинтов, а также банкноты от 500 до 20 000 форинтов. Эмиссией форинтов 
  управляет Венгерский национальный банк, а монеты производятся Венгерским монетным двором.`,
  IDR: `Индонезийская рупия делится на 100 сенов. В обращении находятся как монеты, так и банкноты. Эмиссией 
  национальной валюты управляет Банк Индонезии.

  В настоящее время в обращении существуют банкноты номиналом 1 000, 2 000, 5 000, 10 000, 50 000 и 100 000 рупий, 
  а также монеты достоинством 50, 100, 200, 500 и 1 000 рупий.`,
  INR: `Валюта Индии является одной из самых старых в мире. Она была выпущена в середине XVI века, и в 
  течение сотен лет ее название оставалось неизменным. Это валюта с богатой историей, которая используется 
  не только в Индии, но также служит параллельной валютой в некоторых соседних странах. Название национальной 
  индийской валюты осталось неизменным на протяжении нескольких столетий, и оно называется индийской рупией. 
  Кроме Индии, эта валюта также действительна в некоторых других соседних странах.`,
  JPY: `Основные банкноты, которые в настоящее время используются в Японии, имеют номиналы 1000, 2000, 5000 и 10 000 иен.

  Кроме банкнот, также чеканятся монеты номиналами от 1 до 500 иен.
  
  Интересный факт: на банкнотах номиналом 2000 иен есть средство защиты под названием "эффект Киппе" или скрытое 
  изображение, которое используется при их производстве. При рассмотрении этих банкнот с разных углов можно увидеть 
  число "2000" в нижнем левом углу.`,
  KGS: `Киргизский сом - это национальная валюта Киргизской Республики. Международный код этой валюты - KGS.

  В мае 1993 года парламент республики утвердил выпуск национальной валюты, и в том же месяце Национальный банк 
  Киргизстана ввел в обращение банкноты номиналами в один, пять и двадцать сомов.`,
  KRW: `В обращении в Корее существуют банкноты номиналами одна тысяча, пять тысяч, десять тысяч и пятьдесят 
  тысяч вон. Кроме банкнот, для совершения финансовых операций используются банковские чеки номиналом сто тысяч 
  вон и выше. Важно отметить, что при использовании таких чеков с обратной стороны должен быть указан номер паспорта 
  владельца, а также адрес и номер телефона в Республике Корея.`,
  KZT: `Казахстанский тенге многократно заслуживал высшие награды на различных нумизматических и бонистических 
  конкурсах. Эта валюта во многом уникальна и заслуживает особого внимания коллекционеров. Вот несколько 
  интересных фактов о этой валюте.

  Казахстанский тенге обладает 17 уровнями средств защиты, что делает его одной из наиболее "оборудованных" 
  валют в мире. Среди этих средств защиты можно выделить водяные знаки, защитные нити, прозрачное окно, 
  ультрафиолетовую защиту, серийные номера и объединенные изображения, среди прочих.`,
  MDL: `Леу - это основная валюта Молдовы, национальная валюта. Изначально банкноты были выпущены 
  номиналами 1, 5, 10, 20, 50 леев, а затем были добавлены более крупные номиналы, такие как 100, 200, 500 
  и 1000. Последнее обновление номиналов и банкнот в Молдове было в 2015 году. Кроме банкнот, существуют 
  монеты номиналами 1, 2, 5 и 10 леев.

  Бани - это дробная валюта, где 1 лей состоит из 100 бани. К концу 2022 года в обращении существуют монеты 
  номиналами 1, 5, 10, 25 и 50 бани.`,
  NOK: `
  Норвежская валюта используется как внутри страны, так и в некоторых районах Швеции и Финляндии. 
  Выпуск и обращение норвежской валюты контролируются Центральным банком. Именно Центральный банк принял 
  решение об устранении дробной валюты, оставив только основные номиналы. Основной валютой в Норвегии является 
  норвежская крона. Дробной валютой в Норвегии называется øre, и в 1 кроне содержится 100 øre.`,
  NZD: `В обращении находятся банкноты номиналами 5, 10, 20, 50 и 100 новозеландских долларов. 
  У каждой банкноты есть свой дизайн. Например, на лицевой стороне пятидолларовой банкноты изображен 
  ученый, исследователь и авантюрист Сэр Эдмунд Гиллари, а на оборотной стороне можно увидеть 
  желтоокую пингвину хойхо. На лицевой стороне двадцатидолларовой банкноты находится портрет 
  королевы Елизаветы II, а на оборотной стороне изображен новозеландский сокол. Номинал указан 
  на банкнотах в правом и левом углах.`,
  PLN: `Термин "польский злотый" (PLN) относится к национальной валюте Польши. Валюта выпускается 
  центральным банком страны и регулируется им. На валютном рынке злотый обозначается сокращением 
  PLN и символом zł. Один злотый делится на 100 грошей. Банкноты выпускаются номиналами от 10 до 
  500 злотых. Монеты имеют номиналы от одного до 50 грошей и от 1 до 5 злотых.`,
  QAR: `Катарский риал (QAR) - это национальная валюта Катара, страны, расположенной на восточном 
  аравийском полуострове вдоль побережья Персидского залива. Эта валюта была введена в обращение
   в 1966 году после обретения Катаром независимости. Катарский риал является законным средством 
   платежа в стране.`,
  RON: `Новые румынские леи выпускаются номиналами 1 бан, за которыми следуют 5, 10 и 50 банов. 
  Банкноты для новых леев доступны номиналами 1, 5, 10, 50, 100, 200 и 500 леев. Банкноты с 
  самым низким номиналом имеют самые маленькие размеры как по ширине, так и по длине. Самая крупная 
  банкнота по номиналу также самая большая по размерам.`,
  RSD: `Динар является единственной законной валютой в Сербии. В обращении существуют монеты 
  различных номиналов и банкноты, выпущенные Национальным банком Сербии. Динар принимается во 
  всех банках, магазинах, рынках и других местах в стране. Кроме того, безналичные платежи в 
  динарах являются обычной практикой.`,
  RUB: `Российский рубль - официальная валюта Российской Федерации.

  Банкнота номиналом 10 рублей имеет оливковый цвет и связана с Красноярском. 
  Лицевая сторона банкноты изображает мост через реку Енисей.
  
  Банкнота номиналом 50 рублей, окрашенная в синий цвет, представляет Санкт-Петербург. 
  На лицевой стороне изображена скульптура у основания колонны и Петропавловская крепость. С 
  обратной стороны изображено Здание Биржи.
  
  Банкнота номиналом 100 рублей, красно-коричневого цвета, представляет столицу России - 
  Москву. На лицевой стороне изображена квадрига Большого театра. С обратной стороны 
  представлена фасад знаменитого театра.
  
  Банкнота номиналом 500 рублей, фиолетового цвета, связана с Архангельском. На лицевой 
  стороне изображены памятник Петру Великому и корабль в порту. С обратной стороны изображено 
  Соловецкий монастырь.
  
  Банкнота номиналом 1000 рублей, голубого-зеленого цвета, связана с Ярославлем. На лицевой 
  стороне изображены памятник Ярославу Мудрому и часовня Казанской Божьей Матери.
  
  Самый крупный номинал - банкнота номиналом 5000 рублей, красно-коричневого цвета, на лицевой 
  стороне которой изображен памятник Муравьеву-Амурскому. С обратной стороны показан мост через 
  великую реку, названную Амуром.`,
  SEK: `Шведская крона - официальная валюта Швеции. Одна крона делится на 100 эре, хотя 
  монеты эре перестали выпускаться с 2010 года. С 1995 года Швеция является членом 
  Европейского союза. Однако после референдума в 2003 году страна решила не 
  принимать евро в качестве своей валюты. Национальная валюта выпускается Шведским банком 
  (Риксбанк), основанным в 1668 году и имеющим штаб-квартиру в Стокгольме.
  `,
  SGD: `Алфавитный код для сингапурского доллара в международной системе - SGD, а числовой код 
  - 702. Символ валюты для сингапурского доллара - "$", который совпадает с широко признанным 
  символом для доллара США. Один сингапурский доллар эквивалентен ста центам. В обращении 
  существуют банкноты различных номиналов: 2, 5, 10, 50, 100, 1000, 10 000 долларов. Также 
  в обращении есть монеты со следующими номиналами: 1 доллар/1, 2, 5, 10, 20, 50 центов.`,
  THB: `
  Бат - официальная валюта Таиланда, и он делится на 100 сатангов. Вопрос выпуска валюты 
  управляется Банком Таиланда. Как по данным на январь 2019 года, SWIFT рейтингом оценил 
  тайский бат как 10-ю по частоте использования мировой валютой для платежей.`,
  TJS: `
  Официальной государственной валютой Таджикистана является сомони. Эта денежная единица получила 
  свое имя в честь основателя первого таджикского государства - Исмаила Самани.
  `,
  TMT: `
  Манат - это валюта Туркменистана. 1 манат равен 100 тенге. Валютный код - TMT, а числовой код - 934. 
  В настоящее время в обращении существуют монеты номиналом 10, 20, 50 тенге, а также 1 и 2 маната. 
  Банкноты доступны в номинациях 1, 5, 10, 20, 50 и 100 манатов.`,
  TRY: `Турецкая лира - официальная валюта Турции. Одна лира делится на 100 курушей. 
  Название валюты происходит от слова "либра", которое использовалось в средние века для 
  обозначения торговых фунтов Трои, единицы веса, используемой для измерения серебра.`,
  UAH: `Один гривен равен 100 копейкам. В обращении существуют монеты номиналами 
  1, 2, 5, 10, 25 и 50 копеек. На лицевой стороне украинских монет можно увидеть 
  трезубец, который является государственным гербом, а на обратной стороне - 
  номинал, окруженный орнаментом.

  Украинские банкноты выпускаются в следующих номинациях: 1, 2, 5, 10, 
  20, 50, 100, 200, 500 гривен.`,
  USD: `
  Для того чтобы знать, что такое доллар, не обязательно быть продвинутым экономистом. 
  Национальная валюта Соединенных Штатов широко распространена по всему миру, 
  и практически каждая страна ценит доллар. Американский доллар - одна из 
  мировых валют и является основным компонентом в большинстве международных 
  транзакций между государствами, составляя около 60% их валютных резервов.
  `,
  UZS: `
  На международном финансовом рынке узбекская валюта "сум" обозначается как UZS. Один узбекский 
  сум делится на сто тийинов. В обращении существуют бумажные банкноты номиналом один, три, пять, 
  десять, двадцать пять, пятьдесят, сто, двести, пятьсот и одна тысяча сумов. Кроме того, также 
  используются металлические монеты номиналом один, три, пять, десять, двадцать и пятьдесят тийинов. 
  Следует отметить, что как малономинальные бумажные купюры, так и металлические монеты редко 
  используются на практике.
  `,
  VND: `"Донг" (валютный код - VND) - это валюта Вьетнама с 3 мая 1978 года. Она выпускается 
  Государственным банком Вьетнама. Символ для донга - ₫. Один донг равен 10 хао. Однако хао в 
  настоящее время не находится в обращении.`,
  XDR: `Специальные права заимствования (СПЗ или СПЗ) - это искусственный резерв и платежный 
  инструмент, выпускаемый Международным валютным фондом (МВФ). Он существует исключительно 
  в форме нефизических записей на банковских счетах. Банкноты и монеты для СПЗ не выпускаются.`,
  ZAR: `
  Рэнд - это национальная валюта Южной Африки и общая валюта стран Общей денежной зоны, к которой 
  относятся Южная Африка, Намибия, Эсватини и Лесото. 1 рэнд равен 100 центам.
 `,
};

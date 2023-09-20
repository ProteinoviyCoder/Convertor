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

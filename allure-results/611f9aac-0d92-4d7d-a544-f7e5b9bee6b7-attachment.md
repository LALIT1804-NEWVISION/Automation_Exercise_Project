# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practise.spec.ts >> Practise Tests >> AutoSuggest dropdown
- Location: tests\Practise.spec.ts:287:10

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//ul[contains(@class,"_1sFryS")]//li').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//ul[contains(@class,"_1sFryS")]//li').first()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e7]:
    - generic [ref=e9]:
      - link "Flipkart" [ref=e10] [cursor=pointer]:
        - /url: /
        - img "Flipkart" [ref=e11]
      - link "Explore Plus" [ref=e12] [cursor=pointer]:
        - /url: /plus
        - text: Explore Plus
        - img [ref=e13]
    - generic [ref=e16]:
      - textbox "Search for products, brands and more" [ref=e18]: smart
      - button [ref=e19] [cursor=pointer]:
        - img [ref=e20]
    - link "Login" [ref=e28] [cursor=pointer]:
      - /url: /account/login?ret=/search%3Fq%3Dsmart%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Doff%26as%3Doff
    - link "Become a Seller" [ref=e30] [cursor=pointer]:
      - /url: https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect
      - generic [ref=e31]: Become a Seller
    - generic [ref=e33] [cursor=pointer]:
      - generic [ref=e36]: More
      - img [ref=e37]
    - link "Cart" [ref=e42] [cursor=pointer]:
      - /url: /viewcart?exploreMode=true&preference=FLIPKART
      - img [ref=e43]
      - generic [ref=e45]: Cart
  - generic [ref=e50]:
    - generic [ref=e51] [cursor=pointer]:
      - text: Electronics
      - img [ref=e52]
    - generic [ref=e54] [cursor=pointer]:
      - text: TVs & Appliances
      - img [ref=e55]
    - generic [ref=e57] [cursor=pointer]:
      - text: Men
      - img [ref=e58]
    - generic [ref=e60] [cursor=pointer]:
      - text: Women
      - img [ref=e61]
    - generic [ref=e63] [cursor=pointer]:
      - text: Baby & Kids
      - img [ref=e64]
    - generic [ref=e66] [cursor=pointer]:
      - text: Home & Furniture
      - img [ref=e67]
    - generic [ref=e69] [cursor=pointer]:
      - text: Sports, Books & More
      - img [ref=e70]
    - link "Flights" [ref=e72] [cursor=pointer]:
      - /url: /travel/flights?otracker=nmenu_Flights
    - link "Offer Zone" [ref=e73] [cursor=pointer]:
      - /url: /offers-list/top-deals?screen=dynamic&pk=themeViews%3DDT-OMU-A2%3ADT-OMU~widgetType%3DdealCard~contentType%3Dneo&otracker=nmenu_offer-zone
  - generic [ref=e74]:
    - generic [ref=e75]:
      - generic [ref=e77]:
        - generic [ref=e79]:
          - generic [ref=e82]: Filters
          - generic [ref=e84]:
            - generic [ref=e85]: CATEGORIES
            - generic [ref=e87]:
              - img [ref=e89] [cursor=pointer]
              - link "Home Entertainment" [ref=e91] [cursor=pointer]:
                - /url: /home-entertainment/pr?sid=ckf&q=smart&otracker=categorytree
            - generic [ref=e93]:
              - img [ref=e95] [cursor=pointer]
              - link "Televisions" [ref=e97] [cursor=pointer]:
                - /url: /televisions/pr?sid=ckf,czl&q=smart&otracker=categorytree
          - generic [ref=e98]:
            - generic [ref=e99] [cursor=pointer]:
              - generic [ref=e100]: Brand
              - img [ref=e101]
            - generic [ref=e103]:
              - generic [ref=e104]:
                - generic [ref=e105]:
                  - img [ref=e106]
                  - textbox "Search Brand" [ref=e110]
                - generic "SONY" [ref=e111] [cursor=pointer]:
                  - generic [ref=e115]: SONY
                - generic "Samsung" [ref=e116] [cursor=pointer]:
                  - generic [ref=e120]: Samsung
                - generic "LG" [ref=e121] [cursor=pointer]:
                  - generic [ref=e125]: LG
                - generic "TCL" [ref=e126] [cursor=pointer]:
                  - generic [ref=e130]: TCL
                - generic "XIAOMI" [ref=e131] [cursor=pointer]:
                  - generic [ref=e135]: XIAOMI
                - generic "MOTOROLA" [ref=e136] [cursor=pointer]:
                  - generic [ref=e140]: MOTOROLA
              - generic [ref=e141] [cursor=pointer]: 59 MORE
          - generic [ref=e143] [cursor=pointer]:
            - generic [ref=e144]: Screen Size
            - img [ref=e145]
          - generic [ref=e148] [cursor=pointer]:
            - generic [ref=e149]: Display Technology
            - img [ref=e150]
          - generic [ref=e153] [cursor=pointer]:
            - generic [ref=e154]: Operating System
            - img [ref=e155]
          - generic [ref=e158] [cursor=pointer]:
            - generic [ref=e159]: Refresh Rate
            - img [ref=e160]
          - generic [ref=e163] [cursor=pointer]:
            - generic [ref=e164]: Resolution
            - img [ref=e165]
          - generic [ref=e167]:
            - generic [ref=e169]: Price
            - generic [ref=e186]:
              - generic [ref=e187]: .
              - generic [ref=e188]: .
              - generic [ref=e189]: .
              - generic [ref=e190]: .
              - generic [ref=e191]: .
              - generic [ref=e192]: .
              - generic: .
            - generic [ref=e193]:
              - combobox [ref=e195]:
                - option "Min" [selected]
                - option "₹15000"
                - option "₹30000"
                - option "₹40000"
                - option "₹50000"
                - option "₹60000"
              - generic [ref=e196]: to
              - combobox [ref=e198]:
                - option "₹15000"
                - option "₹30000"
                - option "₹40000"
                - option "₹50000"
                - option "₹60000"
                - option "₹60000+" [selected]
          - generic [ref=e200] [cursor=pointer]:
            - generic [ref=e201]: Smart Features
            - img [ref=e202]
          - generic [ref=e205] [cursor=pointer]:
            - generic [ref=e206]: Ideal for Viewing Distance
            - img [ref=e207]
          - generic [ref=e210] [cursor=pointer]:
            - generic [ref=e211]: Number of USB Ports
            - img [ref=e212]
          - generic [ref=e215] [cursor=pointer]:
            - generic [ref=e216]: Number of HDMI Ports
            - img [ref=e217]
          - generic [ref=e219]:
            - generic [ref=e220] [cursor=pointer]:
              - generic [ref=e221]: Customer Ratings
              - img [ref=e222]
            - generic [ref=e225]:
              - generic "4★ & above" [ref=e226] [cursor=pointer]:
                - generic [ref=e230]: 4★ & above
              - generic "3★ & above" [ref=e231] [cursor=pointer]:
                - generic [ref=e235]: 3★ & above
              - generic "2★ & above" [ref=e236] [cursor=pointer]:
                - generic [ref=e240]: 2★ & above
              - generic "1★ & above" [ref=e241] [cursor=pointer]:
                - generic [ref=e245]: 1★ & above
          - generic [ref=e246]:
            - img [ref=e251] [cursor=pointer]
            - generic [ref=e253] [cursor=pointer]: "?"
          - generic [ref=e255] [cursor=pointer]:
            - generic [ref=e256]: Discount
            - img [ref=e257]
          - generic [ref=e259]:
            - generic [ref=e260] [cursor=pointer]:
              - generic [ref=e261]: Offers
              - img [ref=e262]
            - generic [ref=e265]:
              - generic "Buy More, Save More" [ref=e266] [cursor=pointer]:
                - generic [ref=e270]: Buy More, Save More
              - generic "Special Price" [ref=e271] [cursor=pointer]:
                - generic [ref=e275]: Special Price
          - generic [ref=e277] [cursor=pointer]:
            - generic [ref=e278]: Availability
            - img [ref=e279]
          - generic [ref=e282] [cursor=pointer]:
            - generic [ref=e283]: GST Invoice Available
            - img [ref=e284]
        - link "Need help? Help me decide Buying Guide" [ref=e287] [cursor=pointer]:
          - /url: /buying-guide/tvs?sid=ckf,czl&otracker=bg_from_browse_lhs
          - generic [ref=e288]: Need help?
          - generic [ref=e289]:
            - text: Help me decide
            - img [ref=e290]
          - img "Buying Guide" [ref=e292]
      - generic [ref=e293]:
        - generic [ref=e296]:
          - generic [ref=e297]:
            - generic [ref=e298]:
              - link "Home" [ref=e299] [cursor=pointer]:
                - /url: /
              - img [ref=e300]
            - generic [ref=e302]:
              - link "Home Entertainment" [ref=e303] [cursor=pointer]:
                - /url: /home-entertainment/pr?sid=ckf&marketplace=FLIPKART
              - img [ref=e304]
            - link "Televisions" [ref=e307] [cursor=pointer]:
              - /url: /televisions/pr?sid=ckf,czl&marketplace=FLIPKART
          - generic [ref=e308]: Showing 1 – 24 of 951 results for "smart"
          - generic [ref=e309]:
            - generic [ref=e310]: Sort By
            - generic [ref=e311]: Relevance
            - generic [ref=e312] [cursor=pointer]: Popularity
            - generic [ref=e313] [cursor=pointer]: Price -- Low to High
            - generic [ref=e314] [cursor=pointer]: Price -- High to Low
            - generic [ref=e315] [cursor=pointer]: Newest First
            - generic [ref=e316] [cursor=pointer]: Discount
        - 'link "acerpure Nitro 164 cm (65 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |Do... Add to Compare acerpure Nitro 164 cm (65 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |Do... 3.9 1,807 Ratings & 239 Reviews • Ultra HD (4K) | QLED • Model ID: AP65UG75PNTO5 • Launch Year: 2025 • Total Sound Output: 50 W • 1 Year Comprehensive Warranty On Product ₹37,799 ₹1,10,990 65% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e321] [cursor=pointer]':
          - /url: /acerpure-nitro-164-cm-65-inch-qled-ultra-hd-4k-smart-google-tv-120-hz-gtv-5-0-android-14-dolby-vision-dolby-atmos-50w-sound-tuner-wi-fi-direct-allm-vrr-memc-karaoke-ai-gaming-wall-mount/p/itm9c9372bae0ed3?pid=TVSHEQG27E6KGZFQ&lid=LSTTVSHEQG27E6KGZFQ4JKPXX&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=en_YRuJqWT1eEjJ3OLBSfFJrNJDBIFRMWA7F_hY8quNqztecMUOJGBRfD5FYYFsGugOpZCmoJDDj9Qk4RTZGfBnFU4IsYyWu-Pj9cxFjFAoaLk%3D&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e322]:
            - img "acerpure Nitro 164 cm (65 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |Do..." [ref=e326]
            - generic [ref=e332]: Add to Compare
            - img [ref=e335]
          - generic [ref=e337]:
            - generic [ref=e338]:
              - img [ref=e340]
              - generic [ref=e343]: acerpure Nitro 164 cm (65 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |Do...
              - generic [ref=e344]:
                - generic [ref=e346]:
                  - text: "3.9"
                  - img [ref=e347]
                - generic [ref=e349]: 1,807 Ratings & 239 Reviews
              - list [ref=e351]:
                - listitem [ref=e352]: • Ultra HD (4K) | QLED
                - listitem [ref=e353]: "• Model ID: AP65UG75PNTO5"
                - listitem [ref=e354]: "• Launch Year: 2025"
                - listitem [ref=e355]: "• Total Sound Output: 50 W"
                - listitem [ref=e356]: • 1 Year Comprehensive Warranty On Product
            - generic [ref=e357]:
              - generic [ref=e359]:
                - generic [ref=e360]: ₹37,799
                - generic [ref=e361]: ₹1,10,990
                - generic [ref=e362]: 65% off
              - generic [ref=e365]: Hot Deal
              - generic [ref=e367]:
                - generic [ref=e368]: Upto
                - generic [ref=e369]: ₹3,720
                - generic [ref=e370]: Off on Exchange
        - 'link "acerpure Nitro 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |Do... Add to Compare acerpure Nitro 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |Do... 3.9 1,807 Ratings & 239 Reviews • Ultra HD (4K) | QLED • Model ID: AP55UG75PNTO5 • Launch Year: 2025 • Total Sound Output: 50 W • 1 Year Comprehensive Warranty On Product ₹28,999 ₹80,990 64% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e375] [cursor=pointer]':
          - /url: /acerpure-nitro-139-cm-55-inch-qled-ultra-hd-4k-smart-google-tv-120-hz-gtv-5-0-android-14-dolby-vision-dolby-atmos-50w-sound-tuner-wi-fi-direct-allm-vrr-memc-karaoke-ai-gaming-wall-mount/p/itma2546b6494183?pid=TVSHEQG2DYAVGDYW&lid=LSTTVSHEQG2DYAVGDYWLJDDRZ&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=en_YRuJqWT1eEjJ3OLBSfFJrNJDBIFRMWA7F_hY8quNqztCbvztHuC9dT4a8M-pbEh0E0e-MWHUFhxpugetTBKjmIQEIsITtCzc4bHaOMTqL08%3D&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e376]:
            - img "acerpure Nitro 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |Do..." [ref=e380]
            - generic [ref=e386]: Add to Compare
            - img [ref=e389]
          - generic [ref=e391]:
            - generic [ref=e392]:
              - img [ref=e394]
              - generic [ref=e397]: acerpure Nitro 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |Do...
              - generic [ref=e398]:
                - generic [ref=e400]:
                  - text: "3.9"
                  - img [ref=e401]
                - generic [ref=e403]: 1,807 Ratings & 239 Reviews
              - list [ref=e405]:
                - listitem [ref=e406]: • Ultra HD (4K) | QLED
                - listitem [ref=e407]: "• Model ID: AP55UG75PNTO5"
                - listitem [ref=e408]: "• Launch Year: 2025"
                - listitem [ref=e409]: "• Total Sound Output: 50 W"
                - listitem [ref=e410]: • 1 Year Comprehensive Warranty On Product
            - generic [ref=e411]:
              - generic [ref=e413]:
                - generic [ref=e414]: ₹28,999
                - generic [ref=e415]: ₹80,990
                - generic [ref=e416]: 64% off
              - img [ref=e418]
              - generic [ref=e421]: Hot Deal
              - generic [ref=e423]:
                - generic [ref=e424]: Upto
                - generic [ref=e425]: ₹3,720
                - generic [ref=e426]: Off on Exchange
        - 'link "VW Nano Sync Series 139 cm (55 inch) QLED Ultra HD (4K) Smart JioTele OS TV 2025 Edition Add to Compare VW Nano Sync Series 139 cm (55 inch) QLED Ultra HD (4K) Smart JioTele OS TV 2025 Edition 4.1 381 Ratings & 51 Reviews • Ultra HD (4K) | QLED • Model ID: VW55JQ1 • Launch Year: 2025 • Total Sound Output: 40 W • 1 year warranty on product ₹22,999 ₹64,999 64% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e431] [cursor=pointer]':
          - /url: /vw-nano-sync-series-139-cm-55-inch-qled-ultra-hd-4k-smart-jiotele-os-tv-2025/p/itmbf3ae34d03d89?pid=TVSHHQCRXJD4HARE&lid=LSTTVSHHQCRXJD4HARETP3MKL&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHHQCRXJD4HARE.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e432]:
            - img "VW Nano Sync Series 139 cm (55 inch) QLED Ultra HD (4K) Smart JioTele OS TV 2025 Edition" [ref=e436]
            - generic [ref=e442]: Add to Compare
            - img [ref=e445]
          - generic [ref=e447]:
            - generic [ref=e448]:
              - generic [ref=e449]: VW Nano Sync Series 139 cm (55 inch) QLED Ultra HD (4K) Smart JioTele OS TV 2025 Edition
              - generic [ref=e450]:
                - generic [ref=e452]:
                  - text: "4.1"
                  - img [ref=e453]
                - generic [ref=e455]: 381 Ratings & 51 Reviews
              - list [ref=e457]:
                - listitem [ref=e458]: • Ultra HD (4K) | QLED
                - listitem [ref=e459]: "• Model ID: VW55JQ1"
                - listitem [ref=e460]: "• Launch Year: 2025"
                - listitem [ref=e461]: "• Total Sound Output: 40 W"
                - listitem [ref=e462]: • 1 year warranty on product
            - generic [ref=e463]:
              - generic [ref=e465]:
                - generic [ref=e466]: ₹22,999
                - generic [ref=e467]: ₹64,999
                - generic [ref=e468]: 64% off
              - img [ref=e470]
              - generic [ref=e473]: Hot Deal
              - generic [ref=e475]:
                - generic [ref=e476]: Upto
                - generic [ref=e477]: ₹3,720
                - generic [ref=e478]: Off on Exchange
        - 'link "XIAOMI FX Series 138.68 cm (55 inch) Ultra HD (4K) LED Smart Fire TV with Alexa built-in | HDR 10 | 32... Add to Compare XIAOMI FX Series 138.68 cm (55 inch) Ultra HD (4K) LED Smart Fire TV with Alexa built-in | HDR 10 | 32... 4.3 86,677 Ratings & 6,346 Reviews • Ultra HD (4K) | LED • Model ID: L55MB-FIN • Launch Year: 2025 • Total Sound Output: 30 W • 1 year comprehensive warranty ₹32,990 ₹48,999 32% off Upto ₹3,720 Off on Exchange Bank Offer" [ref=e483] [cursor=pointer]':
          - /url: /xiaomi-fx-series-138-68-cm-55-inch-ultra-hd-4k-led-smart-fire-tv-alexa-built-in-hdr-10-32-gb-storage-30w-dolby-audio-premium-metal-bezel-less-design-film-maker-mode-120-hz-game-booster-mi/p/itm1bd2d0efba1f7?pid=TVSHAVSFQGFGXMGY&lid=LSTTVSHAVSFQGFGXMGYVJMOLX&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_4&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHAVSFQGFGXMGY.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e484]:
            - img "XIAOMI FX Series 138.68 cm (55 inch) Ultra HD (4K) LED Smart Fire TV with Alexa built-in | HDR 10 | 32..." [ref=e488]
            - generic [ref=e494]: Add to Compare
            - img [ref=e497]
          - generic [ref=e499]:
            - generic [ref=e500]:
              - generic [ref=e501]: XIAOMI FX Series 138.68 cm (55 inch) Ultra HD (4K) LED Smart Fire TV with Alexa built-in | HDR 10 | 32...
              - generic [ref=e502]:
                - generic [ref=e504]:
                  - text: "4.3"
                  - img [ref=e505]
                - generic [ref=e507]: 86,677 Ratings & 6,346 Reviews
              - list [ref=e509]:
                - listitem [ref=e510]: • Ultra HD (4K) | LED
                - listitem [ref=e511]: "• Model ID: L55MB-FIN"
                - listitem [ref=e512]: "• Launch Year: 2025"
                - listitem [ref=e513]: "• Total Sound Output: 30 W"
                - listitem [ref=e514]: • 1 year comprehensive warranty
            - generic [ref=e515]:
              - generic [ref=e517]:
                - generic [ref=e518]: ₹32,990
                - generic [ref=e519]: ₹48,999
                - generic [ref=e520]: 32% off
              - img [ref=e522]
              - generic [ref=e524]:
                - generic [ref=e525]: Upto
                - generic [ref=e526]: ₹3,720
                - generic [ref=e527]: Off on Exchange
              - generic [ref=e530]: Bank Offer
        - 'link "XIAOMI F Pro 138 cm (55 inch) QLED Ultra HD (4K) Smart Fire TV with 34W Box Speakers | Dolby Surround ... Add to Compare XIAOMI F Pro 138 cm (55 inch) QLED Ultra HD (4K) Smart Fire TV with 34W Box Speakers | Dolby Surround ... 4 17,670 Ratings & 1,031 Reviews • Ultra HD (4K) | QLED • Model ID: L55MB-FPIN • Launch Year: 2025 • Total Sound Output: 34 W • 1 year comprehensive warranty ₹35,999 ₹62,999 42% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e535] [cursor=pointer]':
          - /url: /xiaomi-f-pro-138-cm-55-inch-qled-ultra-hd-4k-smart-fire-tv-34w-box-speakers-dolby-surround-sound-32gb-storage-filmmaker-mode-alexa-mi/p/itm75a67e5a59554?pid=TVSHCZC46UZJB8RZ&lid=LSTTVSHCZC46UZJB8RZXV8KG8&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_5&otracker=search&otracker1=search&fm=organic&iid=en_YRuJqWT1eEjJ3OLBSfFJrNJDBIFRMWA7F_hY8quNqzsJUneLWxcfFLzK-mBsLqUr0t5a0uIgmSVBhczqZNNkITRKtQQVWB8eNWYNLe7VuyQ%3D&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e536]:
            - img "XIAOMI F Pro 138 cm (55 inch) QLED Ultra HD (4K) Smart Fire TV with 34W Box Speakers | Dolby Surround ..." [ref=e540]
            - generic [ref=e546]: Add to Compare
            - img [ref=e549]
          - generic [ref=e551]:
            - generic [ref=e552]:
              - img [ref=e554]
              - generic [ref=e557]: XIAOMI F Pro 138 cm (55 inch) QLED Ultra HD (4K) Smart Fire TV with 34W Box Speakers | Dolby Surround ...
              - generic [ref=e558]:
                - generic [ref=e560]:
                  - text: "4"
                  - img [ref=e561]
                - generic [ref=e563]: 17,670 Ratings & 1,031 Reviews
              - list [ref=e565]:
                - listitem [ref=e566]: • Ultra HD (4K) | QLED
                - listitem [ref=e567]: "• Model ID: L55MB-FPIN"
                - listitem [ref=e568]: "• Launch Year: 2025"
                - listitem [ref=e569]: "• Total Sound Output: 34 W"
                - listitem [ref=e570]: • 1 year comprehensive warranty
            - generic [ref=e571]:
              - generic [ref=e573]:
                - generic [ref=e574]: ₹35,999
                - generic [ref=e575]: ₹62,999
                - generic [ref=e576]: 42% off
              - img [ref=e578]
              - generic [ref=e581]: Hot Deal
              - generic [ref=e583]:
                - generic [ref=e584]: Upto
                - generic [ref=e585]: ₹3,720
                - generic [ref=e586]: Off on Exchange
        - 'link "Foxsky 127 cm (50 inch) Ultra HD (4K) Mini LED Smart WebOS TV 2026 Edition with 2.1CH Audio System Tun... Add to Compare Foxsky 127 cm (50 inch) Ultra HD (4K) Mini LED Smart WebOS TV 2026 Edition with 2.1CH Audio System Tun... 4.3 72 Ratings & 33 Reviews • Ultra HD (4K) | Mini LED • Model ID: FS50MINILED • Launch Year: 2026 • Total Sound Output: 40 W • 1 Year Comprehensive Warranty On Product ₹25,999 ₹59,999 56% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e591] [cursor=pointer]':
          - /url: /foxsky-127-cm-50-inch-ultra-hd-4k-mini-led-smart-webos-tv-2026-2-1ch-audio-system-tuned-40w-native-144-refresh-rate-dolby-vision-atmos/p/itm37fa28a524bd9?pid=TVSHJF6YUMDFFPHR&lid=LSTTVSHJF6YUMDFFPHR5DLWJT&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_6&otracker=search&otracker1=search&fm=organic&iid=en_YRuJqWT1eEjJ3OLBSfFJrNJDBIFRMWA7F_hY8quNqzvOuafwU5m0rOqxiJ9EgusHL11TQV3fyAw7r4IF1XvtolF91k_NKRtsN7mkYTl-6AQ%3D&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e592]:
            - img "Foxsky 127 cm (50 inch) Ultra HD (4K) Mini LED Smart WebOS TV 2026 Edition with 2.1CH Audio System Tun..." [ref=e596]
            - generic [ref=e602]: Add to Compare
            - img [ref=e605]
          - generic [ref=e607]:
            - generic [ref=e608]:
              - img [ref=e610]
              - generic [ref=e613]: Foxsky 127 cm (50 inch) Ultra HD (4K) Mini LED Smart WebOS TV 2026 Edition with 2.1CH Audio System Tun...
              - generic [ref=e614]:
                - generic [ref=e616]:
                  - text: "4.3"
                  - img [ref=e617]
                - generic [ref=e619]: 72 Ratings & 33 Reviews
              - list [ref=e621]:
                - listitem [ref=e622]: • Ultra HD (4K) | Mini LED
                - listitem [ref=e623]: "• Model ID: FS50MINILED"
                - listitem [ref=e624]: "• Launch Year: 2026"
                - listitem [ref=e625]: "• Total Sound Output: 40 W"
                - listitem [ref=e626]: • 1 Year Comprehensive Warranty On Product
            - generic [ref=e627]:
              - generic [ref=e629]:
                - generic [ref=e630]: ₹25,999
                - generic [ref=e631]: ₹59,999
                - generic [ref=e632]: 56% off
              - img [ref=e634]
              - generic [ref=e637]: Hot Deal
              - generic [ref=e639]:
                - generic [ref=e640]: Upto
                - generic [ref=e641]: ₹3,720
                - generic [ref=e642]: Off on Exchange
        - 'link "VW Nano Sync Series 126 cm (50 inch) QLED Ultra HD (4K) Smart JioTele OS TV 2025 Edition Add to Compare VW Nano Sync Series 126 cm (50 inch) QLED Ultra HD (4K) Smart JioTele OS TV 2025 Edition 4.1 381 Ratings & 51 Reviews • Ultra HD (4K) | QLED • Model ID: VW50JQ1 • Launch Year: 2025 • Total Sound Output: 40 W • 1.5 year warranty on product ₹21,499 ₹59,999 64% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e647] [cursor=pointer]':
          - /url: /vw-nano-sync-series-126-cm-50-inch-qled-ultra-hd-4k-smart-jiotele-os-tv-2025/p/itm70ea8157cf4e3?pid=TVSHHQCREGZFNHNS&lid=LSTTVSHHQCREGZFNHNSQ4PZG7&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_7&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHHQCREGZFNHNS.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e648]:
            - img "VW Nano Sync Series 126 cm (50 inch) QLED Ultra HD (4K) Smart JioTele OS TV 2025 Edition" [ref=e652]
            - generic [ref=e658]: Add to Compare
            - img [ref=e661]
          - generic [ref=e663]:
            - generic [ref=e664]:
              - generic [ref=e665]: VW Nano Sync Series 126 cm (50 inch) QLED Ultra HD (4K) Smart JioTele OS TV 2025 Edition
              - generic [ref=e666]:
                - generic [ref=e668]:
                  - text: "4.1"
                  - img [ref=e669]
                - generic [ref=e671]: 381 Ratings & 51 Reviews
              - list [ref=e673]:
                - listitem [ref=e674]: • Ultra HD (4K) | QLED
                - listitem [ref=e675]: "• Model ID: VW50JQ1"
                - listitem [ref=e676]: "• Launch Year: 2025"
                - listitem [ref=e677]: "• Total Sound Output: 40 W"
                - listitem [ref=e678]: • 1.5 year warranty on product
            - generic [ref=e679]:
              - generic [ref=e681]:
                - generic [ref=e682]: ₹21,499
                - generic [ref=e683]: ₹59,999
                - generic [ref=e684]: 64% off
              - img [ref=e686]
              - generic [ref=e689]: Hot Deal
              - generic [ref=e691]:
                - generic [ref=e692]: Upto
                - generic [ref=e693]: ₹3,720
                - generic [ref=e694]: Off on Exchange
        - 'link "MOTOROLA 80 cm (32 inch) QLED HD Ready Smart Google TV Add to Compare MOTOROLA 80 cm (32 inch) QLED HD Ready Smart Google TV 4.3 18,945 Ratings & 1,862 Reviews • HD Ready | QLED • Model ID: 32HDGQMDDAQ • Launch Year: 2025 • Total Sound Output: 40 W • 1 year Warranty for Manufacturing Defects ₹11,599 ₹26,999 57% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e699] [cursor=pointer]':
          - /url: /motorola-80-cm-32-inch-qled-hd-ready-smart-google-tv/p/itm247d6554b407b?pid=TVSHC5F6TMNNUVXM&lid=LSTTVSHC5F6TMNNUVXMGGSM1Z&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_8&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHC5F6TMNNUVXM.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e700]:
            - img "MOTOROLA 80 cm (32 inch) QLED HD Ready Smart Google TV" [ref=e704]
            - generic [ref=e710]: Add to Compare
            - img [ref=e713]
          - generic [ref=e715]:
            - generic [ref=e716]:
              - generic [ref=e717]: MOTOROLA 80 cm (32 inch) QLED HD Ready Smart Google TV
              - generic [ref=e718]:
                - generic [ref=e720]:
                  - text: "4.3"
                  - img [ref=e721]
                - generic [ref=e723]: 18,945 Ratings & 1,862 Reviews
              - list [ref=e725]:
                - listitem [ref=e726]: • HD Ready | QLED
                - listitem [ref=e727]: "• Model ID: 32HDGQMDDAQ"
                - listitem [ref=e728]: "• Launch Year: 2025"
                - listitem [ref=e729]: "• Total Sound Output: 40 W"
                - listitem [ref=e730]: • 1 year Warranty for Manufacturing Defects
            - generic [ref=e731]:
              - generic [ref=e733]:
                - generic [ref=e734]: ₹11,599
                - generic [ref=e735]: ₹26,999
                - generic [ref=e736]: 57% off
              - img [ref=e738]
              - generic [ref=e741]: Hot Deal
              - generic [ref=e743]:
                - generic [ref=e744]: Upto
                - generic [ref=e745]: ₹3,720
                - generic [ref=e746]: Off on Exchange
        - 'link "VW Pro Series 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV 2025 Edition Add to Compare VW Pro Series 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV 2025 Edition 4.2 622 Ratings & 133 Reviews • Ultra HD (4K) | QLED • Model ID: VW55GQ1 • Launch Year: 2025 • Total Sound Output: 48 W • 1.5 year warranty on product ₹27,999 ₹59,999 53% off Hot Deal Only few left" [ref=e751] [cursor=pointer]':
          - /url: /vw-pro-series-139-cm-55-inch-qled-ultra-hd-4k-smart-google-tv-2025/p/itm8754b9b7e1fba?pid=TVSHHQCRVPZBNXEH&lid=LSTTVSHHQCRVPZBNXEHZSEW46&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_9&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHHQCRVPZBNXEH.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e752]:
            - img "VW Pro Series 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV 2025 Edition" [ref=e756]
            - generic [ref=e762]: Add to Compare
            - img [ref=e765]
          - generic [ref=e767]:
            - generic [ref=e768]:
              - generic [ref=e769]: VW Pro Series 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV 2025 Edition
              - generic [ref=e770]:
                - generic [ref=e772]:
                  - text: "4.2"
                  - img [ref=e773]
                - generic [ref=e775]: 622 Ratings & 133 Reviews
              - list [ref=e777]:
                - listitem [ref=e778]: • Ultra HD (4K) | QLED
                - listitem [ref=e779]: "• Model ID: VW55GQ1"
                - listitem [ref=e780]: "• Launch Year: 2025"
                - listitem [ref=e781]: "• Total Sound Output: 48 W"
                - listitem [ref=e782]: • 1.5 year warranty on product
            - generic [ref=e783]:
              - generic [ref=e785]:
                - generic [ref=e786]: ₹27,999
                - generic [ref=e787]: ₹59,999
                - generic [ref=e788]: 53% off
              - img [ref=e790]
              - generic [ref=e793]: Hot Deal
              - generic [ref=e796]: Only few left
        - 'link "Samsung 138 cm (55 inch) QLED Ultra HD (4K) Smart Tizen TV with Vision AI |100% Color Volume with Quan... Add to Compare Samsung 138 cm (55 inch) QLED Ultra HD (4K) Smart Tizen TV with Vision AI |100% Color Volume with Quan... 4.2 4,092 Ratings & 265 Reviews • Ultra HD (4K) | QLED • Model ID: QA55QEF6AULXL • Launch Year: 2025 • Total Sound Output: 20 W • 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel) ₹47,990 ₹75,500 36% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e801] [cursor=pointer]':
          - /url: /samsung-138-cm-55-inch-qled-ultra-hd-4k-smart-tizen-tv-vision-ai-100-color-volume-quantum-dot-real-sheet-hdr-pantone-validated-4k-upscaling-knox-security-100-free-channels/p/itm3580d1a4d06ec?pid=TVSHECAJ2HVHBMYH&lid=LSTTVSHECAJ2HVHBMYH3NQOEU&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_10&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHECAJ2HVHBMYH.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e802]:
            - img "Samsung 138 cm (55 inch) QLED Ultra HD (4K) Smart Tizen TV with Vision AI |100% Color Volume with Quan..." [ref=e806]
            - generic [ref=e812]: Add to Compare
            - img [ref=e815]
          - generic [ref=e817]:
            - generic [ref=e818]:
              - generic [ref=e819]: Samsung 138 cm (55 inch) QLED Ultra HD (4K) Smart Tizen TV with Vision AI |100% Color Volume with Quan...
              - generic [ref=e820]:
                - generic [ref=e822]:
                  - text: "4.2"
                  - img [ref=e823]
                - generic [ref=e825]: 4,092 Ratings & 265 Reviews
              - list [ref=e827]:
                - listitem [ref=e828]: • Ultra HD (4K) | QLED
                - listitem [ref=e829]: "• Model ID: QA55QEF6AULXL"
                - listitem [ref=e830]: "• Launch Year: 2025"
                - listitem [ref=e831]: "• Total Sound Output: 20 W"
                - listitem [ref=e832]: • 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)
            - generic [ref=e833]:
              - generic [ref=e835]:
                - generic [ref=e836]: ₹47,990
                - generic [ref=e837]: ₹75,500
                - generic [ref=e838]: 36% off
              - img [ref=e840]
              - generic [ref=e843]: Hot Deal
              - generic [ref=e845]:
                - generic [ref=e846]: Upto
                - generic [ref=e847]: ₹3,720
                - generic [ref=e848]: Off on Exchange
        - 'link "acerpure Nitro Z Series 254 cm (100 inch) QLED Ultra HD (4K) Smart Google TV with 144 Hz GTV 3.0 AP100... Add to Compare acerpure Nitro Z Series 254 cm (100 inch) QLED Ultra HD (4K) Smart Google TV with 144 Hz GTV 3.0 AP100... 3.9 1,807 Ratings & 239 Reviews • Ultra HD (4K) | QLED • Model ID: AP100UG75PNTO5 • Launch Year: 2025 • Total Sound Output: 60 W • 1 Year Comprehensive Warranty On Product ₹1,99,999 ₹3,09,990 35% off Upto ₹3,720 Off on Exchange Bank Offer" [ref=e853] [cursor=pointer]':
          - /url: /acerpure-nitro-z-series-254-cm-100-inch-qled-ultra-hd-4k-smart-google-tv-144-hz-gtv-3-0-ap100ug75pnto5-android-11-dolby-vision-dolby-atmos-60w-sound-allm-vrr-memc-gaming-wall-mount-dual-wi-fi/p/itm7af7650c6d56f?pid=TVSHGV9GUFSFHVWJ&lid=LSTTVSHGV9GUFSFHVWJEVOBV2&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_11&otracker=search&otracker1=search&fm=organic&iid=en_YRuJqWT1eEjJ3OLBSfFJrNJDBIFRMWA7F_hY8quNqzv-5B5Bi6VyXrTdcs_FlOfYqDH_UuqByMtEzL8itjG7fA1kFuKnWaINrJqv3pKVKuU%3D&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e854]:
            - img "acerpure Nitro Z Series 254 cm (100 inch) QLED Ultra HD (4K) Smart Google TV with 144 Hz GTV 3.0 AP100..." [ref=e858]
            - generic [ref=e864]: Add to Compare
            - img [ref=e867]
          - generic [ref=e869]:
            - generic [ref=e870]:
              - img [ref=e872]
              - generic [ref=e875]: acerpure Nitro Z Series 254 cm (100 inch) QLED Ultra HD (4K) Smart Google TV with 144 Hz GTV 3.0 AP100...
              - generic [ref=e876]:
                - generic [ref=e878]:
                  - text: "3.9"
                  - img [ref=e879]
                - generic [ref=e881]: 1,807 Ratings & 239 Reviews
              - list [ref=e883]:
                - listitem [ref=e884]: • Ultra HD (4K) | QLED
                - listitem [ref=e885]: "• Model ID: AP100UG75PNTO5"
                - listitem [ref=e886]: "• Launch Year: 2025"
                - listitem [ref=e887]: "• Total Sound Output: 60 W"
                - listitem [ref=e888]: • 1 Year Comprehensive Warranty On Product
            - generic [ref=e889]:
              - generic [ref=e891]:
                - generic [ref=e892]: ₹1,99,999
                - generic [ref=e893]: ₹3,09,990
                - generic [ref=e894]: 35% off
              - img [ref=e896]
              - generic [ref=e898]:
                - generic [ref=e899]: Upto
                - generic [ref=e900]: ₹3,720
                - generic [ref=e901]: Off on Exchange
              - generic [ref=e904]: Bank Offer
        - 'link "acerpure NITRO 189.2 cm (75 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |... Add to Compare acerpure NITRO 189.2 cm (75 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |... 3.9 1,807 Ratings & 239 Reviews • Ultra HD (4K) | QLED • Model ID: AP75UG75PNTO5 • Launch Year: 2025 • Total Sound Output: 50 W • 1 Year Comprehensive Warranty On Product ₹52,599 ₹1,25,290 58% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e909] [cursor=pointer]':
          - /url: /acerpure-nitro-189-2-cm-75-inch-qled-ultra-hd-4k-smart-google-tv-120-hz-gtv-5-0-android-14-dolby-vision-dolby-atmos-50w-sound-tuner-wi-fi-direct-allm-vrr-memc-karaoke-ai-gaming-wall-mount/p/itm9e0db86628a22?pid=TVSHFNYYVUTK5UA5&lid=LSTTVSHFNYYVUTK5UA5J4SSZY&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_12&otracker=search&otracker1=search&fm=organic&iid=en_YRuJqWT1eEjJ3OLBSfFJrNJDBIFRMWA7F_hY8quNqzspXTfTb9LnB15fla46elLJrq7E9BppjFiXXsVS95of_waKg8hQxVtMHqLTdaqeDbc%3D&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e910]:
            - img "acerpure NITRO 189.2 cm (75 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |..." [ref=e914]
            - generic [ref=e920]: Add to Compare
            - img [ref=e923]
          - generic [ref=e925]:
            - generic [ref=e926]:
              - img [ref=e928]
              - generic [ref=e931]: acerpure NITRO 189.2 cm (75 inch) QLED Ultra HD (4K) Smart Google TV with 120 Hz GTV 5.0 |Android 14 |...
              - generic [ref=e932]:
                - generic [ref=e934]:
                  - text: "3.9"
                  - img [ref=e935]
                - generic [ref=e937]: 1,807 Ratings & 239 Reviews
              - list [ref=e939]:
                - listitem [ref=e940]: • Ultra HD (4K) | QLED
                - listitem [ref=e941]: "• Model ID: AP75UG75PNTO5"
                - listitem [ref=e942]: "• Launch Year: 2025"
                - listitem [ref=e943]: "• Total Sound Output: 50 W"
                - listitem [ref=e944]: • 1 Year Comprehensive Warranty On Product
            - generic [ref=e945]:
              - generic [ref=e947]:
                - generic [ref=e948]: ₹52,599
                - generic [ref=e949]: ₹1,25,290
                - generic [ref=e950]: 58% off
              - generic [ref=e953]: Hot Deal
              - generic [ref=e955]:
                - generic [ref=e956]: Upto
                - generic [ref=e957]: ₹3,720
                - generic [ref=e958]: Off on Exchange
        - 'link "Vu GloQLED 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV Add to Compare Vu GloQLED 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV 4.1 1,307 Ratings & 127 Reviews • Ultra HD (4K) | QLED • Model ID: 55GLOQLED25 • Launch Year: 2025 • Total Sound Output: 24 W • 1 Year Manufaturer Warranty, In the 1st year of the warranty, panel, parts, and labor costs are covered. ₹33,999 ₹46,000 26% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e963] [cursor=pointer]':
          - /url: /vu-gloqled-139-cm-55-inch-qled-ultra-hd-4k-smart-google-tv/p/itm74b342bb200d7?pid=TVSHE3AKHYQX3QCY&lid=LSTTVSHE3AKHYQX3QCYXQNXLQ&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_13&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHE3AKHYQX3QCY.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e964]:
            - img "Vu GloQLED 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV" [ref=e968]
            - generic [ref=e974]: Add to Compare
            - img [ref=e977]
          - generic [ref=e979]:
            - generic [ref=e980]:
              - generic [ref=e981]: Vu GloQLED 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV
              - generic [ref=e982]:
                - generic [ref=e984]:
                  - text: "4.1"
                  - img [ref=e985]
                - generic [ref=e987]: 1,307 Ratings & 127 Reviews
              - list [ref=e989]:
                - listitem [ref=e990]: • Ultra HD (4K) | QLED
                - listitem [ref=e991]: "• Model ID: 55GLOQLED25"
                - listitem [ref=e992]: "• Launch Year: 2025"
                - listitem [ref=e993]: "• Total Sound Output: 24 W"
                - listitem [ref=e994]: • 1 Year Manufaturer Warranty, In the 1st year of the warranty, panel, parts, and labor costs are covered.
            - generic [ref=e995]:
              - generic [ref=e997]:
                - generic [ref=e998]: ₹33,999
                - generic [ref=e999]: ₹46,000
                - generic [ref=e1000]: 26% off
              - img [ref=e1002]
              - generic [ref=e1005]: Hot Deal
              - generic [ref=e1007]:
                - generic [ref=e1008]: Upto
                - generic [ref=e1009]: ₹3,720
                - generic [ref=e1010]: Off on Exchange
        - 'link "Samsung 108 cm (43 inch) QLED Ultra HD (4K) Smart Tizen TV with Vision AI |100% Color Volume with Quan... Add to Compare Samsung 108 cm (43 inch) QLED Ultra HD (4K) Smart Tizen TV with Vision AI |100% Color Volume with Quan... 4.2 4,092 Ratings & 265 Reviews • Ultra HD (4K) | QLED • Model ID: QA43QEF6AULXL • Launch Year: 2025 • Total Sound Output: 20 W • 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel) ₹35,990 ₹50,600 28% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e1015] [cursor=pointer]':
          - /url: /samsung-108-cm-43-inch-qled-ultra-hd-4k-smart-tizen-tv-vision-ai-100-color-volume-quantum-dot-real-sheet-hdr-pantone-validated-4k-upscaling-knox-security-100-free-channels/p/itm2a1a13358a704?pid=TVSHECAJXJZDH33Z&lid=LSTTVSHECAJXJZDH33ZODL5MD&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_14&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHECAJXJZDH33Z.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e1016]:
            - img "Samsung 108 cm (43 inch) QLED Ultra HD (4K) Smart Tizen TV with Vision AI |100% Color Volume with Quan..." [ref=e1020]
            - generic [ref=e1026]: Add to Compare
            - img [ref=e1029]
          - generic [ref=e1031]:
            - generic [ref=e1032]:
              - generic [ref=e1033]: Samsung 108 cm (43 inch) QLED Ultra HD (4K) Smart Tizen TV with Vision AI |100% Color Volume with Quan...
              - generic [ref=e1034]:
                - generic [ref=e1036]:
                  - text: "4.2"
                  - img [ref=e1037]
                - generic [ref=e1039]: 4,092 Ratings & 265 Reviews
              - list [ref=e1041]:
                - listitem [ref=e1042]: • Ultra HD (4K) | QLED
                - listitem [ref=e1043]: "• Model ID: QA43QEF6AULXL"
                - listitem [ref=e1044]: "• Launch Year: 2025"
                - listitem [ref=e1045]: "• Total Sound Output: 20 W"
                - listitem [ref=e1046]: • 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)
            - generic [ref=e1047]:
              - generic [ref=e1049]:
                - generic [ref=e1050]: ₹35,990
                - generic [ref=e1051]: ₹50,600
                - generic [ref=e1052]: 28% off
              - img [ref=e1054]
              - generic [ref=e1057]: Hot Deal
              - generic [ref=e1059]:
                - generic [ref=e1060]: Upto
                - generic [ref=e1061]: ₹3,720
                - generic [ref=e1062]: Off on Exchange
        - 'link "TCL 138 cm (55 inch) Ultra HD (4K) LED Smart Google TV with MEMC | Dolby Vision-Atmos | HVA Panel & Me... Add to Compare TCL 138 cm (55 inch) Ultra HD (4K) LED Smart Google TV with MEMC | Dolby Vision-Atmos | HVA Panel & Me... 4.1 5,890 Ratings & 402 Reviews • Ultra HD (4K) | LED • Model ID: 55V6C • Launch Year: 2025 • Total Sound Output: 24 W • 2 Years Product Warranty ₹32,990 ₹70,190 52% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e1067] [cursor=pointer]':
          - /url: /tcl-138-cm-55-inch-ultra-hd-4k-led-smart-google-tv-memc-dolby-vision-atmos-hva-panel-metallic-bezel-less/p/itm2637cadc573cd?pid=TVSHAHCUJNAY8B8G&lid=LSTTVSHAHCUJNAY8B8GZMJPYM&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_15&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHAHCUJNAY8B8G.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e1068]:
            - img "TCL 138 cm (55 inch) Ultra HD (4K) LED Smart Google TV with MEMC | Dolby Vision-Atmos | HVA Panel & Me..." [ref=e1072]
            - generic [ref=e1078]: Add to Compare
            - img [ref=e1081]
          - generic [ref=e1083]:
            - generic [ref=e1084]:
              - generic [ref=e1085]: TCL 138 cm (55 inch) Ultra HD (4K) LED Smart Google TV with MEMC | Dolby Vision-Atmos | HVA Panel & Me...
              - generic [ref=e1086]:
                - generic [ref=e1088]:
                  - text: "4.1"
                  - img [ref=e1089]
                - generic [ref=e1091]: 5,890 Ratings & 402 Reviews
              - list [ref=e1093]:
                - listitem [ref=e1094]: • Ultra HD (4K) | LED
                - listitem [ref=e1095]: "• Model ID: 55V6C"
                - listitem [ref=e1096]: "• Launch Year: 2025"
                - listitem [ref=e1097]: "• Total Sound Output: 24 W"
                - listitem [ref=e1098]: • 2 Years Product Warranty
            - generic [ref=e1099]:
              - generic [ref=e1101]:
                - generic [ref=e1102]: ₹32,990
                - generic [ref=e1103]: ₹70,190
                - generic [ref=e1104]: 52% off
              - img [ref=e1106]
              - generic [ref=e1109]: Hot Deal
              - generic [ref=e1111]:
                - generic [ref=e1112]: Upto
                - generic [ref=e1113]: ₹3,720
                - generic [ref=e1114]: Off on Exchange
        - 'link "Vu GloQLED 126 cm (50 inch) QLED Ultra HD (4K) Smart Google TV Add to Compare Vu GloQLED 126 cm (50 inch) QLED Ultra HD (4K) Smart Google TV 4.1 1,307 Ratings & 127 Reviews • Ultra HD (4K) | QLED • Model ID: 50GLOQLED25 • Launch Year: 2025 • Total Sound Output: 24 W • 1 Year Manufaturer Warranty, In the 1st year of the warranty, panel, parts, and labor costs are covered. ₹28,599 ₹42,000 31% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e1119] [cursor=pointer]':
          - /url: /vu-gloqled-126-cm-50-inch-qled-ultra-hd-4k-smart-google-tv/p/itmd881e09b7d6d7?pid=TVSHE3AKP88WM32U&lid=LSTTVSHE3AKP88WM32ULPZI5U&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_16&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHE3AKP88WM32U.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e1120]:
            - img "Vu GloQLED 126 cm (50 inch) QLED Ultra HD (4K) Smart Google TV" [ref=e1124]
            - generic [ref=e1130]: Add to Compare
            - img [ref=e1133]
          - generic [ref=e1135]:
            - generic [ref=e1136]:
              - generic [ref=e1137]: Vu GloQLED 126 cm (50 inch) QLED Ultra HD (4K) Smart Google TV
              - generic [ref=e1138]:
                - generic [ref=e1140]:
                  - text: "4.1"
                  - img [ref=e1141]
                - generic [ref=e1143]: 1,307 Ratings & 127 Reviews
              - list [ref=e1145]:
                - listitem [ref=e1146]: • Ultra HD (4K) | QLED
                - listitem [ref=e1147]: "• Model ID: 50GLOQLED25"
                - listitem [ref=e1148]: "• Launch Year: 2025"
                - listitem [ref=e1149]: "• Total Sound Output: 24 W"
                - listitem [ref=e1150]: • 1 Year Manufaturer Warranty, In the 1st year of the warranty, panel, parts, and labor costs are covered.
            - generic [ref=e1151]:
              - generic [ref=e1153]:
                - generic [ref=e1154]: ₹28,599
                - generic [ref=e1155]: ₹42,000
                - generic [ref=e1156]: 31% off
              - img [ref=e1158]
              - generic [ref=e1161]: Hot Deal
              - generic [ref=e1163]:
                - generic [ref=e1164]: Upto
                - generic [ref=e1165]: ₹3,720
                - generic [ref=e1166]: Off on Exchange
        - 'link "Samsung Crystal 4K Vivid 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV with 4K Upscaling | Purcolo... Add to Compare Samsung Crystal 4K Vivid 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV with 4K Upscaling | Purcolo... 4.3 26,560 Ratings & 1,686 Reviews • Ultra HD (4K) | LED • Model ID: UA55DUE70BKLXL • Launch Year: 2024 • Total Sound Output: 20 W • 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel) ₹35,989 ₹59,800 39% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e1171] [cursor=pointer]':
          - /url: /samsung-crystal-4k-vivid-138-cm-55-inch-ultra-hd-4k-led-smart-tizen-tv-upscaling-purcolor-voice-ready-knox-security/p/itmbac55b98d739d?pid=TVSGYWKBQFHPGMNH&lid=LSTTVSGYWKBQFHPGMNH23EXGG&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_17&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSGYWKBQFHPGMNH.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e1172]:
            - img "Samsung Crystal 4K Vivid 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV with 4K Upscaling | Purcolo..." [ref=e1176]
            - generic [ref=e1182]: Add to Compare
            - img [ref=e1185]
          - generic [ref=e1187]:
            - generic [ref=e1188]:
              - generic [ref=e1189]: Samsung Crystal 4K Vivid 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV with 4K Upscaling | Purcolo...
              - generic [ref=e1190]:
                - generic [ref=e1192]:
                  - text: "4.3"
                  - img [ref=e1193]
                - generic [ref=e1195]: 26,560 Ratings & 1,686 Reviews
              - list [ref=e1197]:
                - listitem [ref=e1198]: • Ultra HD (4K) | LED
                - listitem [ref=e1199]: "• Model ID: UA55DUE70BKLXL"
                - listitem [ref=e1200]: "• Launch Year: 2024"
                - listitem [ref=e1201]: "• Total Sound Output: 20 W"
                - listitem [ref=e1202]: • 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)
            - generic [ref=e1203]:
              - generic [ref=e1205]:
                - generic [ref=e1206]: ₹35,989
                - generic [ref=e1207]: ₹59,800
                - generic [ref=e1208]: 39% off
              - img [ref=e1210]
              - generic [ref=e1213]: Hot Deal
              - generic [ref=e1215]:
                - generic [ref=e1216]: Upto
                - generic [ref=e1217]: ₹3,720
                - generic [ref=e1218]: Off on Exchange
        - 'link "Infinix 140 cm (55 inch) QLED Ultra HD (4K) Smart Google TV Add to Compare Infinix 140 cm (55 inch) QLED Ultra HD (4K) Smart Google TV 4 3,353 Ratings & 302 Reviews • Ultra HD (4K) | QLED • Model ID: 55GU1Q/55GU3Q • Launch Year: 2024 • Total Sound Output: 40 W • 1 Year Warranty on Product ₹30,999 ₹36,999 16% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e1223] [cursor=pointer]':
          - /url: /infinix-140-cm-55-inch-qled-ultra-hd-4k-smart-google-tv/p/itmf5b7c5d1ce39a?pid=TVSH46HKNARSGJGY&lid=LSTTVSH46HKNARSGJGYCBHQFL&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_18&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSH46HKNARSGJGY.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e1224]:
            - img "Infinix 140 cm (55 inch) QLED Ultra HD (4K) Smart Google TV" [ref=e1228]
            - generic [ref=e1234]: Add to Compare
            - img [ref=e1237]
          - generic [ref=e1239]:
            - generic [ref=e1240]:
              - generic [ref=e1241]: Infinix 140 cm (55 inch) QLED Ultra HD (4K) Smart Google TV
              - generic [ref=e1242]:
                - generic [ref=e1244]:
                  - text: "4"
                  - img [ref=e1245]
                - generic [ref=e1247]: 3,353 Ratings & 302 Reviews
              - list [ref=e1249]:
                - listitem [ref=e1250]: • Ultra HD (4K) | QLED
                - listitem [ref=e1251]: "• Model ID: 55GU1Q/55GU3Q"
                - listitem [ref=e1252]: "• Launch Year: 2024"
                - listitem [ref=e1253]: "• Total Sound Output: 40 W"
                - listitem [ref=e1254]: • 1 Year Warranty on Product
            - generic [ref=e1255]:
              - generic [ref=e1257]:
                - generic [ref=e1258]: ₹30,999
                - generic [ref=e1259]: ₹36,999
                - generic [ref=e1260]: 16% off
              - img [ref=e1262]
              - generic [ref=e1265]: Hot Deal
              - generic [ref=e1267]:
                - generic [ref=e1268]: Upto
                - generic [ref=e1269]: ₹3,720
                - generic [ref=e1270]: Off on Exchange
        - 'link "Bush 109 cm (43 inch) Ultra HD (4K) LED Smart Android Based TV Add to Compare Bush 109 cm (43 inch) Ultra HD (4K) LED Smart Android Based TV • Ultra HD (4K) | LED • Model ID: BH43S YPRO/U • Launch Year: 2025 • Total Sound Output: 20 W • 1 Year Product Warranty ₹19,999 ₹41,990 52% off Upto ₹3,720 Off on Exchange Bank Offer" [ref=e1275] [cursor=pointer]':
          - /url: /bush-109-cm-43-inch-ultra-hd-4k-led-smart-android-based-tv/p/itm1c7b4a0626746?pid=TVSHKAJPTBAGDR4S&lid=LSTTVSHKAJPTBAGDR4SDEZUTO&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_19&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHKAJPTBAGDR4S.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e1276]:
            - img "Bush 109 cm (43 inch) Ultra HD (4K) LED Smart Android Based TV" [ref=e1280]
            - generic [ref=e1286]: Add to Compare
            - img [ref=e1289]
          - generic [ref=e1291]:
            - generic [ref=e1292]:
              - generic [ref=e1293]: Bush 109 cm (43 inch) Ultra HD (4K) LED Smart Android Based TV
              - list [ref=e1295]:
                - listitem [ref=e1296]: • Ultra HD (4K) | LED
                - listitem [ref=e1297]: "• Model ID: BH43S YPRO/U"
                - listitem [ref=e1298]: "• Launch Year: 2025"
                - listitem [ref=e1299]: "• Total Sound Output: 20 W"
                - listitem [ref=e1300]: • 1 Year Product Warranty
            - generic [ref=e1301]:
              - generic [ref=e1303]:
                - generic [ref=e1304]: ₹19,999
                - generic [ref=e1305]: ₹41,990
                - generic [ref=e1306]: 52% off
              - img [ref=e1308]
              - generic [ref=e1310]:
                - generic [ref=e1311]: Upto
                - generic [ref=e1312]: ₹3,720
                - generic [ref=e1313]: Off on Exchange
              - generic [ref=e1316]: Bank Offer
        - 'link "Samsung Crystal 4K Vivid 125 cm (50 inch) Ultra HD (4K) LED Smart Tizen TV with 4K Upscaling | Purcolo... Add to Compare Samsung Crystal 4K Vivid 125 cm (50 inch) Ultra HD (4K) LED Smart Tizen TV with 4K Upscaling | Purcolo... 4.3 26,560 Ratings & 1,686 Reviews • Ultra HD (4K) | LED • Model ID: UA50DUE70BKLXL • Launch Year: 2024 • Total Sound Output: 20 W • 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel) ₹37,990 ₹57,000 33% off Only 2 left Upto ₹3,720 Off on Exchange" [ref=e1321] [cursor=pointer]':
          - /url: /samsung-crystal-4k-vivid-125-cm-50-inch-ultra-hd-4k-led-smart-tizen-tv-upscaling-purcolor-auto-game-mode-q-symphony-voice-ready-knox-security/p/itmbac55b98d739d?pid=TVSGYWKBQXX6DBZZ&lid=LSTTVSGYWKBQXX6DBZZPSLL3S&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_20&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSGYWKBQXX6DBZZ.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e1322]:
            - img "Samsung Crystal 4K Vivid 125 cm (50 inch) Ultra HD (4K) LED Smart Tizen TV with 4K Upscaling | Purcolo..." [ref=e1326]
            - generic [ref=e1332]: Add to Compare
            - img [ref=e1335]
          - generic [ref=e1337]:
            - generic [ref=e1338]:
              - generic [ref=e1339]: Samsung Crystal 4K Vivid 125 cm (50 inch) Ultra HD (4K) LED Smart Tizen TV with 4K Upscaling | Purcolo...
              - generic [ref=e1340]:
                - generic [ref=e1342]:
                  - text: "4.3"
                  - img [ref=e1343]
                - generic [ref=e1345]: 26,560 Ratings & 1,686 Reviews
              - list [ref=e1347]:
                - listitem [ref=e1348]: • Ultra HD (4K) | LED
                - listitem [ref=e1349]: "• Model ID: UA50DUE70BKLXL"
                - listitem [ref=e1350]: "• Launch Year: 2024"
                - listitem [ref=e1351]: "• Total Sound Output: 20 W"
                - listitem [ref=e1352]: • 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)
            - generic [ref=e1353]:
              - generic [ref=e1355]:
                - generic [ref=e1356]: ₹37,990
                - generic [ref=e1357]: ₹57,000
                - generic [ref=e1358]: 33% off
              - img [ref=e1360]
              - generic [ref=e1363]: Only 2 left
              - generic [ref=e1365]:
                - generic [ref=e1366]: Upto
                - generic [ref=e1367]: ₹3,720
                - generic [ref=e1368]: Off on Exchange
        - 'link "Sansui 109 cm (43 inch) Full HD LED Smart Coolita TV with Dolby Audio, Surround Sound, Bexel-Less Disi... Add to Compare Sansui 109 cm (43 inch) Full HD LED Smart Coolita TV with Dolby Audio, Surround Sound, Bexel-Less Disi... 5 4 Ratings & 0 Reviews • Full HD | LED • Model ID: JSWG43CSFHD • Launch Year: 2025 • Total Sound Output: 20 W • 1 Year Warranty on the Product ₹20,790 ₹38,499 45% off Only few left Bank Offer" [ref=e1373] [cursor=pointer]':
          - /url: /sansui-109-cm-43-inch-full-hd-led-smart-coolita-tv-dolby-audio-surround-sound-bexel-less-disign-a-panel-tv/p/itm3bbc69d643ac9?pid=TVSHG2NNA9GJJFHQ&lid=LSTTVSHG2NNA9GJJFHQYVNB1A&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_21&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHG2NNA9GJJFHQ.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e1374]:
            - img "Sansui 109 cm (43 inch) Full HD LED Smart Coolita TV with Dolby Audio, Surround Sound, Bexel-Less Disi..." [ref=e1378]
            - generic [ref=e1384]: Add to Compare
            - img [ref=e1387]
          - generic [ref=e1389]:
            - generic [ref=e1390]:
              - generic [ref=e1391]: Sansui 109 cm (43 inch) Full HD LED Smart Coolita TV with Dolby Audio, Surround Sound, Bexel-Less Disi...
              - generic [ref=e1392]:
                - generic [ref=e1394]:
                  - text: "5"
                  - img [ref=e1395]
                - generic [ref=e1397]: 4 Ratings & 0 Reviews
              - list [ref=e1399]:
                - listitem [ref=e1400]: • Full HD | LED
                - listitem [ref=e1401]: "• Model ID: JSWG43CSFHD"
                - listitem [ref=e1402]: "• Launch Year: 2025"
                - listitem [ref=e1403]: "• Total Sound Output: 20 W"
                - listitem [ref=e1404]: • 1 Year Warranty on the Product
            - generic [ref=e1405]:
              - generic [ref=e1407]:
                - generic [ref=e1408]: ₹20,790
                - generic [ref=e1409]: ₹38,499
                - generic [ref=e1410]: 45% off
              - img [ref=e1412]
              - generic [ref=e1415]: Only few left
              - generic [ref=e1418]: Bank Offer
        - 'link "Vu GloQLED 189 cm (75 inch) QLED Ultra HD (4K) Smart Google TV Add to Compare Vu GloQLED 189 cm (75 inch) QLED Ultra HD (4K) Smart Google TV 4.4 22 Ratings & 5 Reviews • Ultra HD (4K) | QLED • Model ID: 75GLOQLED25 • Launch Year: 2025 • Total Sound Output: 36 W • 1 Year Manufaturer Warranty, In the 1st year of the warranty, panel, parts, and labor costs are covered. ₹58,499 ₹85,000 31% off Hot Deal Only 5 left" [ref=e1423] [cursor=pointer]':
          - /url: /vu-gloqled-189-cm-75-inch-qled-ultra-hd-4k-smart-google-tv/p/itm89790523db77a?pid=TVSHFCVTD8R9ECFN&lid=LSTTVSHFCVTD8R9ECFNBI4FUI&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_22&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHFCVTD8R9ECFN.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e1424]:
            - img "Vu GloQLED 189 cm (75 inch) QLED Ultra HD (4K) Smart Google TV" [ref=e1428]
            - generic [ref=e1434]: Add to Compare
            - img [ref=e1437]
          - generic [ref=e1439]:
            - generic [ref=e1440]:
              - generic [ref=e1441]: Vu GloQLED 189 cm (75 inch) QLED Ultra HD (4K) Smart Google TV
              - generic [ref=e1442]:
                - generic [ref=e1444]:
                  - text: "4.4"
                  - img [ref=e1445]
                - generic [ref=e1447]: 22 Ratings & 5 Reviews
              - list [ref=e1449]:
                - listitem [ref=e1450]: • Ultra HD (4K) | QLED
                - listitem [ref=e1451]: "• Model ID: 75GLOQLED25"
                - listitem [ref=e1452]: "• Launch Year: 2025"
                - listitem [ref=e1453]: "• Total Sound Output: 36 W"
                - listitem [ref=e1454]: • 1 Year Manufaturer Warranty, In the 1st year of the warranty, panel, parts, and labor costs are covered.
            - generic [ref=e1455]:
              - generic [ref=e1457]:
                - generic [ref=e1458]: ₹58,499
                - generic [ref=e1459]: ₹85,000
                - generic [ref=e1460]: 31% off
              - img [ref=e1462]
              - generic [ref=e1465]: Hot Deal
              - generic [ref=e1468]: Only 5 left
        - 'link "Vu Cinema 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV Add to Compare Vu Cinema 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV 4.2 4,492 Ratings & 724 Reviews • Ultra HD (4K) | LED • Model ID: 55CINEMA • Launch Year: 2024 • Total Sound Output: 50 W • 1 Year Warranty ₹29,999 ₹55,000 45% off Hot Deal Only few left" [ref=e1473] [cursor=pointer]':
          - /url: /vu-cinema-139-cm-55-inch-ultra-hd-4k-led-smart-webos-tv/p/itm085b98a4315e3?pid=TVSGZ5UJC6MZKSBY&lid=LSTTVSGZ5UJC6MZKSBYFINS3E&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_23&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSGZ5UJC6MZKSBY.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e1474]:
            - img "Vu Cinema 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV" [ref=e1478]
            - generic [ref=e1484]: Add to Compare
            - img [ref=e1487]
          - generic [ref=e1489]:
            - generic [ref=e1490]:
              - generic [ref=e1491]: Vu Cinema 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV
              - generic [ref=e1492]:
                - generic [ref=e1494]:
                  - text: "4.2"
                  - img [ref=e1495]
                - generic [ref=e1497]: 4,492 Ratings & 724 Reviews
              - list [ref=e1499]:
                - listitem [ref=e1500]: • Ultra HD (4K) | LED
                - listitem [ref=e1501]: "• Model ID: 55CINEMA"
                - listitem [ref=e1502]: "• Launch Year: 2024"
                - listitem [ref=e1503]: "• Total Sound Output: 50 W"
                - listitem [ref=e1504]: • 1 Year Warranty
            - generic [ref=e1505]:
              - generic [ref=e1507]:
                - generic [ref=e1508]: ₹29,999
                - generic [ref=e1509]: ₹55,000
                - generic [ref=e1510]: 45% off
              - generic [ref=e1513]: Hot Deal
              - generic [ref=e1516]: Only few left
        - 'link "VW OptimaX Series 80 cm (32 inch) QLED HD Ready Smart Android TV 2025 Edition Add to Compare VW OptimaX Series 80 cm (32 inch) QLED HD Ready Smart Android TV 2025 Edition 4 2,376 Ratings & 405 Reviews • HD Ready | QLED • Model ID: VW32AQ1 • Launch Year: 2025 • Total Sound Output: 20 W • 1 year warranty on product ₹8,797 ₹18,999 53% off Hot Deal Upto ₹3,720 Off on Exchange" [ref=e1521] [cursor=pointer]':
          - /url: /vw-optimax-series-80-cm-32-inch-qled-hd-ready-smart-android-tv-2025/p/itmea4b462871daf?pid=TVSHHQCRR3MRSCGW&lid=LSTTVSHHQCRR3MRSCGWGLCJ0Z&marketplace=FLIPKART&q=smart&store=ckf%2Fczl&srno=s_1_24&otracker=search&otracker1=search&fm=organic&iid=8a4b517a-9486-4382-a63a-b6d131a9d6e2.TVSHHQCRR3MRSCGW.SEARCH&ppt=hp&ppn=homepage&ssid=umupfyf7y80000001777366595537&qH=8c319f28d81d1527&ov_redirect=true
          - generic [ref=e1522]:
            - img "VW OptimaX Series 80 cm (32 inch) QLED HD Ready Smart Android TV 2025 Edition" [ref=e1526]
            - generic [ref=e1532]: Add to Compare
            - img [ref=e1535]
          - generic [ref=e1537]:
            - generic [ref=e1538]:
              - generic [ref=e1539]: VW OptimaX Series 80 cm (32 inch) QLED HD Ready Smart Android TV 2025 Edition
              - generic [ref=e1540]:
                - generic [ref=e1542]:
                  - text: "4"
                  - img [ref=e1543]
                - generic [ref=e1545]: 2,376 Ratings & 405 Reviews
              - list [ref=e1547]:
                - listitem [ref=e1548]: • HD Ready | QLED
                - listitem [ref=e1549]: "• Model ID: VW32AQ1"
                - listitem [ref=e1550]: "• Launch Year: 2025"
                - listitem [ref=e1551]: "• Total Sound Output: 20 W"
                - listitem [ref=e1552]: • 1 year warranty on product
            - generic [ref=e1553]:
              - generic [ref=e1555]:
                - generic [ref=e1556]: ₹8,797
                - generic [ref=e1557]: ₹18,999
                - generic [ref=e1558]: 53% off
              - img [ref=e1560]
              - generic [ref=e1563]: Hot Deal
              - generic [ref=e1565]:
                - generic [ref=e1566]: Upto
                - generic [ref=e1567]: ₹3,720
                - generic [ref=e1568]: Off on Exchange
        - generic [ref=e1571]:
          - generic [ref=e1572]: Page 1 of 40
          - navigation [ref=e1573]:
            - link "1" [ref=e1574] [cursor=pointer]:
              - /url: /search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=e1575] [cursor=pointer]:
              - /url: /search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=e1576] [cursor=pointer]:
              - /url: /search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=e1577] [cursor=pointer]:
              - /url: /search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=e1578] [cursor=pointer]:
              - /url: /search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
            - link "6" [ref=e1579] [cursor=pointer]:
              - /url: /search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "7" [ref=e1580] [cursor=pointer]:
              - /url: /search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=7
            - link "8" [ref=e1581] [cursor=pointer]:
              - /url: /search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=8
            - link "9" [ref=e1582] [cursor=pointer]:
              - /url: /search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=9
            - link "10" [ref=e1583] [cursor=pointer]:
              - /url: /search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=10
            - link "Next" [ref=e1584] [cursor=pointer]:
              - /url: /search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
        - generic [ref=e1586]:
          - text: Did you find what you were looking for?
          - generic [ref=e1587]:
            - generic [ref=e1588] [cursor=pointer]: "Yes"
            - generic [ref=e1589] [cursor=pointer]: "No"
    - generic [ref=e1591]:
      - generic [ref=e1592]: Reviews for Popular Televisions
      - generic [ref=e1593]:
        - generic [ref=e1594]:
          - generic [ref=e1596]:
            - img "VW Pro Series 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV 2025 Edition"
          - generic [ref=e1597]:
            - link "1. VW Pro Series 139 cm (55 in... 4.2 622 Ratings&133 Reviews ₹27,999 53% off" [ref=e1598] [cursor=pointer]:
              - /url: /vw-pro-series-139-cm-55-inch-qled-ultra-hd-4k-smart-google-tv-2025/p/itm8754b9b7e1fba?pid=TVSHHQCRVPZBNXEH&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=e1600]: 1. VW Pro Series 139 cm (55 in...
              - generic [ref=e1601]:
                - generic [ref=e1602]:
                  - text: "4.2"
                  - img [ref=e1603]
                - generic [ref=e1604]:
                  - text: 622 Ratings
                  - generic [ref=e1605]: "&133 Reviews"
              - generic [ref=e1607]:
                - generic [ref=e1608]: ₹27,999
                - generic [ref=e1609]: 53% off
            - list [ref=e1610]:
              - listitem [ref=e1611]: Ultra HD (4K) | QLED
              - listitem [ref=e1612]: "Model ID: VW55GQ1"
              - listitem [ref=e1613]: "Launch Year: 2025"
        - generic [ref=e1614]:
          - generic [ref=e1615]: Most Helpful Review
          - generic [ref=e1617]:
            - generic [ref=e1618]:
              - generic [ref=e1619]:
                - text: "5"
                - img [ref=e1620]
              - paragraph [ref=e1621]: Simply awesome
            - generic [ref=e1624]:
              - generic [ref=e1625]: I recently purchased a VW TV and I am very satisfied with the quality of the product. The picture clarity is excellent, sound is very good, and it is easy to...
              - generic [ref=e1626] [cursor=pointer]: Read full review
            - generic [ref=e1628]:
              - paragraph [ref=e1629]: Sharat Mankame
              - img [ref=e1630]
              - paragraph [ref=e1634]: Certified Buyer
              - paragraph [ref=e1635]: 3 months ago
        - generic [ref=e1636]:
          - generic [ref=e1637]: Recent Review
          - generic [ref=e1639]:
            - generic [ref=e1640]:
              - generic [ref=e1641]:
                - text: "1"
                - img [ref=e1642]
              - paragraph [ref=e1643]: Terrible product
            - generic [ref=e1647]: Not support DD Free dish antenna 📡 only RF support
            - generic [ref=e1649]:
              - paragraph [ref=e1650]: Chittranjan Bedia
              - img [ref=e1651]
              - paragraph [ref=e1655]: Certified Buyer
              - paragraph [ref=e1656]: Today
      - generic [ref=e1657]:
        - generic [ref=e1658]:
          - generic [ref=e1660]:
            - img "Vu Cinema 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV"
          - generic [ref=e1661]:
            - link "2. Vu Cinema 139 cm (55 inch) ... 4.2 4,492 Ratings&724 Reviews ₹29,999 45% off" [ref=e1662] [cursor=pointer]:
              - /url: /vu-cinema-139-cm-55-inch-ultra-hd-4k-led-smart-webos-tv/p/itm085b98a4315e3?pid=TVSGZ5UJC6MZKSBY&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=e1664]: 2. Vu Cinema 139 cm (55 inch) ...
              - generic [ref=e1665]:
                - generic [ref=e1666]:
                  - text: "4.2"
                  - img [ref=e1667]
                - generic [ref=e1668]:
                  - text: 4,492 Ratings
                  - generic [ref=e1669]: "&724 Reviews"
              - generic [ref=e1671]:
                - generic [ref=e1672]: ₹29,999
                - generic [ref=e1673]: 45% off
            - list [ref=e1674]:
              - listitem [ref=e1675]: Ultra HD (4K) | LED
              - listitem [ref=e1676]: "Model ID: 55CINEMA"
              - listitem [ref=e1677]: "Launch Year: 2024"
        - generic [ref=e1678]:
          - generic [ref=e1679]: Most Helpful Review
          - generic [ref=e1681]:
            - generic [ref=e1682]:
              - generic [ref=e1683]:
                - text: "3"
                - img [ref=e1684]
              - paragraph [ref=e1685]: Nice
            - generic [ref=e1689]: Product is ok ok, picture and sound quality is good but app and software opening timing is slow
            - generic [ref=e1691]:
              - paragraph [ref=e1692]: Firoz R Eligaar
              - img [ref=e1693]
              - paragraph [ref=e1697]: Certified Buyer
              - paragraph [ref=e1698]: Apr, 2023
        - generic [ref=e1699]:
          - generic [ref=e1700]: Recent Review
          - generic [ref=e1702]:
            - generic [ref=e1703]:
              - generic [ref=e1704]:
                - text: "5"
                - img [ref=e1705]
              - paragraph [ref=e1706]: Mind-blowing purchase
            - generic [ref=e1710]: Nice product at this price range 👌
            - generic [ref=e1712]:
              - paragraph [ref=e1713]: Lal Singh
              - img [ref=e1714]
              - paragraph [ref=e1718]: Certified Buyer
              - paragraph [ref=e1719]: 9 months ago
      - generic [ref=e1720]:
        - generic [ref=e1721]:
          - generic [ref=e1723]:
            - img "XIAOMI F Pro 138 cm (55 inch) QLED Ultra HD (4K) Smart Fire TV with 34W Box Speakers | Dolby Surround Sound| 32GB Storage | Filmmaker Mode| Alexa | Mi TV"
          - generic [ref=e1724]:
            - link "3. XIAOMI F Pro 138 cm (55 inc... 4 17,670 Ratings&1,031 Reviews ₹35,999 42% off" [ref=e1725] [cursor=pointer]:
              - /url: /xiaomi-f-pro-138-cm-55-inch-qled-ultra-hd-4k-smart-fire-tv-34w-box-speakers-dolby-surround-sound-32gb-storage-filmmaker-mode-alexa-mi/p/itm75a67e5a59554?pid=TVSHCZC46UZJB8RZ&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=e1727]: 3. XIAOMI F Pro 138 cm (55 inc...
              - generic [ref=e1728]:
                - generic [ref=e1729]:
                  - text: "4"
                  - img [ref=e1730]
                - generic [ref=e1731]:
                  - text: 17,670 Ratings
                  - generic [ref=e1732]: "&1,031 Reviews"
              - generic [ref=e1734]:
                - generic [ref=e1735]: ₹35,999
                - generic [ref=e1736]: 42% off
            - list [ref=e1737]:
              - listitem [ref=e1738]: Ultra HD (4K) | QLED
              - listitem [ref=e1739]: "Model ID: L55MB-FPIN"
              - listitem [ref=e1740]: "Launch Year: 2025"
        - generic [ref=e1741]:
          - generic [ref=e1742]: Most Helpful Review
          - generic [ref=e1744]:
            - generic [ref=e1745]:
              - generic [ref=e1746]:
                - text: "5"
                - img [ref=e1747]
              - paragraph [ref=e1748]: Brilliant
            - generic [ref=e1752]:
              - text: Picture Qulity awsome
              - text: Actul fire tv smooth performance
              - text: Sound Dolby very good
            - generic [ref=e1754]:
              - paragraph [ref=e1755]: nikhil chavan
              - img [ref=e1756]
              - paragraph [ref=e1760]: Certified Buyer
              - paragraph [ref=e1761]: 9 months ago
        - generic [ref=e1762]:
          - generic [ref=e1763]: Recent Review
          - generic [ref=e1765]:
            - generic [ref=e1766]:
              - generic [ref=e1767]:
                - text: "1"
                - img [ref=e1768]
              - paragraph [ref=e1769]: Useless product
            - generic [ref=e1773]: Worst ever dont buy on flipkart
            - generic [ref=e1775]:
              - paragraph [ref=e1776]: Aravindhan AR
              - img [ref=e1777]
              - paragraph [ref=e1781]: Certified Buyer
              - paragraph [ref=e1782]: Today
      - generic [ref=e1783]:
        - generic [ref=e1784]:
          - generic [ref=e1786]:
            - img "Infinix 140 cm (55 inch) QLED Ultra HD (4K) Smart Google TV"
          - generic [ref=e1787]:
            - link "4. Infinix 140 cm (55 inch) QL... 4 3,353 Ratings&302 Reviews ₹30,999 16% off" [ref=e1788] [cursor=pointer]:
              - /url: /infinix-140-cm-55-inch-qled-ultra-hd-4k-smart-google-tv/p/itmf5b7c5d1ce39a?pid=TVSH46HKNARSGJGY&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=e1790]: 4. Infinix 140 cm (55 inch) QL...
              - generic [ref=e1791]:
                - generic [ref=e1792]:
                  - text: "4"
                  - img [ref=e1793]
                - generic [ref=e1794]:
                  - text: 3,353 Ratings
                  - generic [ref=e1795]: "&302 Reviews"
              - generic [ref=e1797]:
                - generic [ref=e1798]: ₹30,999
                - generic [ref=e1799]: 16% off
            - list [ref=e1800]:
              - listitem [ref=e1801]: Ultra HD (4K) | QLED
              - listitem [ref=e1802]: "Model ID: 55GU1Q/55GU3Q"
              - listitem [ref=e1803]: "Launch Year: 2024"
        - generic [ref=e1804]:
          - generic [ref=e1805]: Most Helpful Review
          - generic [ref=e1807]:
            - generic [ref=e1808]:
              - generic [ref=e1809]:
                - text: "5"
                - img [ref=e1810]
              - paragraph [ref=e1811]: Brilliant
            - generic [ref=e1814]:
              - generic [ref=e1815]:
                - text: For the price .. This TV is awesome ..I don't know why anyone is complaining? .. for the price you won't get Google qled tv. ..
                - text: The picture quality is very ...
              - generic [ref=e1816] [cursor=pointer]: Read full review
            - generic [ref=e1818]:
              - paragraph [ref=e1819]: Avinash Avi
              - img [ref=e1820]
              - paragraph [ref=e1824]: Certified Buyer
              - paragraph [ref=e1825]: Oct, 2024
        - generic [ref=e1826]:
          - generic [ref=e1827]: Recent Review
          - generic [ref=e1829]:
            - generic [ref=e1830]:
              - generic [ref=e1831]:
                - text: "5"
                - img [ref=e1832]
              - paragraph [ref=e1833]: Awesome
            - generic [ref=e1837]:
              - text: Wonderful TV.
              - text: But installation of Flipkart is too bad.
            - generic [ref=e1839]:
              - paragraph [ref=e1840]: ARITRA KR Das
              - img [ref=e1841]
              - paragraph [ref=e1845]: Certified Buyer
              - paragraph [ref=e1846]: 8 days ago
      - generic [ref=e1847]:
        - generic [ref=e1848]:
          - generic [ref=e1850]:
            - img "Foxsky 127 cm (50 inch) Ultra HD (4K) Mini LED Smart WebOS TV 2026 Edition with 2.1CH Audio System Tuned by 40W, Native 144 Refresh Rate, Dolby Vision Atmos"
          - generic [ref=e1851]:
            - link "5. Foxsky 127 cm (50 inch) Ult... 4.3 72 Ratings&33 Reviews ₹25,999 56% off" [ref=e1852] [cursor=pointer]:
              - /url: /foxsky-127-cm-50-inch-ultra-hd-4k-mini-led-smart-webos-tv-2026-2-1ch-audio-system-tuned-40w-native-144-refresh-rate-dolby-vision-atmos/p/itm37fa28a524bd9?pid=TVSHJF6YUMDFFPHR&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=e1854]: 5. Foxsky 127 cm (50 inch) Ult...
              - generic [ref=e1855]:
                - generic [ref=e1856]:
                  - text: "4.3"
                  - img [ref=e1857]
                - generic [ref=e1858]:
                  - text: 72 Ratings
                  - generic [ref=e1859]: "&33 Reviews"
              - generic [ref=e1861]:
                - generic [ref=e1862]: ₹25,999
                - generic [ref=e1863]: 56% off
            - list [ref=e1864]:
              - listitem [ref=e1865]: Ultra HD (4K) | Mini LED
              - listitem [ref=e1866]: "Model ID: FS50MINILED"
              - listitem [ref=e1867]: "Launch Year: 2026"
        - generic [ref=e1868]:
          - generic [ref=e1869]: Most Helpful Review
          - generic [ref=e1871]:
            - generic [ref=e1872]:
              - generic [ref=e1873]:
                - text: "5"
                - img [ref=e1874]
              - paragraph [ref=e1875]: Brilliant
            - generic [ref=e1878]:
              - generic [ref=e1879]:
                - text: I've been using the TV foxsky for a week and I'm genuinely impressed.
                - text: This TV is total value for money deal
                - text: This TV comes with all the function you'd find i...
              - generic [ref=e1880] [cursor=pointer]: Read full review
            - generic [ref=e1882]:
              - paragraph [ref=e1883]: prabhu nath prasad
              - img [ref=e1884]
              - paragraph [ref=e1888]: Certified Buyer
              - paragraph [ref=e1889]: 14 days ago
        - generic [ref=e1890]:
          - generic [ref=e1891]: Recent Review
          - generic [ref=e1893]:
            - generic [ref=e1894]:
              - generic [ref=e1895]:
                - text: "4"
                - img [ref=e1896]
              - paragraph [ref=e1897]: Pretty good
            - generic [ref=e1901]: Sound could have been better clear and crisp
            - generic [ref=e1903]:
              - paragraph [ref=e1904]: Prince Et
              - img [ref=e1905]
              - paragraph [ref=e1909]: Certified Buyer
              - paragraph [ref=e1910]: 1 day ago
  - contentinfo [ref=e1911]:
    - generic [ref=e1913]:
      - generic [ref=e1914]:
        - generic [ref=e1915]:
          - generic [ref=e1916]: ABOUT
          - link "Contact Us" [ref=e1917] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=e1918] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=e1919] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=e1920] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=e1921] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=e1922] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=e1923]:
          - generic [ref=e1924]: GROUP COMPANIES
          - link "Myntra" [ref=e1925] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=e1926] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=e1927] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=e1928]:
          - generic [ref=e1929]: HELP
          - link "Payments" [ref=e1930] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=e1931] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=e1932] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=e1933] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=e1934]:
          - generic [ref=e1935]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=e1936] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=e1937] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=e1938] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=e1939] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=e1940] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=e1941] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=e1942] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=e1943] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=e1945]:
          - generic [ref=e1946]: "Mail Us:"
          - generic [ref=e1949]:
            - paragraph [ref=e1950]: Flipkart Internet Private Limited,
            - paragraph [ref=e1951]: Buildings Alyssa, Begonia &
            - paragraph [ref=e1952]: Clove Embassy Tech Village,
            - paragraph [ref=e1953]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=e1954]: Bengaluru, 560103,
            - paragraph [ref=e1955]: Karnataka, India
          - generic [ref=e1956]: Social
          - generic [ref=e1957]:
            - link [ref=e1959] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
              - img [ref=e1960]
            - link [ref=e1962] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
              - img [ref=e1963]
            - link [ref=e1965] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
              - img [ref=e1966]
            - link [ref=e1968] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
              - img [ref=e1969]
        - generic [ref=e1971]:
          - generic [ref=e1972]: "Registered Office Address:"
          - generic [ref=e1975]:
            - paragraph [ref=e1976]: Flipkart Internet Private Limited,
            - paragraph [ref=e1977]: Buildings Alyssa, Begonia &
            - paragraph [ref=e1978]: Clove Embassy Tech Village,
            - paragraph [ref=e1979]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=e1980]: Bengaluru, 560103,
            - paragraph [ref=e1981]: Karnataka, India
            - paragraph [ref=e1982]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=e1983]:
              - text: "Telephone:"
              - link "044-45614700" [ref=e1984] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=e1985] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=e1987]:
        - generic [ref=e1988]:
          - img [ref=e1989]
          - link "Become a Seller" [ref=e1990] [cursor=pointer]:
            - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=e1991]:
          - img [ref=e1992]
          - link "Advertise" [ref=e1993] [cursor=pointer]:
            - /url: https://brands.flipkart.com
        - generic [ref=e1994]:
          - img [ref=e1995]
          - link "Gift Cards" [ref=e1996] [cursor=pointer]:
            - /url: /the-gift-card-store?otracker=footer_navlinks
        - generic [ref=e1997]:
          - img [ref=e1998]
          - link "Help Center" [ref=e1999] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=e2000]: © 2007-2026 Flipkart.com
        - img [ref=e2001]
```

# Test source

```ts
  198 |     test('Multi Select option from dropdown', async ({ page }) => {
  199 |         const MulticountryDropdown: Locator = page.locator('#colors');
  200 |         await MulticountryDropdown.scrollIntoViewIfNeeded();
  201 | 
  202 |         // select option from the drop down (4 ways)
  203 | 
  204 |         // await page.locator('#colors').selectOption(['Red', 'Blue', 'Green']); // using visible text
  205 |         // await page.locator('#colors').selectOption(['red', 'green', 'white']); // using value attribute
  206 |         // await page.locator('#colors').selectOption([{ label: 'Red' },{ label: 'Green' },{ label: 'Yellow' }]); // using label
  207 |         // await page.locator('#colors').selectOption([{ index: 0 },{ index: 2 },{ index: 4 }]); // using index
  208 | 
  209 |         await MulticountryDropdown.selectOption(['Red', 'Blue', 'Green']); // using visible text
  210 |         await MulticountryDropdown.selectOption(['red', 'green', 'white']); // using value attribute
  211 |         await MulticountryDropdown.selectOption([{ label: 'Red' }, { label: 'Green' }, { label: 'Yellow' }]); // using label
  212 |         await MulticountryDropdown.selectOption([{ index: 0 }, { index: 2 }, { index: 4 }]); // using index
  213 | 
  214 | 
  215 |         // check number of options in the dropdown (count)
  216 | 
  217 |         const dropdownOptions: Locator = page.locator("//select[@id='colors']/option");
  218 |         await expect(dropdownOptions).toHaveCount(7);
  219 | 
  220 |         // check an option present in the dropdown
  221 | 
  222 |         const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
  223 |         console.log('Dropdown options:', optionsText);
  224 |         expect(optionsText).toContain('Green'); // Check if the array contains "Green"
  225 | 
  226 |         //Printing all options in dropdown 
  227 |         for (const option of optionsText) {
  228 |             console.log(option);
  229 |         }
  230 |     });
  231 | 
  232 |     test('Verify dropdown is sorted', async ({ page }) => {
  233 | 
  234 |         const dropDownOptions: Locator = page.locator('//select[@id="colors"]/option');
  235 |         console.log(await dropDownOptions.allTextContents());
  236 |         const optionsText1: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim());
  237 |         const originalList: string[] = optionsText1;
  238 |         const sortedList: string[] = optionsText1.sort();
  239 |         console.log("Original list:", originalList);
  240 |         console.log("Sorted list: ", sortedList);
  241 |         await page.waitForTimeout(5000);
  242 | 
  243 | 
  244 |         const dropDownOptions1: Locator = page.locator('//select[@id="animals"]/option');
  245 |         console.log(await dropDownOptions1.allTextContents());
  246 |         const optionsText2: string[] = (await dropDownOptions1.allTextContents()).map(text => text.trim());
  247 |         const originalList2: string[] = optionsText2;
  248 |         const sortedList2: string[] = optionsText2.sort();
  249 |         console.log("Original list:", originalList2);
  250 |         console.log("Sorted list: ", sortedList2);
  251 |         await page.waitForTimeout(5000);
  252 | 
  253 |     });
  254 | 
  255 |     test("Verify dropdown contains duplicates", async ({ page }) => {
  256 | 
  257 |         //const dropDownOptions: Locator = page.locator('//select[@id="colors"]/option');     // having duplicates
  258 |         const dropDownOptions: Locator = page.locator('//select[@id="animals"]/option');   // not having duplicates
  259 |         const optionsText: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim());
  260 |         const myset = new Set<string>(); // Set-duplicates not allowed
  261 |         const duplicates: string[] = []; // array duplicates allowed
  262 | 
  263 |         for (const text of optionsText) {
  264 |             if (myset.has(text)) {
  265 | 
  266 |                 duplicates.push(text);
  267 |             }
  268 |             else {
  269 |                 myset.add(text);
  270 |             }
  271 |         }
  272 |         //console.log("Duplicate options are:===>", duplicates);
  273 | 
  274 |         if (duplicates.length > 0) {
  275 |             console.log("Duplicate options found.", duplicates)
  276 |         }
  277 |         else {
  278 |             console.log("No duplicate options found..")
  279 |         }
  280 |         //expect(duplicates.length).toBe(0);
  281 |     });
  282 | 
  283 |     //await page.waitForTimeout(5000);
  284 | 
  285 |     //========================================================= Session-8 =========================================================
  286 | 
  287 |     test.only('AutoSuggest dropdown', async ({ page }) => {
  288 | 
  289 |     await page.goto('https://www.flipkart.com/');
  290 |     await page.locator('//span[@role="button"]').click();
  291 |     const searchBar: Locator = page.locator('//form[@class="lilxh_ header-form-search"]//input[@placeholder="Search for Products, Brands and More"]');
  292 |     await searchBar.fill('smart');
  293 |     await page.waitForLoadState('domcontentloaded');
  294 |     await page.keyboard.press('Enter');
  295 |     const searchbar2 : Locator = page.locator('//form[@class="rcHWnF header-form-search"]//input[@placeholder="Search for products, brands and more"]');
  296 |     await searchbar2.clear();
  297 |     await searchbar2.type('smart', { delay: 500 });
> 298 |     await expect(page.locator('//ul[contains(@class,"_1sFryS")]//li').first()).toBeVisible();
      |                                                                                ^ Error: expect(locator).toBeVisible() failed
  299 |     //await page.waitForTimeout(5000);
  300 |    
  301 |     // Get all suggest options
  302 |     const options: Locator = page.locator('//ul[@class="col-12-12 I01Bvi O1jfZ8"]/li');
  303 |     await page.waitForLoadState('domcontentloaded');
  304 |     const optionsCount: number = await options.count();
  305 |     console.log('Number of suggest options:', optionsCount);
  306 | 
  307 |     // Print all the suggest options
  308 |     for (let i = 0; i < optionsCount; i++) {
  309 |         const optionText: string | null = await options.nth(i).textContent();
  310 |         console.log(`Option ${i + 1}: ${optionText?.trim()}`);
  311 |     }
  312 | 
  313 |     await page.waitForTimeout(5000);
  314 | });
  315 | 
  316 | });
  317 | 
  318 | 
```
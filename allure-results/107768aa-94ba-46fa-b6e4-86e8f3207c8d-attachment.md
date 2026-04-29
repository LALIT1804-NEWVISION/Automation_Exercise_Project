# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practise.spec.ts >> Practise Tests >> AutoSuggest dropdown
- Location: tests\Practise.spec.ts:287:10

# Error details

```
Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
Call log:
  - waiting for locator('//form[@class="lilxh_ header-form-search"]')
    - locator resolved to <form method="GET" action="/search" class="lilxh_ header-form-search">…</form>
    - fill("smart")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link "Image Image" [ref=e37] [cursor=pointer]:
            - /url: /flights-travel-uhp-at-store?marketplace=travel
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - img [ref=e55]
            - generic [ref=e58]: Location not set
          - generic [ref=e60]:
            - generic [ref=e61]: Select delivery location
            - img [ref=e62]
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e84]:
            - generic [ref=e85]:
              - generic [ref=e86]:
                - link "Login" [ref=e87] [cursor=pointer]:
                  - /url: /account/login?ret=/
                  - img "Login" [ref=e88]
                  - generic [ref=e89]: Login
                - img "Chevron" [ref=e90]
              - list [ref=e91]:
                - link "New customer? Sign Up" [ref=e92] [cursor=pointer]:
                  - /url: /account/login?signup=true&ret=/
                  - generic [ref=e93]: New customer?
                  - generic [ref=e94]: Sign Up
                - link "My Profile My Profile" [ref=e95] [cursor=pointer]:
                  - /url: /account/?rd=0&link=home_account
                  - listitem [ref=e96]:
                    - generic [ref=e97]:
                      - img "My Profile" [ref=e98]
                      - generic [ref=e100]: My Profile
                - link "Flipkart Plus Zone Flipkart Plus Zone" [ref=e101] [cursor=pointer]:
                  - /url: /plus
                  - listitem [ref=e102]:
                    - generic [ref=e103]:
                      - img "Flipkart Plus Zone" [ref=e104]
                      - generic [ref=e106]: Flipkart Plus Zone
                - link "Orders Orders" [ref=e107] [cursor=pointer]:
                  - /url: /account/orders?link=home_orders
                  - listitem [ref=e108]:
                    - generic [ref=e109]:
                      - img "Orders" [ref=e110]
                      - generic [ref=e112]: Orders
                - link "Wishlist Wishlist" [ref=e113] [cursor=pointer]:
                  - /url: /wishlist?link=home_wishlist
                  - listitem [ref=e114]:
                    - generic [ref=e115]:
                      - img "Wishlist" [ref=e116]
                      - generic [ref=e118]: Wishlist
                - link "Become a Seller Become a Seller" [ref=e119] [cursor=pointer]:
                  - /url: https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect
                  - listitem [ref=e120]:
                    - generic [ref=e121]:
                      - img "Become a Seller" [ref=e122]
                      - generic [ref=e124]: Become a Seller
                - link "Rewards Rewards" [ref=e125] [cursor=pointer]:
                  - /url: /account/rewards?link=home_rewards
                  - listitem [ref=e126]:
                    - generic [ref=e127]:
                      - img "Rewards" [ref=e128]
                      - generic [ref=e130]: Rewards
                - link "Gift Cards Gift Cards" [ref=e131] [cursor=pointer]:
                  - /url: /the-gift-card-store?link=home_giftcard
                  - listitem [ref=e132]:
                    - generic [ref=e133]:
                      - img "Gift Cards" [ref=e134]
                      - generic [ref=e136]: Gift Cards
                - link "Notification Preferences Notification Preferences" [ref=e137] [cursor=pointer]:
                  - /url: /communication-preferences/push?t=all
                  - listitem [ref=e138]:
                    - generic [ref=e139]:
                      - img "Notification Preferences" [ref=e140]
                      - generic [ref=e142]: Notification Preferences
                - link "24x7 Customer Care 24x7 Customer Care" [ref=e143] [cursor=pointer]:
                  - /url: /helpcentre
                  - listitem [ref=e144]:
                    - generic [ref=e145]:
                      - img "24x7 Customer Care" [ref=e146]
                      - generic [ref=e148]: 24x7 Customer Care
                - link "Advertise Advertise" [ref=e149] [cursor=pointer]:
                  - /url: https://advertising.flipkart.com/?otracker=ch_vn_advertise_header
                  - listitem [ref=e150]:
                    - generic [ref=e151]:
                      - img "Advertise" [ref=e152]
                      - generic [ref=e154]: Advertise
                - link "Download App Download App" [ref=e155] [cursor=pointer]:
                  - /url: /mobile-apps?otracker=ch_vn_mobile_apps
                  - listitem [ref=e156]:
                    - generic [ref=e157]:
                      - img "Download App" [ref=e158]
                      - generic [ref=e160]: Download App
            - link "Login" [ref=e164] [cursor=pointer]:
              - /url: /account/login?ret=/
          - generic [ref=e169]:
            - link "More" [ref=e170] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e171]: More
            - img "Chevron" [ref=e172]
          - link "Cart Cart" [ref=e175] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e176]
            - generic [ref=e177]: Cart
      - generic [ref=e179]:
        - link "For You" [ref=e184] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - generic [ref=e186]:
            - img [ref=e189]
            - generic [ref=e190]: For You
        - link "Fashion" [ref=e195] [cursor=pointer]:
          - /url: /aw-base-new-inline-2025-at-store
          - generic [ref=e197]:
            - img [ref=e200]
            - generic [ref=e201]: Fashion
        - link "Mobiles" [ref=e206] [cursor=pointer]:
          - /url: /mobile-phone-ab-at-store
          - generic [ref=e208]:
            - img [ref=e211]
            - generic [ref=e212]: Mobiles
        - link "Beauty" [ref=e217] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
          - generic [ref=e219]:
            - img [ref=e222]
            - generic [ref=e223]: Beauty
        - link "Electronics" [ref=e228] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
          - generic [ref=e230]:
            - img [ref=e233]
            - generic [ref=e234]: Electronics
        - link "Home" [ref=e239] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
          - generic [ref=e241]:
            - img [ref=e244]
            - generic [ref=e245]: Home
        - link "Appliances" [ref=e250] [cursor=pointer]:
          - /url: /tv-and-appliances-inline-ab-at-store
          - generic [ref=e252]:
            - img [ref=e255]
            - generic [ref=e256]: Appliances
        - link "Toys, baby.." [ref=e261] [cursor=pointer]:
          - /url: /toys-baby-2025-new-at-store
          - generic [ref=e263]:
            - img [ref=e266]
            - generic [ref=e267]: Toys, baby..
        - link "Food & Health" [ref=e272] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
          - generic [ref=e274]:
            - img [ref=e277]
            - generic [ref=e278]: Food & Health
        - link "Auto Accessories" [ref=e283] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
          - generic [ref=e285]:
            - img [ref=e288]
            - generic [ref=e289]: Auto Accessories
        - link "2 Wheelers" [ref=e294] [cursor=pointer]:
          - /url: /twowheelers-at-store
          - generic [ref=e296]:
            - img [ref=e299]
            - generic [ref=e300]: 2 Wheelers
        - link "Sports & Fitness" [ref=e305] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
          - generic [ref=e307]:
            - img [ref=e310]
            - generic [ref=e311]: Sports & Fitness
        - link "Books & Media" [ref=e316] [cursor=pointer]:
          - /url: /booksmedia-2025-at-store
          - generic [ref=e318]:
            - img [ref=e321]
            - generic [ref=e322]: Books & Media
        - link "Furniture" [ref=e327] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
          - generic [ref=e329]:
            - img [ref=e332]
            - generic [ref=e333]: Furniture
    - generic [ref=e341]:
      - generic [ref=e356]:
        - link "Image" [ref=e363] [cursor=pointer]:
          - /url: /6bo/b5g/~cs-lfn4x2ifcb/pr?sid=6bo%2Cb5g&collection-tab-name=ASUS+ExpertBook+Drawer&sort=price_desc&PARAM=9181&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=UUJBV4S1HOXE_IAD&BU=Mixed
          - img "Image" [ref=e366]
        - link "Image" [ref=e373] [cursor=pointer]:
          - /url: /beauty-and-grooming/body-face-skin-care/body-and-face-care/pr?sid=g9b%2Cema%2C5la&p%5B%5D=facets.fulfilled_by%255B%255D%3DF-Assured&p%5B%5D=facets.discount_range_v1%255B%255D%3D30%2525%2Bor%2Bmore&PARAM=0945678&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=QMZS5W04H3Z8_IAD&BU=Mixed
          - img "Image" [ref=e376]
        - link "Image" [ref=e383] [cursor=pointer]:
          - /url: /health-care/health-supplements/pr?sid=hlc%2Cetg&p%5B%5D=facets.brand%255B%255D%3DRevital&sort=price_asc&param=43536&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ZQMWR2Y3X0AT_AD&BU=Mixed
          - img "Image" [ref=e386]
        - link "Image" [ref=e393] [cursor=pointer]:
          - /url: /samsung-galaxy-f70e-5g-spotlight-blue-128-gb/p/itm61c2a75f6c91f?pid=MOBHK55ANBSGUGCJ&marketplace=FLIPKART&lid=LSTMOBHK55ANBSGUGCJNVOP8K&param=65746&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=RUDP6VX2BWK3_AD&BU=Mixed
          - img "Image" [ref=e396]
        - link "Image" [ref=e403] [cursor=pointer]:
          - /url: /0pm/~cs-y8t3868q2j/pr?sid=0pm&collection-tab-name=SHPF3RD&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=AHC1ZNBCV24Y_AD&BU=Mixed
          - img "Image" [ref=e406]
        - link "Image" [ref=e413] [cursor=pointer]:
          - /url: /eat/~cs-sjdl6qiqph/pr?sid=eat&collection-tab-name=Happilo&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MCH3JKZMGYFW_AD&BU=Mixed
          - img "Image" [ref=e416]
        - link "Image" [ref=e423] [cursor=pointer]:
          - /url: /6bo/b5g/~cs-a3zrthkrxz/pr?sid=6bo%2Cb5g&collection-tab-name=Core+Ultra+PCs&sort=price_asc&param=65443&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=LCR3ZLC2J7FT_AD&BU=Mixed
          - img "Image" [ref=e426]
        - link "Image" [ref=e433] [cursor=pointer]:
          - /url: /upp/~cs-g2hfkjcv4p/pr?sid=upp&collection-tab-name=Bergner&param=34748&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=RP7L7MBGP8M1_AD&BU=Mixed
          - img "Image" [ref=e436]
        - link "Image" [ref=e443] [cursor=pointer]:
          - /url: /himalaya-baby-care-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=1FSPO5UZI5BR_AD&BU=Mixed
          - img "Image" [ref=e446]
        - link "Image" [ref=e453] [cursor=pointer]:
          - /url: /realme-p4-5g-steel-grey-128-gb/p/itmf836e6de035a5?pid=MOBHKHPYFZQKKMDM&param=46436&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=WTFUJCQ7MLFQ_AD&BU=Mixed
          - img "Image" [ref=e456]
      - generic [ref=e480]:
        - generic [ref=e481]:
          - link "Image" [ref=e486] [cursor=pointer]:
            - /url: /wwe/~cs-5ayd44t22e/pr?sid=wwe&collection-tab-name=sleepwell&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=N85MCK7MWIXM_AD&BU=Mixed
            - img "Image" [ref=e489]
          - link "Image" [ref=e494] [cursor=pointer]:
            - /url: /0pm/~cs-y8t3868q2j/pr?sid=0pm&collection-tab-name=SHPF3RD&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=93PIRD3Z6LV8_AD&BU=Mixed
            - img "Image" [ref=e497]
          - link "Image" [ref=e502] [cursor=pointer]:
            - /url: /eat/~cs-sjdl6qiqph/pr?sid=eat&collection-tab-name=Happilo&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=2ES3W2N4LOXW_AD&BU=Mixed
            - img "Image" [ref=e505]
          - link "Image" [ref=e510] [cursor=pointer]:
            - /url: /health-care/pr?sid=hlc&param=8339&BU=Mixed&p%5B%5D=facets.brand%255B%255D%3Dprohance&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=BBLISSN77R10_AD&BU=Mixed
            - img "Image" [ref=e513]
          - link "Image" [ref=e518] [cursor=pointer]:
            - /url: /toys/tricycles-and-rideons/pr?sid=tng%2C2cz&p%5B%5D=facets.brand%255B%255D%3DMiss%2B%2526%2BChief&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Q3VHIUU4R27C_AD&BU=Mixed
            - img "Image" [ref=e521]
          - link "Image" [ref=e526] [cursor=pointer]:
            - /url: /kyh/~cs-ml235rj6nr/pr?sid=kyh&collection-tab-geCriteria=defauname%3DPampers+Mainline&palt&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=G911E4VYHJXN_AD&BU=Mixed
            - img "Image" [ref=e529]
          - link "Image" [ref=e534] [cursor=pointer]:
            - /url: /6bo/b5g/~cs-qbwlrl9leh/pr?sid=6bo%2Cb5g&collection-tab-name=Chromebook&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=RLF26RG27FPZ_AD&BU=Mixed
            - img "Image" [ref=e537]
          - link "Image" [ref=e542] [cursor=pointer]:
            - /url: /food-nutrition/~gourmet-foods-/pr?sid=7jv&p%5B%5D=facets.brand%255B%255D%3DEat%2BAnytime&sort=recency_desc&p%5B%5D=facets.fulfilled_by%255B%255D%3DF-Assured&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=X0Y049JPMIG2_AD&BU=Mixed
            - img "Image" [ref=e545]
          - link "Image" [ref=e550] [cursor=pointer]:
            - /url: /rja/~cs-7d1evksapp/pr?sid=rja&collection-tab-name=Surf+Excel&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=RRICBMMDPBJI_AD&BU=Mixed
            - img "Image" [ref=e553]
          - link "Image" [ref=e558] [cursor=pointer]:
            - /url: /j9e/abm/c54/~cs-hfhl0drcm8/pr?sid=j9e%2Cabm%2Cc54&collection-tab-name=Daikin&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=EOKHHPNI91WV_AD&BU=Mixed
            - img "Image" [ref=e561]
        - button [ref=e562]:
          - img [ref=e563]
      - link "Image" [ref=e575] [cursor=pointer]:
        - /url: /sasa-lele-sale-store?param=00112&BU=Mixed
        - img "Image" [ref=e581]
      - generic [ref=e591]:
        - generic [ref=e595]:
          - img "Image" [ref=e598]
          - generic [ref=e600]:
            - generic [ref=e602]: Best Value Deals on Fashion
            - link [ref=e603] [cursor=pointer]:
              - /url: /offers-list/best-value-deals-on-fashion?screen=dynamic&pk=contentTags%3DGCD_THEME_8~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e606]
        - generic [ref=e610]:
          - link "Image Wallets Min. 70% Off" [ref=e615] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-9a61ff94f187ed7c75a76820712d7907/pr?sid=reh,cca,h76&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e625]
            - generic [ref=e628]:
              - generic [ref=e629]: Wallets
              - generic [ref=e630]: Min. 70% Off
          - link "Image Men’s Slippers & Flip Flops Min. 70% Off" [ref=e635] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp,cil,e1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e645]
            - generic [ref=e648]:
              - generic [ref=e649]: Men’s Slippers & Flip Flops
              - generic [ref=e650]: Min. 70% Off
          - link "Image Laptop Bags Min. 70% Off" [ref=e655] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-8d93bea16114739a4b106ee053a7846d/pr?sid=reh,4d7,x9i&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e665]
            - generic [ref=e668]:
              - generic [ref=e669]: Laptop Bags
              - generic [ref=e670]: Min. 70% Off
          - link "Image Men’s Casual Shoes Min. 70% Off" [ref=e675] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-28462d7669ffdf82990baaadbb6225e0/pr?sid=osp,cil,e1f&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e685]
            - generic [ref=e688]:
              - generic [ref=e689]: Men’s Casual Shoes
              - generic [ref=e690]: Min. 70% Off
      - generic [ref=e700]:
        - generic [ref=e704]:
          - img "Image" [ref=e707]
          - generic [ref=e709]:
            - generic [ref=e711]: Wedding Essentials
            - link [ref=e712] [cursor=pointer]:
              - /url: /offers-list/wedding-essentials?screen=dynamic&pk=contentTags%3DGCD_THEME_7~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e715]
        - generic [ref=e719]:
          - link "Image Face Wash Min. 50% Off" [ref=e724] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-5ab19791d4f627a2a36b60d5791384ca/pr?sid=g9b,ema,5la,jav&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e734]
            - generic [ref=e737]:
              - generic [ref=e738]: Face Wash
              - generic [ref=e739]: Min. 50% Off
          - link "Image Men's Ethnic Sets Special offer" [ref=e744] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-3db56c4aa495ece0fb8b928dbfb04846/pr?sid=clo,cfv,itg,pme&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e754]
            - generic [ref=e757]:
              - generic [ref=e758]: Men's Ethnic Sets
              - generic [ref=e759]: Special offer
          - link "Image Women's Sarees In Focus Now" [ref=e764] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-3bd49a8c44c9ba23a9d223ecf7511e45/pr?sid=clo,8on,zpd,9og&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e774]
            - generic [ref=e777]:
              - generic [ref=e778]: Women's Sarees
              - generic [ref=e779]: In Focus Now
          - link "Image Men's Trousers New Collection" [ref=e784] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-0dbd94dbd2468bc9e5e1b68e3f7c8dab/pr?sid=clo,vua,mle,lhk&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e794]
            - generic [ref=e797]:
              - generic [ref=e798]: Men's Trousers
              - generic [ref=e799]: New Collection
      - generic [ref=e809]:
        - generic [ref=e813]: Brands in Spotlight
        - generic [ref=e815]:
          - link "Image" [ref=e820] [cursor=pointer]:
            - /url: /reh/plk/~cs-s71gnv0jz0/pr?sid=reh%2Cplk&collection-tab-name=Kamiliant&param=34642&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=FMSVGTVYDZPY_AD&BU=Mixed
            - img "Image" [ref=e823]
          - link "Image" [ref=e828] [cursor=pointer]:
            - /url: /osp/~cs-cd5aw0bt8y/pr?sid=osp&collection-tab-name=Abroskids&param=46843&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=PV9VQKCJCIIE_AD&BU=Mixed
            - img "Image" [ref=e831]
          - link "Image" [ref=e836] [cursor=pointer]:
            - /url: /r18/~cs-tef0rbgji2/pr?sid=r18&collection-tab-name=Titan&param=23456&param=34563&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=BY429IEW4IMB_AD&BU=Mixed
            - img "Image" [ref=e839]
      - generic [ref=e851]:
        - link "Image" [ref=e856] [cursor=pointer]:
          - /url: /g9b/~cs-msvq5rzosa/pr?sid=g9b&collection-tab-name=Tresemme&sort=recency_desc&param=64748&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=HI5IWHY3JPGG_AD&BU=Mixed
          - img "Image" [ref=e859]
        - link "Image" [ref=e864] [cursor=pointer]:
          - /url: /g9b/~cs-f6vfwkojet/pr?sid=g9b&collection-tab-name=Colpal+Total&pageCriteria=default&sort=price_desc&param=83772&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=42M50R28UZSR_AD&BU=Mixed
          - img "Image" [ref=e867]
        - link "Image" [ref=e872] [cursor=pointer]:
          - /url: /g9b/~cs-y2dp76ia9r/pr?sid=g9b&collection-tab-name=Minara&param=83772&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=6HA22NIF3BYU_AD&BU=Mixed
          - img "Image" [ref=e875]
      - generic [ref=e885]:
        - generic [ref=e889]:
          - img "Image" [ref=e892]
          - generic [ref=e894]:
            - generic [ref=e896]: Best Gadgets & Appliances
            - link [ref=e897] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e900]
        - generic [ref=e904]:
          - link "Image True Wireless Min. 50% Off" [ref=e909] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6ef68bc8d283b86730515a8f2c87ff23/pr?sid=0pm,fcn,821,a7x,2si&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e919]
            - generic [ref=e922]:
              - generic [ref=e923]: True Wireless
              - generic [ref=e924]: Min. 50% Off
          - link "Image Smart Watches Min. 40% Off" [ref=e929] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-21e789349087c946d1b57cb0a6372ff1/pr?sid=ajy,buh&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e939]
            - generic [ref=e942]:
              - generic [ref=e943]: Smart Watches
              - generic [ref=e944]: Min. 40% Off
          - link "Image Trimmers Min. 50% Off" [ref=e949] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw,79s,by3&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e959]
            - generic [ref=e962]:
              - generic [ref=e963]: Trimmers
              - generic [ref=e964]: Min. 50% Off
          - link "Image Neckband Min. 50% Off" [ref=e969] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-24370be17271c4e43aff0a751ba9e160/pr?sid=0pm,fcn,821,a7x,2rv&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e979]
            - generic [ref=e982]:
              - generic [ref=e983]: Neckband
              - generic [ref=e984]: Min. 50% Off
      - generic [ref=e994]:
        - generic [ref=e998]:
          - img "Image" [ref=e1001]
          - generic [ref=e1003]:
            - generic [ref=e1005]: Home Decor & Furnishing
            - link [ref=e1006] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_2~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e1009]
        - generic [ref=e1013]:
          - link "Image Wall Clocks Top Picks" [ref=e1018] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-8b813c3829a3723aebaef347eba7112a/pr?sid=arb,kjw,bm1&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1028]
            - generic [ref=e1031]:
              - generic [ref=e1032]: Wall Clocks
              - generic [ref=e1033]: Top Picks
          - link "Image Mosquito Nets Min. 50% Off" [ref=e1038] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-c78b4ec8e16ed557c9a8a8da7fa4d261/pr?sid=jra,knw,i6y&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1048]
            - generic [ref=e1051]:
              - generic [ref=e1052]: Mosquito Nets
              - generic [ref=e1053]: Min. 50% Off
          - link "Image Key Holders Min. 50% Off" [ref=e1058] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-a808c7af79dac1cca11dce04f7de4698/pr?sid=arb,a77,8js&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1068]
            - generic [ref=e1071]:
              - generic [ref=e1072]: Key Holders
              - generic [ref=e1073]: Min. 50% Off
          - link "Image Torches Bestsellers" [ref=e1078] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-e6cc5a97a8b213ca2592ae9e7584657c/pr?sid=jhg,yqn,db9&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1088]
            - generic [ref=e1091]:
              - generic [ref=e1092]: Torches
              - generic [ref=e1093]: Bestsellers
      - generic [ref=e1103]:
        - generic [ref=e1107]: Featured Brands
        - generic [ref=e1110]:
          - generic [ref=e1111]:
            - link "Image" [ref=e1116] [cursor=pointer]:
              - /url: /food-products/pr?sid=eat&p%5B%5D=facets.fulfilled_by%255B%255D%3DF-Assured&p%5B%5D=facets.brand%255B%255D%3DPintola&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Q80VBSIHTC0K_AD&BU=Mixed
              - img "Image" [ref=e1119]
            - link "Image" [ref=e1124] [cursor=pointer]:
              - /url: /kyh/~cs-k81ej9nfqq/pr?sid=kyh&collection-tab-name=Cetaphil&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Q0TF7AWNV99Q_AD&BU=Mixed
              - img "Image" [ref=e1127]
            - link "Image" [ref=e1132] [cursor=pointer]:
              - /url: /kyh/~cs-bbj921argz/pr?sid=kyh&collection-tab-name=+Luvlap+&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=BEJPPZWPIX01_AD&BU=Mixed
              - img "Image" [ref=e1135]
            - link "Image" [ref=e1140] [cursor=pointer]:
              - /url: /hlc/~cs-euzcwilett/pr?sid=hlc&collection-tab-name=Oziva&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=J55M2KQXNNWH_AD&BU=Mixed
              - img "Image" [ref=e1143]
            - link "Image" [ref=e1148] [cursor=pointer]:
              - /url: /hlc/~cs-c0m0r4jynu/pr?sid=hlc&collection-tab-name=Kapiva&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=XXXB685NXOU8_AD&BU=Mixed
              - img "Image" [ref=e1151]
            - link "Image" [ref=e1156] [cursor=pointer]:
              - /url: /kyh/~cs-5mn21soaxb/pr?sid=kyh&collection-tab-name=Pampers+PC&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=7XS3V8P4JAAV_AD&BU=Mixed
              - img "Image" [ref=e1159]
            - link "Image" [ref=e1164] [cursor=pointer]:
              - /url: /hlc/~cs-2lbhqamq73/pr?sid=hlc&collection-tab-name=Complan&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=WY5XSXOPBWF8_AD&BU=Mixed
              - img "Image" [ref=e1167]
            - link "Image" [ref=e1172] [cursor=pointer]:
              - /url: /health-care/home-medicines/diabetes/pr?sid=hlc%2Cah4%2Cipc&p%5B%5D=facets.brand%255B%255D%3DKapiva&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=LU2A7VL6BENJ_AD&BU=Mixed
              - img "Image" [ref=e1175]
          - button [ref=e1176]:
            - img [ref=e1177]
      - generic [ref=e1182]: Hang on, loading content
      - contentinfo [ref=e1193]:
        - generic [ref=e1194]:
          - generic [ref=e1195]:
            - generic [ref=e1196]:
              - text: "Top Stories :"
              - link "Brand Directory" [ref=e1197] [cursor=pointer]:
                - /url: /brands
            - generic [ref=e1198]:
              - generic [ref=e1199]: "Most searched for on Flipkart:"
              - link "Upcoming Sasa Lele Sale" [ref=e1200] [cursor=pointer]:
                - /url: /sasa-lele-sale-store?otracker=undefined_footer
              - link "OPPO F33" [ref=e1201] [cursor=pointer]:
                - /url: /oppo-f33-5g-forest-green-128-gb/p/itm8c5d4a65602fd?otracker=undefined_footer
              - link "OPPO F33 Pro" [ref=e1202] [cursor=pointer]:
                - /url: /oppo-f33-pro-5g-misty-forest-256-gb/p/itme0e9af182d309?otracker=undefined_footer
              - link "Ai+ Nova 2 Ultra" [ref=e1203] [cursor=pointer]:
                - /url: /ai-nova-2-ultra-5g-black-128-gb/p/itm41a37f63787e9?otracker=undefined_footer
              - link "Ai+ Nova 2" [ref=e1204] [cursor=pointer]:
                - /url: /ai-nova-2-5g-green-64-gb/p/itm93c2428cc4241?otracker=undefined_footer
              - link "Ai+ Nova Flip" [ref=e1205] [cursor=pointer]:
                - /url: /ai-novaflip-5g-glacier-white-256-gb/p/itm6e6b94b54b0d9?otracker=undefined_footer
              - link "REDMI Note 15 SE" [ref=e1206] [cursor=pointer]:
                - /url: /redmi-note-15-se-5g-crimson-reserve-128-gb/p/itm4981d1c5313df?otracker=undefined_footer
              - link "iPhone 17e" [ref=e1207] [cursor=pointer]:
                - /url: /apple-iphone-17e-soft-pink-256-gb/p/itm124dbc903758f?otracker=undefined_footer
              - link "vivo V70 FE" [ref=e1208] [cursor=pointer]:
                - /url: /vivo-v70-fe-northern-lights-purple-256-gb/p/itmda852a903ef97?otracker=undefined_footer
              - link "REDMI 15A" [ref=e1209] [cursor=pointer]:
                - /url: /redmi-15a-awesome-blue-64-gb/p/itm28108343d0b60?otracker=undefined_footer
              - link "Samsung Galaxy A57" [ref=e1210] [cursor=pointer]:
                - /url: /samsung-galaxy-a57-5g-awesome-navy-256-gb/p/itm0a21d467664e9?otracker=undefined_footer
              - link "POCO C85x" [ref=e1211] [cursor=pointer]:
                - /url: /poco-c85x-emerald-green-64-gb/p/itm96bce2b7909b7?otracker=undefined_footer
              - link "POCO X8 Pro" [ref=e1212] [cursor=pointer]:
                - /url: /poco-x8-pro-black-256-gb/p/itmfbd9f2b2c7db9?otracker=undefined_footer
              - link "Lumio Projectors" [ref=e1213] [cursor=pointer]:
                - /url: /computers/computer-peripherals/projectors/lumio~brand/pr?sid=6bo,tia,1hx&otracker=undefined_footer
              - link "Bags for Men" [ref=e1214] [cursor=pointer]:
                - /url: /q/bags-for-men?otracker=undefined_footer
              - link "Laptop Store" [ref=e1215] [cursor=pointer]:
                - /url: /laptops-store?otracker=undefined_footer
              - link "Mixer Juicer Grinder" [ref=e1216] [cursor=pointer]:
                - /url: /mixerjuicergrinders/pr?sid=j9e,m38,7ek&otracker=undefined_footer
              - link "Men's Shoes" [ref=e1217] [cursor=pointer]:
                - /url: /mens-footwear/pr?sid=osp,cil&otracker=undefined_footer
              - link "Adidas Men's Shoes" [ref=e1218] [cursor=pointer]:
                - /url: /q/adidas-shoes?otracker=undefined_footer
              - link "Boat Earbuds" [ref=e1219] [cursor=pointer]:
                - /url: /q/boat-wireless-earphones?otracker=undefined_footer
              - link "Body Lotion" [ref=e1220] [cursor=pointer]:
                - /url: /q/body-lotion?otracker=undefined_footer
              - link "Campus Shoes" [ref=e1221] [cursor=pointer]:
                - /url: /q/campus-shoes?otracker=undefined_footer
              - link "Earphones" [ref=e1222] [cursor=pointer]:
                - /url: /audio-video/headset/earphones/pr?sid=0pm,fcn,821&otracker=undefined_footer
              - link "Red Tape Shoes" [ref=e1223] [cursor=pointer]:
                - /url: /q/red-tape-shoes?otracker=undefined_footer
              - link "Men's Slippers" [ref=e1224] [cursor=pointer]:
                - /url: /mens-footwear/slippers-flip-flops/pr?sid=osp,cil,e1r&otracker=undefined_footer
              - link "Helmets" [ref=e1225] [cursor=pointer]:
                - /url: /automotive-accessories/helmets-and-riding-gear/helmet-and-accessories/biker-helmets/pr?sid=1mt,ztf,iv8,tih&otracker=undefined_footer
              - link "Nike Shoes" [ref=e1226] [cursor=pointer]:
                - /url: /mens-footwear/nike~brand/pr?sid=osp,cil&otracker=undefined_footer
              - link "Puma Shoes" [ref=e1227] [cursor=pointer]:
                - /url: /mens-footwear/puma~brand/pr?sid=osp,cil&otracker=undefined_footer
              - link "Trimmers" [ref=e1228] [cursor=pointer]:
                - /url: /health-personal-care-appliances/personal-care-appliances/trimmers/pr?sid=zlw,79s,by3&otracker=undefined_footer
              - link "Vivo Phones" [ref=e1229] [cursor=pointer]:
                - /url: /mobiles/vivo~brand/pr?sid=tyy,4io&otracker=undefined_footer
              - link "Iqoo Phones" [ref=e1230] [cursor=pointer]:
                - /url: /mobiles/iqoo~brand/pr?sid=tyy,4io&otracker=undefined_footer
              - link "Smartwatches" [ref=e1231] [cursor=pointer]:
                - /url: /wearable-smart-devices/smart-watches/pr?sid=ajy,buh&otracker=undefined_footer
              - link "Biscuits" [ref=e1232] [cursor=pointer]:
                - /url: /food-nutrition/snacks-nibbles/cookies-biscuits/pr?sid=7jv,x9l,q9u&otracker=undefined_footer
              - link "Women's Footwear" [ref=e1233] [cursor=pointer]:
                - /url: /womens-footwear/pr?sid=osp,iko&otracker=undefined_footer
              - link "Trolley Bags" [ref=e1234] [cursor=pointer]:
                - /url: /q/trolley-bags?otracker=undefined_footer
              - link "Water Bottles" [ref=e1235] [cursor=pointer]:
                - /url: /kitchen-cookware-serveware/lunch-boxes-bottles-and-flasks/water-bottles/pr?sid=upp,f2k,0zz&otracker=undefined_footer
              - link "Men's Jackets" [ref=e1236] [cursor=pointer]:
                - /url: /mens-jackets/pr?sid=clo,qvw,z0g,jbm&otracker=undefined_footer
              - link "Anarkali Suits" [ref=e1237] [cursor=pointer]:
                - /url: /womens-ethnic-sets/anarkali-kurta-bottom-dupatta-set~type/pr?sid=clo,cfv,itg,tys&otracker=undefined_footer
              - link "Hoodies for Men" [ref=e1238] [cursor=pointer]:
                - /url: /q/mens-hoodies?otracker=undefined_footer
              - link "Men's Watches" [ref=e1239] [cursor=pointer]:
                - /url: /watches/wrist-watches/men~ideal-for/pr?sid=r18,f13&otracker=undefined_footer
              - link "Men's Winter Jackets" [ref=e1240] [cursor=pointer]:
                - /url: /q/mens-winter-jackets?otracker=undefined_footer
              - link "Women's Watches" [ref=e1241] [cursor=pointer]:
                - /url: /women-watches-at-store?otracker=undefined_footer
              - link "Teddy Bears" [ref=e1242] [cursor=pointer]:
                - /url: /toys/soft-toys/teddy-bears~type/pr?sid=mgl,1zt&otracker=undefined_footer
              - link "Premium Laptops" [ref=e1243] [cursor=pointer]:
                - /url: /q/premium-laptops?otracker=undefined_footer
              - link "Ray Ban Meta Smart Glasses" [ref=e1244] [cursor=pointer]:
                - /url: /wearable-smart-devices/smart-glasses/ray-ban-meta~brand/pr?sid=ajy,tcy&otracker=undefined_footer
              - link "Rings" [ref=e1245] [cursor=pointer]:
                - /url: /jewellery/rings/pr?sid=mcr,96v,az2&otracker=undefined_footer
              - link "Earrings" [ref=e1246] [cursor=pointer]:
                - /url: /earrings/pr?sid=mcr,96v,k9d&otracker=undefined_footer
              - link "Airpods" [ref=e1247] [cursor=pointer]:
                - /url: /q/airpods?otracker=undefined_footer
              - link "Urbn Power Banks" [ref=e1248] [cursor=pointer]:
                - /url: /mobile-accessories/power-banks/urbn~brand/pr?sid=tyy,4mr,fu6&otracker=undefined_footer
              - link "GoBoult Wireless Earphones" [ref=e1249] [cursor=pointer]:
                - /url: /audio-video/headset/earphones/wireless-earphones/true-wireless/goboult~brand/pr?sid=0pm,fcn,821,a7x,2si&otracker=undefined_footer
              - link "Bose Soundbars" [ref=e1250] [cursor=pointer]:
                - /url: /q/bose-soundbar?otracker=undefined_footer
              - link "Jewellery" [ref=e1251] [cursor=pointer]:
                - /url: /jewellery/pr?sid=mcr&otracker=undefined_footer
            - generic [ref=e1252]:
              - link "Mobiles" [ref=e1253] [cursor=pointer]:
                - /url: /mobiles
              - link "4G Mobiles" [ref=e1254] [cursor=pointer]:
                - /url: /4g-mobile-phones-store?otracker=undefined_footer
              - link "Nokia Phones" [ref=e1255] [cursor=pointer]:
                - /url: /nokia-mobile-phones-store?otracker=undefined_footer
              - link "Samsung Mobiles" [ref=e1256] [cursor=pointer]:
                - /url: /samsung-mobile-store?otracker=undefined_footer
              - link "Oppo Mobiles" [ref=e1257] [cursor=pointer]:
                - /url: /oppo-mobile-phones-store?otracker=undefined_footer
              - link "Apple Phones" [ref=e1258] [cursor=pointer]:
                - /url: /mobiles/apple~brand/pr?sid=tyy,4io&otracker=undefined_footer
              - link "Realme Mobiles" [ref=e1259] [cursor=pointer]:
                - /url: /mobiles/realme~brand/pr?sid=tyy,4io&otracker=undefined_footer
              - link "Nothing Phones" [ref=e1260] [cursor=pointer]:
                - /url: /mobiles/nothing~brand/pr?sid=tyy,4io&otracker=undefined_footer
              - link "OnePlus Mobiles" [ref=e1261] [cursor=pointer]:
                - /url: /mobiles/oneplus~brand/pr?sid=tyy,4io&otracker=undefined_footer
              - link "Blackberry Phones" [ref=e1262] [cursor=pointer]:
                - /url: /mobiles/blackberry~brand/pr?sid=tyy,4io&otracker=undefined_footer
              - link "POCO Mobiles" [ref=e1263] [cursor=pointer]:
                - /url: /mobiles/poco~brand/pr?sid=tyy,4io&otracker=undefined_footer
              - link "Feature Mobile Phones" [ref=e1264] [cursor=pointer]:
                - /url: /mobiles/feature-phones~type/pr?sid=tyy,4io&otracker=undefined_footer
              - link "Redmi Phones" [ref=e1265] [cursor=pointer]:
                - /url: /mobiles/mi~brand/pr?sid=tyy,4io&otracker=undefined_footer
              - link "Motorola Mobiles" [ref=e1266] [cursor=pointer]:
                - /url: /motorola-mobile-phones-store?otracker=undefined_footer
              - link "Mobile Phones Under 10000" [ref=e1267] [cursor=pointer]:
                - /url: /mobiles/~mobile-phones-under-rs10000/pr?sid=tyy,4io&otracker=undefined_footer
              - link "Mobile Phones Under 15000" [ref=e1268] [cursor=pointer]:
                - /url: /mobiles/~mobile-phones-under-rs15000/pr?sid=tyy,4io&otracker=undefined_footer
              - link "Mobile Phones Under 20000" [ref=e1269] [cursor=pointer]:
                - /url: /mobiles/~mobile-phones-under-rs20000/pr?sid=tyy,4io&otracker=undefined_footer
              - link "Mobile Phones Under 25000" [ref=e1270] [cursor=pointer]:
                - /url: /q/mobile-phones-under-25000?otracker=undefined_footer
              - link "256 GB Mobiles" [ref=e1271] [cursor=pointer]:
                - /url: /mobiles/~256-gb-mobiles/pr?sid=tyy,4io&otracker=undefined_footer
              - link "512 GB Mobiles" [ref=e1272] [cursor=pointer]:
                - /url: /mobiles/512-gb~capacity/pr?sid=tyy,4io&otracker=undefined_footer
              - link "5.5 Inch Mobiles" [ref=e1273] [cursor=pointer]:
                - /url: /mobiles/~5-5-inch-mobiles/pr?sid=tyy,4io&otracker=undefined_footer
            - generic [ref=e1274]:
              - link "Camera" [ref=e1275] [cursor=pointer]:
                - /url: /cameras
              - link "Akaso Action Camera" [ref=e1276] [cursor=pointer]:
                - /url: /cameras/akaso~brand/pr?sid=jek,p31&otracker=undefined_footer
              - link "Nikon Cameras" [ref=e1277] [cursor=pointer]:
                - /url: /cameras/nikon~brand/pr?sid=jek,p31&otracker=undefined_footer
              - link "Canon Cameras" [ref=e1278] [cursor=pointer]:
                - /url: /cameras/canon~brand/pr?sid=jek,p31&otracker=undefined_footer
              - link "Sony Cameras" [ref=e1279] [cursor=pointer]:
                - /url: /cameras/sony~brand/pr?sid=jek,p31&otracker=undefined_footer
              - link "Instant Cameras" [ref=e1280] [cursor=pointer]:
                - /url: /cameras/instant-cameras/pr?sid=jek,p31,ysu&otracker=undefined_footer
              - link "DSLR Mirrorless Cameras" [ref=e1281] [cursor=pointer]:
                - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&otracker=undefined_footer
              - link "GoPro Cameras" [ref=e1282] [cursor=pointer]:
                - /url: /cameras/gopro~brand/pr?sid=jek,p31&otracker=undefined_footer
              - link "Insta360 Cameras" [ref=e1283] [cursor=pointer]:
                - /url: /cameras/insta360~brand/pr?sid=jek,p31&otracker=undefined_footer
              - link "Drones" [ref=e1284] [cursor=pointer]:
                - /url: /cameras/drones/pr?sid=jek,p31,jnp&otracker=undefined_footer
              - link "Sports Action Cameras" [ref=e1285] [cursor=pointer]:
                - /url: /cameras/sports-action/pr?sid=jek,p31,s3q&otracker=undefined_footer
            - generic [ref=e1286]:
              - link "Laptops" [ref=e1287] [cursor=pointer]:
                - /url: /brands/laptops?sid=6bo,b5g
              - link "Apple Laptops" [ref=e1288] [cursor=pointer]:
                - /url: /laptops/apple~brand/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "Acer Laptops" [ref=e1289] [cursor=pointer]:
                - /url: /laptops/acer~brand/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "Lenovo Laptops" [ref=e1290] [cursor=pointer]:
                - /url: /laptops/lenovo~brand/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "Gaming Laptops" [ref=e1291] [cursor=pointer]:
                - /url: /laptops/gaming-laptop~type/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "Dell Laptops" [ref=e1292] [cursor=pointer]:
                - /url: /laptops/dell~brand/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "Asus Laptops" [ref=e1293] [cursor=pointer]:
                - /url: /laptops/asus~brand/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "HP Laptops" [ref=e1294] [cursor=pointer]:
                - /url: /laptops/hp~brand/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "Samsung Laptops" [ref=e1295] [cursor=pointer]:
                - /url: /laptops/samsung~brand/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "Laptops Under 50000" [ref=e1296] [cursor=pointer]:
                - /url: /laptops/~laptops-under-rs50000/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "Laptops Under 40000" [ref=e1297] [cursor=pointer]:
                - /url: /laptops/~laptops-under-rs40000/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "Laptops Under 30000" [ref=e1298] [cursor=pointer]:
                - /url: /laptops/~laptops-under-rs30000/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "i5 Laptops" [ref=e1299] [cursor=pointer]:
                - /url: /laptops/intel-core-i5~processor/pr?sid=6bo,b5g&otracker=undefined_footer
              - link "i7 Laptops" [ref=e1300] [cursor=pointer]:
                - /url: /laptops/core-i7~processor/pr?sid=6bo,b5g&otracker=undefined_footer
            - generic [ref=e1301]:
              - link "TVs" [ref=e1302] [cursor=pointer]:
                - /url: /televisions
              - link "LG TVs" [ref=e1303] [cursor=pointer]:
                - /url: /televisions/lg~brand/pr?sid=ckf,czl&otracker=undefined_footer
              - link "Sony TVs" [ref=e1304] [cursor=pointer]:
                - /url: /televisions/sony~brand/pr?sid=ckf,czl&otracker=undefined_footer
              - link "Samsung TVs" [ref=e1305] [cursor=pointer]:
                - /url: /televisions/samsung~brand/pr?sid=ckf,czl&otracker=undefined_footer
              - link "Mi TVs" [ref=e1306] [cursor=pointer]:
                - /url: /televisions/mi~brand/pr?sid=ckf,czl&otracker=undefined_footer
              - link "LED TVs" [ref=e1307] [cursor=pointer]:
                - /url: /televisions/led~screen-type/pr?sid=ckf,czl&otracker=undefined_footer
              - link "OLED TVs" [ref=e1308] [cursor=pointer]:
                - /url: /televisions/~oled-tvs/pr?sid=ckf,czl&otracker=undefined_footer
              - link "Smart TVs" [ref=e1309] [cursor=pointer]:
                - /url: /televisions/~smart-tvs-/pr?sid=ckf,czl&otracker=undefined_footer
              - link "Android TVs" [ref=e1310] [cursor=pointer]:
                - /url: /televisions/~android-tvs/pr?sid=ckf,czl&otracker=undefined_footer
              - link "4K TVs" [ref=e1311] [cursor=pointer]:
                - /url: /home-entertainment/televisions/ultra-hd-4k-~resolution/pr?sid=ckf,czl&otracker=undefined_footer
              - link "8K TVs" [ref=e1312] [cursor=pointer]:
                - /url: /televisions/~8k-tv/pr?sid=ckf,czl&otracker=undefined_footer
              - link "LED TVs Under 15000" [ref=e1313] [cursor=pointer]:
                - /url: /televisions/~best-led-tv-under-rs-15000/pr?sid=ckf,czl&otracker=undefined_footer
              - link "Best TV Brands" [ref=e1314] [cursor=pointer]:
                - /url: /televisions/~best-tv-brands/pr?sid=ckf,czl&otracker=undefined_footer
            - generic [ref=e1315]:
              - generic [ref=e1316]: "Large Appliances:"
              - link "Air Conditioners" [ref=e1317] [cursor=pointer]:
                - /url: /air-conditioners/pr?sid=j9e,abm,c54&otracker=undefined_footer
              - link "Air Coolers" [ref=e1318] [cursor=pointer]:
                - /url: /air-coolers/pr?sid=j9e,abm,52j&otracker=undefined_footer
              - link "Microwave Ovens" [ref=e1319] [cursor=pointer]:
                - /url: /microwave-ovens/pr?sid=j9e,m38,o49&otracker=undefined_footer
              - link "Air Fryers" [ref=e1320] [cursor=pointer]:
                - /url: /air-fryers/pr?sid=j9e,m38,j1e&otracker=undefined_footer
              - link "Refrigerators" [ref=e1321] [cursor=pointer]:
                - /url: /refrigerators/pr?sid=j9e,abm,hzg&otracker=undefined_footer
              - link "Washing Machines" [ref=e1322] [cursor=pointer]:
                - /url: /washing-machines/pr?sid=j9e,abm,8qx&otracker=undefined_footer
              - link "Water Purifiers" [ref=e1323] [cursor=pointer]:
                - /url: /water-purifiers/pr?sid=j9e,abm,i45&otracker=undefined_footer
              - link "Induction Stove" [ref=e1324] [cursor=pointer]:
                - /url: /induction-cooktops/pr?sid=j9e,m38,575&otracker=undefined_footer
              - link "Water Geyser" [ref=e1325] [cursor=pointer]:
                - /url: /water-geysers/pr?sid=j9e,abm,bfm&otracker=undefined_footer
              - link "Room Heaters" [ref=e1326] [cursor=pointer]:
                - /url: /room-heaters/pr?sid=j9e,abm,xie&otracker=undefined_footer
              - link "1.5 Ton ACs" [ref=e1327] [cursor=pointer]:
                - /url: /home-kitchen/home-appliances/air-conditioners/1.5-ton~capacity/pr?sid=j9e,abm,c54&otracker=undefined_footer
              - link "Dish Washers" [ref=e1328] [cursor=pointer]:
                - /url: /dish-washers/pr?sid=j9e,m38,58n&otracker=undefined_footer
              - link "Electric Cookers" [ref=e1329] [cursor=pointer]:
                - /url: /electric-cookers/pr?sid=j9e,m38,9m9&otracker=undefined_footer
            - generic [ref=e1330]:
              - link "Clothing" [ref=e1331] [cursor=pointer]:
                - /url: /clothing
              - link "Sarees" [ref=e1332] [cursor=pointer]:
                - /url: /sarees-store?otracker=undefined_footer
              - link "Lehengas" [ref=e1333] [cursor=pointer]:
                - /url: /lehenga-choli-at-store?otracker=undefined_footer
              - link "Kurtas/Kurtis" [ref=e1334] [cursor=pointer]:
                - /url: /womens-kurtas-kurtis/pr?sid=clo,cfv,cib,rkt&otracker=undefined_footer
              - link "Ethnic Sets" [ref=e1335] [cursor=pointer]:
                - /url: /womens-ethnic-sets/pr?sid=clo,cfv,itg,tys&otracker=undefined_footer
              - link "Women's Tops" [ref=e1336] [cursor=pointer]:
                - /url: /womens-tops/pr?sid=clo,ash,ohw,36j&otracker=undefined_footer
              - link "Women's Night Suits" [ref=e1337] [cursor=pointer]:
                - /url: /womens-night-suits/pr?sid=clo,1hc,5d2,cny&otracker=undefined_footer
              - link "Women's Shirts" [ref=e1338] [cursor=pointer]:
                - /url: /womens-shirts/pr?sid=clo,ash,axc,vop&otracker=undefined_footer
              - link "Women's T-shirts" [ref=e1339] [cursor=pointer]:
                - /url: /womens-tshirts/pr?sid=clo,ash,ank,loi&otracker=undefined_footer
              - link "Women's Jeans" [ref=e1340] [cursor=pointer]:
                - /url: /womens-jeans/pr?sid=clo,vua,k58,4hp&otracker=undefined_footer
              - link "Gowns" [ref=e1341] [cursor=pointer]:
                - /url: /womens-gowns/pr?sid=clo,odx,od7,0xx&otracker=undefined_footer
              - link "Women's Trousers" [ref=e1342] [cursor=pointer]:
                - /url: /womens-trousers/pr?sid=clo,vua,mle,8ie&otracker=undefined_footer
              - link "Women's Sweaters" [ref=e1343] [cursor=pointer]:
                - /url: /womens-sweaters/pr?sid=clo,qvw,vkb,hbp&otracker=undefined_footer
              - link "Women's Hoodies" [ref=e1344] [cursor=pointer]:
                - /url: /q/hoodies-for-women?otracker=undefined_footer
              - link "Women's Jackets" [ref=e1345] [cursor=pointer]:
                - /url: /womens-jackets/pr?sid=clo,qvw,z0g,rwo&otracker=undefined_footer
              - link "Men's Shirts" [ref=e1346] [cursor=pointer]:
                - /url: /mens-shirt-at-store?otracker=undefined_footer
              - link "Casual Shirts" [ref=e1347] [cursor=pointer]:
                - /url: /mens-casual-shirts/pr?sid=clo,ash,axc,mmk,kp7&otracker=undefined_footer
              - link "Formal Shirts" [ref=e1348] [cursor=pointer]:
                - /url: /mens-formal-shirts/pr?sid=clo,ash,axc,mmk,bk1&otracker=undefined_footer
              - link "Men's T-shirts" [ref=e1349] [cursor=pointer]:
                - /url: /mens-t-shirt-at-store?otracker=undefined_footer
              - link "Men's Jeans" [ref=e1350] [cursor=pointer]:
                - /url: /mens-jeans-at-store?otracker=undefined_footer
              - link "Men's Trousers" [ref=e1351] [cursor=pointer]:
                - /url: /mens-trousers-at-store?otracker=undefined_footer
              - link "Men's Track pants" [ref=e1352] [cursor=pointer]:
                - /url: /mens-track-pants/pr?sid=clo,vua,jlk,6ql&otracker=undefined_footer
              - link "Blazers" [ref=e1353] [cursor=pointer]:
                - /url: /blazers/pr?sid=clo,upk,fj9,qd3&otracker=undefined_footer
              - link "Men's Sweatshirts" [ref=e1354] [cursor=pointer]:
                - /url: /mens-sweatshirts/pr?sid=clo,qvw,64a,vui&otracker=undefined_footer
              - link "Men's Sweaters" [ref=e1355] [cursor=pointer]:
                - /url: /mens-sweaters/pr?sid=clo,qvw,vkb,ieq&otracker=undefined_footer
              - link "Men's Kurtas" [ref=e1356] [cursor=pointer]:
                - /url: /mens-kurtas-at-store?otracker=undefined_footer
            - generic [ref=e1357]:
              - generic [ref=e1358]: "Footwear:"
              - link "Footwear" [ref=e1359] [cursor=pointer]:
                - /url: /footwear/pr?sid=osp&otracker=undefined_footer
              - link "Kids Footwear" [ref=e1360] [cursor=pointer]:
                - /url: /footwear/kids-infant-footwear/pr?sid=osp,mba&otracker=undefined_footer
              - link "Men's Formal Shoes" [ref=e1361] [cursor=pointer]:
                - /url: /mens-footwear/formal-shoes/pr?sid=osp,cil,ssb&otracker=undefined_footer
              - link "Men's Casual Shoes" [ref=e1362] [cursor=pointer]:
                - /url: /mens-footwear/casual-shoes/pr?sid=osp,cil,e1f&otracker=undefined_footer
              - link "Men's Sneakers" [ref=e1363] [cursor=pointer]:
                - /url: /mens-footwear/casual-shoes/sneakers~type/pr?sid=osp,cil,e1f&otracker=undefined_footer
              - link "Sports Shoes" [ref=e1364] [cursor=pointer]:
                - /url: /mens-footwear/sports-shoes/pr?sid=osp,cil,1cu&otracker=undefined_footer
              - link "Women's Sandals" [ref=e1365] [cursor=pointer]:
                - /url: /womens-footwear/~womens-sandals/pr?sid=osp,iko&otracker=undefined_footer
              - link "Women's Slippers & Flip Flops" [ref=e1366] [cursor=pointer]:
                - /url: /womens-footwear/womens-slippers-flip-flops/pr?sid=osp,iko,iz7&otracker=undefined_footer
              - link "Heels" [ref=e1367] [cursor=pointer]:
                - /url: /womens-footwear/womens-heels/pr?sid=osp,iko,6q1&otracker=undefined_footer
              - link "Women's Sneakers" [ref=e1368] [cursor=pointer]:
                - /url: /womens-footwear/casual-shoes/sneakers/pr?sid=osp,iko,sx7,o2k&otracker=undefined_footer
              - link "Women's Sports Shoes" [ref=e1369] [cursor=pointer]:
                - /url: /womens-footwear/womens-sports-shoes/pr?sid=osp,iko,d20&otracker=undefined_footer
              - link "Boys Shoes" [ref=e1370] [cursor=pointer]:
                - /url: /footwear/kids-infant-footwear/boys-footwear/pr?sid=osp,mba,o3t&otracker=undefined_footer
              - link "Girls Shoes" [ref=e1371] [cursor=pointer]:
                - /url: /footwear/kids-infant-footwear/girls-footwear/pr?sid=osp,mba,erx&otracker=undefined_footer
              - link "Skechers Shoes" [ref=e1372] [cursor=pointer]:
                - /url: /mens-footwear/skechers~brand/pr?sid=osp,cil&otracker=undefined_footer
              - link "Crocs" [ref=e1373] [cursor=pointer]:
                - /url: /mens-footwear/crocs~brand/pr?sid=osp,cil&otracker=undefined_footer
            - generic [ref=e1374]:
              - link "Groceries" [ref=e1375] [cursor=pointer]:
                - /url: /grocery-supermart-store?marketplace=GROCERY
              - link "Staples" [ref=e1376] [cursor=pointer]:
                - /url: /grocery/staples/pr?sid=73z,bpe&marketplace=GROCERY&otracker=undefined_footer
              - link "Snacks & Beverages" [ref=e1377] [cursor=pointer]:
                - /url: /grocery/snacks-beverages/pr?sid=73z,ujs&marketplace=GROCERY&otracker=undefined_footer
              - link "Packaged Foods" [ref=e1378] [cursor=pointer]:
                - /url: /grocery/packaged-food/pr?sid=73z,u0u&marketplace=GROCERY&otracker=undefined_footer
              - link "Household Care" [ref=e1379] [cursor=pointer]:
                - /url: /grocery/household-care/pr?sid=73z,cwl&marketplace=GROCERY&otracker=undefined_footer
              - link "Personal & Baby Care" [ref=e1380] [cursor=pointer]:
                - /url: /grocery/personal-baby-care/pr?sid=73z,njl&marketplace=GROCERY&otracker=undefined_footer
              - link "Masalas & Spices" [ref=e1381] [cursor=pointer]:
                - /url: /grocery/staples/masalas-spices/pr?sid=73z,bpe,a6m&marketplace=GROCERY&otracker=undefined_footer
              - link "Dals & Pulses" [ref=e1382] [cursor=pointer]:
                - /url: /grocery/staples/dals-pulses/pr?sid=73z,bpe,3uv&marketplace=GROCERY&otracker=undefined_footer
              - link "Ghee & Oils" [ref=e1383] [cursor=pointer]:
                - /url: /grocery/staples/ghee-oils/pr?sid=73z,bpe,4wu&marketplace=GROCERY&otracker=undefined_footer
              - link "Dry Fruits, Nuts & Seeds" [ref=e1384] [cursor=pointer]:
                - /url: /grocery/staples/dry-fruits-nuts-seeds/pr?sid=73z,bpe,dtp&marketplace=GROCERY&otracker=undefined_footer
              - link "Chips & Namkeens" [ref=e1385] [cursor=pointer]:
                - /url: /grocery/snacks-beverages/chipsnamkeen-snacks/chips/pr?sid=73z,ujs,dd9,m0l&marketplace=GROCERY&otracker=undefined_footer
              - link "Cookies" [ref=e1386] [cursor=pointer]:
                - /url: /grocery/snacks-beverages/biscuits/cookies/pr?sid=73z,ujs,eb9,7j9&marketplace=GROCERY&otracker=undefined_footer
              - link "Noodles & Pasts" [ref=e1387] [cursor=pointer]:
                - /url: /grocery/packaged-food/noodles-pasta/pr?sid=73z,u0u,ltz&marketplace=GROCERY&otracker=undefined_footer
              - link "Soft Drinks" [ref=e1388] [cursor=pointer]:
                - /url: /grocery/snacks-beverages/soft-drinks/pr?sid=73z,ujs,dfw&marketplace=GROCERY&otracker=undefined_footer
              - link "Chocolates & Sweets" [ref=e1389] [cursor=pointer]:
                - /url: /grocery/packaged-food/chocolates-sweets/pr?sid=73z,u0u,7o6&marketplace=GROCERY&otracker=undefined_footer
              - link "Repellants & Fresheners" [ref=e1390] [cursor=pointer]:
                - /url: /grocery/household-care/repellants-fresheners/pr?sid=73z,cwl,qz9&marketplace=GROCERY&otracker=undefined_footer
              - link "Laundry Detergents" [ref=e1391] [cursor=pointer]:
                - /url: /grocery/household-care/detergents-laundry/pr?sid=73z,cwl,2z2&marketplace=GROCERY&otracker=undefined_footer
            - generic [ref=e1392]:
              - link "Best Selling on Flipkart" [ref=e1393] [cursor=pointer]:
                - /url: /
              - link "Google Pixel 10a" [ref=e1394] [cursor=pointer]:
                - /url: /google-pixel-10a-lavender-256-gb/p/itmba3073a0f391e?otracker=undefined_footer
              - link "Infinix Note Edge" [ref=e1395] [cursor=pointer]:
                - /url: /infinix-note-edge-silk-green-128-gb/p/itmab2876405a1ab?otracker=undefined_footer
              - link "Motorola Signature" [ref=e1396] [cursor=pointer]:
                - /url: /motorola-signature-pantone-martini-olive-256-gb/p/itm945fffeb4a94c?otracker=undefined_footer
              - link "Oppo K14x 5G" [ref=e1397] [cursor=pointer]:
                - /url: /oppo-k14x-5g-prism-violet-128-gb/p/itmdcac5ae642971?otracker=undefined_footer
              - link "Oppo Reno 15 Pro" [ref=e1398] [cursor=pointer]:
                - /url: /oppo-reno15-pro-5g-cocoa-brown-256-gb/p/itm157c5e40707f0?otracker=undefined_footer
              - link "Vivo V70" [ref=e1399] [cursor=pointer]:
                - /url: /vivo-v70-passion-red-256-gb/p/itmecfa7a31699de?otracker=undefined_footer
              - link "Chocolate Horlicks" [ref=e1400] [cursor=pointer]:
                - /url: /horlicks-chocolate-delight-flavor/p/itm26d535f9a746b?otracker=undefined_footer
              - link "Minimalist Face Cleanser" [ref=e1401] [cursor=pointer]:
                - /url: /minimalist-2-salicylic-acid-oily-skin-sulphate-free-anti-face-cleanser-lha-zinc-acne-pimples-wash/p/itmf97a9b84f640b?otracker=undefined_footer
              - link "Garnier Vitamin C Face Serum" [ref=e1402] [cursor=pointer]:
                - /url: /garnier-vitamin-c-face-serum-skin-brightening-2-niacinamide-0-5-bha/p/itm4bc32379c2172?otracker=undefined_footer
              - link "Motorola LED Smart Google TV" [ref=e1403] [cursor=pointer]:
                - /url: /motorola-140-cm-55-inch-ultra-hd-4k-mini-led-smart-google-tv-dolby-vision-atmos/p/itm5f5962c05c65e?otracker=undefined_footer
              - link "Simple Face Wash (Pack of 2)" [ref=e1404] [cursor=pointer]:
                - /url: /simple-kind-skin-refreshing-facial-wash-pack-2-face/p/itm8756d172914ec?&otracker=undefined_footer
              - link "Mamaearth Anti Hair Fall Shampoo" [ref=e1405] [cursor=pointer]:
                - /url: /mamaearth-anti-hair-fall-shampoo-rosemary-methi-dana-reduce-hair-loss-breakage/p/itmb2e49d7f5711c?otracker=undefined_footer
              - link "Whirlpool Semi Automatic Top Load Washing Machine (7.5kg, Black Grey)" [ref=e1406] [cursor=pointer]:
                - /url: /whirlpool-7-5-kg-5-star-memory-retention-end-cycle-buzzer-collar-scrubber-semi-automatic-top-load-washing-machine-black-grey/p/itm6bedc92d5c109?otracker=undefined_footer
              - link "Campus Running Shoes" [ref=e1407] [cursor=pointer]:
                - /url: /campus-royce-2-running-shoes-men/p/itm32fb806935e08?otracker=undefined_footer
              - link "LG Convection Microwave Oven" [ref=e1408] [cursor=pointer]:
                - /url: /lg-28-l-251-health-plus-menu-ghee-12-mins-quartz-heater-convection-microwave-oven/p/itmew8zysndynd86?otracker=undefined_footer
              - link "Goboult Y1 Pro Bluetooth" [ref=e1409] [cursor=pointer]:
                - /url: /goboult-y1-pro-4-mic-enc-60hrs-battery-life-fast-charging-5-3v-bluetooth/p/itm6da06a6c2803c?otracker=undefined_footer
              - link "Fastrack Analog Metal Strap Watch" [ref=e1410] [cursor=pointer]:
                - /url: /fastrack-stunners-6-0-white-dial-silver-metal-strap-analog-watch-men/p/itmae42617e87cb1?otracker=undefined_footer
              - link "Vivo V50 5G (256GB,Titanium Grey)" [ref=e1411] [cursor=pointer]:
                - /url: /vivo-v50-5g-titanium-grey-256-gb/p/itm12bbdca230795?otracker=undefined_footer
              - link "Puma Running Shoes" [ref=e1412] [cursor=pointer]:
                - /url: /puma-rungryp-running-shoes-men/p/itmb51dba70b88f1?otracker=undefined_footer
              - link "Asus Vivobook Laptop" [ref=e1413] [cursor=pointer]:
                - /url: /asus-vivobook-s15-oled-powered-intel-evo-h-series-ai-pc-full-metal-body-core-ultra-9-185h-16-gb-1-tb-ssd-windows-11-home-s5506ma-ma952ws-thin-light-laptop/p/itmd459f255adcc2?otracker=undefined_footer
              - link "Kent Grand LED Water Purifier" [ref=e1414] [cursor=pointer]:
                - /url: /kent-grand-b-8-l-ro-uf-tds-control-uv-led-water-purifier-advanced-tech-sabse-shudh-paani-8l-20-lph-suitable-all-borewell-tanker-municipality/p/itmfa4aefccbb024?otracker=undefined_footer
              - link "V-Guard 400 5 ton AC" [ref=e1415] [cursor=pointer]:
                - /url: /v-guard-vg-400-1-5-ton-a-c-170v-270v-voltage-stabilizer/p/itmfybf88h6mepzn?otracker=undefined_footer
              - link "Boat Bluetooth Airdopes" [ref=e1416] [cursor=pointer]:
                - /url: /boat-airdopes-alpha-35h-battery-13mm-drivers-enx-stream-ad-free-music-via-app-bluetooth/p/itm1181f915b81ec?otracker=undefined_footer
              - link "Realme C71 (128GB,Obsidian Black)" [ref=e1417] [cursor=pointer]:
                - /url: /realme-c71-obsidian-black-128-gb/p/itm920c5c8761871?otracker=undefined_footer
              - link "Oneplus Nord Bluetooth Buds" [ref=e1418] [cursor=pointer]:
                - /url: /oneplus-nord-buds-3-up-32db-anc-bluetooth/p/itm16e2a9a7f01c8?otracker=undefined_footer
              - link "Derma Co 2%Kojic Acid Face Serum" [ref=e1419] [cursor=pointer]:
                - /url: /derma-co-2-kojic-acid-face-serum-1-alpha-arbutin-niacinamide-dark-spots-blemishes-pigmentation/p/itm434e0c7f703fa?otracker=undefined_footer
              - link "Apple iPhone 17 (256GB,Black)" [ref=e1420] [cursor=pointer]:
                - /url: /apple-iphone-17-black-256-gb/p/itm6eb39da622cdd?otracker=undefined_footer
              - link "Apple iPhone 16 Pro (128GB,Natural Titanium)" [ref=e1421] [cursor=pointer]:
                - /url: /apple-iphone-16-pro-natural-titanium-128-gb/p/itm4397c54ec56b7?otracker=undefined_footer
              - link "Nothing Phone 3a (128GB,Black)" [ref=e1422] [cursor=pointer]:
                - /url: /nothing-phone-3a-black-128-gb/p/itm49557c5a65f9c?otracker=undefined_footer
              - link "Apple iPhone 16 (128GB,White)" [ref=e1423] [cursor=pointer]:
                - /url: /apple-iphone-16-white-128-gb/p/itm7c0281cd247be?otracker=undefined_footer
              - link "Poco X7 Pro 5G (256GB,Obsidian Black)" [ref=e1424] [cursor=pointer]:
                - /url: /poco-x7-pro-5g-obsidian-black-256-gb/p/itm83a82908d7dbb/?otracker=undefined_footer
              - link "Samsung Galaxy S24 Ultra 5G (256GB,Titanium Black)" [ref=e1425] [cursor=pointer]:
                - /url: /samsung-galaxy-s24-ultra-5g-titanium-black-256-gb/p/itm56e34262b28f1?otracker=undefined_footer
              - link "Apple iPhone 17 Pro (256GB,Cosmic Orange)" [ref=e1426] [cursor=pointer]:
                - /url: /apple-iphone-17-pro-cosmic-orange-256-gb/p/itm76fe37ca9ea8c?otracker=undefined_footer
              - link "Iqoo Neo 10R5G (128GB,Raging Blue)" [ref=e1427] [cursor=pointer]:
                - /url: /iqoo-neo-10r-5g-raging-blue-128-gb/p/itmdeb505b0113f2?otracker=undefined_footer
              - link "Oppo F31 Pro 5G (128GB,Space Grey)" [ref=e1428] [cursor=pointer]:
                - /url: /oppo-f31-pro-5g-space-grey-128-gb/p/itm6246a3a4b6430?otracker=undefined_footer
              - link "Samsung Galaxy S25 Ultra 5G (1024GB,Titanium Silverblue)" [ref=e1429] [cursor=pointer]:
                - /url: /samsung-galaxy-s25-ultra-5g-titanium-silverblue-1024-gb/p/itm7d0e1ef71672e?otracker=undefined_footer
              - link "Oneplus 15 5G (256GB,Sand Storm)" [ref=e1430] [cursor=pointer]:
                - /url: /oneplus-15-5g-sand-storm-256-gb/p/itm0106a23b51268?otracker=undefined_footer
            - generic [ref=e1431]:
              - link "Furniture" [ref=e1432] [cursor=pointer]:
                - /url: /furniture/pr?sid=wwe
              - link "Furniture Store" [ref=e1433] [cursor=pointer]:
                - /url: /furniture-store?otracker=undefined_footer
              - link "Beds" [ref=e1434] [cursor=pointer]:
                - /url: /furniture/beds-more/beds/pr?sid=wwe,7p7,4yf&otracker=undefined_footer
              - link "Dining Table Sets" [ref=e1435] [cursor=pointer]:
                - /url: /furniture/dining-tables-sets/pr?sid=wwe,ur9&otracker=undefined_footer
              - link "Wardrobes" [ref=e1436] [cursor=pointer]:
                - /url: /furniture/wardrobes/pr?sid=wwe,fc3&otracker=undefined_footer
              - link "TV Units & Cabinets" [ref=e1437] [cursor=pointer]:
                - /url: /furniture/tv-units-cabinets/pr?sid=wwe,243&otracker=undefined_footer
              - link "Office & Study Chairs" [ref=e1438] [cursor=pointer]:
                - /url: /furniture/chairs/office-study-chairs/pr?sid=wwe,y7b,foc&otracker=undefined_footer
              - link "Office & Study Tables" [ref=e1439] [cursor=pointer]:
                - /url: /furniture/tables/office-study-table/pr?sid=wwe,ki7,l1t&otracker=undefined_footer
              - link "Sofa Sets" [ref=e1440] [cursor=pointer]:
                - /url: /furniture/sofas/sofa-sets/pr?sid=wwe,c3z,r0c&otracker=undefined_footer
              - link "Mattress" [ref=e1441] [cursor=pointer]:
                - /url: /furniture/mattresses/pr?sid=wwe,rg9&otracker=undefined_footer
              - link "Sofa Beds" [ref=e1442] [cursor=pointer]:
                - /url: /furniture/sofa-beds/pr?sid=wwe,osg&otracker=undefined_footer
              - link "Shoe Racks" [ref=e1443] [cursor=pointer]:
                - /url: /furniture/shoe-rack/pr?sid=wwe,0ye&otracker=undefined_footer
              - link "Dressing Tables" [ref=e1444] [cursor=pointer]:
                - /url: /furniture/tables/dressing-tables/pr?sid=wwe,ki7,vh2&otracker=undefined_footer
              - link "Home Temples" [ref=e1445] [cursor=pointer]:
                - /url: /furniture/furniture-accessories/home-temple/pr?sid=wwe,q7b,9zz&otracker=undefined_footer
              - link "Kitchen Cabinets" [ref=e1446] [cursor=pointer]:
                - /url: /furniture/cabinets/kitchen-cabinets/pr?sid=wwe,6by,9dn&otracker=undefined_footer
              - link "King Size Beds" [ref=e1447] [cursor=pointer]:
                - /url: /furniture/beds/king~bed-size/pr?sid=wwe,7p7&otracker=undefined_footer
              - link "Queen Size Beds" [ref=e1448] [cursor=pointer]:
                - /url: /furniture/beds-more/beds/queen~size/pr?sid=wwe,7p7,4yf&otracker=undefined_footer
            - generic [ref=e1449]:
              - generic [ref=e1450]: "BGMH:"
              - link "NCERT Books" [ref=e1451] [cursor=pointer]:
                - /url: /books/ncert~contributor/pr?sid=bks&otracker=undefined_footer
              - link "Toys Online Store" [ref=e1452] [cursor=pointer]:
                - /url: /toys/pr?sid=mgl&otracker=undefined_footer
              - link "Pens & Stationery" [ref=e1453] [cursor=pointer]:
                - /url: /pens-stationery/pr?sid=dgv&otracker=undefined_footer
              - link "Beauty And Grooming" [ref=e1454] [cursor=pointer]:
                - /url: /beauty-and-grooming/pr?sid=g9b&otracker=undefined_footer
              - link "Makeup Kits" [ref=e1455] [cursor=pointer]:
                - /url: /makeup-kit/pr?sid=g9b,ffi,3dd,zjo&otracker=undefined_footer
              - link "Body, Face & Skin Care" [ref=e1456] [cursor=pointer]:
                - /url: /beauty-and-grooming/body-face-skin-care/pr?sid=g9b,ema&otracker=undefined_footer
              - link "Perfumes" [ref=e1457] [cursor=pointer]:
                - /url: /beauty-and-grooming/fragrances/perfume/pr?sid=g9b,0yh,jhz&otracker=undefined_footer
              - link "Books Online Store" [ref=e1458] [cursor=pointer]:
                - /url: /books-store?otracker=undefined_footer
              - link "Automotive Accessories" [ref=e1459] [cursor=pointer]:
                - /url: /automotive-accessories/pr?sid=1mt&otracker=undefined_footer
              - link "Car Accessories" [ref=e1460] [cursor=pointer]:
                - /url: /car-accessories-at-store?otracker=undefined_footer
              - link "Bike Accessories" [ref=e1461] [cursor=pointer]:
                - /url: /bike-accessories-at-store?otracker=undefined_footer
              - link "Food Products" [ref=e1462] [cursor=pointer]:
                - /url: /food-products/pr?sid=eat&otracker=undefined_footer
              - link "Health Care" [ref=e1463] [cursor=pointer]:
                - /url: /health-care/pr?sid=hlc&otracker=undefined_footer
              - link "Health Supplements" [ref=e1464] [cursor=pointer]:
                - /url: /health-care/health-supplements/pr?sid=hlc,etg&otracker=undefined_footer
              - link "Sports Equipment" [ref=e1465] [cursor=pointer]:
                - /url: /sports/pr?sid=abc&otracker=undefined_footer
              - link "Exercise & Fitness Accessories" [ref=e1466] [cursor=pointer]:
                - /url: /exercise-fitness/pr?sid=qoc&otracker=undefined_footer
              - link "Baby Care" [ref=e1467] [cursor=pointer]:
                - /url: /baby-care/pr?sid=kyh&otracker=undefined_footer
              - link "HouseHold Supplies" [ref=e1468] [cursor=pointer]:
                - /url: /home-cleaning-bathroom-accessories/household-supplies/pr?sid=rja,plv&otracker=undefined_footer
              - link "Home Cleaning & Bathroom Accessories" [ref=e1469] [cursor=pointer]:
                - /url: /home-cleaning-bathroom-accessories/pr?sid=rja&otracker=undefined_footer
              - link "Home Decor" [ref=e1470] [cursor=pointer]:
                - /url: /home-decor/pr?sid=arb&otracker=undefined_footer
              - link "Home Improvement Tools" [ref=e1471] [cursor=pointer]:
                - /url: /home-improvement/pr?sid=h1m&otracker=undefined_footer
              - link "Kitchen Cookware & Serveware" [ref=e1472] [cursor=pointer]:
                - /url: /kitchen-cookware-serveware/pr?sid=upp&otracker=undefined_footer
              - link "Wallpapers" [ref=e1473] [cursor=pointer]:
                - /url: /wallpapers/pr?sid=arb,yod,8m7&otracker=undefined_footer
              - link "Home Furnishings" [ref=e1474] [cursor=pointer]:
                - /url: /home-furnishing/pr?sid=jra&otracker=undefined_footer
              - link "Wall Decor" [ref=e1475] [cursor=pointer]:
                - /url: /home-decor/wall-decor-items/pr?sid=arb,a77&otracker=undefined_footer
              - link "Tableware & Dinnerware" [ref=e1476] [cursor=pointer]:
                - /url: /kitchen-cookware-serveware/tableware-dinnerware/pr?sid=upp,i7t&otracker=undefined_footer
              - link "Cookware Sets" [ref=e1477] [cursor=pointer]:
                - /url: /kitchen-cookware-serveware/cookware/cookware-sets/pr?sid=upp,tnx,qvz&otracker=undefined_footer
              - link "Bed Linen & Blankets" [ref=e1478] [cursor=pointer]:
                - /url: /home-furnishing/bed-linen-blankets/pr?sid=jra,knw&otracker=undefined_footer
              - link "Cushions & Pillows" [ref=e1479] [cursor=pointer]:
                - /url: /home-furnishing/cushions-pillows/pr?sid=jra,kzv&otracker=undefined_footer
              - link "Curtains" [ref=e1480] [cursor=pointer]:
                - /url: /home-furnishing/curtains-accessories/curtains/pr?sid=jra,sl5,2va&otracker=undefined_footer
              - link "Festive Decor & Gifting" [ref=e1481] [cursor=pointer]:
                - /url: /festive-decor-gifting/pr?sid=bro&otracker=undefined_footer
          - generic [ref=e1484]:
            - 'heading "Flipkart: India''s Ultimate One-Stop Online Shopping Destination" [level=1] [ref=e1485]'
            - text: Welcome to Flipkart, India's trusted and beloved e-commerce platform, revolutionising online shopping since 2007. With over 200 million users, 150 million+ products across 80+ categories, and a relentless focus on customer satisfaction, Flipkart isn't just an online store; it's your digital shopping companion. Be it the Flipkart app or the comprehensive Flipkart website, discover an unmatched universe of products, incredible Flipkart offers, blockbuster Flipkart sale events, and seamless service. From the latest gadgets to daily groceries, fashion must-haves to furniture solutions, Flipkart is your definitive destination for e-commerce in India, offering convenience, value, and reliability at every click. Experience the joy of buying online with India's homegrown leader!
            - heading "What Can You Buy from Flipkart?" [level=2] [ref=e1486]
            - text: "Flipkart's strength lies in its incredible diversity. With offerings for every need, aspiration, and budget, you can dive into the meticulously curated categories for your needs:"
            - strong [ref=e1487]: Mobile and Electronics
            - text: ": Flipkart has a wide range of mobiles with advanced features and the latest technology. As a leading e-commerce platform, we offer all the latest models from top brands. Explore the newest flagships from Samsung, Apple, OnePlus, Xiaomi, Vivo, Oppo, and more. Find budget-friendly smartphones, 5G powerhouses, gaming phones, and refurbished options. Additionally, Flipkart Complete Mobile Protection offers comprehensive coverage for post-purchase issues, including door-to-door services. Complement your device with extensive accessories: durable"
            - link "back covers" [ref=e1488] [cursor=pointer]:
              - /url: /mobile-accessories/cases-and-covers/pr?sid=tyy,4mr,q2u
            - text: ", screen protectors, fast chargers, power banks, wireless earbuds, smartwatches,"
            - link "fitness bands" [ref=e1489] [cursor=pointer]:
              - /url: /wearable-smart-devices/smart-bands/pr?sid=ajy,q7p
            - text: ", and VR headsets."
            - text: Check out different types of laptops to power your work, creativity, and entertainment. Shop a vast range of laptops like ultraportables, gaming laptops, business notebooks, Chromebooks, and all-in-one PCs. Our Back To College Store segregates laptops purpose-wise with recommendations from top brands and industry experts. You can also find a wide selection of tablets,
            - link "bluetooth speakers" [ref=e1490] [cursor=pointer]:
              - /url: /audio-video/speakers/bluetooth~connectivity/pr?sid=0pm,0o7
            - text: ", and"
            - link "headphones" [ref=e1491] [cursor=pointer]:
              - /url: /headphones-store
            - text: from top brands. In addition, explore
            - link "digital cameras" [ref=e1492] [cursor=pointer]:
              - /url: /camera-clp-store
            - text: ", smart home devices, printers, security cameras, powerful desktops and monitors to serve every purpose."
            - strong [ref=e1493]: Home and Kitchen Appliances
            - text: ": Upgrade your home and kitchen appliances to make your days more comfortable and convenient. Discover stunning Smart TVs,"
            - link "home theatre systems" [ref=e1494] [cursor=pointer]:
              - /url: /audio-video/speakers/home-audio/home-theatre-systems/pr?sid=0pm,0o7,2to,ict
            - text: ", soundbars, and streaming devices. Invest in essential large appliances: energy-efficient refrigerators, washing machines, air conditioners, microwaves, water purifiers, air coolers, and geysers from trusted brands like LG, Samsung, Whirlpool, Godrej, and Voltas. Benefit from installation services and extended warranties. Flipkart has a massive collection of all the latest and trending range of these products. You can shop for your favourites among them at affordable prices. Additionally, our Dependable TV and Appliance Store ensures zero transit damage, with a replacement guarantee if anything goes wrong."
            - text: Make daily chores effortless and enjoyable with modern kitchen appliances. Equip your kitchen with microwaves, mixer-grinders, air fryers, OTGs,
            - link "electric kettles" [ref=e1495] [cursor=pointer]:
              - /url: /q/kettles
            - text: ", induction cooktops, rice cookers,"
            - link "coffee makers" [ref=e1496] [cursor=pointer]:
              - /url: /coffee-makers/pr?sid=j9e,m38,wqo
            - text: ", blenders, and sandwich makers. Keep your home spotless with robotic vacuum cleaners, handheld vacuums, steam mops,"
            - link "irons" [ref=e1497] [cursor=pointer]:
              - /url: /iron/pr?sid=j9e,abm,a0u
            - text: ", and garment care. Enhance comfort with heaters, fans, and humidifiers. With the increase in pollution, make your home clean and hygienic with"
            - link "air purifiers" [ref=e1498] [cursor=pointer]:
              - /url: /air-purifiers/pr?sid=j9e,abm,3o4
            - text: .
            - strong [ref=e1499]: Fashion and Beauty
            - text: ": Flipkart, India ka Fashion Capital, is your one-stop destination for anything and everything you need to look good. Express your unique style. Explore an enormous collection of clothing for men, women, and kids. You can choose from ethnic wear, western wear, activewear, nightwear, and innerwear. You can find footwear for every occasion and accessorise your outfits with"
            - link "Handbags" [ref=e1500] [cursor=pointer]:
              - /url: /bags-wallets-belts/handbags-clutches/handbags/pr?sid=reh,ihu,m08
            - text: ","
            - link "watches" [ref=e1501] [cursor=pointer]:
              - /url: /watches/pr?sid=r18
            - text: ","
            - link "sunglasses" [ref=e1502] [cursor=pointer]:
              - /url: /sunglasses/pr?sid=26x
            - text: ", belts, and jewellery."
            - text: Beauty and grooming products for everyone are available on Flipkart. Choose from a comprehensive range of skincare,
            - link "makeup" [ref=e1503] [cursor=pointer]:
              - /url: /beauty-and-grooming/makeup/pr?sid=g9b,ffi
            - text: ","
            - link "haircare" [ref=e1504] [cursor=pointer]:
              - /url: /beauty-and-grooming/hair-care-and-accessory/pr?sid=g9b,lcf
            - text: ","
            - link "fragrances" [ref=e1505] [cursor=pointer]:
              - /url: /beauty-and-grooming/fragrances/pr?sid=g9b,0yh
            - text: ", men's grooming, salon-style tools, and personal care essentials. You can choose offerings from top Indian and international brand."
            - strong [ref=e1506]: Home and Furniture
            - text: ": Upgrade the decor and functionality of your home with various items for home decor, options for"
            - link "home lighting" [ref=e1507] [cursor=pointer]:
              - /url: /home-lighting/decor-lighting-accessories/pr?sid=jhg,6w8
            - text: ", and equipment for home improvement. Furnish all the rooms in your home with exquisite offerings available for living rooms, bedrooms, dining rooms, study, and outdoor spaces. Explore modern home decor options like curtains, cushions, rugs, lamps, clocks,"
            - link "wall paintings" [ref=e1508] [cursor=pointer]:
              - /url: /home-decor/paintings-posters/paintings/pr?sid=arb,bga,mmf
            - text: ", mirrors,"
            - link "photo frames" [ref=e1509] [cursor=pointer]:
              - /url: /home-decor/photo-frames-albums/photo-frames/pr?sid=arb,rm9,hzf
            - text: ", and decorative items."
            - text: Transform your home with our curated collection where comfort meets style. Unwind on our plush sofa sets and bean bags, or gather around elegant dining tables with matching chairs. Organize your world with stylish bookshelves and spacious cupboards, and revolutionize your cooking with a state-of-the-art
            - link "modular kitchen" [ref=e1510] [cursor=pointer]:
              - /url: /q/modular-kitchen-cabinets
            - text: . From serene mandir designs for sacred corners to the perfect mattress for restful nights, we have it all. Our Durability Certified Furniture Store has curated a range of furniture that comes with a lab certification, passing 35 rigorous stability tests to guarantee up to 10 years of durability. Be FurniSure, always.
            - strong [ref=e1511]: Daily Essentials
            - text: ": Order household supplies like detergents, dishwash, cleaners, tissues, and toilet paper. Stock up on health and hygiene products (sanitizers, masks, vitamins, first-aid). Find pet food and supplies. Discover organic and sustainable options. Explore a variety of baby care needs on Flipkart. Find everything from"
            - link "diapers" [ref=e1512] [cursor=pointer]:
              - /url: /baby-care/diaper-potty-training/baby-diapers/pr?sid=kyh,fdp,yvf
            - text: ", wipes, baby food, and feeding bottles to strollers, car seats, cribs, high chairs, baby monitors, and bath essentials. Discover a world of toys (educational, soft, ride-ons), kids' apparel, footwear, school supplies, and maternity care products. Furthermore, browse through bestseller books, including fiction, non-fiction, academic texts, competitive exam guides, and children's books."
            - strong [ref=e1513]: Sports Equipment and Two Wheelers
            - text: ": You can explore a wide range of"
            - link "scooters" [ref=e1514] [cursor=pointer]:
              - /url: /vehicles/bikes-scooters/pr?sid=7dk,0aj
            - text: ","
            - link "motorcycles" [ref=e1515] [cursor=pointer]:
              - /url: /vehicles/bikes-scooters/ice-bikes-scooters/motorcycles/pr?sid=7dk,0aj,kcq,whu
            - text: ", and"
            - link "electric vehicles" [ref=e1516] [cursor=pointer]:
              - /url: /electric-scooters-store
            - text: (EVs) from leading manufacturers like Hero, Honda, TVS, Bajaj, Ola, Ather, and more. Access detailed specifications, compare models, check on-road prices, and explore financing options conveniently. You can also gear up for sports with equipment for cricket, football, badminton, tennis,
            - link "cycling" [ref=e1517] [cursor=pointer]:
              - /url: /sports/cycling/pr?sid=abc,ulv
            - text: ", fitness, and gym wear. You can also find video games (consoles, titles, accessories), board games, puzzles, and"
            - link "musical instruments" [ref=e1518] [cursor=pointer]:
              - /url: /musical-instruments/pr?sid=ypu
            - strong [ref=e1519]: Gift Cards
            - text: ": Flipkart"
            - link "Gift Cards" [ref=e1520] [cursor=pointer]:
              - /url: /the-gift-card-store
            - text: "and e-Gift Vouchers offer unparalleled flexibility, allowing recipients to choose exactly what they desire from Flipkart's vast catalog. Different types of gift cards are available for every occasion: birthdays, anniversaries, weddings, festivals, corporate gifting, and more. Check out digital, personalised, physical, and corporate gift cards. You can also find multi-brand gift cards to shop across popular stores and services. These cards are available in various denominations, instantly delivered via email or SMS."
            - heading "Flipkart Loyalty and Rewards Program" [level=2] [ref=e1521]
            - text: Elevate your Flipkart shopping experience and earn rewarding benefits with multiple programs provided by us.
            - strong [ref=e1522]: Earn SuperCoins
            - text: ": Get your hands on exciting deals and rewards with the Flipkart SuperCoin program. It is a Flipkart loyalty program that offers reward points in the form of SuperCoins every time you shop. Think of them as digital rewards currency. (e.g., ₹100 spent = 2 SuperCoin). Flipkart Plus members can earn up to 25 coins with every purchase. You can use your accumulated"
            - link "SuperCoins" [ref=e1523] [cursor=pointer]:
              - /url: /supercoin
            - text: like cash during checkout. With cashback offers offering you 1 SuperCoin for every rupee spent, you earn as you spend. You can redeem them when you check out products on Flipkart, SuperCoin Zone for offers and gift cards, subscriptions to access OTT platforms, music services, or Flipkart Plus services. You can redeem supercoins to get additional offers and discounts at Flipkart’s partner brands and services.
            - strong [ref=e1524]: Flipkart Plus
            - text: ": Activate your"
            - link "Flipkart Plus" [ref=e1525] [cursor=pointer]:
              - /url: /plus/all-offers
            - text: membership to multiply the rewards you earn from shopping online. A Flipkart Plus membership allows you to earn more SuperCoins as well as get access to many more exclusive deals and offers before anyone else. Additionally, you also get priority assistance and an assured enrollment in the Flipkart Pay Later program. If you shop 10 times a year, you become a Plus Silver member. Then, you can get a 12% instant discount during early sale access. If you shop 20 times a year, you become a Plus Gold member and get a 15% early access discount during sale.
            - strong [ref=e1526]: "Flipkart Black:"
            - text: Flipkart Black membership is a new subscription plan that offers a combination of shopping benefits, entertainment access, and travel offers. This membership ensures customer convenience. Members will also get a free YouTube Premium subscription, exclusive deals, and travel perks. Additionally, they will receive 5% SuperCoins cashback on purchases made through Flipkart and Flipkart minutes. Other benefits include priority customer service, early access to sales, and exclusive offers on premium electronics.
            - 'heading "Payment and Affordability: Shop Smart, Pay Smarter" [level=2] [ref=e1527]'
            - text: "Flipkart understands that affordability is key. You can choose from a suite of payment and financing options which includes options like:"
            - text: "1. No Cost EMI: You can split the cost of your purchase into easy monthly instalments without paying any extra interest. No Cost EMI is applicable on select mobiles, laptops, large and small appliances, furniture, electronics, and watches. Terms and conditions apply."
            - text: 2. EMI on Debit Cards:You can choose to convert large purchases into manageable monthly payments directly debited from your bank account. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India, and ICICI Bank for this facility.
            - text: "3. UPI, Pay Later, and Flexible Payments: Enjoy ultimate payment flexibility with options like UPI, Pay Later, Credit/Debit Cards, Net Banking."
            - 'heading "Flipkart Flights: Book Your Next Getaway Effortlessly" [level=2] [ref=e1528]'
            - text: Beyond products, Flipkart simplifies your travel planning!
            - link "Flipkart Flights" [ref=e1529] [cursor=pointer]:
              - /url: /travel/flights
            - text: offers a powerful platform to search, compare, and book domestic flights across India at the most competitive prices. You can search for the flights you want and compare prices across multiple airlines, dates, and routes. Look for the Top Deals section to explore several flight offers. You can also use the Travel Checklist category to proceed with the web check-in process. Do not forget to check the 'Your Safety Is Important To Us' section to know more about the safety guidelines. Check out the Best Deals section to save money while booking. You can use SuperCoins or opt for the EMI option to book tickets.
            - 'heading "Flipkart Minutes: Groceries and Gadgets in a Flash" [level=2] [ref=e1530]'
            - text: Experience the future of hyperlocal convenience with
            - link "Flipkart Minutes" [ref=e1531] [cursor=pointer]:
              - /url: /flipkart-minutes-store?marketplace=HYPERLOCAL
            - text: ". With this, you get:"
            - strong [ref=e1532]: "Hyperlocal Delivery of Daily Essentials and Gadgets:"
            - text: Flipkart Minutes delivers a curated selection of high-demand grocery items, personal care products, and small electronics within minutes, not hours or days.
            - strong [ref=e1533]: Fast Delivery via Dark Stores and Local Fulfillment
            - text: ": These ‘dark stores’ are micro-fulfillment centers which are stocked with thousands of essential products and are optimized for picking and packing efficiency."
            - strong [ref=e1534]: "Availability in Select Cities:"
            - text: Currently transforming convenience in major metropolitan areas and rapidly expanding to more cities, you can check the Flipkart app to see if Minutes is available at your location.
            - 'heading "Flipkart Reset and Exchange Program: Trade-in Your Old Device" [level=2] [ref=e1535]'
            - text: Flipkart Reset offers you the opportunity to sell your old phone at the best price. You can also get an extra 4% value on your phone if you choose Flipkart Gift Card at checkout. Not only is this an effective way to
            - link "sell old phones" [ref=e1536] [cursor=pointer]:
              - /url: /reset-sell-store
            - text: but it also helps reduce electronic waste that would be caused otherwise. Provide your phone details, set up an appointment with an executive, who will evaluate your phone at pickup and offer a final price. Money will be paid instantly.
            - text: Check out
            - link "Flipkart Exchange Store" [ref=e1537] [cursor=pointer]:
              - /url: /exchange-store
            - text: to exchange your old electronic device for a new one on Flipkart. You can exchange laptops, phones, TVs, washing machines, mixers, refrigerators, tablets, and ACs. We take it even if the product does not work. It only takes a few simple steps. Find the product you want to buy, select the exchange option, provide details of the old product, and you will get an instant exchange discount on the new product.
            - 'heading "Flipkart Kilos: Your Online Grocery Supermarket" [level=2] [ref=e1538]'
            - text: Say goodbye to heavy bags and long queues.
            - link "Flipkart Kilos" [ref=e1539] [cursor=pointer]:
              - /url: /grocery-supermart-store?marketplace=GROCERY
            - text: brings the supermarket to your doorstep. Find everything you need for your pantry and home. You can shop for Fresh Produce Fruits & Vegetables, Staples, Beverages, Snacks, Frozen and Ready-to-Eat, Baby Care, Pet Food and Dairy Products at unbeatable prices. Our Supermart brings everyday essentials close to you. In addition, our 1 Rupee Store presents new products every day for a nominal price of 1 Rupee only. Terms and conditions apply.
            - heading "Why Choose Flipkart? The Unbeatable Advantages" [level=2] [ref=e1540]
            - text: "1. India's Largest Selection: Millions of genuine products across every conceivable category."
            - text: "2. Unbeatable Value: Best prices guaranteed, amplified by frequent"
            - link "Flipkart offers" [ref=e1541] [cursor=pointer]:
              - /url: /offers-store
            - text: ", Flipkart sale mega-events, and coupon discounts."
            - text: "3. Seamless Shopping: Intuitive Flipkart website and award-winning Flipkart app for a smooth experience anytime, anywhere."
            - text: "4. Lightning-Fast and Reliable Delivery: From standard shipping to 10-minute deliveries and slot-based options, get what you want delivered to you quickly and reliably. Plus, easy 10-day returns."
            - text: "5. Trust & Authenticity: 100% genuine products, secure payment gateways, and transparent policies."
            - text: "6. Customer First: Dedicated 24x7 customer support to resolve any queries."
            - text: "7. Innovation Leader: Constantly pioneering new services (like Minutes, Plus, Fintech) to enhance your experience."
            - text: "8. Your Partner in Life: From daily groceries to dream gadgets, festival shopping to furniture, we're here for every need."
            - text: Experience the Future of E-commerce Today! Download the Flipkart App or Visit Flipkart.com.
            - heading "Get Exclusive Offers and Deals in Popular Sale Events" [level=2] [ref=e1542]
            - text: Flipkart offers you the opportunity of getting the products of your choice with regular sales events that bring you some great offers and discounts. With major annual events like the Big Billion Days, End of Season Sale (EOSS), GOAT Sale, and more to choose from, you can plan your new purchases to make sure you get the best benefits and discounts. Additionally, you can also choose to shop during smaller but equally attractive monthly sales to get the products you want.
          - generic [ref=e1543]:
            - generic [ref=e1544]:
              - generic [ref=e1545]:
                - generic [ref=e1546]: ABOUT
                - link "Contact Us" [ref=e1547] [cursor=pointer]:
                  - /url: /helpcentre?otracker=footer_navlinks
                - link "About Us" [ref=e1548] [cursor=pointer]:
                  - /url: https://corporate.flipkart.net/corporate-home
                - link "Careers" [ref=e1549] [cursor=pointer]:
                  - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
                - link "Flipkart Stories" [ref=e1550] [cursor=pointer]:
                  - /url: http://stories.flipkart.com/?otracker=footer_navlinks
                - link "Press" [ref=e1551] [cursor=pointer]:
                  - /url: http://stories.flipkart.com/category/top-stories/news/
                - link "Corporate Information" [ref=e1552] [cursor=pointer]:
                  - /url: /corporate-information
              - generic [ref=e1553]:
                - generic [ref=e1554]: GROUP COMPANIES
                - link "Myntra" [ref=e1555] [cursor=pointer]:
                  - /url: https://www.myntra.com/
                - link "Cleartrip" [ref=e1556] [cursor=pointer]:
                  - /url: https://www.cleartrip.com/
                - link "Shopsy" [ref=e1557] [cursor=pointer]:
                  - /url: https://www.shopsy.in
              - generic [ref=e1558]:
                - generic [ref=e1559]: HELP
                - link "Payments" [ref=e1560] [cursor=pointer]:
                  - /url: /pages/payments
                - link "Shipping" [ref=e1561] [cursor=pointer]:
                  - /url: /pages/shipping
                - link "Cancellation & Returns" [ref=e1562] [cursor=pointer]:
                  - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
                - link "FAQ" [ref=e1563] [cursor=pointer]:
                  - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
              - generic [ref=e1564]:
                - generic [ref=e1565]: CONSUMER POLICY
                - link "Cancellation & Returns" [ref=e1566] [cursor=pointer]:
                  - /url: /pages/returnpolicy?otracker=footer_navlinks
                - link "Terms Of Use" [ref=e1567] [cursor=pointer]:
                  - /url: /pages/terms?otracker=footer_navlinks
                - link "Security" [ref=e1568] [cursor=pointer]:
                  - /url: /pages/paymentsecurity?otracker=footer_navlinks
                - link "Privacy" [ref=e1569] [cursor=pointer]:
                  - /url: /pages/privacypolicy?otracker=footer_navlinks
                - link "Sitemap" [ref=e1570] [cursor=pointer]:
                  - /url: /sitemap?otracker=footer_navlinks
                - link "Grievance Redressal" [ref=e1571] [cursor=pointer]:
                  - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
                - link "EPR Compliance" [ref=e1572] [cursor=pointer]:
                  - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
                - link "FSSAI Food Safety Connect App" [ref=e1573] [cursor=pointer]:
                  - /url: https://fssai.gov.in/cms/food-safety-connect.php
              - generic [ref=e1574]:
                - generic [ref=e1575]: "Mail Us:"
                - generic [ref=e1576]:
                  - paragraph [ref=e1577]: Flipkart Internet Private Limited,
                  - paragraph [ref=e1578]: Buildings Alyssa, Begonia &
                  - paragraph [ref=e1579]: Clove Embassy Tech Village,
                  - paragraph [ref=e1580]: Outer Ring Road, Devarabeesanahalli Village,
                  - paragraph [ref=e1581]: Bengaluru, 560103,
                  - paragraph [ref=e1582]: Karnataka, India
                - generic [ref=e1583]: "Social:"
                - generic [ref=e1584]:
                  - link "Facebook" [ref=e1586] [cursor=pointer]:
                    - /url: https://www.facebook.com/flipkart
                    - img "Facebook" [ref=e1587]
                  - link "Twitter" [ref=e1589] [cursor=pointer]:
                    - /url: https://www.twitter.com/flipkart
                    - img "Twitter" [ref=e1590]
                  - link "YouTube" [ref=e1592] [cursor=pointer]:
                    - /url: https://www.youtube.com/flipkart
                    - img "YouTube" [ref=e1593]
                  - link "Instagram" [ref=e1595] [cursor=pointer]:
                    - /url: https://www.instagram.com/flipkart
                    - img "Instagram" [ref=e1596]
              - generic [ref=e1597]:
                - generic [ref=e1598]: "Registered Office Address:"
                - generic [ref=e1599]:
                  - paragraph [ref=e1600]: Flipkart Internet Private Limited,
                  - paragraph [ref=e1601]: Buildings Alyssa, Begonia &
                  - paragraph [ref=e1602]: Clove Embassy Tech Village,
                  - paragraph [ref=e1603]: Outer Ring Road, Devarabeesanahalli Village,
                  - paragraph [ref=e1604]: Bengaluru, 560103,
                  - paragraph [ref=e1605]: Karnataka, India
                  - paragraph [ref=e1606]: "CIN : U51109KA2012PTC066107"
                  - paragraph
                  - paragraph [ref=e1607]:
                    - text: "Telephone:"
                    - link "044-45614700" [ref=e1608] [cursor=pointer]:
                      - /url: tel:044-45614700
                    - text: /
                    - link "044-67415800" [ref=e1609] [cursor=pointer]:
                      - /url: tel:044-67415800
            - generic [ref=e1610]:
              - generic [ref=e1611]:
                - img "Become a Seller" [ref=e1612]
                - link "Become a Seller" [ref=e1613] [cursor=pointer]:
                  - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
              - generic [ref=e1614]:
                - img "Advertise" [ref=e1615]
                - link "Advertise" [ref=e1616] [cursor=pointer]:
                  - /url: https://brands.flipkart.com
              - generic [ref=e1617]:
                - img "Gift Cards" [ref=e1618]
                - link "Gift Cards" [ref=e1619] [cursor=pointer]:
                  - /url: /the-gift-card-store?otracker=footer_navlinks
              - generic [ref=e1620]:
                - img "Help Center" [ref=e1621]
                - link "Help Center" [ref=e1622] [cursor=pointer]:
                  - /url: /helpcentre?otracker=footer_navlinks
              - generic [ref=e1623]: © 2007-2026 Flipkart.com
              - img "Payment methods" [ref=e1624]
  - contentinfo
```

# Test source

```ts
  192 |         for (const option of optionText) {
  193 |             console.log(option);
  194 |         }
  195 |         await page.waitForTimeout(5000);
  196 |     });
  197 | 
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
  291 |     const searchBar: Locator = page.locator('//form[@class="lilxh_ header-form-search"]');
> 292 |     await searchBar.fill('smart');
      |                     ^ Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
  293 |     await page.waitForLoadState('domcontentloaded');
  294 |     await page.keyboard.press('Enter');
  295 | 
  296 |     // Get all suggest options
  297 |     const options: Locator = page.locator('//ul[@class="col-12-12 I01Bvi O1jfZ8"]/li');
  298 |     const optionsCount: number = await options.count();
  299 |     console.log('Number of suggest options:', optionsCount);
  300 | 
  301 |     // Print all the suggest options
  302 |     for (let i = 0; i < optionsCount; i++) {
  303 |         const optionText: string | null = await options.nth(i).textContent();
  304 |         console.log(`Option ${i + 1}: ${optionText?.trim()}`);
  305 |     }
  306 | 
  307 |     await page.waitForTimeout(5000);
  308 | });
  309 | 
  310 | });
  311 | 
  312 | 
```
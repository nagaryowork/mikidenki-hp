---
layout: default
title: 会社について
permalink: /about/
---

<section class="about-container">
  <div class="page-header">
    <h2>{{ page.title }}</h2>
  </div>

  <div class="ceo-message">
    <div class="ceo-text">
      <h3>ごあいさつ</h3>
      <p>
        地域の皆様に支えられ、安全と信頼を第一に電気工事に取り組んでまいりました。<br>
        確かな技術力で、お客様の快適な暮らしとビジネス環境をサポートいたします。<br>
        これからも変わらぬご愛顧を賜りますようお願い申し上げます。
      </p>
      <div class="ceo-img">
        <img src="{{ '/assets/img/ceo.jpg' | relative_url }}" alt="代表者写真" onerror="this.src='https://placehold.jp/300x400.png?text=No+Image'">
      </div>
      <p class="ceo-name">代表取締役社長　三木 太郎</p>
    </div>
  </div>

  <div class="access-map">
    <h3>アクセス</h3>
    <div class="company-img">
      <img src="{{ '/assets/img/company.jpg' | relative_url }}" alt="会社外観" onerror="this.src='https://placehold.jp/400x300.png?text=Company+Image'">
    </div>
    <p>〒490-1107 愛知県あま市<br>森４丁目１−１８</p>
    <div class="map-container">
      <iframe
        src="https://maps.google.com/maps?q=〒490-1107+愛知県あま市森４丁目１−１８&output=embed"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>

  
</section>

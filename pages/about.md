---
layout: default
title: 会社について
description: 三木電気工事株式会社の会社概要、代表挨拶、アクセスマップをご紹介します。昭和57年設立、愛知県あま市を拠点に地域密着で電気工事を行っています。
permalink: /about/
---

<section class="about-container">
  <div class="page-header">
    <h2>{{ page.title }}</h2>
  </div>

  <div class="ceo-message">
    <h3>ごあいさつ</h3>
    <div class="ceo-content">
      <div class="message-text">
        <p>
          地域の皆様に支えられ、安全と信頼を第一に電気工事に取り組んでまいりました。<br>
          確かな技術力で、お客様の快適な暮らしとビジネス環境をサポートいたします。<br>
          これからも変わらぬご愛顧を賜りますようお願い申し上げます。
        </p>
      </div>
      <div class="ceo-profile">
        <div class="ceo-img">
          <img src="{{ '/assets/img/ceo.jpg' | relative_url }}" alt="代表者写真" onerror="this.src='https://placehold.jp/300x400.png?text=No+Image'">
        </div>
        <p class="ceo-name">代表取締役社長　三木 昭男</p>
      </div>
    </div>
  </div>

  <div class="company-profile">
    <h3>会社概要</h3>
    <table class="profile-table">
      <tbody>
        <tr>
          <th>会社名</th>
          <td>三木電気工事 株式会社</td>
        </tr>
        <tr>
          <th>代表者</th>
          <td>代表取締役社長　三木 昭男</td>
        </tr>
        <tr>
          <th>所在地</th>
          <td>〒490-1107 愛知県あま市森4-1-18</td>
        </tr>
        <tr>
          <th>設立</th>
          <td>昭和57年</td>
        </tr>
        <tr>
          <th>従業員数</th>
          <td>4名</td>
        </tr>
        <tr>
          <th>事業内容</th>
          <td>屋内配線電気工事<br>（工場、ビル等の電気配線作業）</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="access-map">
    <h3>アクセス</h3>
    <div class="company-img">
      <img src="{{ '/assets/img/company.jpg' | relative_url }}" alt="会社外観" onerror="this.src='https://placehold.jp/400x300.png?text=Company+Image'">
    </div>
    <div class="access-info">
      <p class="address">〒490-1107 愛知県あま市森4-1-18</p>
      <p class="tel">
        TEL: 052-442-7853
        <span class="time">（受付時間：平日 9:00～17:00）</span>
      </p>
    </div>
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

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "三木電気工事株式会社",
    "founder": "三木 昭男",
    "foundingDate": "1982",
    "url": "https://nagaryowork.github.io/mikidenki-hp/"
  }
}
</script>

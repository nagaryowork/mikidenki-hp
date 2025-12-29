---
layout: default
title: 現場・作業例
description: 三木電気工事株式会社の施工実績をご紹介します。工場、オフィスビル、ホテルなどの新築工事や改修工事など、多岐にわたる電気設備工事の実績があります。
permalink: /work/
---

<section class="work-container">
  <div class="page-header">
    <h2>{{ page.title }}</h2>
    <p class="lead-text">
      当社が手掛けた施工実績の一部をご紹介します。<br>
      ※守秘義務の観点から、具体的な企業名や建物名は伏せて掲載しております。<br>
      ※掲載画像はイメージです（守秘義務のためAI生成画像を使用しています）。
    </p>
  </div>

  <div class="work-list">
    <!-- 事例1 -->
    <article class="work-item">
      <div class="work-img">
        <img src="{{ '/assets/img/work1.png' | relative_url }}" alt="ホテル新築工事" onerror="this.src='https://placehold.jp/400x300.png?text=Work+Image+1'">
      </div>
      <div class="work-content">
        <h3>某高級ホテル<br>新築工事</h3>
        <dl class="work-meta">
          <dt>場所</dt>
          <dd>愛知県名古屋市</dd>
          <dt>作業内容</dt>
          <dd>新築電気設備工事一式</dd>
        </dl>
        <p class="work-desc">
          名古屋市内のホテル新築工事における電気設備工事を担当しました。
          客室や共用部の照明・コンセント設備から、受変電設備の設置まで、
          大規模な宿泊施設に求められる高品質な施工を行いました。
        </p>
      </div>
    </article>

    <!-- 事例2 -->
    <article class="work-item">
      <div class="work-img">
        <img src="{{ '/assets/img/work2.png' | relative_url }}" alt="工場新築工事" onerror="this.src='https://placehold.jp/400x300.png?text=Work+Image+2'">
      </div>
      <div class="work-content">
        <h3>某電気機器メーカー<br>工場新築工事</h3>
        <dl class="work-meta">
          <dt>場所</dt>
          <dd>愛知県瀬戸市</dd>
          <dt>作業内容</dt>
          <dd>工場新築電気工事 / 動力設備工事</dd>
        </dl>
        <p class="work-desc">
          メーカー様の工場新築に伴う電気工事を行いました。
          生産ラインへの安定した動力供給や、工場特有の照明計画など、
          お客様の生産活動を支えるための確実な施工を実施しました。
        </p>
      </div>
    </article>

    <!-- 事例3 -->
    <article class="work-item">
      <div class="work-img">
        <img src="{{ '/assets/img/work3.png' | relative_url }}" alt="オフィスビル新築工事" onerror="this.src='https://placehold.jp/400x300.png?text=Work+Image+3'">
      </div>
      <div class="work-content">
        <h3>某クレーン会社<br>オフィスビル新築工事</h3>
        <dl class="work-meta">
          <dt>場所</dt>
          <dd>愛知県名古屋市</dd>
          <dt>作業内容</dt>
          <dd>新築電気設備工事 / OAフロア配線</dd>
        </dl>
        <p class="work-desc">
          オフィスビルの新築工事にて、電気設備全般を担当しました。
          OAフロア内の配線や、セキュリティ設備の設置など、
          現代のオフィス環境に適した機能的で快適な空間づくりに貢献しました。
        </p>
      </div>
    </article>
  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "headline": "施工実績",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "某ホテル新築工事"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "某電気機器メーカー工場新築工事"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "某オフィスビル新築工事"
      }
    ]
  }
}
</script>

import"./ress-B710VfZE.js";const a="/logo.png",c="/instagram.png",l="/top/hamburger-button.png",i="/top/main.jpg",t="/top/aboutus.jpg",r="/top/service01.jpg",n="/top/service02.jpg",o="/top/service03.jpg",p="/top/service04.jpg",g="/top/works01.jpg",d="/top/works02.jpg",f="/top/works03.jpg",u="/top/works04.jpg",v="/top/works05.jpg",h="/top/works06.jpg",m="/top/instagram02.jpg",b="/top/instagram03.jpg",k="/top/instagram04.jpg",w="/top/instagram05.jpg";document.querySelector("#app").innerHTML=`
  <div>
    <header>
      <a href="#"><img class="logo" src=${a} alt="GTBサービスのロゴ" /></a>
      <nav>
        <li><a href="">私たちについて</a></li>
        <li><a href="">事業案内</a></li>
        <li><a href="">アクセス</a></li>
        <li><a href="">施工実績</a></li>
        <li class="list-contact"><a href="">お問い合わせ</a></li>
        <li class="insta"><a href=""><img src=${c} art="Instagramアイコン"></a></li>
      </nav>
      <button class="hamburger">
        <img src="${l}" alt="ハンバーアイコン" />
      </button>
    </header>
    <main>
      <div class="main-visual">
        <img src=${i} alt="メインビジュアル" />
        <div>
          <h1 id="textContainer" class="text-container">あなただけの<br>１台で、<br>カーライフを<br>もっと<br>楽しく。</h1>
          <p><span pan>Just For One </span>Enjoy Car Life!</p>
        </div>
      </div>
      <div class="bgc-beige">
        <section class="about-us">
          <div class="about-us-container">
            <div>
              <h2 class="section-title">About us</h2>
              <p class="section-subtitle">・私たちについて・</p>
              <img class="about-us-img-tab" src=${t} alt="会社案内" />
              <div class="about-us-text">
                <p>自動車販売、新車から中古車やカスタムカーなど様々な種類を取り扱いしており、お客様の満足のいくお車をお探しいたします。 <br>自社で鈑金塗装修理をしておりますので購入してからのアフターケアもお任せください。 <br>また、鈑金、塗装、車検、修理や、今お乗りのお車を自分好みの色にカスタムしたいなど車のことなら何でもご相談してください。</p>
                <div class="about-us-link-container">
                  <a class="about-us-link" href="">
                    <p class="text">会社案内</p>
                    <p class="arrow">→</p>
                  </a>
                </div>
              </div>
            </div>
            <img class="about-us-img-pc" src=${t} alt="私たちについて" />
          </div>
          <div class="feature">
            <h3 class="feature-title">Feature</h3>
            <a class="feature-link" href="https://www.automesseweb.jp/2021/12/22/862327"><p>当社の看板車「バナナフィガロ」が特集されました。<span>クリックして特集サイトへ</span></p></a>
          </div>
        </section>
      </div>
      <div class="bgc-lightblue">
        <div class="service-bg-top"></div>
        <section class="service">
          <div class="service-container">
            <h2 class="section-title">Service</h2>
            <p class="section-subtitle">・事業内容・</p>
          </div>
          <div class="card-container">
            <figure>
              <a href="">
                <img src=${r} alt="鈑金・塗装" />
                <figcaption>鈑金・塗装</figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${n} alt="整備・車検" />
                <figcaption>整備・車検</figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${o} alt="新車・中古車販売" />
                <figcaption>新車・中古車販売</figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${p} alt="カスタムペイント" />
                <figcaption>カスタムペイント</figcaption>
              </a>
            </figure>
          </div>
        </section>
      </div>
      <div class="bgc-lightblue">
        <section class="works">
          <div class="flex-container">
            <div class="section-title-container">
              <h2 class="section-title">Works</h2>
              <p class="section-subtitle">・施工実績・</p>
            </div>
            <div class="works-link-container">
              <a class="works-link" href="">
                <p class="text">もっと見る</p>
                <p class="arrow">→</p>
              </a>
            </div>
          </div>
          <div class="card-container">
            <figure>
              <a href="">
                <img src=${g} alt="鈑金・塗装" />
                <figcaption>
                  <p class="card-title">カスタムペイント</p>
                  <p class="card-text">アウディA7 側面キズ、凹みの修理 鈑金、塗装で元通りの仕上がりに。</p>
                </figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${d} alt="整備・車検" />
                <figcaption>
                  <p class="card-title">カスタムペイント</p>
                  <p class="card-text">ジムニー オールペンおしゃれ仕様にカスタム。</p>
                </figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${f} alt="新車・中古車販売" />
                <figcaption>
                  <p class="card-title">カスタムペイント</p>
                  <p class="card-text">ハイエース オールペンブルー系のオリジナルカラー。</p>
                </figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${u} alt="カスタムペイント" />
                <figcaption>
                  <p class="card-title">カスタムペイント</p>
                  <p class="card-text">ミラジーノ オールペンブラウン×ホワイトでかわいらしく。</p>
                </figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${v} alt="カスタムペイント" />
                <figcaption>
                  <p class="card-title">鈑金・塗装</p>
                  <p class="card-text">アウディA7 側面キズ、凹みの修理鈑金、塗装で元通りの仕上がりに。</p>
                </figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${h} alt="カスタムペイント" />
                <figcaption>
                  <p class="card-title">カスタムペイント</p>
                  <p class="card-text">ネイキッド フルカスタムハマー風にカスタム。</p>
                </figcaption>
              </a>
            </figure>
          </div>
        </section>
      </div>
      <div class="bgc-white">
        <div class="insta-bg-top"></div>
        <section class="instagram">
          <h2 class="section-title">Instagram</h2>
          <div class="instagram-link-container">
            <p class="instagram-link"><a href="">Follow us<span class="arrow"></span></a></p>
          </div>
          <div class="insta-img-container">
            <img src=${i} alt="Instagram" />
            <img src=${m} alt="Instagram" />
            <img src=${b} alt="Instagram" />
            <img src=${k} alt="Instagram" />
            <img src=${w} alt="Instagram" />
          </div>
        </section>
        <div class="insta-bg-bottom"></div>
        <div class="bgc-lightblue"></div>
      </div>
    </main>
    <footer>
      <div class="footer-high">
        <ul class="footer-high-links">
          <li>
            <a href="">
              <p class="list-title">Stock List</p>
              <p class="text">在庫車両をご覧になりたい方はこちら</p>
            </a>
          </li>
          <li>
            <a href="">
              <p class="list-title">Feature</p>
              <p class="text">「バナナフィガロ」の特集サイトへ</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-low">
        <div class="footer-flex-left">
          <img class="logo" src=${a} alt="GTBサービスのロゴ"/>
          <address>
            <p class="address">〒444-0951<br>岡崎市北野町字一番訳5番地1<br><span class="tel-icon"></span>0564-31-7273</p>
          </address>
        </div>
        <div class="footer-flex-right">
          <ul class="footer-low-links">
            <li>
              <a href="">私たちについて</a>
              <ul>
                <li class="under-pages-links"><a href="">会社案内</a></li>
                <li class="under-pages-links"><a href="">アクセス</a></li>
              </ul>
            </li>
            <li>
              <a href="">事業案内</a>
              <ul>
                <li class="under-pages-links"><a href="">鈑金・塗装</a></li>
                <li class="under-pages-links"><a href="">整備・車検</a></li>
                <li class="under-pages-links"><a href="">新車・中古車販売</a></li>
                <li class="under-pages-links"><a href="">カスタムペイント</a></li>
              </ul>
            </li>
            <li><a href="">施工実績</a></li>
            <li><a href="">お問い合わせ</a></li>
          </ul>
          <div class="instagram-link-container">
            <p class="instagram-link"><a href="">Follow us<span class="arrow"></span></a></p>
          </div>
        </div>
      </div>
      <p class="copyright">&copy;2024 GBT service All Rights Reserved.</p>
    </footer>
  </div>
`;document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("textContainer");var e=s.innerHTML.replace(/<br\s*\/?>/gi,`
`);s.setAttribute("data-text",e)});
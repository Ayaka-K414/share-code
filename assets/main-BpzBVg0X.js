import"./hamburger-xYevmGbI.js";import{l as a,i as r,h as l}from"./hamburger-button-DJdXWerx.js";import{c}from"./close-button-D9acr4Xc.js";const i=""+new URL("../top/main.jpg",import.meta.url).href,t=""+new URL("../top/aboutus.jpg",import.meta.url).href,n=""+new URL("../top/service01.jpg",import.meta.url).href,o=""+new URL("../top/service02.jpg",import.meta.url).href,p=""+new URL("../top/service03.jpg",import.meta.url).href,g=""+new URL("../top/service04.jpg",import.meta.url).href,d=""+new URL("../top/works01.jpg",import.meta.url).href,f=""+new URL("../top/works02.jpg",import.meta.url).href,u=""+new URL("../top/works03.jpg",import.meta.url).href,m=""+new URL("../top/works04.jpg",import.meta.url).href,h=""+new URL("../top/works05.jpg",import.meta.url).href,v=""+new URL("../top/works06.jpg",import.meta.url).href,b=""+new URL("../top/instagram02.jpg",import.meta.url).href,w=""+new URL("../top/instagram03.jpg",import.meta.url).href,k=""+new URL("../top/instagram04.jpg",import.meta.url).href,x=""+new URL("../top/instagram05.jpg",import.meta.url).href;document.querySelector("#app").innerHTML=`
  <div>
    <header>
      <a href="#"><img class="logo" src=${a} alt="GTBサービスのロゴ" /></a>
      <nav>
        <li><a href="">私たちについて</a></li>
        <li><a href="">事業案内</a></li>
        <li><a href="">アクセス</a></li>
        <li><a href="">施工実績</a></li>
        <li class="list-contact"><a href="">お問い合わせ</a></li>
        <li class="insta"><a href=""><img src=${r} art="Instagramアイコン"></a></li>
      </nav>
      <button class="hamburger-button" id="hamburger-button">
        <img class="hamburger-icon" src="${l}" alt="ハンバーガーメニュー" />
      </button>
    </header>
    <div class="menu" id="hamburger-menu">
      <div class="text-align-right">
        <button class="close-button" id="close-button" >
          <img class="close-icon" src="${c}" alt="閉じる" />
        </button>
      </div>
      <div class="menu-list">
        <ul>
          <li><a href="">About us<span>私たちについて</span></a></li>
          <li><a href="">Service<span>事業案内</span></a></li>
          <li><a href="">Works<span>施工実績</span></a></li>
          <li class="icon"><a href="">Stock List<span>在庫車両掲載サイト</span></a></li>
          <li class="icon"><a href="">Feature<span>当社カスタム「バナナフィガロ」特集サイト</span></a></li>
          <li class="icon-insta"><a href="">Instagram<span>インスタグラム</span></a></li>
        </ul>
        <img class="logo" src=${a} alt="GTBサービスのロゴ" />
      </div>
    </div>
    <main>
      <div class="main-visual">
        <img src=${i} alt="メインビジュアル" />
        <div>
          <h1 id="textContainer" class="text-container">あなただけの<br>１台で、<br>カーライフを<br>もっと<br>楽しく。</h1>
          <h1 class="text-container-tablet">あなただけの１台で、<br>カーライフをもっと楽しく。</h1>
          <p><span>Just For One </span>Enjoy Car Life!</p>
        </div>
      </div>
      <div class="bgc-beige">
        <section class="about-us">
          <div class="about-us-container">
            <div>
              <h2 class="section-title">About us</h2>
              <p class="section-subtitle">・私たちについて・</p>
              <div class="about-us-img-tablet">
                <img class="about-us-img-tab" src=${t} alt="会社案内" />
              </div>
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
                <img class="card-img1" src=${n} alt="鈑金・塗装" />
                <figcaption>鈑金・塗装</figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img class="card-img2" src=${o} alt="整備・車検" />
                <figcaption>整備・車検</figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img class="card-img3" src=${p} alt="新車・中古車販売" />
                <figcaption>新車・中古車販売</figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img class="card-img4" src=${g} alt="カスタムペイント" />
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
                <img src=${d} alt="鈑金・塗装" />
                <figcaption>
                  <p class="card-title">カスタムペイント</p>
                  <p class="card-text">ミラジーノ グラインダーペイント<br>他にはない個性的な外観に。</p>
                </figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${f} alt="整備・車検" />
                <figcaption>
                  <p class="card-title">カスタムペイント</p>
                  <p class="card-text">ジムニー オールペン<br>おしゃれ仕様にカスタム。</p>
                </figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${u} alt="新車・中古車販売" />
                <figcaption>
                  <p class="card-title">カスタムペイント</p>
                  <p class="card-text">ハイエース オールペン<br>ブルー系のオリジナルカラー。</p>
                </figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${m} alt="カスタムペイント" />
                <figcaption>
                  <p class="card-title">カスタムペイント</p>
                  <p class="card-text">ミラジーノ オールペン<br>ブラウン×ホワイトでかわいらしく。</p>
                </figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${h} alt="カスタムペイント" />
                <figcaption>
                  <p class="card-title">鈑金・塗装</p>
                  <p class="card-text">アウディA7 側面キズ、凹みの修理<br>鈑金、塗装で元通りの仕上がりに。</p>
                </figcaption>
              </a>
            </figure>
            <figure>
              <a href="">
                <img src=${v} alt="カスタムペイント" />
                <figcaption>
                  <p class="card-title">カスタムペイント</p>
                  <p class="card-text">ネイキッド フルカスタム<br>ハマー風にカスタム。</p>
                </figcaption>
              </a>
            </figure>
          </div>
          <div class="works-link-container-tablet">
            <a class="works-link-tablet" href="">
              <p class="text">もっと見る</p>
              <p class="arrow">→</p>
            </a>
          </div>
        </section>
      </div>
      <div class="bgc-white">
        <div class="insta-bg-top"></div>
        <section class="instagram">
          <h2 class="section-title-shadow" data-text="Instagram">Instagram</h2>
          <div class="instagram-link-container">
            <p class="instagram-link"><a href="">Follow us<span class="arrow"></span></a></p>
          </div>
          <div class="insta-img-container">
            <img src=${i} alt="Instagram" />
            <img src=${b} alt="Instagram" />
            <img src=${w} alt="Instagram" />
            <img src=${k} alt="Instagram" />
            <img src=${x} alt="Instagram" />
          </div>
          <div class="instagram-link-container-tablet">
            <p class="instagram-link-tablet"><a href="">Follow us<span class="arrow"></span></a></p>
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
`;document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("textContainer");let e=s.innerHTML.replace(/<br\s*\/?>/gi,`
`);s.setAttribute("data-text",e)});

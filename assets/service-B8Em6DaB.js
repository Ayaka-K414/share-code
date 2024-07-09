import"./hamburger-xYevmGbI.js";import{l as i,i as a,h as e}from"./hamburger-button-DJdXWerx.js";import{c as l}from"./close-button-D9acr4Xc.js";const s=""+new URL("../service/service_main.jpg",import.meta.url).href,t=""+new URL("../service/repair01.jpg",import.meta.url).href,r=""+new URL("../service/repair02.jpg",import.meta.url).href,c=""+new URL("../service/repair03.jpg",import.meta.url).href,n=""+new URL("../service/maintenance01.jpg",import.meta.url).href,o=""+new URL("../service/maintenance02.jpg",import.meta.url).href,p=""+new URL("../service/maintenance03.jpg",import.meta.url).href,v=""+new URL("../service/sale01.jpg",import.meta.url).href,m=""+new URL("../service/sale02.jpg",import.meta.url).href,g=""+new URL("../service/sale03.jpg",import.meta.url).href,d=""+new URL("../service/custom01.jpg",import.meta.url).href,f=""+new URL("../service/custom02.jpg",import.meta.url).href,h=""+new URL("../service/custom03.jpg",import.meta.url).href;document.querySelector("#app").innerHTML=`
    <div>
        <header>
            <a href="#"><img class="logo" src=${i} alt="GTBサービスのロゴ" /></a>
            <nav>
                <li><a href="">私たちについて</a></li>
                <li><a href="">事業案内</a></li>
                <li><a href="">アクセス</a></li>
                <li><a href="">施工実績</a></li>
                <li class="list-contact"><a href="">お問い合わせ</a></li>
                <li class="insta"><a href=""><img src=${a} art="Instagramアイコン"></a></li>
            </nav>
            <button class="hamburger-button" id="hamburger-button">
                <img class="hamburger-icon" src="${e}" alt="ハンバーガーメニュー" />
            </button>
        </header>
        <div class="menu" id="hamburger-menu">
            <div class="text-align-right">
                <button class="close-button" id="close-button" >
                <img class="close-icon" src="${l}" alt="閉じる" />
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
                <img class="logo" src=${i} alt="GTBサービスのロゴ" />
            </div>
        </div>
        <main>
            <div class="bgc-lightblue">
                <section class="service">
                    <div class="service-container">
                        <div>
                            <h2 class="section-title">Service</h2>
                            <p class="section-subtitle">・事業内容・</p>
                            <img class="service-img-sp" src=${s} alt="会社案内" />
                            <div class="service-text">
                                <p>自動車販売、新車から中古車やカスタムカーなど様々な種類を取り扱いしており、お客様の満足のいくお車をお探しいたします。<br>自社で鈑金塗装修理をしておりますので購入してからのアフターケアもお任せください。<br>また、鈑金、塗装、車検、修理や、今お乗りのお車を自分好みの色にカスタムしたいなど車のことなら何でもご相談してください。</p>
                            </div>
                        </div>
                        <img class="service-img-pc" src=${s} alt="私たちについて" />
                    </div>
                </section>
            </div>
            <article>
                <div class="article-container">
                    <div class="title-flex">
                        <h3 class="vertical-title">Repair・Paint</h3>
                        <div class="service-content">
                            <h4>鈑金・塗装</h4>
                            <figure>
                            <div class="flex-img">
                                <img src=${t} alt="鈑金・塗装" />
                                <div class="img-small">
                                    <img src=${r} alt="鈑金・塗装" />
                                    <img src=${c} alt="鈑金・塗装" />
                                </div>
                            </div>
                            <figcaption>
                                <p class="figcaption-title">経験豊富な職人が丁寧に仕上げます。</p>
                                <p>小さな傷から大きな凹みまで、元通りにしてお返しします。<br>自動車の塗装は時間経過や紫外線によって微妙に変化していきますので、修理箇所だけではなく、車両全体に合わせた自然な色に調色をして塗装を行います。</p>
                            </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="article-container">
                    <div class="title-flex">
                        <h3 class="vertical-title">Maintenance</h3>
                        <div class="service-content">
                            <h4>整備・車検</h4>
                            <figure>
                            <div class="flex-img">
                                <img src=${n} alt="鈑金・塗装" />
                                <div class="img-small">
                                    <img src=${o} alt="鈑金・塗装" />
                                    <img src=${p} alt="鈑金・塗装" />
                                </div>
                            </div>
                            <figcaption>
                                <p class="figcaption-title">お客様のニーズに合わせた内容でご対応します。</p>
                                <p>お客様のお車の状態に必要な整備、必要でない整備内容を、判断させていただき、お見積りさせていただきます。作業内容の説明、料金の説明、作業日数、メンテナンスのアドバイス説明をさせていただき、お客様に納得していただいたうえで、作業にかからせていただきます。</p>
                            </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="article-container">
                    <div class="title-flex">
                        <h3 class="vertical-title">Sale</h3>
                        <div class="service-content">
                            <h4>新車・中古車販売</h4>
                            <figure>
                            <div class="flex-img">
                                <img class="obj-position-left" src=${v} alt="鈑金・塗装" />
                                <div class="img-small">
                                    <img src=${m} alt="鈑金・塗装" />
                                    <img src=${g} alt="鈑金・塗装" />
                                </div>
                            </div>
                            <figcaption>
                                <p class="figcaption-title">お客様のライフスタイルやご予算に合ったお車をご提案させていただきます。</p>
                                <p>各メーカー新車販売、オークションによる中古車販売をしております。<br>ご購入いただいた車両の車検や修理、鈑金、レッカーなど、アフターフォローも一括でお任せいただけます。</p>
                            </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="article-container">
                    <div class="title-flex">
                        <h3 class="vertical-title">Custom</h3>
                        <div class="service-content">
                            <h4>カスタムペイント</h4>
                            <figure>
                            <div class="flex-img">
                                <img src=${d} alt="鈑金・塗装" />
                                <div class="img-small">
                                    <img src=${f} alt="鈑金・塗装" />
                                    <img src=${h} alt="鈑金・塗装" />
                                </div>
                            </div>
                            <figcaption>
                                <p class="figcaption-title">あなただけの１台を心を込めて制作せていただきます。</p>
                                <p>全塗装からパーツ塗装までご対応いたします。<br>また車だけでなくバイクのタンク、ヘルメットなど装飾品の塗装もお任せください。<br>お客様のご要望に合わせたカスタムをご提案いたします。</p>
                            </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </article>
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
                <img class="logo" src=${i} alt="GTBサービスのロゴ"/>
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
`;

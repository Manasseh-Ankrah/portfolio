import React from "react";
import "./Blog.css";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";

import img_1 from "../images/ps5.webp";
import img_2 from "../images/amazon.webp";
import img_3 from "../images/oppo.gif";
import img_4 from "../images/apple.webp";
import img_5 from "../images/thermo.webp";
import img_6 from "../images/hotel.webp";
import img_7 from "../images/twitter.jpg";
import img_8 from "../images/instagram.webp";
import img_9 from "../images/wats.webp";
import img_10 from "../images/micro.webp";
import img_11 from "../images/windows.webp";
import img_12 from "../images/amazon_1.webp";

// import img_1 from "../images/code_2.jpeg";

import Footer from "../components/Footer";

function Blog() {
  return (
    <div className="blog">
      <Header />
      <div className="blog__container">
        {/* <img className="blog__bg" src={img_1} alt="" /> */}

        <div className="blog__text">
          <h2>Blog Post</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        <div className="blog__card__row">
          <div>
            <BlogCard
              title="The PS5 and Xbox Series X will be available for Walmart Plus members"
              image={img_1}
              author="Alice Newcome-Beill"
              date="23rd July 2021"
              path="https://www.theverge.com/2021/12/6/22821037/ps5-playstation-5-restock-available-walmart-plus-queue-deal-sale"
            />
          </div>
          <div>
            <BlogCard
              title="Microsoft tempts software pirates with 50 percent discount on Office"
              image={img_10}
              author="TOM WARREN"
              date="23rd July 2021"
              path="https://www.theverge.com/2021/12/9/22825774/microsoft-office-pirated-software-discount-offer"
            />
          </div>
          <div>
            <BlogCard
              title=" MacOS 12.1 will fix the MacBook Pro’s menu bar issues"
              image={img_4}
              author="Chaim Gartenberg"
              date="3rd May 2021"
              path="https://www.theverge.com/2021/12/8/22824702/apple-macos-12-1-update-macbook-pro-notch-m1-menu-bar-issue-fix"
            />
          </div>
          <div>
            <BlogCard
              title="Twitter is testing a new way to let you add content warnings to posts"
              image={img_7}
              author="Emma Roth"
              date="13th Febuary 2021"
              path="https://www.theverge.com/2021/12/8/22823870/twitter-content-warning-test"
            />
          </div>
          <div>
            <BlogCard
              title="
              Instagram head says it’s bringing back the chronological feed"
              image={img_8}
              author="Kim Lyons"
              date="8th December 2021"
              path="https://www.theverge.com/2021/12/8/22824609/instagram-chronological-feed-adam-mosseri"
            />
          </div>
          <div>
            <BlogCard
              title="Amazon fined $1.3 billion for abusing market position in Italy"
              image={img_2}
              author="James Vincent"
              date="9th December 2021"
              path="https://www.theverge.com/2021/12/9/22825759/amazon-antitrust-fine-italy-1-3-billion"
            />
          </div>{" "}
          <div>
            <BlogCard
              title="Oppo teases its first foldable, the Find N"
              image={img_3}
              author="Jon Porter"
              date="23rd July 2021"
              path="https://www.theverge.com/2021/12/9/22825716/oppo-find-n-foldable-inno-day-2021"
            />
          </div>
          <div>
            <BlogCard
              title="Amazon’s Smart Thermostat is very affordable today"
              image={img_5}
              author="Sheena Vasani"
              date="2nd August 2021"
              path="https://www.theverge.com/good-deals/2021/12/8/22822289/amazon-thermostat-sonos-samsung-980-pro-razer-kishi-airpods-govee-deal-sale"
            />
          </div>{" "}
          <div>
            <BlogCard
              title="Apple and Hyatt begin rolling out hotel keys in Apple Wallet"
              image={img_6}
              author="Emma Roth"
              date="17th June 2021"
              path="https://www.theverge.com/2021/12/8/22824367/apple-wallet-hyatt-hotel-key"
            />
          </div>{" "}
          <div>
            <BlogCard
              title="WhatsApp launches cryptocurrency payments pilot in the US"
              image={img_9}
              author="Jon Porter"
              date="23rd July 2021"
              path="https://www.theverge.com/2021/12/9/22825766/whatsapp-novi-digital-payments-us-pilot-paxos-stablecoin"
            />
          </div>
          <div>
            <BlogCard
              title="Microsoft is bringing back the weather widget on the Windows 11 taskbar"
              image={img_11}
              author="Tom Warren"
              date="23rd July 2021"
              path="https://www.theverge.com/2021/12/9/22825760/microsoft-windows-11-weather-widget-taskbar-voice-access-features"
            />
          </div>
          <div>
            <BlogCard
              title="Amazon is retiring Alexa — no, not that one"
              image={img_12}
              author="James Vincent "
              date="23rd July 2021"
              path="https://www.theverge.com/2021/12/9/22825744/amazon-retiring-alexa-web-ranking-sevice"
            />
          </div>
        </div>
      </div>
      <div className="blog__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;

// header
// bg image
// text
// portfolio card

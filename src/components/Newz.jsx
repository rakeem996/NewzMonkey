import React, { Component } from "react";
import NewzItem from "./NewzItem";
// import articleInfo from '../Articles';

export default class Newz extends Component {
  Articles = [
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Doug Feinberg",
      title:
        "LSU wins 1st NCAA title, Mulkey's 4th, beating Clark, Iowa - The Associated Press",
      description:
        "DALLAS (AP) — Kim Mulkey returned home to Louisiana wanting to bring LSU its first basketball championship . The Hall of Fame coach did just that in only her second year at the school.",
      url: "https://apnews.com/article/march-madness-lsu-iowa-kim-mulkey-caitlin-clark-49d1f101dea30d2da23410c6dd6c38e4",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/d2a6b52686ba49a285f039457a434c8d/3000.webp",
      publishedAt: "2023-04-03T00:11:15Z",
      content:
        "DALLAS (AP) Kim Mulkey returned home to Louisiana wanting to bring LSU its first basketball championship. The Hall of Fame coach did just that in only her second year at the school. Her Tigers used … [+5635 chars]",
    },

    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Paul LeBlanc",
      title:
        "Washington Post: DOJ has new evidence of potential obstruction in Trump Mar-a-Lago documents case - CNN",
      description:
        "The Justice Department has obtained new evidence suggesting potential obstruction by former President Donald Trump in the agency's probe of his handling of classified documents, The Washington Post reported Sunday.",
      url: "https://www.cnn.com/2023/04/02/politics/donald-trump-mar-a-lago-justice-department/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/220907152113-mar-a-lago-file-021021.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-04-02T23:51:00Z",
      content:
        "The Justice Department has obtained new evidence suggesting potential obstruction by former President Donald Trump in the agencys probe of his handling of classified documents, The Washington Post re… [+2193 chars]",
    },
    {
      source: {
        id: null,
        name: "Kotaku",
      },
      author: "Luke Plunkett",
      title: "Composer & Pop Star Ryuichi Sakamoto Has Died - Kotaku",
      description:
        "The Oscar-winning musician, who also worked in video games, was 71",
      url: "https://kotaku.com/ryuichi-sakamoto-composer-death-rip-revenant-oscar-ymo-1850292708",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ddb4c3f0fc6bb2d26308a672f066f8b8.jpg",
      publishedAt: "2023-04-02T23:30:00Z",
      content:
        "Ryuichi Sakamoto, the famed Japanese musician and composer, has died at the age of 71. He had been battling failing health for several years, having been diagnosed in 2014 with throat cancer, then b… [+1570 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "OPEC+ announces surprise oil output cuts - Reuters",
      description:
        "Saudi Arabia and other OPEC+ oil producers on Sunday announced further oil output cuts of around 1.16 million barrels per day, in a surprise move that analysts said would cause an immediate rise in prices and the United States called inadvisable.",
      url: "https://www.reuters.com/business/energy/sarabia-other-opec-producers-announce-voluntary-oil-output-cuts-2023-04-02/",
      urlToImage:
        "https://www.reuters.com/resizer/TDx9D8yjpy7-ADU3gYYZSZIuvs0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2H2OPMHY4BJG3FRB5Q5LIBMLR4.jpg",
      publishedAt: "2023-04-02T22:59:00Z",
      content:
        "DUBAI, April 2 (Reuters) - Saudi Arabia and other OPEC+ oil producers on Sunday announced further oil output cuts of around 1.16 million barrels per day, in a surprise move that analysts said would c… [+3506 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Radina Gigova, Mariya Knight",
      title:
        "Prominent Russian military blogger killed in St. Petersburg cafe blast - CNN",
      description:
        "A well-known Russian military blogger was killed in an explosion at a cafe in St. Petersburg on Sunday, officials said, in what appeared to be an audacious attack on a high-profile pro-Kremlin figure.",
      url: "https://www.cnn.com/2023/04/02/world/st-petersburg-vladen-tatarsky-explosion-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230402132512-vladlen-tatarsky.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-04-02T22:18:00Z",
      content:
        "A well-known Russian military blogger was killed in an explosion at a cafe in St. Petersburg on Sunday, officials said, in what appeared to be an audacious attack on a high-profile pro-Kremlin figure… [+5138 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Rebecca Bellan",
      title:
        "Tesla Q1 deliveries beat expectations as China helps boost sales - TechCrunch",
      description:
        "Tesla delivered 422,875 electric vehicles in the first quarter of 2023, just beating Wall Street estimates of around 420,000 units.",
      url: "https://techcrunch.com/2023/04/02/tesla-q1-deliveries-beat-expectations-as-china-helps-boost-sales/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/09/Tesla-Model-3-in-Snow.jpg?resize=1200,642",
      publishedAt: "2023-04-02T21:51:42Z",
      content:
        "Tesla said Sunday it delivered 422,875 electric vehicles in the first quarter of 2023, just beating Wall Street estimates of around 420,000 units. The company produced 440,808 vehicles in the same pe… [+3205 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Paris votes to ban rental e-scooters - BBC",
      description:
        "Almost 90% of votes cast favour banning the scooters in a city that pioneered them.",
      url: "https://www.bbc.com/news/world-europe-65154854",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/6B21/production/_129252472_gettyimages-1043739762.jpg",
      publishedAt: "2023-04-02T21:29:39Z",
      content:
        "People in Paris have voted to ban rental electric scooters in their city, dealing a blow to scooter operators and a triumph for road safety campaigners. Almost 90% of votes cast on Sunday favoured a… [+2211 chars]",
    },
    {
      source: {
        id: null,
        name: "POLITICO.eu",
      },
      author: "Charlie Duxbury",
      title:
        "Finnish PM Sanna Marin set for defeat in national vote - POLITICO Europe",
      description:
        "Center-right National Coalition Party leader Petteri Orpo expected to get first shot at forming a government.",
      url: "https://www.politico.eu/article/finland-election-pm-sanna-marin-defeat-national-vote/",
      urlToImage:
        "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2023/04/02/GettyImages-1250584443-scaled.jpg",
      publishedAt: "2023-04-02T21:24:16Z",
      content:
        "Finlands center-right National Coalition Party was on course to take power in a general election Sunday after voter concerns about the economic outlook fed dissatisfaction with Social Democrat incumb… [+3205 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Emily Mae Czachor",
      title: `Trump's former "fixer" Michael Cohen says criminal indictment is "solely about accountability" - CBS News`,
      description: `The former president was indicted by a grand jury investigating his role in a "hush money" payment made by Cohen to adult film star Stormy Daniels.`,
      url: "https://www.cbsnews.com/news/michael-cohen-donald-trump-criminal-indictment-is-solely-about-accountability/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/04/02/94eb8c7c-52e8-426a-a0dc-946e19b54316/thumbnail/1200x630/7e78dc8dbbf08623d1b089dbb0ef9bc9/michael-cohen-a.jpg",
      publishedAt: "2023-04-02T20:54:00Z",
      content: `Ahead of former President Donald Trump's upcoming arraignment on criminal charges, his ex-counsel and "fixer" Michael Cohen said in an interview that while the case is connected to a payment he made … [+4479 chars]`,
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Rep. Schiff to Psaki: McCarthy acting as 'surrogate criminal defense team' for Trump - MSNBC",
      description: null,
      url: "https://www.youtube.com/watch?v=RHYbEb_-LAg",
      urlToImage: null,
      publishedAt: "2023-04-02T20:30:01Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more Remind me later",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Alex Sherman",
      title:
        "WWE near deal to be sold to UFC parent Endeavor, sources say - CNBC",
      description:
        "WWE, which is controlled by Vince McMahon, has spent the past several months looking for a buyer.",
      url: "https://www.cnbc.com/2023/04/02/wwe-ufc-endeavor-deal.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107175168-1673019868457-gettyimages-90070808-58170713.jpeg?v=1680467003&w=1920&h=1080",
      publishedAt: "2023-04-02T20:23:23Z",
      content:
        "Vince McMahon's World Wrestling Entertainment is in advanced talks to be sold to Ari Emanuel's Endeavor Group, the parent company of UFC, according to people familiar with the matter. A deal could b… [+3441 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.Articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Newz Monkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <NewzItem
                  title={article.title}
                  description={article.description}
                  imageURL={article.urlToImage}
                  newsURL={article.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

import React from "react";
import Company from "./components/company";
import Contact from "./components/contact";
import Socials from "./components/socials";
import Links from "./components/links";
import Image from "./img/imageonline-co-placeholder-image.png";
import "./App.css";

function App() {

const footer = {
  company: {
    addressLine1: "Brzozowa 23",
    addressLine2: "Katowice 40-000",
    phone: "+48123456977",
    mail: "mail@example.com",
    name: "ABGF Sp. z o. o.",
    logo: Image
  },
  socials: {
    fb: "facebook.com",
    instagram: "instagram.com",
    twitter: "twitter.com",
  },
  links: {
    help: "/help",
    pay: "/pay",
    agreement: "/agreement",
    dashboard: "/dashboard",
    reading: "/reading",
    reports: "/reports",
    documents: "/documents"
  },
};



  console.log(footer.links.pay);
  return (
    <div className="app">
      {(footer.company.addressLine1 !== " ") && (footer.company.addressLine2 !== " ") && (footer.company.logo !== " ") && (footer.company.name !== " ") ? (
        <div className="company">
          <Company
            addressLine1={footer.company.addressLine1}
            addressLine2={footer.company.addressLine2}
            name={footer.company.name}
            logo={footer.company.logo}
          />
        </div>
      ) : null
      }
<div className="contact">
      {(footer.company.mail !== " ") && (footer.company.phone !== " ") ? (
        
        <div>
          <Contact
            mail={footer.company.mail}
            phone={footer.company.phone}
          />
        </div>
      ) : null
      }
      {(footer.socials.fb !== " ") && (footer.socials.instagram !== " ") && (footer.socials.twitter !== " ") ? (
        <div className="socials">
          <Socials
            fb={footer.socials.fb}
            instagram={footer.socials.instagram}
            twitter={footer.socials.twitter}
          />
        </div>
      ) : null
      }
      </div>
      {(footer.links.help !== " ") && (footer.links.pay !== " ") && (footer.links.agreement !== " ") && (footer.links.dashboard !== " ") && (footer.links.reading !== " ") && (footer.links.reports !== " ") ? (
        <div className="links">
          <Links
            help={footer.links.help}
            pay={footer.links.pay}
            agreement={footer.links.agreement}
            dashboard={footer.links.dashboard}
            reading={footer.links.reading}
            reports={footer.links.reports}
            document={footer.links.documents}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;

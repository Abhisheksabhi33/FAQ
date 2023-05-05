import { Component } from "react";

import { faqList } from "../../faqList";

import FAQ from "./../FAQ";

import "./index.css";

class FAQList extends Component {
  state = { faqData: faqList };

  render() {
    const { faqData } = this.state;
    return (
      <div className="faq-container">
        <h2 className="heading">Frequently Asked Questions</h2>
        <div className="faq-list-container">
          {faqData.map((eachFaq) => (
            <FAQ key={eachFaq.id} faq={eachFaq} />
          ))}
        </div>
      </div>
    );
  }
}

export default FAQList;

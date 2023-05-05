import { Component } from "react";
import Toggle from "../Toggle";

import "./index.css";

class FAQ extends Component {
  render() {
    const { faq } = this.props;
    const { question, answer } = faq;
    return (
      <Toggle className="faq-card">
        {(isOpen) => {
          return (
            <>
              <p className={isOpen ? "active-question" : "in-active-question"}>
                {question}
              </p>
              {isOpen ? <p className="active-answer">{answer}</p> : null}
            </>
          );
        }}
      </Toggle>
    );
  }
}

export default FAQ;



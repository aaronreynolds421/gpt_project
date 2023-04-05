import React from "react";

import "./whatGPT.css";
import { Feature } from "../../components";

const WhatGPT = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="GTP-3 is an OpenAI system that has unimaginable potetial" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond imagination
        </h1>
        <p>Explore Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Knowledgebase" text="" />
        <Feature title="Chatbots" text="" />
        <Feature title="Education" text="" />
      </div>
    </div>
  );
};

export default WhatGPT;

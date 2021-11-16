import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { RichText, InnerBlocks } from "@wordpress/block-editor";

const IconFAQs = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
  </svg>
);

const IconFAQ = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M13.25,16.74c0,0.69-0.53,1.26-1.25,1.26c-0.7,0-1.26-0.56-1.26-1.26c0-0.71,0.56-1.25,1.26-1.25 C12.71,15.49,13.25,16.04,13.25,16.74z M11.99,6c-1.77,0-2.98,1.15-3.43,2.49l1.64,0.69c0.22-0.67,0.74-1.48,1.8-1.48 c1.62,0,1.94,1.52,1.37,2.33c-0.54,0.77-1.47,1.29-1.96,2.16c-0.39,0.69-0.31,1.49-0.31,1.98h1.82c0-0.93,0.07-1.12,0.22-1.41 c0.39-0.72,1.11-1.06,1.87-2.17c0.68-1,0.42-2.36-0.02-3.08C14.48,6.67,13.47,6,11.99,6z M19,5H5v14h14V5 M19,3c1.1,0,2,0.9,2,2v14 c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2H19L19,3z" />
    </g>
  </svg>
);

registerBlockType("custom-block/faqs", {
  title: __("FAQs"),
  description: __("Write Frequently Asked Questions in it."),
  keywords: [__("faqs"), __("Frequently Asked Questions")],
  category: "common",
  icon: IconFAQs,
  example: {},

  attributes: {
    title: {
      type: "array",
      source: "children",
      selector: "h2",
      default: "Frequently Asked Questions",
    },
  },

  edit: (props) => {
    const {
      className,
      attributes: { title },
      setAttributes,
    } = props;

    const onChangeTitle = (value) => setAttributes({ title: value });

    const newClass = classnames(className, "wp-block-group faqs");

    return (
      <div className={newClass}>
        <div className="wp-block-group__inner-container">
          <RichText tagName="h2" placeholder={__("Write FAQs title…", "custom-block")} value={title} onChange={onChangeTitle} className="icon-faqs" />
          <InnerBlocks allowedBlocks={["custom-block/faq"]} />
        </div>
      </div>
    );
  },

  save: (props) => {
    const {
      className,
      attributes: { title },
    } = props;

    const newClass = classnames(className, "wp-block-group faqs");

    return (
      <div className={newClass}>
        <div className="wp-block-group__inner-container">
          <RichText.Content tagName="h2" value={title} className="icon-faqs" />
          <InnerBlocks.Content />
        </div>
      </div>
    );
  },
});

registerBlockType("custom-block/faq", {
  title: __("Single FAQ"),
  description: __("Write Frequently Asked Question in it."),
  keywords: [__("faq"), __("Frequently Asked Question")],
  category: "common",
  icon: IconFAQ,
  parent: ["custom-block/faq"],
  example: {},

  attributes: {
    question: {
      type: "array",
      source: "children",
      selector: ".faq__question",
    },
    answer: {
      type: "array",
      source: "children",
      selector: ".faq__answer",
    },
  },

  edit: (props) => {
    const {
      className,
      attributes: { question, answer },
      setAttributes,
    } = props;

    const onChangeQuestion = (value) => setAttributes({ question: value });

    const onChangeAnswer = (value) => setAttributes({ answer: value });

    const newClass = classnames(className, "faq");

    return (
      <div className={newClass}>
        <RichText tagName="p" placeholder={__("Write question here", "custom-block")} value={question} onChange={onChangeQuestion} className="faq__question" />
        <RichText tagName="p" placeholder={__("Write answer here", "custom-block")} value={answer} onChange={onChangeAnswer} className="faq__answer" />
      </div>
    );
  },

  save: (props) => {
    const {
      className,
      attributes: { question, answer },
    } = props;

    const newClass = classnames(className, "faq");

    return (
      <div className={newClass}>
        <RichText.Content tagName="p" value={question} className="faq__question" />
        <RichText.Content tagName="p" value={answer} className="faq__answer" />
      </div>
    );
  },
});

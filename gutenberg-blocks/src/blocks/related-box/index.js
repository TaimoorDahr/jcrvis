import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

const IconRelatedBox = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 100 100">
    <path fill="none" stroke="#000" strokeWidth="3.5" strokeMiterlimit="10" d="M50 50L25.875 77.188" />
    <path fill="none" stroke="#000" strokeWidth="3.5" strokeMiterlimit="10" d="M22.25 26.25L50 50" />
    <path fill="none" stroke="#000" strokeWidth="3.5" strokeMiterlimit="10" d="M62.25 19.687L50 50" />
    <path fill="none" stroke="#000" strokeWidth="3.5" strokeMiterlimit="10" d="M82.625 52.188L50 50" />
    <path fill="none" stroke="#000" strokeWidth="3.5" strokeMiterlimit="10" d="M69.922 80.578L50 50" />
    <circle cx="22.25" cy="26.25" r="7" stroke="#000" strokeWidth="3.5" strokeMiterlimit="10" fill="#fff" />
    <circle cx="82.625" cy="52.188" r="7.375" stroke="#000" strokeWidth="3.5" strokeMiterlimit="10" fill="#fff" />
    <circle cx="62.25" cy="19.687" r="9.125" stroke="#000" strokeWidth="3.5" strokeMiterlimit="10" fill="#fff" />
    <circle cx="50" cy="50" r="5.188" stroke="#000" strokeWidth="3.5" strokeMiterlimit="10" fill="#fff" />
    <circle cx="25.875" cy="77.188" r="7.375" stroke="#000" strokeWidth="3.5" strokeMiterlimit="10" fill="#fff" />
    <circle cx="69.922" cy="80.578" r="9.422" stroke="#000" strokeWidth="3.5" strokeMiterlimit="10" fill="#fff" />
  </svg>
);

registerBlockType("custom-block/related-box", {
  title: __("Related Article"),
  description: __("Write related article in it."),
  keywords: [__("related article"), __("related")],
  category: "common",
  icon: IconRelatedBox,
  example: {},

  attributes: {
    title: {
      type: "array",
      selector: ".related-box__link",
      source: "children",
      default: "",
    },
  },

  edit: (props) => {
    const {
      className,
      attributes: { title },
      setAttributes,
    } = props;

    const onChangeTitle = (title) => setAttributes({ title });

    const newClass = classnames(className, "related-box");

    return (
      <div className={newClass}>
        <div className="related-box__info">
          <strong>Related Article:</strong>
          <RichText className="related-box__link" tagName="p" placeholder={__("Related Article title…", "custom-block")} value={title} onChange={onChangeTitle} />
        </div>
      </div>
    );
  },

  save: (props) => {
    const {
      className,
      attributes: { title },
    } = props;

    const newClass = classnames(className, "related-box");

    return (
      <div className={newClass}>
        <div className="related-box__img">
          <div className="related-box__img-container">
            <img src="[related_box_img]" height="40" alt="Related Icon" />
          </div>
        </div>
        <div className="related-box__info">
          <strong>Related Article:</strong>
          <RichText.Content className="related-box__link" tagName="p" value={title} />
        </div>
      </div>
    );
  },
});

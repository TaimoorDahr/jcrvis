import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

const IconProsNCons = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -58 512 511" width="24">
    <path d="m236.667969 374.5c0 11.046875-8.953125 20-20 20h-196.667969c-11.046875 0-20-8.953125-20-20s8.953125-20 20-20h196.667969c11.042969 0 20 8.953125 20 20zm127-235.667969h60c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20h-60c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20zm-147 137h-196.667969c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h196.667969c11.046875 0 20-8.953125 20-20s-8.957031-20-20-20zm58.664062-157c0-65.246093 53.085938-118.332031 118.335938-118.332031 65.246093 0 118.332031 53.085938 118.332031 118.332031 0 65.25-53.085938 118.335938-118.332031 118.335938-65.25 0-118.335938-53.085938-118.335938-118.335938zm40 0c0 43.195313 35.140625 78.335938 78.332031 78.335938 43.195313 0 78.335938-35.140625 78.335938-78.335938 0-43.191406-35.140625-78.332031-78.332031-78.332031-43.195313 0-78.335938 35.140625-78.335938 78.332031zm176.667969 157h-196.667969c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h196.667969c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20zm0 78.667969h-196.667969c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h196.667969c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20zm-343.667969-255.667969h-10v-10c0-11.046875-8.953125-20-20-20s-20 8.953125-20 20v10h-10c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h10v10c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-10h10c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20zm88.335938 20c0 65.25-53.085938 118.335938-118.332031 118.335938-65.25 0-118.335938-53.085938-118.335938-118.335938 0-65.246093 53.085938-118.332031 118.332031-118.332031 65.25 0 118.335938 53.085938 118.335938 118.332031zm-40 0c0-43.191406-35.140625-78.332031-78.332031-78.332031-43.195313 0-78.335938 35.140625-78.335938 78.332031 0 43.195313 35.140625 78.335938 78.332031 78.335938 43.195313 0 78.335938-35.140625 78.335938-78.335938zm0 0" />
  </svg>
);

registerBlockType("custom-block/pros-n-cons", {
  title: __("Pros & Cons"),
  description: __("Write product pros & cons in it."),
  keywords: [__("pros & cons"), __("good"), __("bad")],
  category: "common",
  icon: IconProsNCons,
  example: {},

  attributes: {
    prosTitle: {
      type: "array",
      source: "children",
      selector: ".pros h4",
      default: "Pros",
    },
    consTitle: {
      type: "array",
      source: "children",
      selector: ".cons h4",
      default: "Cons",
    },
    pros: {
      type: "array",
      source: "children",
      selector: ".pros ul",
    },
    cons: {
      type: "array",
      source: "children",
      selector: ".cons ul",
    },
    productElement: {
      type: "boolean",
      default: true,
    },
  },

  edit: (props) => {
    const {
      className,
      attributes: { pros, cons, prosTitle, consTitle },
      setAttributes,
    } = props;

    const onChangePros = (value) => setAttributes({ pros: value });

    const onChangeCons = (value) => setAttributes({ cons: value });

    const onChangeProsTitle = (value) => setAttributes({ prosTitle: value });

    const onChangeConsTitle = (value) => setAttributes({ consTitle: value });

    const newClass = classnames(className, "wp-block-columns pnc");

    return (
      <div className={newClass}>
        <div className="wp-block-column pros">
          <RichText tagName="h4" placeholder={__("Write Pros title…", "custom-block")} value={prosTitle} onChange={onChangeProsTitle} />
          <RichText tagName="ul" multiline="li" placeholder={__("Write the pros…", "custom-block")} value={pros} onChange={onChangePros} />
        </div>
        <div className="wp-block-column cons">
          <RichText tagName="h4" placeholder={__("Write Cons title…", "custom-block")} value={consTitle} onChange={onChangeConsTitle} />
          <RichText tagName="ul" multiline="li" placeholder={__("Write the cons…", "custom-block")} value={cons} onChange={onChangeCons} />
        </div>
      </div>
    );
  },

  save: (props) => {
    const {
      className,
      attributes: { pros, cons, prosTitle, consTitle },
    } = props;

    const newClass = classnames(className, "wp-block-columns pnc");

    return (
      <div className={newClass}>
        <div className="wp-block-column pros">
          <RichText.Content tagName="h4" value={prosTitle} />
          <RichText.Content tagName="ul" multiline="li" value={pros} />
        </div>
        <div className="wp-block-column cons">
          <RichText.Content tagName="h4" value={consTitle} />
          <RichText.Content tagName="ul" multiline="li" value={cons} />
        </div>
      </div>
    );
  },
});

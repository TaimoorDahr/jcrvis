import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";
import { select } from "@wordpress/data";
import { useEffect } from "react";

const IconAtAGlance = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 512 512" width="24">
    <path d="m499.513 462.037h-44.098v-281.48c0-6.885-5.602-12.487-12.487-12.487h-28.491c-4.138 0-7.492 3.354-7.492 7.492s3.354 7.492 7.492 7.492h25.994v278.983h-71.167v-278.983h9.943c4.138 0 7.492-3.354 7.492-7.492s-3.354-7.492-7.492-7.492h-12.44c-6.885 0-12.487 5.602-12.487 12.487v281.481h-47.711v-186.627c0-6.885-5.602-12.487-12.487-12.487h-76.162c-6.885 0-12.487 5.602-12.487 12.487v186.626h-47.712v-104.683c0-6.885-5.602-12.487-12.487-12.487h-76.161c-6.885 0-12.487 5.602-12.487 12.487v33.505c0 4.138 3.354 7.492 7.492 7.492s7.492-3.354 7.492-7.492v-31.007h71.166v102.186h-71.166v-36.338c0-4.138-3.354-7.492-7.492-7.492s-7.492 3.354-7.492 7.492v36.338h-44.099c-6.885-.001-12.487 5.601-12.487 12.487v23.891c0 6.885 5.602 12.487 12.487 12.487h487.026c6.885 0 12.487-5.602 12.487-12.487v-23.891c0-6.886-5.602-12.488-12.487-12.488zm-279.096-184.128h71.167v184.129h-71.167zm276.598 218.01h-482.03v-18.896h49.094 86.151 62.696 86.151 62.695 86.151 49.093v18.896z" />
    <path d="m62.246 275.452-4.286 24.989c-1.195 6.968 1.616 13.877 7.335 18.032 3.232 2.348 7.013 3.542 10.819 3.542 2.93 0 5.875-.708 8.597-2.138l22.441-11.798 22.441 11.798c6.256 3.289 13.695 2.751 19.416-1.403 5.719-4.156 8.53-11.066 7.335-18.033l-4.286-24.989 18.155-17.697c5.062-4.934 6.85-12.176 4.666-18.899-2.185-6.724-7.887-11.532-14.883-12.549l-25.09-3.646-11.22-22.735c-3.129-6.34-9.464-10.277-16.534-10.277-7.069 0-13.404 3.938-16.532 10.277l-11.22 22.735-25.091 3.646c-6.996 1.017-12.698 5.824-14.883 12.549-2.184 6.724-.397 13.965 4.665 18.898zm-8.569-31.966c.2-.614.87-2.071 2.787-2.35l26.236-3.813c4.163-.603 7.76-3.217 9.623-6.99l11.734-23.775c.857-1.737 2.45-1.925 3.095-1.925s2.238.187 3.096 1.925l11.734 23.774c1.862 3.773 5.459 6.387 9.621 6.991l26.238 3.813c1.917.279 2.587 1.736 2.787 2.35s.514 2.187-.874 3.538l-18.984 18.506c-3.014 2.935-4.388 7.165-3.676 11.311l4.482 26.132c.327 1.909-.852 2.998-1.374 3.377-.523.379-1.923 1.165-3.635.262l-23.468-12.338c-1.862-.979-3.905-1.468-5.947-1.468s-4.085.49-5.947 1.468l-23.468 12.338c-1.715.902-3.113.117-3.635-.262-.522-.38-1.701-1.468-1.374-3.377l4.482-26.131c.712-4.147-.663-8.376-3.674-11.311l-18.986-18.506c-1.387-1.352-1.073-2.925-.873-3.539z" />
    <path d="m211.093 184.295-4.286 24.99c-1.195 6.967 1.615 13.876 7.334 18.031 3.232 2.348 7.013 3.541 10.82 3.541 2.93 0 5.875-.707 8.597-2.137l22.441-11.798 22.441 11.798c6.257 3.291 13.697 2.752 19.418-1.404 5.719-4.155 8.529-11.065 7.334-18.031l-4.287-24.99 18.156-17.697c5.062-4.934 6.849-12.176 4.665-18.899-2.184-6.724-7.887-11.531-14.884-12.548l-25.089-3.646-11.221-22.736c-3.129-6.339-9.464-10.277-16.533-10.277s-13.404 3.938-16.533 10.277l-11.22 22.736-25.091 3.646c-6.995 1.017-12.698 5.824-14.883 12.548-2.185 6.722-.398 13.965 4.665 18.9zm-8.57-31.966c.2-.614.87-2.07 2.787-2.349l26.24-3.813c4.162-.606 7.757-3.218 9.619-6.99l11.734-23.776c.857-1.737 2.45-1.924 3.095-1.924s2.238.187 3.095 1.924l11.736 23.779c1.861 3.77 5.457 6.381 9.62 6.987l26.238 3.813c1.917.279 2.587 1.737 2.787 2.35.199.614.513 2.186-.874 3.538l-18.986 18.507c-3.011 2.936-4.384 7.163-3.674 11.31l4.482 26.132c.327 1.909-.852 2.997-1.374 3.376-.522.378-1.922 1.166-3.636.262l-23.467-12.337c-1.861-.979-3.904-1.469-5.947-1.469-2.042 0-4.085.49-5.947 1.468l-23.468 12.338c-1.716.903-3.114.116-3.635-.262-.522-.379-1.7-1.467-1.373-3.376l4.482-26.132c.711-4.145-.662-8.373-3.675-11.311l-18.986-18.505c-1.386-1.353-1.072-2.925-.873-3.54z" />
    <path d="m359.94 86.899-4.286 24.989c-1.196 6.967 1.615 13.877 7.334 18.032 5.72 4.155 13.158 4.692 19.417 1.404l22.441-11.798 22.441 11.798c2.722 1.43 5.667 2.137 8.598 2.137 3.807 0 7.588-1.193 10.819-3.541 5.72-4.155 8.53-11.065 7.334-18.032l-4.286-24.989 18.155-17.697c5.063-4.934 6.85-12.176 4.666-18.898-2.184-6.724-7.887-11.532-14.883-12.549l-25.09-3.647-11.221-22.735c-3.129-6.339-9.464-10.277-16.533-10.277s-13.404 3.938-16.533 10.277l-11.221 22.735-25.089 3.647c-6.996 1.016-12.699 5.824-14.884 12.548-2.184 6.722-.397 13.965 4.665 18.899zm-8.569-31.965c.199-.614.869-2.071 2.787-2.35l26.235-3.813c4.166-.604 7.764-3.217 9.624-6.99l11.734-23.775c.858-1.737 2.451-1.924 3.095-1.924s2.239.187 3.095 1.924l11.735 23.776c1.862 3.772 5.46 6.386 9.62 6.989l26.239 3.813c1.917.279 2.588 1.737 2.787 2.35.199.614.513 2.186-.874 3.538l-18.987 18.508c-3.01 2.936-4.384 7.163-3.674 11.31l4.482 26.131c.327 1.91-.852 2.998-1.374 3.377-.521.38-1.921 1.165-3.636.262l-23.467-12.337c-1.862-.979-3.905-1.469-5.947-1.469-2.043 0-4.085.49-5.946 1.468l-23.468 12.338c-1.714.903-3.114.116-3.636-.262-.522-.38-1.7-1.467-1.374-3.377l4.482-26.129c.712-4.146-.661-8.374-3.674-11.313l-18.986-18.507c-1.387-1.352-1.072-2.925-.872-3.538z" />
  </svg>
);

registerBlockType("custom-block/at-a-glance", {
  title: __("At a Glance"),
  description: __("Place to show best, staff and budget pick products."),
  keywords: [__("three"), __("at a glance")],
  category: "common",
  icon: IconAtAGlance,
  example: {},

  attributes: {
    title: {
      type: "array",
      source: "children",
      selector: ".at-a-glance__title",
      default: "At a Glance:",
    },
    best_product: {
      type: "object",
    },
    staff_product: {
      type: "object",
    },
    budget_product: {
      type: "object",
    },
  },

  edit: (props) => {
    const {
      className,
      attributes: { title, best_product, staff_product, budget_product },
      setAttributes,
    } = props;

    const onChangeTitle = (title) => setAttributes({ title });

    const newClass = classnames(className, "at-a-glance");

    useEffect(() => {
      document.querySelector(".editor-post-publish-button__button").addEventListener("click", () => {
        setAttributes({ ...atAGlance() });
      });
    }, []);

    window.addEventListener("load", () => {
      setAttributes({ ...atAGlance() });
    });

    return (
      <div className={newClass}>
        <div className="at-a-glance__header">
          <RichText className="at-a-glance__title" tagName="p" placeholder={__("Write At a Glance title…", "custom-block")} value={title} onChange={onChangeTitle} />
        </div>
        <div className="at-a-glance__footer">
          {best_product && createPick(best_product, "best")}
          {staff_product && createPick(staff_product, "staff")}
          {budget_product && createPick(budget_product, "budget")}
        </div>
      </div>
    );
  },

  save: (props) => {
    const {
      className,
      attributes: { title, best_product, staff_product, budget_product },
    } = props;

    const newClass = classnames(className, "at-a-glance");

    return (
      <div className={newClass}>
        <div className="at-a-glance__header">
          <RichText.Content className="at-a-glance__title" tagName="p" value={title} />
        </div>
        <div className="at-a-glance__footer">
          {best_product && createPick(best_product, "best")}
          {staff_product && createPick(staff_product, "staff")}
          {budget_product && createPick(budget_product, "budget")}
        </div>
      </div>
    );
  },
});

const checkProductElement = (block, name) => block.name === name && block.attributes.productElement === true;

const getPickData = (productGroup) => {
  const pick = productGroup.innerBlocks.find((block) => checkProductElement(block, "custom-block/ribbon"))?.attributes?.content || "";
  const title = productGroup.innerBlocks.find((block) => checkProductElement(block, "core/heading"))?.attributes?.content;
  const award = productGroup.innerBlocks.find((block) => checkProductElement(block, "custom-block/product-award"))?.attributes?.content;
  const image = productGroup.innerBlocks.find((block) => checkProductElement(block, "core/image"))?.attributes?.url;
  const pros = productGroup.innerBlocks.find((block) => checkProductElement(block, "custom-block/pros-n-cons"))?.attributes?.pros || [];
  const button = productGroup.innerBlocks.find((block) => block.name === "core/buttons" && block.innerBlocks.find((button) => checkProductElement(button, "core/button")))?.innerBlocks?.find((button) => checkProductElement(button, "core/button"))?.attributes || {};

  return {
    pick,
    title,
    award,
    image,
    pros,
    button,
  };
};

const createPick = (pick_data, pick_class) => {
  const { pick, title, award, pros, button, image } = pick_data;

  const elem_title = !!title && <p className="at-a-glance__product__title">{title}</p>;
  const elem_award = !!award && <p className="at-a-glance__product__seo-title">{award}</p>;
  const elem_pros = !!pros && (
    <ul className="at-a-glance__product__pros">
      {pros.map((item, index) => (
        <li key={index}>{item.props?.children}</li>
      ))}
    </ul>
  );
  const elem_link = !!button?.url && (
    <a href={button?.url} className="at-a-glance__product__link" aria-label={title} target={button?.linkTarget} rel={button?.rel}>
      Check Price
    </a>
  );
  const elem_img = !!image && <img className="at-a-glance__product__img" src={image} alt={title} loading="lazy" />;

  return (
    <div className={`at-a-glance__product ${pick_class}`}>
      <span className={`at-a-glance__product__ribbon pick-${pick_class}`}>{pick}</span>
      {elem_award}
      {elem_img}
      {elem_title}
      {elem_pros}
      {elem_link}
    </div>
  );
};

const atAGlance = () => {
  const allBlocks = select("core/editor").getBlocks();
  const allGroups = allBlocks.filter((block) => block.name === "core/group");

  const best_pick = allGroups.find((group) => !!group.innerBlocks.find((block) => checkProductElement(block, "custom-block/ribbon") && block.attributes.pickType === "best"));
  const staff_pick = allGroups.find((group) => !!group.innerBlocks.find((block) => checkProductElement(block, "custom-block/ribbon") && block.attributes.pickType === "staff"));
  const budget_pick = allGroups.find((group) => !!group.innerBlocks.find((block) => checkProductElement(block, "custom-block/ribbon") && block.attributes.pickType === "budget"));

  const data_best_pick = !!best_pick && getPickData(best_pick);
  const data_staff_pick = !!staff_pick && getPickData(staff_pick);
  const data_budget_pick = !!budget_pick && getPickData(budget_pick);

  return { best_product: data_best_pick, staff_product: data_staff_pick, budget_product: data_budget_pick };
};

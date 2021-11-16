import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";
import { useEffect } from "react";
import { select, withSelect } from "@wordpress/data";
import { cleanForSlug } from "@wordpress/url";

const IconProductTable = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -21 512 512" width="24">
    <path d="m453.332031 469.332031h-394.664062c-32.363281 0-58.667969-26.300781-58.667969-58.664062v-352c0-32.363281 26.304688-58.667969 58.667969-58.667969h394.664062c32.363281 0 58.667969 26.304688 58.667969 58.667969v352c0 32.363281-26.304688 58.664062-58.667969 58.664062zm-394.664062-437.332031c-14.699219 0-26.667969 11.96875-26.667969 26.667969v352c0 14.699219 11.96875 26.664062 26.667969 26.664062h394.664062c14.699219 0 26.667969-11.964843 26.667969-26.664062v-352c0-14.699219-11.96875-26.667969-26.667969-26.667969zm0 0" />
    <path d="m496 160h-480c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h480c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
    <path d="m496 266.667969h-480c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h480c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
    <path d="m496 373.332031h-480c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h480c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
    <path d="m133.332031 469.332031c-8.832031 0-16-7.167969-16-16v-309.332031c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v309.332031c0 8.832031-7.167969 16-16 16zm0 0" />
    <path d="m256 469.332031c-8.832031 0-16-7.167969-16-16v-309.332031c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v309.332031c0 8.832031-7.167969 16-16 16zm0 0" />
    <path d="m378.667969 469.332031c-8.832031 0-16-7.167969-16-16v-309.332031c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v309.332031c0 8.832031-7.167969 16-16 16zm0 0" />
  </svg>
);

registerBlockType("custom-block/product-table", {
  title: __("Product Table"),
  description: __("Table to show all products."),
  keywords: [__("table"), __("product table")],
  category: "common",
  icon: IconProductTable,
  example: {},

  attributes: {
    products: {
      type: "array",
      default: [],
    },
    has_awards: {
      type: "boolean",
      default: false,
    },
    category: {
      type: "string",
      default: "",
    },
  },

  edit: (props) => {
    const {
      className,
      attributes: { products, has_awards, category },
      setAttributes,
    } = props;

    useEffect(() => {
      document.querySelector(".editor-post-publish-button__button").addEventListener("click", async () => {
        const _category =
          wp.data
            .select("core")
            .getEntityRecords("taxonomy", "category")
            ?.find((item) => item.id === select("core/editor").getCurrentPostAttribute("categories")[0])?.name || category;

        setAttributes({ ...getAllProducts(), category: _category });
      });
    }, []);

    window.addEventListener("load", async () => {
      const _category =
        wp.data
          .select("core")
          .getEntityRecords("taxonomy", "category")
          ?.find((item) => item.id === select("core/editor").getCurrentPostAttribute("categories")[0])?.name || category;

      setAttributes({ ...getAllProducts(), category: _category });
    });

    const newClass = classnames(className, "wp-block-table is-style-stripes auto-table");

    return (
      <figure className={newClass}>
        <table>
          <thead>
            <tr>
              {has_awards && <th>Award</th>}
              <th>Design</th>
              <th className="auto-table__category">{category}</th>
              <th>Retailer</th>
            </tr>
          </thead>
          <tbody>
            <CreateProductRows products={products} has_awards={has_awards} />
          </tbody>
        </table>
      </figure>
    );
  },

  save: (props) => {
    const {
      className,
      attributes: { products, has_awards, category },
    } = props;

    const newClass = classnames(className, "wp-block-table is-style-stripes auto-table");

    return (
      <figure className={newClass}>
        <table>
          <thead>
            <tr>
              {has_awards && <th>Award</th>}
              <th>Design</th>
              <th>{category}</th>
              <th>Retailer</th>
            </tr>
          </thead>
          <tbody>
            <CreateProductRows products={products} has_awards={has_awards} />
          </tbody>
        </table>
      </figure>
    );
  },
});

const CreateProductRows = ({ products, has_awards }) =>
  products.map((product, index) => {
    const { award, image, title, button, pick } = product;
    const { url, rel, linkTarget } = button;

    return (
      <tr key={index}>
        {has_awards && (
          <td>
            <strong>{award}</strong>
          </td>
        )}
        <td>
          <div className="table__product-image">
            {!!pick && <span className={`table__product__ribbon pick-${pick.toLowerCase()}`}>{pick} Pick</span>}
            {!!image && <img src={`${image}`} alt={`${title}`} loading="lazy" />}
          </div>
        </td>
        <td>
          <div className="table__product-title">{title && <a href={`#${cleanForSlug(title)}`}>{title}</a>}</div>
        </td>
        <td>
          <a href={url} rel={rel} target={linkTarget} className="wp-block-button__link table__product-button">
            Check Price
          </a>
        </td>
      </tr>
    );
  });

const getAllProducts = () => {
  const products = [];
  let has_awards = false;

  const checkProductElement = (block, name) => block.name === name && block.attributes.productElement === true;

  const allBlocks = select("core/editor").getBlocks();
  const allGroups = allBlocks.filter((block) => block.name === "core/group");
  const allProductGroups = allGroups.filter((group) => !!group.innerBlocks.find((block) => checkProductElement(block, "core/heading")));

  allProductGroups.forEach((productGroup) => {
    let pick = "";

    const _pick = productGroup.innerBlocks.find((block) => checkProductElement(block, "custom-block/ribbon"))?.attributes?.content;
    const title = productGroup.innerBlocks.find((block) => checkProductElement(block, "core/heading"))?.attributes?.content;
    const award = productGroup.innerBlocks.find((block) => checkProductElement(block, "custom-block/product-award"))?.attributes?.content;
    const image = productGroup.innerBlocks.find((block) => checkProductElement(block, "core/image"))?.attributes?.url;
    const button = productGroup.innerBlocks.find((block) => block.name === "core/buttons" && block.innerBlocks.find((button) => checkProductElement(button, "core/button")))?.innerBlocks?.find((button) => checkProductElement(button, "core/button"))?.attributes || {};

    switch (_pick) {
      case "Best Pick":
        pick = "Best";
        break;
      case "Staff Pick":
        pick = "Staff";
        break;
      case "Budget Pick":
        pick = "Budget";
        break;
    }

    if (award) has_awards = true;
    const product = {
      pick,
      title,
      award,
      image,
      button,
    };

    products.push(product);
  });

  return { products, has_awards };
};

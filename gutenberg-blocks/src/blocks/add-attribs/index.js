import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { Fragment } from "@wordpress/element";
import { InspectorAdvancedControls } from "@wordpress/block-editor";
import { createHigherOrderComponent } from "@wordpress/compose";
import { ToggleControl, SelectControl } from "@wordpress/components";

const checkName = (name) => {
  switch (name) {
    case "core/heading":
      return ["Title", "product-title"];
    case "core/image":
      return ["Image", "product-image"];
    case "core/table":
      return ["Specification Table", "product-specs"];
    case "core/button":
      return ["Link", "product-link"];
    default:
      return [];
  }
};

//restrict to specific block names
const allowedBlocks = ["core/heading", "core/image", "core/table", "core/button"];

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes(settings) {
  //check if object exists for old Gutenberg version compatibility
  //add allowedBlocks restriction
  if (typeof settings.attributes !== "undefined" && allowedBlocks.includes(settings.name)) {
    settings.attributes = { ...settings.attributes, productElement: { type: "boolean", default: false } };
  }

  if (typeof settings.attributes !== "undefined" && settings.name === "core/heading") {
    settings.attributes = { ...settings.attributes, sidebarIcon: { type: "string", default: "" } };
  }

  return settings;
}

/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withInspectorControl = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const { name, attributes, setAttributes, isSelected } = props;
    const { productElement, sidebarIcon } = attributes;
    const title = checkName(name)[0];

    return (
      <Fragment>
        <BlockEdit {...props} />
        {/* add allowedBlocks restriction */}
        <InspectorAdvancedControls>
          {isSelected && allowedBlocks.includes(name) && <ToggleControl label={__("Product " + title)} checked={!!productElement} onChange={() => setAttributes({ productElement: !productElement })} help={!!productElement ? __(`Selected as Product ${title} of this Group`) : __(`Not Selected as Product ${title}`)} />}
          {isSelected && name === "core/heading" && (
            <SelectControl
              label={__("Heading Sidebar TOC Icon")}
              value={sidebarIcon}
              onChange={(sidebarIcon) => setAttributes({ sidebarIcon })}
              options={[
                { value: "", label: "Product Icon" },
                { value: "recommendation", label: "Recommendations Icon" },
                { value: "summary", label: "Summary Icon" },
                { value: "conclusion", label: "Conclusion Icon" },
              ]}
            />
          )}
        </InspectorAdvancedControls>
      </Fragment>
    );
  };
}, "withInspectorControl");

/**
 * Add custom element class in save element.
 *
 * @param {Object} extraProps     Block element.
 * @param {Object} blockType      Blocks object.
 * @param {Object} attributes     Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */
function applyExtraClass(extraProps, blockType, attributes) {
  const { productElement, sidebarIcon } = attributes;

  const newClass = checkName(blockType.name)[1];

  if (typeof productElement !== "undefined" && !!productElement && allowedBlocks.includes(blockType.name)) {
    extraProps.className = classnames(extraProps.className, newClass);
  }

  if (typeof sidebarIcon !== "undefined" && blockType.name === "core/heading") {
    switch (sidebarIcon) {
      case "recommendation":
        extraProps.className = classnames(extraProps.className, "icon-recommendation");
        break;
      case "summary":
        extraProps.className = classnames(extraProps.className, "icon-summary");
        break;
      case "conclusion":
        extraProps.className = classnames(extraProps.className, "icon-conclusion");
        break;
    }
  }

  return extraProps;
}

const withClientIdClassName = createHigherOrderComponent((BlockListBlock) => {
  return (props) => {
    const {
      name,
      attributes: { productElement },
    } = props;

    const className = allowedBlocks.includes(name) && productElement ? checkName(name)[1] : "";

    return <BlockListBlock {...props} className={className} />;
  };
}, "withClientIdClassName");

//add filters

addFilter("blocks.registerBlockType", "pak/custom-attributes", addAttributes);

addFilter("editor.BlockEdit", "pak/custom-advanced-control", withInspectorControl);

addFilter("blocks.getSaveContent.extraProps", "pak/applyExtraClass", applyExtraClass);

addFilter("editor.BlockListBlock", "pak/applyEditorExtraClass", withClientIdClassName);

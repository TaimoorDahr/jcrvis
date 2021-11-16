import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { RichText, InspectorControls, BlockControls, AlignmentToolbar } from "@wordpress/block-editor";
import { PanelBody, PanelRow, ToggleControl } from "@wordpress/components";

const IconProductAward = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.35 122.88" height="24px" width="24px" fill="#000000">
    <g>
      <path fillRule="evenodd" clipRule="evenodd" d="M88.96,113.07L77.41,111l-5.73,10.26c-4.16,5.15-6.8-3.32-7.96-6.27L52.57,93.96 c2.57-0.89,5.67-3.46,8.85-6.35c6.35,0.13,12.27-0.97,16.62-6.51l12.81,24.75l1.11,2.38C92.84,111.32,92.38,113.36,88.96,113.07 L88.96,113.07z M46.18,0.01c2.17-0.09,3.88,0.66,5.61,1.76c2.19,1.39,4.66,4.14,7.71,5.88c4.29,2.45,12.23-0.93,16.29,5.11 c2.37,3.52,2.48,6.28,2.66,9.01c0.19,2.94,0.71,5.65,3.72,9.63c4.99,6.6,6.03,10.99,3.46,15.56c-1.75,3.12-5.44,4.85-6.29,6.83 c-1.82,4.2,0.19,7.37-2.29,12.27c-1.73,3.4-4.39,5.64-7.94,6.78c-2.99,0.96-5.99-0.43-8.39,0.58c-4.21,1.77-7.31,5.88-10.66,6.92 c-1.29,0.4-2.58,0.6-3.87,0.59c-1.29,0.01-2.58-0.19-3.87-0.59c-3.35-1.04-6.45-5.15-10.66-6.92c-2.4-1.01-5.4,0.39-8.39-0.58 c-3.55-1.14-6.21-3.38-7.94-6.78c-2.49-4.9-0.48-8.07-2.29-12.27c-0.85-1.98-4.54-3.71-6.29-6.83C4.16,42.39,5.2,38,10.19,31.41 c3.01-3.98,3.53-6.69,3.72-9.63c0.18-2.73,0.29-5.49,2.66-9.01c4.07-6.04,12.01-2.66,16.29-5.11c3.05-1.74,5.52-4.49,7.71-5.88 C42.29,0.67,44.01-0.09,46.18,0.01L46.18,0.01z M39.13,35.79l5.22,4.97l8.98-9.13c0.89-0.9,1.45-1.62,2.54-0.5l3.56,3.64 c1.17,1.16,1.11,1.83,0.01,2.91L46.38,50.52c-2.32,2.28-1.92,2.42-4.28,0.08l-8.97-8.92c-0.49-0.53-0.44-1.07,0.1-1.6l4.13-4.28 C37.99,35.14,38.49,35.18,39.13,35.79L39.13,35.79z M46.18,16.24c13.38,0,24.23,10.85,24.23,24.23c0,13.38-10.85,24.23-24.23,24.23 c-13.38,0-24.23-10.85-24.23-24.23C21.95,27.08,32.8,16.24,46.18,16.24L46.18,16.24z M3.39,113.07L14.95,111l5.73,10.26 c4.16,5.15,6.8-3.32,7.96-6.27l11.15-21.03c-2.57-0.89-5.67-3.46-8.85-6.35c-6.35,0.13-12.27-0.97-16.62-6.51L1.5,105.85 l-1.11,2.38C-0.49,111.32-0.03,113.36,3.39,113.07L3.39,113.07z" />
    </g>
  </svg>
);

registerBlockType("custom-block/product-award", {
  title: __("Product Award"),
  description: __("Add in a product group to set product award."),
  keywords: [__("product award"), __("award")],
  category: "common",
  icon: IconProductAward,
  attributes: {
    content: { type: "string", default: "" },
    productElement: {
      type: "boolean",
      default: true,
    },
    show: {
      type: "boolean",
      default: true,
    },
    alignment: {
      type: "string",
      default: "none",
    },
  },
  example: {},

  edit: (props) => {
    const {
      className,
      attributes: { content, show, alignment },
      setAttributes,
    } = props;

    const onChangeAlignment = (newAlignment) => {
      setAttributes({
        alignment: newAlignment === undefined ? "none" : newAlignment,
      });
    };

    const newClass = classnames(className, `product-award`);

    return (
      <>
        <BlockControls>
          <AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
        </BlockControls>
        <InspectorControls>
          <PanelBody title="Product Award Settings" initialOpen={true}>
            <PanelRow>
              <ToggleControl label="Show on Front-end" checked={show} onChange={(show) => setAttributes({ show })} />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <RichText style={{ textAlign: alignment }} className={newClass} tagName="p" placeholder={__("Write At a Product Award…", "custom-block")} value={content} onChange={(content) => setAttributes({ content })} />
      </>
    );
  },

  save: (props) => {
    const {
      className,
      attributes: { show, content, alignment },
    } = props;

    const newClass = classnames(className, `product-award has-text-align-${alignment}`);

    return show ? <RichText.Content className={newClass} tagName="p" value={content} /> : <></>;
  },
});

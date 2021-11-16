import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, SelectControl } from "@wordpress/components";

const IconRibbon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
  </svg>
);

registerBlockType("custom-block/ribbon", {
  title: __("Ribbon"),
  description: __("Add in a product group to make it specific pick."),
  keywords: [__("best pick"), __("staff pick"), __("budget pick"), __("ribbon")],
  category: "common",
  icon: IconRibbon,
  attributes: {
    pickType: { type: "string", default: "best" },
    content: { type: "string", default: "Best Pick" },
    productElement: {
      type: "boolean",
      default: true,
    },
  },
  example: {},

  edit: (props) => {
    const {
      className,
      attributes: { pickType, content },
      setAttributes,
    } = props;

    const onChangeType = (pickType) => {
      switch (pickType) {
        case "best":
          setAttributes({ pickType, content: "Best Pick" });
          break;
        case "staff":
          setAttributes({ pickType, content: "Staff Pick" });
          break;
        case "budget":
          setAttributes({ pickType, content: "Budget Pick" });
          break;
      }
    };

    const newClass = classnames(className, `product-ribbon pick-${pickType}`);

    return (
      <>
        <InspectorControls>
          <PanelBody title="Ribbon Settings" initialOpen={true}>
            <PanelRow>
              <SelectControl
                label="Ribbon Type"
                value={pickType}
                options={[
                  { label: "Best Pick", value: "best" },
                  { label: "Staff Pick", value: "staff" },
                  { label: "Budget Pick", value: "budget" },
                ]}
                onChange={onChangeType}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <span className={newClass}>{content}</span>
      </>
    );
  },

  save: (props) => {
    const {
      className,
      attributes: { pickType, content },
    } = props;

    const newClass = classnames(className, `product-ribbon pick-${pickType}`);

    return <span className={newClass}>{content}</span>;
  },
});

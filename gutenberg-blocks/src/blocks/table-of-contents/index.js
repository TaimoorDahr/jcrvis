import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "react";
import { cleanForSlug } from "@wordpress/url";

const IconTableOfContents = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="-76 30 552 340" width="24">
    <g transform="matrix(1,0,0,-1,4.5932203,1291.0078)">
      <path d="M-1,973.7c0-11.1-3.9-20.4-11.6-28.2s-17.1-11.6-28.2-11.6     s-20.4,3.9-28.2,11.6s-11.6,17.1-11.6,28.2s3.9,20.4,11.6,28.2c7.7,7.7,17.1,11.6,28.2,11.6s20.4-3.9,28.2-11.6     C-4.9,994.1-1,984.7-1,973.7z M-1,1079.8c0-11.1-3.9-20.4-11.6-28.2s-17.1-11.6-28.2-11.6s-20.4,3.9-28.2,11.6     s-11.6,17.1-11.6,28.2s3.9,20.4,11.6,28.2s17.1,11.6,28.2,11.6s20.4-3.9,28.2-11.6S-1,1090.8-1,1079.8z M290.8,993.5v-39.8     c0-1.8-0.7-3.4-2-4.7s-2.9-2-4.7-2h-252c-1.8,0-3.4,0.7-4.7,2c-1.3,1.3-2,2.9-2,4.7v39.8c0,1.8,0.7,3.4,2,4.7     c1.3,1.3,2.9,2,4.7,2h252c1.8,0,3.4-0.7,4.7-2S290.8,995.3,290.8,993.5z M-1,1185.9c0-11.1-3.9-20.4-11.6-28.2     s-17.1-11.6-28.2-11.6s-20.4,3.9-28.2,11.6s-11.6,17.1-11.6,28.2s3.9,20.4,11.6,28.2s17.1,11.6,28.2,11.6s20.4-3.9,28.2-11.6     S-1,1196.9-1,1185.9z M290.8,1099.7v-39.8c0-1.8-0.7-3.4-2-4.7s-2.9-2-4.7-2h-252c-1.8,0-3.4,0.7-4.7,2c-1.3,1.3-2,2.9-2,4.7     v39.8c0,1.8,0.7,3.4,2,4.7c1.3,1.3,2.9,2,4.7,2h252c1.8,0,3.4-0.7,4.7-2S290.8,1101.5,290.8,1099.7z M290.8,1205.8V1166     c0-1.8-0.7-3.4-2-4.7s-2.9-2-4.7-2h-252c-1.8,0-3.4,0.7-4.7,2c-1.3,1.3-2,2.9-2,4.7v39.8c0,1.8,0.7,3.4,2,4.7     c1.3,1.3,2.9,2,4.7,2h252c1.8,0,3.4-0.7,4.7-2S290.8,1207.6,290.8,1205.8z" />
    </g>
  </svg>
);

registerBlockType("custom-block/table-of-contents", {
  title: __("Table of Contents"),
  description: __("List of all H2 and H3 in the page."),
  keywords: [__("contents"), __("table of contents")],
  category: "common",
  icon: IconTableOfContents,
  example: {},

  attributes: {
    headings: {
      type: "array",
      default: [],
    },
  },

  edit: (props) => {
    const {
      className,
      attributes: { headings },
      setAttributes,
    } = props;

    const getHeadings = () => {
      const _headings = [];

      document.querySelectorAll(".is-root-container :is(h2,h3)").forEach((item) => {
        const tier = item.tagName === "H2" ? "2" : "3";
        const slug = cleanForSlug(item.innerText);
        const title = item.innerText;

        _headings.push({ tier, slug, title });
      });

      setAttributes({ headings: _headings });
    };

    useEffect(() => {
      document.querySelector(".editor-post-publish-button__button").addEventListener("click", async () => {
        getHeadings();
      });
    }, []);

    window.addEventListener("load", async () => {
      getHeadings();
    });

    const newClass = classnames(className, "toc");

    return (
      <div className={newClass}>
        <div className="toc_info">
          <strong className="toc_info_heading">Table of Contents</strong>
          <button className="toc_info_btn">
            <svg className="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"></path>
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
            </svg>
          </button>
        </div>
        <ul className="toc_content">
          {headings.map((item, index) => (
            <li tier={item.tier} key={index}>
              <a href={`#${item.slug}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className="toc_btn">
          <svg className="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
          <svg className="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"></path>
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
          </svg>
        </button>
      </div>
    );
  },

  save: (props) => {
    const {
      className,
      attributes: { headings },
    } = props;

    const newClass = classnames(className, "toc");

    const openToc = (e) => {
      console.log(e);
    };

    return (
      <div className={newClass}>
        <div className="toc_info">
          <strong className="toc_info_heading">Table of Contents</strong>
          <button className="toc_info_btn">
            <svg className="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"></path>
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
            </svg>
          </button>
        </div>
        <ul className="toc_content">
          {headings.map((item, index) => (
            <li tier={item.tier} key={index}>
              <a href={`#${item.slug}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className="toc_btn" onClick={(e) => openToc(e)}>
          <svg className="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
          <svg className="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"></path>
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
          </svg>
        </button>
      </div>
    );
  },
});

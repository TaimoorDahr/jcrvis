<hr class="sidebar__separator-1" />
<div class="sidebar__sticky">
    <div class="sidebar__sticky-container">
        <?php
        $visibility_sidebar_toc = get_post_meta_default(get_the_ID(), "_visibility_sidebar_toc");
        $visibility_sidebar_toc = $visibility_sidebar_toc === "default" ? (get_theme_mod("setting_visibility_sidebar_toc", true) ? "show" : "hide") : $visibility_sidebar_toc;
        if ($visibility_sidebar_toc != "hide") get_template_part("template-parts/sidebar/table-of-content");

        $xpath = dom_xpath();
        $staff_product = $xpath->query('//span[contains(@class,"product-ribbon pick-staff")]/..')[0];

        if (!empty($staff_product)) {
            $staff_title = "";
            $staff_link = "";
            $staff_img = "";
            $staff_img_attribs = (object) array("link" => "", "width" => "", "height" => "");

            $staff_title =  get_elem_value($xpath, './/*[(contains(@class,"product-title"))]', $staff_product);
            $staff_link = get_elem_attribute($xpath, './/div[(contains(@class,"product-link"))]//a[(contains(@class,"wp-block-button__link"))]', $staff_product, "href");
            $staff_img = $xpath->query('.//*[(contains(@class,"product-image"))]//img', $staff_product)[0];
            if (!empty($staff_img)) $staff_img_attribs = (object) array("link" => $staff_img->getAttribute("src"), "width" => $staff_img->getAttribute("width"), "height" => $staff_img->getAttribute("height")); ?>

            <div class="staff-pick">
                <h2 class="widget-title staff-pick__heading">Staff Pick</h2>
                <a class="staff-pick__link" href="<?= $staff_link ?>" rel="nofollow noopener noreferrer" target="_blank">
                    <img class="staff-pick__img" src="<?= $staff_img_attribs->link ?>" alt="<?= $staff_title ?>" loading="lazy" width="<?= $staff_img_attribs->width ?>" height="<?= $staff_img_attribs->height ?>" />
                    <p class="staff-pick__name"><?= $staff_title ?></p>
                </a>
            </div>
        <?php } ?>
    </div>
    <button class="back-to-top">
        <?php the_svg("expand_more") ?>
    </button>
</div>
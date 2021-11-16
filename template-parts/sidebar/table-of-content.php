<?php

$toc = hasToc("3", get_the_content());
if ($toc) {
    $class = hasToc("3", get_the_content())[1];
    $toc_list = hasToc("3", get_the_content())[2];
    $tiers = hasToc("3", get_the_content())[3]; ?>
    <div class="sidebar__toc">
        <h2 class="widget-title">Table of Content</h2>
        <ul class="sidebar__toc__list">
            <?php for ($i = 0; $i < count($toc_list); $i++) {
                $svg = "";
                if (strpos($class[$i], "icon-recommendation")) {
                    $svg = get_the_svg("recommendation");
                } else if (strpos($class[$i], "icon-summary")) {
                    $svg = get_the_svg("summary");
                } else if (strpos($class[$i], "icon-conclusion")) {
                    $svg = get_the_svg("conclusion");
                } else if (strpos($class[$i], "icon-faqs")) {
                    $svg = get_the_svg("faqs");
                } else {
                    $svg = get_the_svg("product");
                }
                $item_name = wp_strip_all_tags($toc_list[$i]);
                $item_link = sanitize_title($item_name);
                echo "<li class='sidebar__toc__list-item' heading='" . $tiers[$i] . "'>
                    <a class='sidebar__toc__link' href='#" . $item_link . "'>
                    " . $svg . "
                    <span class='sidebar__toc__name'>$item_name</span>
                    </a>
                </li>";
            } ?>
        </ul>
    </div>
<?php } ?>
<?php

$toc = hasToc("3", get_the_content());
if ($toc) {
    $toc_list = hasToc("3", get_the_content())[2];
    $tiers = hasToc("3", get_the_content())[3]; ?>
    <div class="toc">
        <div class="toc_info">
            <strong class="toc_info_heading">Table of Contents</strong>
            <button class="toc_info_btn"><?php the_svg("expand_more") ?></button>
        </div>
        <ul class="toc_content">
            <?php for ($i = 0; $i < count($toc_list); $i++) {
                $item_name = wp_strip_all_tags($toc_list[$i]);
                $item_link = sanitize_title($item_name);
                echo "<li tier='" . $tiers[$i] . "'><a href='#" . $item_link . "'>$item_name</a></li>";
            } ?>
        </ul>
        <button class="toc_btn"><?php the_svg("more_horiz") ?><?php the_svg("expand_more") ?></button>
    </div>
<?php } ?>
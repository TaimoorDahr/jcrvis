<?php
if (is_single() || is_page() || is_author() || is_category()) : ?>
    <div class="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
        <ul class="breadcrumb__list">
            <li class="breadcrumb__list-item" property="itemListElement" typeof="ListItem">
                <a class="breadcrumb__list-item__link" property="item" typeof="WebPage" href="<?= home_url("/") ?>">
                    <span class="breadcrumb__list-item__name" property="name">Home</span>
                </a>
                <meta property="position" content="1">
            </li>
            <?php if (is_single()) : ?>
                <li class="breadcrumb__list-item" property="itemListElement" typeof="ListItem">
                    <?php the_svg("chevron_right") ?>
                    <a class="breadcrumb__list-item__link" property="item" typeof="WebPage" href="<?= get_category_link(get_the_category()[0]->term_id) ?>">
                        <span class="breadcrumb__list-item__name" property="name"><?= get_the_category()[0]->name ?></span>
                    </a>
                    <meta property="position" content="2">
                </li>
            <?php endif; ?>
            <li class="breadcrumb__list-item" property="itemListElement" typeof="ListItem">
                <?php the_svg("chevron_right") ?>
                <span class="breadcrumb__list-item__name" property="name"><?php (is_single() || is_page()) ? the_title() : (is_category() ? single_cat_title() : the_author()) ?></span>
                <meta property="position" content="<?= (is_single() ? '3' : '2') ?>">
            </li>

        </ul>
    </div>
<?php endif; ?>
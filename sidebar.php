<sidebar class="column is-3" id="sidebar" itemtype="https://schema.org/WPSideBar" itemscope itemid="#sidebar">
    <?php if (get_theme_mod("setting_affiliate_disclosure", true)) { ?>
        <div class="box-support">
            <p><?php bloginfo('name') ?> is reader-supported. When you buy through links on our site, we may earn an affiliate commission.</p>
        </div>
        <hr class="sidebar__separator-1">
    <?php }

    $visibility_sidebar_popular_posts = get_post_meta_default(get_the_ID(), "_visibility_sidebar_popular_posts");
    $visibility_sidebar_popular_posts = ($visibility_sidebar_popular_posts === "default" ? (get_theme_mod("setting_visibility_sidebar_popular_posts", true) ? "show" : "hide") : $visibility_sidebar_popular_posts);
    if ($visibility_sidebar_popular_posts != "hide") get_template_part("template-parts/sidebar/popular-posts") ?>

    <hr class="sidebar__separator-1" />
    <?php dynamic_sidebar('primary') ?>
    <?php if (is_single()) get_template_part("template-parts/sidebar/sidebar-sticky") ?>

</sidebar>
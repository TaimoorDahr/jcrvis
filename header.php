<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head() ?>
</head>

<body <?php body_class() ?>>
    <header class="header" id="masthead" itemtype="https://schema.org/WPHeader" itemscope itemid="#masthead">
        <div class="container">
            <div class="topnav-inner">
                <div class="logo">
                    <?= the_custom_logo() ?>
                    <?php if (is_home()) echo '<h1>' . get_bloginfo('name') . '</h1>' ?>
                    <button class="hamburger" aria-label="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <nav class="navigation" role="navigation" vocab="https://schema.org/" typeof="SiteNavigationElement" resource="<?= home_url() ?>/#MainNavigation">
                    <?php wp_nav_menu(array('theme_location' => "primary_menu", 'link_before' => '<span property="name">', 'link_after' => '</span>')) ?>
                </nav>
            </div>
        </div>
    </header>
    <div class="site-content">
        <div class="container">
            <?php get_template_part("template-parts/other/breadcrumb"); ?>
            <div class="main">
                <?php do_action('before_page');

<?php do_action("after_page"); ?>
</div>
</div>
</div>
<footer class="footer" id="colophon" itemtype="https://schema.org/WPFooter" itemscope itemid="#colophon">
    <div class="container">
        <div class="footer__inner">
            <?php
            $footer_logo = get_theme_mod("setting_footer_logo", '');
            if (!empty($footer_logo)) {
                echo '<div class="footer__logo-container">';
                echo '<a href="/">';
                echo '<img class="footer__logo" src="' . $footer_logo . '" alt="' . get_bloginfo("name") . '" loading="lazy" />';
                echo '</a>';
                echo '</div>';
            }
            $footer_text = get_theme_mod("setting_company_text", '');
            if (!empty($footer_text)) {
                echo '<p class="footer__company-text">' . $footer_text . '</p>';
            } ?>

            <div class="footer__social">
                <?php
                $youtube_link = get_theme_mod("setting_social_youtube", "#");
                $facebook_link = get_theme_mod("setting_social_facebook", "#");
                $twitter_link = get_theme_mod("setting_social_twitter", "#");
                $tumblr_link = get_theme_mod("setting_social_tumblr", "#");
                $linkedin_link = get_theme_mod("setting_social_linkedin", "#");

                if (!empty($youtube_link)) { ?>
                    <a href="<?= $youtube_link ?>" class="footer__social-icon youtube" target="_blank" rel="follow external noopener noreferrer">
                        <?php the_svg("youtube") ?>
                    </a>
                <?php }
                if (!empty($facebook_link)) { ?>
                    <a href="<?= $facebook_link ?>" class="footer__social-icon facebook" target="_blank" rel="follow external noopener noreferrer">
                        <?php the_svg("facebook") ?>
                    </a>
                <?php }
                if (!empty($twitter_link)) { ?>
                    <a href="<?= $twitter_link ?>" class="footer__social-icon twitter" target="_blank" rel="follow external noopener noreferrer">
                        <?php the_svg("twitter") ?>
                    </a>
                <?php }
                if (!empty($tumblr_link)) { ?>
                    <a href="<?= $tumblr_link ?>" class="footer__social-icon tumblr" target="_blank" rel="follow external noopener noreferrer">
                        <?php the_svg("tumblr") ?>
                    </a>
                <?php }
                if (!empty($linkedin_link)) { ?>
                    <a href="<?= $linkedin_link ?>" class="footer__social-icon linkedin" target="_blank" rel="follow external noopener noreferrer">
                        <?php the_svg("linkedin") ?>
                    </a>
                <?php } ?>
            </div>
            <div class="footer__menu">
                <?php wp_nav_menu(array('theme_location' => "footer_menu")) ?>
            </div>
            <div class="footer__copyright">
                <?php
                $dmca_link = get_theme_mod("setting_dmca_link", "#");
                if (!empty($dmca_link)) { ?>
                    <div class="footer__copyright__dmca">
                        <a href="<?= $dmca_link ?>" target="_blank" rel="follow external noopener noreferrer">
                            <img src="<?= get_template_directory_uri() ?>/assets/img/dmca.png" alt="DMCA.com Protection Status" loading="lazy" width="121" height="24">
                        </a>
                    </div>
                <?php }

                $copyright_text = get_theme_mod("setting_copyright_text", '%%site_title%% © %%current_year%%. All rights reserved. Designed By <a href="https://www.bigtechies.com/" target="_blank">BigTechies</a>.');
                $searchVal = array("%%site_title%%", "%%current_year%%");
                $replaceVal = array(get_bloginfo('name'), date("Y"));
                $result = str_replace($searchVal, $replaceVal, $copyright_text); ?>
                <p class="footer__copyright__text"><?= $result ?></p>
            </div>
        </div>
    </div>
</footer>
<?php
$cookie_consent = get_theme_mod("setting_cookie_consent", false);
$cookie_consent_text = get_theme_mod("setting_cookie_consent_text", 'This website uses cookies in order to offer you the most relavant information.');
if ($cookie_consent != false) { ?>
    <div class="cookie-consent">
        <div class="cookie-consent__container">
            <p><?= $cookie_consent_text ?></p>
            <button class="button-cookie" id="rcc-confirm-button" aria-label="Accept cookies">I understand</button>
        </div>
    </div>
<?php }
?>

<style>
    @import "//fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap";
</style>
<?php wp_footer(); ?>
</body>

</html>
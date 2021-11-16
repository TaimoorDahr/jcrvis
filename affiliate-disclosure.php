<?php
/*
Template Name: Affiliate Disclosure
*/

get_header();

if (have_posts()) : while (have_posts()) : the_post(); ?>
        <div <?php post_class() ?> id="post-<?php the_ID(); ?>">
            <h1 class="entry-title"><?php the_title(); ?></h1>
            <div class="entry-content">
                <h2>FTC Disclosure Compliance Rules</h2>
                <p>In 2015, the Federal Trade Commission released their new rules for Disclosure Compliance.</p>
                <p>These rules are set in place to ensure that readers or viewers of web media are aware if the blogger or publisher is sponsored, endorsed, or partnered with a different company. The readers need to know if the content publisher is making money by sharing a link or product.</p>
                <p>In compliance with the FTC guidelines, please assume the following about links and posts on this site:</p>
                <p>Any/all of the links on <?= get_bloginfo("name") ?> are affiliate links for which I receive a small compensation from sales of certain items.</p>
                <h2>What Are Affiliate Links?</h2>
                <p>Purchases are made on external affiliate company websites: when a reader clicks on an affiliate link located on <?= get_bloginfo("name") ?> to purchase an item, the reader buys the item from the seller directly (not from <?= get_bloginfo("name") ?>).</p>
                <p>Amazon and/or other companies pay <?= get_bloginfo("name") ?> a small commission or other compensation for helping to bring customers to their website.</p>
                <p>Prices are exactly the same for readers whether they purchase is through an affiliate link or a non-affiliate link. Clicking an affiliate link and clicking a non-affiliate link does not change the price or anything else for the visitor.</p>
                <p><?= get_bloginfo("name") ?> uses two main types of affiliate programs:</p>
                <h2>1. Amazon affiliate links.</h2>
                <p><a href="<?= get_bloginfo("url") ?>"><?= get_bloginfo("name") ?></a> is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for website owners to earn fees by linking to Amazon.com and affiliated sites, as well as to other websites that may be affiliated with Amazon Service LLC Associates Program.</p>
                <h2>2. Product affiliate links.</h2>
                <p>If you click a product affiliate link and buy the product, then I will get a percentage of the sale or some other type of compensation.</p>
                <p>Again, prices are not different if you use these affiliate links. You will not pay more by clicking through to the link. These links are not “pay per click.”</p>
                <h2>What about sponsored content?</h2>
                <p>I do not write sponsored posts. I want to provide authentic, un-biased information. However, if a company would like to publish sponsored content on <?= get_bloginfo("name") ?>, I will disclose this clearly in the beginning of the post.</p>
                <p style="font-size: 14px;font-weight: 600;">The bottom line is that I only recommend products I use myself or that I would recommend to family and friends.</p>
                <p>Your purchase helps support my research efforts. Thank you very, very much! I appreciate you!</p>
            </div>
        </div>
<?php endwhile;
endif; ?>
<?php get_footer() ?>
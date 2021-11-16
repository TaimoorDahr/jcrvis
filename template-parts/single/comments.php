<?php $disqus_shortname = get_theme_mod("setting_disqus_shortname", "#");
if ($disqus_shortname === "#") { ?>
    <hr class="wp-block-separator" />
    <h5 style="color:red">Please add "Disqus Shortname" in Customize > Post Settings > Disqus Shortname to enable disqus</h5>
<?php } else if (!empty($disqus_shortname)) { ?>
    <hr class="wp-block-separator" />
    <div id="disqus_thread"></div>
    <script>
        let disqus_loaded = false;
        document.addEventListener("scroll", () => {
            if (window.scrollY >= 400 && disqus_loaded === false) {
                var disqus_config = function() {
                    this.page.url = "<?= wp_get_canonical_url(); ?>";
                    this.page.identifier = <?= get_the_ID(); ?>;
                };
                (function() {
                    var d = document,
                        s = d.createElement('script');

                    s.src = 'https://<?= $disqus_shortname ?>.disqus.com/embed.js';

                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();

                disqus_loaded = true;
            }
        })
    </script>
    <noscript>
        Please enable JavaScript to view the
        <a href="https://disqus.com/?ref_noscript" rel="nofollow">
            comments powered by Disqus.
        </a>
    </noscript>
<?php } else {
    comments_template();
} ?>
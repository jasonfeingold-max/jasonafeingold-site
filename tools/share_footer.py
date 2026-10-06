"""Shared markup for reading-page sharing, including future story imports."""
from html import escape
from urllib.parse import quote


def share_footer(title, relative_path):
    url = 'https://jasonafeingold.com/' + relative_path.removesuffix('.html')
    encoded_url = quote(url, safe='')
    text = quote(title + ' | Jason A. Feingold\n' + url, safe='')
    subject = quote(title + ' | Jason A. Feingold', safe='')
    return f'''        <section class="reading-share" aria-labelledby="share-heading" data-share-url="{escape(url, quote=True)}">
          <p id="share-heading">Like what you read? Share it.</p>
          <div class="reading-share-controls">
            <a href="https://www.facebook.com/sharer/sharer.php?u={encoded_url}" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook (opens in a new tab)">Facebook</a>
            <a href="https://bsky.app/intent/compose?text={text}" target="_blank" rel="noopener noreferrer" aria-label="Share on Bluesky (opens in a new tab)">Bluesky</a>
            <!--email_off--><a href="mailto:?subject={subject}&amp;body={text}" aria-label="Share by email">Email</a><!--/email_off-->
            <button type="button" data-copy-link hidden>Copy link</button>
            <button type="button" data-native-share hidden>Share…</button>
          </div>
          <p class="share-status" role="status" aria-live="polite"></p>
          <label class="share-fallback" hidden>Copy this link
            <input type="url" readonly value="{escape(url, quote=True)}" aria-label="Link to this piece" />
          </label>
        </section>
'''

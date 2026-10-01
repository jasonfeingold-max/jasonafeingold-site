# Jason A. Feingold Website Project Brief

## Purpose

This is Jason A. Feingold's author website. It presents his fiction, bibliography, anthology credits, and work published under the pen name Simon Easton.

## Established design

- Restrained modern fiction-author site
- Warm off-white palette and highly readable typography
- Strong Underwood/typewriter-derived identity without sepia or typewriter-font clichés
- Existing homepage and story-page design should be extended, not redesigned

## Story import workflow

1. Work in batches from final manuscript files.
2. Start the website story at the manuscript title so cover-page contact information, rights language, and word counts are omitted.
3. Preserve story text, italics, and scene breaks.
4. Generate pages from `tools/import_story_docx.py`.
5. Run its automatic comparison after every import. Text and paragraph structure, italic runs, and scene-break counts must all match.
6. Do not render every Word page. Visually inspect one representative website story page per batch unless unusual formatting requires more review.
7. Keep the work local until Jason explicitly approves publication. Do not push, deploy, or publish on implied approval.

## Current local status

- Homepage and bibliography are built.
- Bibliography includes Jason A. Feingold and Simon Easton sections.
- Eleven local story pages are linked from the bibliography.
- All eleven imported story pages pass the automatic comparison. See `STORY_IMPORT_REPORT.md`.
- The site has not been published with these changes.

## Pre-launch decisions still needed

- Confirm that `The Daily Mail v 3.docx` is the intended final text before publication.
- Confirm that the publication years and venue wording used on locally restored story pages are final.
- Supply or identify the final manuscript for `Comparing Notes` if it should receive a local reading page.
- Supply or identify the final manuscript for `I Let Him Fuck You` if it should receive a local reading page.
- Replace the temporary About copy with Jason's approved biography.
- Review one representative story page and the full bibliography locally.
- Publish only after Jason gives explicit approval.


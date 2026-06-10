---
name: brand-is-refresh
description: The product/brand is "Refresh", not "Savdo" — even though the repo folder is still named "Savdo Landing Page".
metadata:
  type: project
---

As of 2026-06-09 the brand was renamed from **Savdo** to **Refresh**. The landing page, logo, and all visible copy say "Refresh". The git repo / folder is still named "Savdo Landing Page" and some legacy/unused files (`components/Logo.tsx`, `components/POSCheckout.tsx`, `components/cosy/*`) plus dev-only source-map paths still contain "Savdo" — those are not user-facing.

**Why:** User stated "our name is no longer savdo its Refresh" and supplied the official logo (`public/refresh-logo.svg`, rendered via `components/landing/RefreshLogo.tsx` — brand-green mark `#2BB673` + currentColor wordmark).

**How to apply:** Use "Refresh" for any new brand text. The brand display name lives in `i18n.config.ts` `siteConfig.name` and the `messages/*.json` copy. Functional URLs/email are still `savdo.io` (unchanged — domain not migrated). The design system itself is also called "Refresh" (see the kit's CLAUDE.md). Related: [[no-claude-coauthor]].

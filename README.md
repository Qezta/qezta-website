<div id="top">
    <div align="center">
        <img alt='An abstract image of a donut-like object' title='Qezta' height=250 width=250 src='https://qezta.com/qezta.gif' />
        <h1 align='center'>qezta-website</h1>
        <strong>Qezta Website</strong>
    </div>

</div>

---

<div align='center'>
    <a href="https://github.com/Qezta/qezta-website/stargazers">
        <img src="https://img.shields.io/github/stars/Qezta/qezta-website?&style=for-the-badge&logoColor=white&color=purple&logo=starship" alt="stars"/>
    </a>
    <a href="https://github.com/Qezta/qezta-website/">
        <img src="https://img.shields.io/github/repo-size/Qezta/qezta-website?&style=for-the-badge&logoColor=white&color=purple&logo=github" alt="size"/>
    </a>
    <a href="https://github.com/Qezta/qezta-website/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/Qezta/qezta-website?&style=for-the-badge&logoColor=white&color=purple&logo=unlicense" alt="license"/>
    </a>
    <a href="https://github.com/nixos/nixpkgs">
        <img src="https://img.shields.io/badge/Nixpkgs-unstable-blue.svg?style=for-the-badge&logo=NixOS&logoColor=white&color=purple" alt="nixpkgs"/>
    </a>
    <a href="https://www.Qezta.com">
        <img src="https://img.shields.io/badge/site-www.Qezta.com-purple.svg?style=for-the-badge&logo=googlechrome&logoColor=white" alt="site"/>
    </a>
    <img src="https://img.shields.io/github/languages/top/Qezta/qezta-website?style=for-the-badge&color=purple" alt="repo-top-language"/>
</div>

---

<div align='center'>
    <a href="https://github.com/Qezta/qezta-website/actions/workflows/flake-check.yml">
        <img src="https://github.com/Qezta/qezta-website/actions/workflows/flake-check.yml/badge.svg" alt="flake-check"/>
    </a>
    <a href="https://github.com/Qezta/qezta-website/actions/workflows/gen-sitemap.yml">
        <img src="https://github.com/Qezta/qezta-website/actions/workflows/gen-sitemap.yml/badge.svg" alt="gen-sitemap"/>
    </a>
</div>

---

## Contents

- [Overview](#overview)
- [Structure](#structure)

---

## Overview

My personal website: <a href="https://divit.qezta.com/" target="_blank" alt="personal-website">divit.qezta.com</a>

Under development Qezta website: <a href="https://qezta.com/" target="_blank" alt="Qezta-website">www.Qezta.com</a>

## Structure

This monorepo is what Vercel deploys for both sites.

```mermaid
flowchart LR
  ui["packages/ui<br/>@qezta/ui"] --> divit["apps/divit"]
  ui --> qezta["apps/qezta"]
  divit --> v1["Vercel project<br/>qezta-website-divit"] --> d1(["divit.qezta.com"])
  qezta --> v2["Vercel project<br/>qezta-website-qezta"] --> d2(["qezta.com"])
```

| Path | Deployed as |
| --- | --- |
| `apps/divit` | [divit.qezta.com](https://divit.qezta.com) (Vercel project `qezta-website-divit`) |
| `apps/qezta` | [qezta.com](https://qezta.com) (Vercel project `qezta-website-qezta`) |
| `packages/ui` | Shared Svelte components and styles (`@qezta/ui`) |

<div align="right">

[![][back-to-top]](#top)

</div>

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square&color=purple

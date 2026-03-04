# gradstudent.me

Personal portfolio site for William Wyatt — economist, AI researcher, and builder.

## About

Single-page portfolio showcasing research, projects, publications, and skills. Built with plain HTML, CSS, and Bulma for layout. Retro NES-inspired design with interactive elements (radar charts, oscilloscope animations, terminal prompts).

**Live at** [gradstudent.me](https://gradstudent.me)

## Sections

- **Research** — Job market paper and behavioral economics studies on LLM decision-making
- **Projects** — Featured builds including [Sell Applesauce](https://sell.applesauce.chat), ApexLabel, Market Simulation, Geocoder, and more
- **Publications** — Papers spanning particle physics, blockchain, and AI/economics
- **Character Sheet** — Skills radar chart and proficiency levels

## Stack

- HTML + CSS + [Bulma](https://bulma.io)
- No build step, no frameworks
- Hosted on [Caddy](https://caddyserver.com) with automatic HTTPS

## Deploy

```bash
git push origin master
ssh root@fabian "/opt/site/deploy.sh"
```

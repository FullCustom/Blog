Narwhal Industries Website
Welcome to the official repository for the Narwhal Industries website, hosted at https://www.narwhalindustries.net/. This site showcases our boutique, handcrafted effects pedals and amplifiers, built with passion in Lemoyne, Pennsylvania. Narwhal Industries is a musician-owned business specializing in small-run, high-quality audio gear like the Cardigan Tube Preamp, Taco Overdrive, and legacy products such as the Pineapple BC108 Fuzz.
Project Overview
This repository contains the source code for a static website built with HTML and CSS, hosted on GitHub Pages. The site reflects our boutique ethos with a narwhal-inspired design, featuring oceanic blues (#2B3A67, #4E6E81), silver-gray (#F1F1F1), and coral accents (#FF6F61). It includes sections for our business model, product demos, dealer list, current products (Cardigan, Snorkeler, Taco, Gordon), legacy products, and about page.
Features

Responsive Design: Adapts to mobile and desktop with a clean, two-column layout.
Narwhal-Themed Aesthetic: Uses a cohesive color palette and Lato font for a modern, brand-aligned look.
Structured Content: Product and dealer information presented in tables for clarity.
Accessibility: High-contrast colors and semantic HTML for WCAG 2.1 compliance.
Handcrafted Vibe: Reflects our boutique, small-run production model, with no e-commerce but direct contact options via Full Custom Music Repair.

Repository Structure
FullCustom/Blog
├── _css/
│   └── style.css          # Main stylesheet with narwhal-themed styling
├── _img/
│   ├── business.png       # Image for Business Model section
│   ├── copper_blonde.jpg  # Cardigan product image
│   ├── gordon.jpg         # Gordon product image
│   ├── narwhal.jpg        # Logo for About section
│   ├── panavise.jpg       # Legacy Products image
│   ├── phoenix.jpg        # Demo section image
│   ├── snorkeler.jpg      # Snorkeler product image
│   └── taco.jpg           # Taco product image
├── _audio/
│   └── demo.mp3           # Audio demo for Pineapple Fuzz
├── index.html             # Main HTML file
└── README.md              # This file

Setup Instructions
Prerequisites

A web browser (e.g., Chrome, Firefox) to view the site locally.
Git for cloning the repository.
Optional: A local server (e.g., Live Server for VS Code) for development.

Running Locally

Clone the Repository:
git clone https://github.com/FullCustom/Blog.git
cd Blog


Open index.html:

Open index.html in a browser to view the site.
Or, use a local server (e.g., live-server or Python’s http.server):python -m http.server 8000

Then visit http://localhost:8000.


Install Google Fonts:

The site uses Lato via Google Fonts, included in index.html:<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">


No additional setup is needed unless offline development is required.



Deploying to GitHub Pages
The site is hosted on GitHub Pages at https://fullcustom.github.io/Blog/. To deploy updates:

Push changes to the main branch:git add .
git commit -m "Update site content"
git push origin main


Ensure GitHub Pages is enabled in the repository settings:
Go to Settings > Pages.
Set Source to main branch and / (root) folder.


Visit https://fullcustom.github.io/Blog/ to see updates (may take a few minutes).

Contributing
We welcome contributions to improve the Narwhal Industries website! To contribute:

Fork the repository.
Create a branch:git checkout -b feature/your-feature


Make changes (e.g., update _css/style.css, add images to _img/, or edit index.html).
Test locally to ensure responsiveness and accessibility.
Commit and push:git add .
git commit -m "Add your feature"
git push origin feature/your-feature


Open a pull request on GitHub, describing your changes.

Please follow our style guide:

Use the narwhal color palette (#2B3A67, #4E6E81, #FF6F61, #F1F1F1).
Maintain semantic HTML and WCAG 2.1 accessibility standards.
Test changes across devices (desktop, mobile).

Issues and Feedback
Found a bug or have a suggestion? Open an issue on GitHub or contact us via Full Custom Music Repair. Specific areas for improvement:

Enhancing product images or adding a gallery for Legacy Products.
Fixing audio player compatibility across browsers.
Refining the header design (current version reverted to original per feedback).

License
© 2025 Timothy Eisenacher. All rights reserved. The content and design of this site are proprietary, but the code is open for contributions under the terms outlined above.
Acknowledgments

Built by Timothy Eisenacher, musician and owner of Narwhal Industries.
Inspired by the narwhal and boutique music gear craftsmanship.
Hosted on GitHub Pages, with styling using Lato from Google Fonts.


Reward yourself with the quality tone and feel of Narwhal Industries! For inquiries, visit Full Custom Music Repair.

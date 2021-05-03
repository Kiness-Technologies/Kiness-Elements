/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Kiness Elements",
  tagline: "Fitness UI kit",
  url: "https://AntelaBrais.github.io",
  baseUrl: "/Kiness-Elements/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "AntelaBrais", // Usually your GitHub org/user name.
  projectName: "Kiness-Elements", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Kiness Elements",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "getting-started",
          position: "left",
          label: "Getting started",
        },
        { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/AntelaBrais/Kiness-Elements",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kiness Technologies. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/AntelaBrais/Kiness-Elements/tree/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const siteUrl = 'https://hivevision.dev';
const tagline = 'Pollen and nectar detection for FTC robots. AprilTags are next.';
const logoUrl = `${siteUrl}/favicon-512.png`;

// Structured data so Google reads the site name and logo as "Hive Vision"
// (not "GitHub") and understands what the project is.
const structuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Hive Vision',
      alternateName: ['Hive Vision FTC', 'HiveVision'],
      url: `${siteUrl}/`,
      logo: { '@type': 'ImageObject', url: logoUrl, width: 512, height: 512 },
      sameAs: [
        'https://github.com/hivevisionftc',
        'https://discord.gg/ga5WphW4QZ',
        'https://www.instagram.com/hivevisionftc/',
        'https://www.youtube.com/@HiveVisionFTC',
        'https://www.tiktok.com/@hivevisionftc',
        'https://x.com/hivevisionftc',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Hive Vision',
      description: tagline,
      inLanguage: 'en',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Hive Vision',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Android',
      url: `${siteUrl}/`,
      description: tagline,
      license: 'https://opensource.org/licenses/MIT',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      sameAs: ['https://github.com/hivevisionftc/Hive-Vision'],
    },
  ],
});

// https://astro.build
export default defineConfig({
    site: 'https://hivevision.dev',
  integrations: [
    sitemap(),
    starlight({
        components: {
          ThemeProvider: './src/components/ForceDarkTheme.astro',
          ThemeSelect: './src/components/EmptyComponent.astro',
        },
      plugins: [
        starlightThemeBlack({
          // --- NAVLINKS FIXED CONTEXT ---
          navLinks: [
            {
              label: 'Docs',
              link: '/overview/overview',
            },
            {
              label: 'About',
              link: '/overview/aboutus',
            }
          ],
          disableDarkmodeToggle: true,
        }),
      ],
      title: 'Hive Vision',
      favicon: '/favicon-48.png',

      head: [
        {
          tag: 'script',
          attrs: {
            src: '/honeycomb.js',
            type: 'module',
          },
        },
        // --- SEARCH ENGINE / INDEXING ---
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#000000' },
        },
        // --- FAVICONS / SEARCH RESULT LOGO ---
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192.png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
        // --- TWITTER CARD META TAGS ---
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:title',
            content: 'Hive Vision',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:description',
            content: tagline,
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: `${siteUrl}/og.png`,
          },
        },
        // --- OPEN GRAPH META TAGS ---
        {
          tag: 'meta',
          attrs: {
            property: 'og:title',
            content: 'Hive Vision',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content: tagline,
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: `${siteUrl}/og.png`,
          },
        },
        { tag: 'meta', attrs: { property: 'og:image:type', content: 'image/png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: 'Hive Vision logo',
          },
        },
        // --- STRUCTURED DATA (site name + logo) ---
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: structuredData,
        },
      ],

      customCss: ['./src/styles/global.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/hivevisionftc', target: '_blank' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/ga5WphW4QZ', target: '_blank' }
      ],
      sidebar: [
        {
          label: 'Overview',
          items: [
            { label: 'What is Hive Vision?', slug: 'overview/overview' },
          ],
        },
        {
          label: 'Installation',
          items: [
            { label: 'Limelight 3A', slug: 'installation/limelight' },
            { label: 'Webcam', slug: 'installation/webcam'}
          ],
        },
       {
         label: 'Usages',
         items: [
           {
             label: 'Limelight 3A',
             collapsed: true,
             items: [
               { label: 'TeleOp- Driving', link: 'reference/teleop' },
               { label: 'TeleOp- Pathing', link: 'reference/auto' }
             ]
           },
           {
             label: 'Webcam',
             collapsed: true,
             items: [
               { label: 'Teleop- Driving', link: 'reference/webcamteleop' },
             ]
           }
         ]
       }
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
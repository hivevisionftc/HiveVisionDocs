// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build
export default defineConfig({
    site: 'https://hivevisionftc.github.io',
    base: '/HiveVisionDocs/',
  integrations: [
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
      favicon: '/hive.png',

      head: [
        {
          tag: 'script',
          attrs: {
            src: '/HiveVisionDocs/honeycomb.js',
            type: 'module',
          },
        },
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
            name: 'twitter:image',
            content: '/HiveVisionDocs/hive.png',
          },
        },
        // --- DISCORD / OPEN GRAPH META TAGS ---
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
            content: 'Documentation for Hive Vision FTC',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: '/HiveVisionDocs/hive.png',
          },
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
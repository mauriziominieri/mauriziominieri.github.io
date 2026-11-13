import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import {defineConfig, Plugin} from 'vite';

function readBrandAccentFromCss(rootDir: string): string | null {
  try {
    const cssPath = path.resolve(rootDir, 'src/index.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    const match = cssContent.match(/--brand-accent:\s*(#[0-9a-fA-F]{3,8})\s*;/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

function syncAccentInFiles(rootDir: string, accent: string): void {
  const indexHtmlPath = path.resolve(rootDir, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    const html = fs.readFileSync(indexHtmlPath, 'utf8');
    const nextHtml = html
      .replace(
        /(<meta\s+name="theme-color"\s+content=")#[0-9a-fA-F]{3,8}("\s*\/?>)/i,
        `$1${accent}$2`
      )
      .replace(
        /(<meta\s+name="msapplication-TileColor"\s+content=")#[0-9a-fA-F]{3,8}("\s*\/?>)/i,
        `$1${accent}$2`
      );
    if (nextHtml !== html) {
      fs.writeFileSync(indexHtmlPath, nextHtml, 'utf8');
    }
  }

  const notFoundPath = path.resolve(rootDir, 'public/404.html');
  if (fs.existsSync(notFoundPath)) {
    const html404 = fs.readFileSync(notFoundPath, 'utf8');
    const next404 = html404
      .replace(
        /(<meta\s+name="theme-color"\s+content=")#[0-9a-fA-F]{3,8}("\s*\/?>)/i,
        `$1${accent}$2`
      )
      .replace(/(--brand-accent:\s*)#[0-9a-fA-F]{3,8}(\s*;)/, `$1${accent}$2`);
    if (next404 !== html404) {
      fs.writeFileSync(notFoundPath, next404, 'utf8');
    }
  }

  const manifestPath = path.resolve(rootDir, 'public/site.webmanifest');
  if (fs.existsSync(manifestPath)) {
    const manifest = fs.readFileSync(manifestPath, 'utf8');
    const nextManifest = manifest.replace(
      /("theme_color":\s*")#[0-9a-fA-F]{3,8}(")/,
      `$1${accent}$2`
    );
    if (nextManifest !== manifest) {
      fs.writeFileSync(manifestPath, nextManifest, 'utf8');
    }
  }

  const browserConfigPath = path.resolve(rootDir, 'public/browserconfig.xml');
  if (fs.existsSync(browserConfigPath)) {
    const xml = fs.readFileSync(browserConfigPath, 'utf8');
    const nextXml = xml.replace(
      /(<TileColor>)#[0-9a-fA-F]{3,8}(<\/TileColor>)/i,
      `$1${accent}$2`
    );
    if (nextXml !== xml) {
      fs.writeFileSync(browserConfigPath, nextXml, 'utf8');
    }
  }
}

function brandAccentSyncPlugin(): Plugin {
  let rootDir = __dirname;
  return {
    name: 'brand-accent-sync',
    configResolved(config) {
      rootDir = config.root;
      const accent = readBrandAccentFromCss(rootDir);
      if (accent) {
        syncAccentInFiles(rootDir, accent);
      }
    },
    buildStart() {
      const accent = readBrandAccentFromCss(rootDir);
      if (accent) {
        syncAccentInFiles(rootDir, accent);
      }
    },
    transformIndexHtml(html) {
      const accent = readBrandAccentFromCss(rootDir);
      if (!accent) return html;
      return html
        .replace(
          /(<meta\s+name="theme-color"\s+content=")#[0-9a-fA-F]{3,8}("\s*\/?>)/i,
          `$1${accent}$2`
        )
        .replace(
          /(<meta\s+name="msapplication-TileColor"\s+content=")#[0-9a-fA-F]{3,8}("\s*\/?>)/i,
          `$1${accent}$2`
        );
    },
  };
}

export default defineConfig({
  plugins: [brandAccentSyncPlugin(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    sourcemap: false,
    minify: 'esbuild',
  },
  esbuild: {
    legalComments: 'none',
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});

const siteConfig = {
  downloads: {
    windowsUrl: "https://github.com/Pistachio-Studio-Dev/RhythmDash/releases/download/V1.0.0/RhythmDash-Windows.zip",
    windowsMeta: "263.3 MB",
    macosUrl: "https://github.com/Pistachio-Studio-Dev/RhythmDash/releases/download/V1.0.0/RhythmDash-macOS.zip",
    macosMeta: "285.6 MB"
  }
};

const downloadTargets = {
  windows: {
    href: siteConfig.downloads.windowsUrl,
    meta: siteConfig.downloads.windowsMeta
  },
  macos: {
    href: siteConfig.downloads.macosUrl,
    meta: siteConfig.downloads.macosMeta
  }
};

for (const [platform, config] of Object.entries(downloadTargets)) {
  const button = document.querySelector(`[data-download="${platform}"]`);
  const meta = document.querySelector(`[data-meta="${platform}"]`);

  if (button && config.href) {
    button.href = config.href;
    button.toggleAttribute("download", !/^https?:\/\//i.test(config.href));
  }

  if (meta && config.meta) {
    meta.textContent = config.meta;
  }
}

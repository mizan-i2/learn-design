export default function ThemeScript() {
  const script = `
    (function () {
      var theme = localStorage.getItem("psdbim-theme");
      if (!theme && window.matchMedia("(prefers-color-scheme: light)").matches) {
        theme = "light";
      }
      if (theme === "light" || theme === "dark") {
        document.documentElement.setAttribute("data-theme", theme);
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

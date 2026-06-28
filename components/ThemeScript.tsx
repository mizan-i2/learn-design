export default function ThemeScript() {
  const script = `
    (function () {
      var theme = localStorage.getItem("psdbim-theme");
      if (theme !== "light" && theme !== "dark") {
        theme = "dark";
      }
      document.documentElement.setAttribute("data-theme", theme);
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

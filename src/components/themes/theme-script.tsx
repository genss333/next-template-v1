const ThemeScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const theme = localStorage.getItem('theme');
            let isDark;
            if (theme === 'dark') {
              isDark = true;
            } else if (theme === 'light') {
              isDark = false;
            } else {
              // system preference
              isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
            document.documentElement.classList.toggle('dark', isDark);

            // Listen system theme changes
            window.matchMedia('(prefers-color-scheme: dark)')
              .addEventListener('change', (e) => {
                const t = localStorage.getItem('theme');
                if (!t || t === 'system') {
                  document.documentElement.classList.toggle('dark', e.matches);
                }
              });
          })();
        `,
      }}
    />
  );
};

export default ThemeScript;

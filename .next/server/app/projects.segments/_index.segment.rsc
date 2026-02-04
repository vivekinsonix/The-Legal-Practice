1:"$Sreact.fragment"
3:I[68136,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"DrawerProvider"]
4:I[17179,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
5:I[60309,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"StoreInitClient"]
6:I[82167,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
7:I[52257,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
8:I[5494,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
9:I[39756,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/c81db6e24f0cfdeb.js"],"default"]
a:I[37457,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/c81db6e24f0cfdeb.js"],"default"]
e:I[16596,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
f:I[15899,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
:HL["/_next/static/chunks/2758613b31b98cfa.css","style"]
2:T832,
    try {
      const storageMode = window.localStorage.getItem("flowbite-theme-mode");
      const isStorageModeValid = storageMode === "light" || storageMode === "dark" || storageMode === "auto";
      const resolvedMode = (isStorageModeValid ? storageMode : null) ?? undefined ?? "auto";
      const computedMode =
        resolvedMode === "auto" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : resolvedMode;
      const className = "dark";

      if (computedMode === "dark") {
        document.documentElement.classList.add(className);
      } else {
        document.documentElement.classList.remove(className);
      }
      localStorage.setItem("flowbite-theme-mode", resolvedMode);

      // Add listener for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", (e) => {
        const storageMode = window.localStorage.getItem("flowbite-theme-mode");
        const isStorageModeValid = storageMode === "light" || storageMode === "dark" || storageMode === "auto";
        const resolvedMode = isStorageModeValid ? storageMode : "auto";

        if (resolvedMode === "auto") {
          if (e.matches) {
            document.documentElement.classList.add(className);
          } else {
            document.documentElement.classList.remove(className);
          }
        }
      });

      // Add listener for storage changes
      window.addEventListener("storage", (e) => {
        if (e.key === "flowbite-theme-mode") {
          const newMode = e.newValue;
          const isStorageModeValid = newMode === "light" || newMode === "dark" || newMode === "auto";
          const resolvedMode = isStorageModeValid ? newMode : "auto";

          if (resolvedMode === "dark" || (resolvedMode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add(className);
          } else {
            document.documentElement.classList.remove(className);
          }
        }
      });
    } catch (e) {}
  0:{"buildId":"uLcMMdpYN9d1ZRSrMqT-K","rsc":["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/2758613b31b98cfa.css","precedence":"next"}],["$","script","script-0",{"src":"/_next/static/chunks/aebe5ae12e1ebfe5.js","async":true}],["$","script","script-1",{"src":"/_next/static/chunks/46fec6feef67d970.js","async":true}],["$","script","script-2",{"src":"/_next/static/chunks/54d5b7cac88c45ce.js","async":true}],["$","script","script-3",{"src":"/_next/static/chunks/f3c10d7ad9771bce.js","async":true}],["$","script","script-4",{"src":"/_next/static/chunks/8c2d59d47036abf9.js","async":true}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"className":"comfortaa_86763e61-module__Rthu6q__variable libre_baskerville_679d000c-module__e9dulW__variable","children":[["$","head",null,{"children":["$","script",null,{"data-flowbite-theme-mode-script":true,"dangerouslySetInnerHTML":{"__html":"$2"}}]}],["$","body",null,{"className":"font-sans bg-white dark:bg-primary","children":["$","$L3",null,{"children":["$","$L4",null,{"children":[[null,["$","$L5",null,{"dark":true,"prefix":"","version":4}]],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{}],["$","$L9",null,{"parallelRouterKey":"children","template":["$","$La",null,{}],"notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":"$Lb"}]],[]]}],"$Lc","$Ld"]}]}]}]]}]]}],"loading":null,"isPartial":false}
b:["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]
c:["$","$Le",null,{}]
d:["$","div",null,{"style":{"paddingBottom":"env(safe-area-inset-bottom)"},"className":"fixed bottom-0 left-0 right-0 z-50 flex justify-center","children":["$","$Lf",null,{}]}]

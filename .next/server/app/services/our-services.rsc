1:"$Sreact.fragment"
3:I[68136,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"DrawerProvider"]
4:I[17179,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
5:I[60309,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"StoreInitClient"]
6:I[82167,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
7:I[52257,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
8:I[5494,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
9:I[39756,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/c81db6e24f0cfdeb.js"],"default"]
a:I[37457,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/c81db6e24f0cfdeb.js"],"default"]
13:I[68027,[],"default"]
:HL["/_next/static/chunks/2758613b31b98cfa.css","style"]
:HL["/_next/static/media/38df7484fe560b25-s.p.60f15535.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/7f20430e44eb7422-s.p.bd5bbcc6.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
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
  0:{"P":null,"b":"uLcMMdpYN9d1ZRSrMqT-K","c":["","services","our-services"],"q":"","i":false,"f":[[["",{"children":["(pages)",{"children":["services",{"children":[["id","our-services","d"],{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/2758613b31b98cfa.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/aebe5ae12e1ebfe5.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/46fec6feef67d970.js","async":true,"nonce":"$undefined"}],["$","script","script-2",{"src":"/_next/static/chunks/54d5b7cac88c45ce.js","async":true,"nonce":"$undefined"}],["$","script","script-3",{"src":"/_next/static/chunks/f3c10d7ad9771bce.js","async":true,"nonce":"$undefined"}],["$","script","script-4",{"src":"/_next/static/chunks/8c2d59d47036abf9.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"className":"comfortaa_86763e61-module__Rthu6q__variable libre_baskerville_679d000c-module__e9dulW__variable","children":[["$","head",null,{"children":["$","script",null,{"data-flowbite-theme-mode-script":true,"dangerouslySetInnerHTML":{"__html":"$2"}}]}],["$","body",null,{"className":"font-sans bg-white dark:bg-primary","children":["$","$L3",null,{"children":["$","$L4",null,{"children":[[null,["$","$L5",null,{"dark":true,"prefix":"","version":4}]],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{}],["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],"$Lb"],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],"$Lc","$Ld"]}]}]}]]}]]}],{"children":["$Le",{"children":["$Lf",{"children":["$L10",{"children":["$L11",{},null,false,false]},null,false,false]},null,false,false]},null,false,false]},null,false,false],"$L12",false]],"m":"$undefined","G":["$13",[]],"S":true}
14:I[16596,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
15:I[15899,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js"],"default"]
17:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/c81db6e24f0cfdeb.js"],"OutletBoundary"]
18:"$Sreact.suspense"
1a:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/c81db6e24f0cfdeb.js"],"ViewportBoundary"]
1c:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/c81db6e24f0cfdeb.js"],"MetadataBoundary"]
b:["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]
c:["$","$L14",null,{}]
d:["$","div",null,{"style":{"paddingBottom":"env(safe-area-inset-bottom)"},"className":"fixed bottom-0 left-0 right-0 z-50 flex justify-center","children":["$","$L15",null,{}]}]
e:["$","$1","c",{"children":[null,["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":"$b:props:style","children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":"$b:props:children:props:children:1:props:style","children":404}],["$","div",null,{"style":"$b:props:children:props:children:2:props:style","children":["$","h2",null,{"style":"$b:props:children:props:children:2:props:children:props:style","children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]]}]
f:["$","$1","c",{"children":[null,["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
10:["$","$1","c",{"children":[null,["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
11:["$","$1","c",{"children":["$L16",[["$","script","script-0",{"src":"/_next/static/chunks/121d89cfb4efbabb.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/cb52cb167092e246.js","async":true,"nonce":"$undefined"}],["$","script","script-2",{"src":"/_next/static/chunks/8d4970d58227d2c9.js","async":true,"nonce":"$undefined"}]],["$","$L17",null,{"children":["$","$18",null,{"name":"Next.MetadataOutlet","children":"$@19"}]}]]}]
12:["$","$1","h",{"children":[null,["$","$L1a",null,{"children":"$@1b"}],["$","div",null,{"hidden":true,"children":["$","$L1c",null,{"children":["$","$18",null,{"name":"Next.Metadata","children":"$@1d"}]}]}],["$","meta",null,{"name":"next-size-adjust","content":""}]]}]
1e:I[55949,["/_next/static/chunks/aebe5ae12e1ebfe5.js","/_next/static/chunks/46fec6feef67d970.js","/_next/static/chunks/54d5b7cac88c45ce.js","/_next/static/chunks/f3c10d7ad9771bce.js","/_next/static/chunks/8c2d59d47036abf9.js","/_next/static/chunks/121d89cfb4efbabb.js","/_next/static/chunks/cb52cb167092e246.js","/_next/static/chunks/8d4970d58227d2c9.js"],"default"]
16:["$","$L1e",null,{"id":"our-services"}]
1b:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
1f:I[27201,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/c81db6e24f0cfdeb.js"],"IconMark"]
1d:[["$","title","0",{"children":"Best Wembley Solicitors | The Legal Practice Expertise"}],["$","meta","1",{"name":"description","content":"Best Wembley solicitors providing expert legal services. The Legal Practice delivers personalised support in family, property, business law to meet your needs."}],["$","link","2",{"rel":"icon","href":"/favicon.ico?favicon.c12bdc8e.ico","sizes":"48x48","type":"image/x-icon"}],["$","$L1f","3",{}]]
19:null

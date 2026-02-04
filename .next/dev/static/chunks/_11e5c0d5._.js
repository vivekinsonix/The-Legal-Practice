(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/constants/appconstants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALTERNATE_UI_URL",
    ()=>ALTERNATE_UI_URL,
    "COUNTRIES",
    ()=>COUNTRIES,
    "COUNTRY_CODES",
    ()=>COUNTRY_CODES,
    "COUNTRY_NAMES",
    ()=>COUNTRY_NAMES,
    "SEO_IMAGE",
    ()=>SEO_IMAGE,
    "countryFlags",
    ()=>countryFlags
]);
'use client';
const ALTERNATE_UI_URL = 'https://dolcera.insonix.com';
const SEO_IMAGE = '/logo/logo.png';
const countryFlags = {
    India: 'https://flagcdn.com/w320/in.png',
    USA: 'https://flagcdn.com/w320/us.png',
    UK: 'https://flagcdn.com/w320/gb.png',
    Canada: 'https://flagcdn.com/w320/ca.png',
    Australia: 'https://flagcdn.com/w320/au.png',
    Germany: 'https://flagcdn.com/w320/de.png',
    France: 'https://flagcdn.com/w320/fr.png',
    Italy: 'https://flagcdn.com/w320/it.png',
    Spain: 'https://flagcdn.com/w320/es.png',
    Netherlands: 'https://flagcdn.com/w320/nl.png',
    Singapore: 'https://flagcdn.com/w320/sg.png',
    UnitedArabEmirates: 'https://flagcdn.com/w320/ae.png',
    SaudiArabia: 'https://flagcdn.com/w320/sa.png',
    Japan: 'https://flagcdn.com/w320/jp.png',
    China: 'https://flagcdn.com/w320/cn.png',
    SouthKorea: 'https://flagcdn.com/w320/kr.png',
    Brazil: 'https://flagcdn.com/w320/br.png',
    SouthAfrica: 'https://flagcdn.com/w320/za.png',
    Russia: 'https://flagcdn.com/w320/ru.png',
    Mexico: 'https://flagcdn.com/w320/mx.png'
};
const COUNTRIES = [
    {
        countryName: 'Afghanistan',
        code: '+93'
    },
    {
        countryName: 'Albania',
        code: '+355'
    },
    {
        countryName: 'Algeria',
        code: '+213'
    },
    {
        countryName: 'Andorra',
        code: '+376'
    },
    {
        countryName: 'Angola',
        code: '+244'
    },
    {
        countryName: 'Antigua and Barbuda',
        code: '+1-268'
    },
    {
        countryName: 'Argentina',
        code: '+54'
    },
    {
        countryName: 'Armenia',
        code: '+374'
    },
    {
        countryName: 'Australia',
        code: '+61'
    },
    {
        countryName: 'Austria',
        code: '+43'
    },
    {
        countryName: 'Azerbaijan',
        code: '+994'
    },
    {
        countryName: 'Bahamas',
        code: '+1-242'
    },
    {
        countryName: 'Bahrain',
        code: '+973'
    },
    {
        countryName: 'Bangladesh',
        code: '+880'
    },
    {
        countryName: 'Barbados',
        code: '+1-246'
    },
    {
        countryName: 'Belarus',
        code: '+375'
    },
    {
        countryName: 'Belgium',
        code: '+32'
    },
    {
        countryName: 'Belize',
        code: '+501'
    },
    {
        countryName: 'Benin',
        code: '+229'
    },
    {
        countryName: 'Bhutan',
        code: '+975'
    },
    {
        countryName: 'Bolivia',
        code: '+591'
    },
    {
        countryName: 'Bosnia and Herzegovina',
        code: '+387'
    },
    {
        countryName: 'Botswana',
        code: '+267'
    },
    {
        countryName: 'Brazil',
        code: '+55'
    },
    {
        countryName: 'Brunei',
        code: '+673'
    },
    {
        countryName: 'Bulgaria',
        code: '+359'
    },
    {
        countryName: 'Burkina Faso',
        code: '+226'
    },
    {
        countryName: 'Burundi',
        code: '+257'
    },
    {
        countryName: 'Cabo Verde',
        code: '+238'
    },
    {
        countryName: 'Cambodia',
        code: '+855'
    },
    {
        countryName: 'Cameroon',
        code: '+237'
    },
    {
        countryName: 'Canada',
        code: '+1'
    },
    {
        countryName: 'Central African Republic',
        code: '+236'
    },
    {
        countryName: 'Chad',
        code: '+235'
    },
    {
        countryName: 'Chile',
        code: '+56'
    },
    {
        countryName: 'China',
        code: '+86'
    },
    {
        countryName: 'Colombia',
        code: '+57'
    },
    {
        countryName: 'Comoros',
        code: '+269'
    },
    {
        countryName: 'Congo (Congo-Brazzaville)',
        code: '+242'
    },
    {
        countryName: 'Costa Rica',
        code: '+506'
    },
    {
        countryName: 'Croatia',
        code: '+385'
    },
    {
        countryName: 'Cuba',
        code: '+53'
    },
    {
        countryName: 'Cyprus',
        code: '+357'
    },
    {
        countryName: 'Czech Republic',
        code: '+420'
    },
    {
        countryName: 'Democratic Republic of the Congo',
        code: '+243'
    },
    {
        countryName: 'Denmark',
        code: '+45'
    },
    {
        countryName: 'Djibouti',
        code: '+253'
    },
    {
        countryName: 'Dominica',
        code: '+1-767'
    },
    {
        countryName: 'Dominican Republic',
        code: '+1-809'
    },
    {
        countryName: 'Ecuador',
        code: '+593'
    },
    {
        countryName: 'Egypt',
        code: '+20'
    },
    {
        countryName: 'El Salvador',
        code: '+503'
    },
    {
        countryName: 'Equatorial Guinea',
        code: '+240'
    },
    {
        countryName: 'Eritrea',
        code: '+291'
    },
    {
        countryName: 'Estonia',
        code: '+372'
    },
    {
        countryName: 'Eswatini',
        code: '+268'
    },
    {
        countryName: 'Ethiopia',
        code: '+251'
    },
    {
        countryName: 'Fiji',
        code: '+679'
    },
    {
        countryName: 'Finland',
        code: '+358'
    },
    {
        countryName: 'France',
        code: '+33'
    },
    {
        countryName: 'Gabon',
        code: '+241'
    },
    {
        countryName: 'Gambia',
        code: '+220'
    },
    {
        countryName: 'Georgia',
        code: '+995'
    },
    {
        countryName: 'Germany',
        code: '+49'
    },
    {
        countryName: 'Ghana',
        code: '+233'
    },
    {
        countryName: 'Greece',
        code: '+30'
    },
    {
        countryName: 'Grenada',
        code: '+1-473'
    },
    {
        countryName: 'Guatemala',
        code: '+502'
    },
    {
        countryName: 'Guinea',
        code: '+224'
    },
    {
        countryName: 'Guinea-Bissau',
        code: '+245'
    },
    {
        countryName: 'Guyana',
        code: '+592'
    },
    {
        countryName: 'Haiti',
        code: '+509'
    },
    {
        countryName: 'Honduras',
        code: '+504'
    },
    {
        countryName: 'Hungary',
        code: '+36'
    },
    {
        countryName: 'Iceland',
        code: '+354'
    },
    {
        countryName: 'India',
        code: '+91'
    },
    {
        countryName: 'Indonesia',
        code: '+62'
    },
    {
        countryName: 'Iran',
        code: '+98'
    },
    {
        countryName: 'Iraq',
        code: '+964'
    },
    {
        countryName: 'Ireland',
        code: '+353'
    },
    {
        countryName: 'Israel',
        code: '+972'
    },
    {
        countryName: 'Italy',
        code: '+39'
    },
    {
        countryName: 'Jamaica',
        code: '+1-876'
    },
    {
        countryName: 'Japan',
        code: '+81'
    },
    {
        countryName: 'Jordan',
        code: '+962'
    },
    {
        countryName: 'Kazakhstan',
        code: '+7'
    },
    {
        countryName: 'Kenya',
        code: '+254'
    },
    {
        countryName: 'Kiribati',
        code: '+686'
    },
    {
        countryName: 'Kuwait',
        code: '+965'
    },
    {
        countryName: 'Kyrgyzstan',
        code: '+996'
    },
    {
        countryName: 'Laos',
        code: '+856'
    },
    {
        countryName: 'Latvia',
        code: '+371'
    },
    {
        countryName: 'Lebanon',
        code: '+961'
    },
    {
        countryName: 'Lesotho',
        code: '+266'
    },
    {
        countryName: 'Liberia',
        code: '+231'
    },
    {
        countryName: 'Libya',
        code: '+218'
    },
    {
        countryName: 'Liechtenstein',
        code: '+423'
    },
    {
        countryName: 'Lithuania',
        code: '+370'
    },
    {
        countryName: 'Luxembourg',
        code: '+352'
    },
    {
        countryName: 'Madagascar',
        code: '+261'
    },
    {
        countryName: 'Malawi',
        code: '+265'
    },
    {
        countryName: 'Malaysia',
        code: '+60'
    },
    {
        countryName: 'Maldives',
        code: '+960'
    },
    {
        countryName: 'Mali',
        code: '+223'
    },
    {
        countryName: 'Malta',
        code: '+356'
    },
    {
        countryName: 'Marshall Islands',
        code: '+692'
    },
    {
        countryName: 'Mauritania',
        code: '+222'
    },
    {
        countryName: 'Mauritius',
        code: '+230'
    },
    {
        countryName: 'Mexico',
        code: '+52'
    },
    {
        countryName: 'Micronesia',
        code: '+691'
    },
    {
        countryName: 'Moldova',
        code: '+373'
    },
    {
        countryName: 'Monaco',
        code: '+377'
    },
    {
        countryName: 'Mongolia',
        code: '+976'
    },
    {
        countryName: 'Montenegro',
        code: '+382'
    },
    {
        countryName: 'Morocco',
        code: '+212'
    },
    {
        countryName: 'Mozambique',
        code: '+258'
    },
    {
        countryName: 'Myanmar',
        code: '+95'
    },
    {
        countryName: 'Namibia',
        code: '+264'
    },
    {
        countryName: 'Nauru',
        code: '+674'
    },
    {
        countryName: 'Nepal',
        code: '+977'
    },
    {
        countryName: 'Netherlands',
        code: '+31'
    },
    {
        countryName: 'New Zealand',
        code: '+64'
    },
    {
        countryName: 'Nicaragua',
        code: '+505'
    },
    {
        countryName: 'Niger',
        code: '+227'
    },
    {
        countryName: 'Nigeria',
        code: '+234'
    },
    {
        countryName: 'North Korea',
        code: '+850'
    },
    {
        countryName: 'North Macedonia',
        code: '+389'
    },
    {
        countryName: 'Norway',
        code: '+47'
    },
    {
        countryName: 'Oman',
        code: '+968'
    },
    {
        countryName: 'Pakistan',
        code: '+92'
    },
    {
        countryName: 'Palau',
        code: '+680'
    },
    {
        countryName: 'Palestine',
        code: '+970'
    },
    {
        countryName: 'Panama',
        code: '+507'
    },
    {
        countryName: 'Papua New Guinea',
        code: '+675'
    },
    {
        countryName: 'Paraguay',
        code: '+595'
    },
    {
        countryName: 'Peru',
        code: '+51'
    },
    {
        countryName: 'Philippines',
        code: '+63'
    },
    {
        countryName: 'Poland',
        code: '+48'
    },
    {
        countryName: 'Portugal',
        code: '+351'
    },
    {
        countryName: 'Qatar',
        code: '+974'
    },
    {
        countryName: 'Romania',
        code: '+40'
    },
    {
        countryName: 'Russia',
        code: '+7'
    },
    {
        countryName: 'Rwanda',
        code: '+250'
    },
    {
        countryName: 'Saint Kitts and Nevis',
        code: '+1-869'
    },
    {
        countryName: 'Saint Lucia',
        code: '+1-758'
    },
    {
        countryName: 'Saint Vincent and the Grenadines',
        code: '+1-784'
    },
    {
        countryName: 'Samoa',
        code: '+685'
    },
    {
        countryName: 'San Marino',
        code: '+378'
    },
    {
        countryName: 'Sao Tome and Principe',
        code: '+239'
    },
    {
        countryName: 'Saudi Arabia',
        code: '+966'
    },
    {
        countryName: 'Senegal',
        code: '+221'
    },
    {
        countryName: 'Serbia',
        code: '+381'
    },
    {
        countryName: 'Seychelles',
        code: '+248'
    },
    {
        countryName: 'Sierra Leone',
        code: '+232'
    },
    {
        countryName: 'Singapore',
        code: '+65'
    },
    {
        countryName: 'Slovakia',
        code: '+421'
    },
    {
        countryName: 'Slovenia',
        code: '+386'
    },
    {
        countryName: 'Solomon Islands',
        code: '+677'
    },
    {
        countryName: 'Somalia',
        code: '+252'
    },
    {
        countryName: 'South Africa',
        code: '+27'
    },
    {
        countryName: 'South Korea',
        code: '+82'
    },
    {
        countryName: 'South Sudan',
        code: '+211'
    },
    {
        countryName: 'Spain',
        code: '+34'
    },
    {
        countryName: 'Sri Lanka',
        code: '+94'
    },
    {
        countryName: 'Sudan',
        code: '+249'
    },
    {
        countryName: 'Suriname',
        code: '+597'
    },
    {
        countryName: 'Sweden',
        code: '+46'
    },
    {
        countryName: 'Switzerland',
        code: '+41'
    },
    {
        countryName: 'Syria',
        code: '+963'
    },
    {
        countryName: 'Tajikistan',
        code: '+992'
    },
    {
        countryName: 'Tanzania',
        code: '+255'
    },
    {
        countryName: 'Thailand',
        code: '+66'
    },
    {
        countryName: 'Timor-Leste',
        code: '+670'
    },
    {
        countryName: 'Togo',
        code: '+228'
    },
    {
        countryName: 'Tonga',
        code: '+676'
    },
    {
        countryName: 'Trinidad and Tobago',
        code: '+1-868'
    },
    {
        countryName: 'Tunisia',
        code: '+216'
    },
    {
        countryName: 'Turkey',
        code: '+90'
    },
    {
        countryName: 'Turkmenistan',
        code: '+993'
    },
    {
        countryName: 'Tuvalu',
        code: '+688'
    },
    {
        countryName: 'Uganda',
        code: '+256'
    },
    {
        countryName: 'Ukraine',
        code: '+380'
    },
    {
        countryName: 'United Arab Emirates',
        code: '+971'
    },
    {
        countryName: 'United Kingdom',
        code: '+44'
    },
    {
        countryName: 'United States of America',
        code: '+1'
    },
    {
        countryName: 'Uruguay',
        code: '+598'
    },
    {
        countryName: 'Uzbekistan',
        code: '+998'
    },
    {
        countryName: 'Vanuatu',
        code: '+678'
    },
    {
        countryName: 'Vatican City',
        code: '+379'
    },
    {
        countryName: 'Venezuela',
        code: '+58'
    },
    {
        countryName: 'Vietnam',
        code: '+84'
    },
    {
        countryName: 'Yemen',
        code: '+967'
    },
    {
        countryName: 'Zambia',
        code: '+260'
    },
    {
        countryName: 'Zimbabwe',
        code: '+263'
    }
];
const COUNTRY_NAMES = COUNTRIES.map(_c = (country)=>country.countryName);
_c1 = COUNTRY_NAMES;
const COUNTRY_CODES = COUNTRIES.map(_c2 = (country)=>({
        countryName: country.countryName,
        code: country.code
    }));
_c3 = COUNTRY_CODES;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "COUNTRY_NAMES$COUNTRIES.map");
__turbopack_context__.k.register(_c1, "COUNTRY_NAMES");
__turbopack_context__.k.register(_c2, "COUNTRY_CODES$COUNTRIES.map");
__turbopack_context__.k.register(_c3, "COUNTRY_CODES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/seo/seoHead.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeoHead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$appconstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/appconstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
'use client';
;
;
;
function SeoHead({ title = 'Dolcera - Leading Patent Analytics Company', description = 'Dolcera is one of world’s largest patent analytics companies. Our team of in-house subject-matter experts analyze several million patents a year using our machine-learning platform.', keywords = 'Dolcera, Patent Analytics, Intellectual Property, Patent Research, Patent Search, Patent Filing, Patent Strategy, IP Management, Patent Portfolio Management, Competitive Intelligence, Technology Landscaping, Patent Valuation, Freedom to Operate, FTO Analysis, Patent Infringement Analysis, Patent Monitoring, Patent Drafting Services', image = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$appconstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEO_IMAGE"], url = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$appconstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALTERNATE_UI_URL"], author = 'Dolcera' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "description",
                content: description
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "keywords",
                content: keywords
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "author",
                content: author
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:title",
                content: title
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:description",
                content: description
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:type",
                content: "website"
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:image",
                content: image
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:url",
                content: url
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:title",
                content: title
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:description",
                content: description
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:image",
                content: image
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "canonical",
                href: url
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 37,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/seo/seoHead.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = SeoHead;
var _c;
__turbopack_context__.k.register(_c, "SeoHead");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/blogService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlog",
    ()=>getBlog,
    "getBlogBySlug",
    ()=>getBlogBySlug,
    "getBlogs",
    ()=>getBlogs,
    "getBlogsCategories",
    ()=>getBlogsCategories,
    "getBlogsIds",
    ()=>getBlogsIds,
    "getPaginatedBlogs",
    ()=>getPaginatedBlogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/apiService.ts [app-client] (ecmascript)");
;
function getBlogs(params) {
    const filters = [];
    if (params?.categorySlug) {
        filters.push(`filters[blogs_category][slug][$eq]=${params.categorySlug}`);
    }
    if (params?.search) {
        filters.push(`filters[title][$containsi]=${params.search}`);
    }
    const filterQuery = filters.length ? `&${filters.join('&')}` : '';
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/blogs?populate=*&&sort=createdAt:desc${filterQuery}`).then((res)=>res.data);
}
function getBlogsCategories() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/blogs-categories?fields[0]=name&fields[1]=slug&sort=name:asc').then((res)=>res.data);
}
function getBlogsIds() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/blogs?&&populate=*&sort=createdAt:desc').then((res)=>res.data?.data?.map((blog)=>blog?.slug));
}
function getPaginatedBlogs(pageno = 1, records = 5) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/blogs?&&populate=*&sort=createdAt:desc&pagination[page]=${pageno}&pagination[pageSize]=${records}`).then((res)=>res.data);
}
function getBlog(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/blogs/${id}?populate=*`).then((res)=>res.data);
}
async function getBlogBySlug(slug) {
    const baseParams = {
        populate: '*',
        filters: {
            slug: {
                $eq: slug
            }
        }
    };
    const requests = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/blogs', {
            params: {
                ...baseParams
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/blogs', {
            params: {
                ...baseParams,
                status: 'draft'
            }
        })
    ];
    const responses = await Promise.allSettled(requests);
    for (const res of responses){
        if (res.status === 'fulfilled' && res.value.data.data?.[0]) {
            return res.value.data.data[0];
        }
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// src/services/index.ts
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$blogService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/blogService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$SpinnerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/SpinnerService.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/utils/utility.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "truncateContent",
    ()=>truncateContent,
    "validateForm",
    ()=>validateForm
]);
const formatDate = (isoDate)=>{
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
};
const truncateContent = (content, wordLimit = 20)=>{
    const words = content.split(/\s+/); // split into words
    if (words.length <= wordLimit) return content;
    return words.slice(0, wordLimit).join(' ') + '...';
};
/**************************************************************
 * Validation helpers
 **************************************************************/ // Email validator
const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email) && email.length >= 5 && email.length <= 35;
};
// Phone validator (7–10 digits)
const validatePhone = (phone)=>/^[0-9]{7,10}$/.test(phone);
const validateForm = (fields, formData)=>{
    const errors = {};
    for (const field of fields){
        const value = formData[field.text];
        // Required validation
        if (field.required && (!value || value === '')) {
            errors[field.text] = `${field.label} is required.`;
            continue;
        }
        // Email validation
        if (field.type === 'email' && value && !validateEmail(value)) {
            errors[field.text] = 'Invalid email (5–35 chars).';
            continue;
        }
        // Phone validation
        if ((field.type === 'tel' || field.text === 'phone_number') && value && !validatePhone(value)) {
            errors[field.text] = 'Phone must be 7–10 digits.';
            continue;
        }
    }
    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(pages)/blogs/BlogList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/services/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$blogService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/blogService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$utility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/utility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$TextInput$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/TextInput/TextInput.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const SkeletonCard = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-gray-800 p-0 shadow-xl animate-pulse",
        "aria-label": "Loading blog card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-58 w-full bg-gray-700"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-3/4 bg-gray-700 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                        lineNumber: 19,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-1/2 bg-gray-700 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                        lineNumber: 20,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-20 bg-gray-700 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                        lineNumber: 21,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SkeletonCard;
// ---------------- IN-MEMORY CACHE ----------------
let cachedBlogs = {};
let cachedCategories = null;
function BlogList() {
    _s();
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // '' = All
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [debouncedSearch, setDebouncedSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Debounce search input
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogList.useEffect": ()=>{
            const handler = setTimeout({
                "BlogList.useEffect.handler": ()=>{
                    setDebouncedSearch(search);
                }
            }["BlogList.useEffect.handler"], 400);
            return ({
                "BlogList.useEffect": ()=>clearTimeout(handler)
            })["BlogList.useEffect"];
        }
    }["BlogList.useEffect"], [
        search
    ]);
    // Fetch categories ONCE with cache
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogList.useEffect": ()=>{
            const fetchCategories = {
                "BlogList.useEffect.fetchCategories": async ()=>{
                    if (cachedCategories) {
                        setCategories(cachedCategories);
                        return;
                    }
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$blogService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlogsCategories"])();
                        const cats = res?.data || [];
                        setCategories(cats);
                        // Cache in memory
                        cachedCategories = cats;
                    } catch (err) {
                        console.error('Error fetching categories:', err);
                    }
                }
            }["BlogList.useEffect.fetchCategories"];
            fetchCategories();
        }
    }["BlogList.useEffect"], []);
    // Fetch blogs whenever category or search changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogList.useEffect": ()=>{
            const key = `${selectedCategory}_${debouncedSearch}`;
            const fetchBlogs = {
                "BlogList.useEffect.fetchBlogs": async ()=>{
                    setLoading(true);
                    // Serve from memory if cached
                    if (cachedBlogs[key]) {
                        setBlogs(cachedBlogs[key]);
                        setLoading(false);
                        return;
                    }
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$blogService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlogs"])({
                            // categorySlug: selectedCategory || undefined,
                            search: debouncedSearch || undefined
                        });
                        const data = res?.data || [];
                        setBlogs(data);
                        // Cache in memory
                        cachedBlogs[key] = data;
                    } catch (err) {
                        console.error('Error fetching blogs:', err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["BlogList.useEffect.fetchBlogs"];
            fetchBlogs();
        }
    }["BlogList.useEffect"], [
        selectedCategory,
        debouncedSearch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen w-full dark:bg-white ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container mx-auto max-w-7xl px-4 py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "my-10 text-center ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-extrabold tracking-tight md:text-5xl mt-5",
                                    children: "Latest Blogs"
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-gray-400",
                                    children: "Discover articles from our expert team."
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12 flex justify-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$TextInput$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                className: "w-96",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                placeholder: "Search blogs..."
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3",
                    "aria-busy": loading,
                    children: !loading && blogs.length > 0 ? blogs.map((post)=>{
                        const img = post.coverImage?.formats?.medium?.url || post.coverImage?.url || '/default-blog.jpg';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group relative w-full dark:bg-primary-50 bg-white aspect-[1/1] overflow-hidden rounded-sm shadow-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: img,
                                    alt: post.title,
                                    width: 600,
                                    height: 400,
                                    className: "transition-transform  duration-[500ms] ease-linear group-hover:scale-105"
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                                    lineNumber: 134,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cursor-pointer absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-primary-50/90  backdrop-blur-md   rounded-t-sm         h-[180px]   overflow-hidden   px-5 py-4   opacity-100   translate-y-0      /* HOVER → FULL EXPAND FROM BOTTOM TO TOP */   group-hover:h-99   group-hover:px-7 group-hover:py-10   group-hover:opacity-100      transition-all duration-[500ms] ease-linear   ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: " mb-2   text-sm opacity-80   transition-all duration-[500ms] ease-linear   ",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$utility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(post?.createdAt)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                                            lineNumber: 156,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "   text-xl    transition-all duration-[500ms] ease-linear   ",
                                            children: post.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                                            lineNumber: 165,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm   mt-4  ",
                                            children: [
                                                " ",
                                                post?.description || 'The global debate around AI, education, and technology is often framed as screens versus schools,'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                                            lineNumber: 173,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "   text-sm mt-4 opacity-0 max-h-0 overflow-hidden   group-hover:opacity-100 group-hover:max-h-10   transition-all duration-[500ms] ease-linear   ",
                                            children: post?.description || 'protection versus progress. In reality, nations are deciding something far deeper: who will shape the future and who will adapt to it.'
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                                            lineNumber: 175,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/blogs/detail/${post.slug}`,
                                            className: "   mt-4 block dark:text-primary text-primary font-semibold   opacity-0 group-hover:opacity-100   transition-opacity duration-[500ms] ease-linear   ",
                                            children: "Read More →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                                            lineNumber: 186,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                                    lineNumber: 137,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, post.id, true, {
                            fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                            lineNumber: 132,
                            columnNumber: 17
                        }, this);
                    }) : loading ? Array.from({
                        length: 3
                    }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, idx, false, {
                            fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                            lineNumber: 201,
                            columnNumber: 55
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "col-span-full text-center text-gray-400",
                        children: "No blogs found."
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                        lineNumber: 203,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/blogs/BlogList.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(BlogList, "c1PXF01uGtn/c3lxRxVDfnKGhgo=");
_c1 = BlogList;
var _c, _c1;
__turbopack_context__.k.register(_c, "SkeletonCard");
__turbopack_context__.k.register(_c1, "BlogList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoopHead;
    }
});
function NoopHead() {
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=noop-head.js.map
}),
]);

//# sourceMappingURL=_11e5c0d5._.js.map
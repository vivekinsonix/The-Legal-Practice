module.exports = [
"[project]/app/constants/appconstants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const COUNTRY_NAMES = COUNTRIES.map((country)=>country.countryName);
const COUNTRY_CODES = COUNTRIES.map((country)=>({
        countryName: country.countryName,
        code: country.code
    }));
}),
"[project]/app/components/seo/seoHead.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeoHead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$appconstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/appconstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function SeoHead({ title = 'Dolcera - Leading Patent Analytics Company', description = 'Dolcera is one of world’s largest patent analytics companies. Our team of in-house subject-matter experts analyze several million patents a year using our machine-learning platform.', keywords = 'Dolcera, Patent Analytics, Intellectual Property, Patent Research, Patent Search, Patent Filing, Patent Strategy, IP Management, Patent Portfolio Management, Competitive Intelligence, Technology Landscaping, Patent Valuation, Freedom to Operate, FTO Analysis, Patent Infringement Analysis, Patent Monitoring, Patent Drafting Services', image = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$appconstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_IMAGE"], url = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$appconstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALTERNATE_UI_URL"], author = 'Dolcera' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "description",
                content: description
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "keywords",
                content: keywords
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "author",
                content: author
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:title",
                content: title
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:description",
                content: description
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:type",
                content: "website"
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:image",
                content: image
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:url",
                content: url
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:title",
                content: title
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:description",
                content: description
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:image",
                content: image
            }, void 0, false, {
                fileName: "[project]/app/components/seo/seoHead.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
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
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/app/components/richtext/RichTextViewer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RichTextViewer",
    ()=>RichTextViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$breaks$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-breaks/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-raw/lib/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
const RichTextViewer = ({ content })=>{
    if (!content) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
        remarkPlugins: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$breaks$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        ],
        rehypePlugins: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        ],
        components: {
            p: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        marginBottom: '16px',
                        lineHeight: '1.7'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/components/richtext/RichTextViewer.tsx",
                    lineNumber: 17,
                    columnNumber: 30
                }, void 0),
            img: ({ src, alt })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: alt || '',
                    style: {
                        maxWidth: '100%',
                        height: 'auto',
                        margin: '20px 0',
                        borderRadius: '8px'
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/richtext/RichTextViewer.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, void 0)
        },
        children: content
    }, void 0, false, {
        fileName: "[project]/app/components/richtext/RichTextViewer.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/shareButton/ShareButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShareBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$homePageService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/homePageService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$SpinnerService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/SpinnerService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$toasterService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/toasterService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/Card/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$TextInput$2f$TextInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/TextInput/TextInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/Tooltip/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ShareBanner({ shareUrl, position = 'center' }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // default closed
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const positionClasses = position === 'center' ? ' z-50 bottom-10 -translate-y-40%' : 'bottom-10';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.innerWidth >= 768) {
            setOpen(true);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.body.scrollHeight;
            const isPastTop = scrollTop >= 100;
            const isBeforeBottom = scrollTop + windowHeight <= docHeight - 200;
            setIsVisible(isPastTop && isBeforeBottom);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleSubscribe = async ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$SpinnerService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].showSpinner();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$homePageService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["save_newsletter_subscription"])({
                email
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$toasterService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].showToast('You have successfully subscribed to the newsletter.', 'success');
        } catch (err) {
            console.error('Subscription error:', err);
        } finally{
            setEmail('');
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$SpinnerService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hideSpinner();
        }
    };
    const getShareLinks = ()=>{
        const encodedUrl = encodeURIComponent(shareUrl);
        const encodedText = encodeURIComponent('Check this out:');
        return {
            whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            teams: `https://teams.microsoft.com/share?url=${encodedUrl}&text=${encodedText}&preview=true&referrer=web_client`
        };
    };
    const shareLinks = getShareLinks();
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-1/4 right-0 z-30 ${positionClasses}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    outline: true,
                    type: "button",
                    onClick: ()=>setOpen((prev)=>!prev),
                    className: "border-0 rounded-full bg-primary-50 text-black dark:text-black dark:bg-primary-50 focus:ring-0 transition-transform duration-300 hover:scale-110 active:scale-95",
                    children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                        fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                        lineNumber: 81,
                        columnNumber: 19
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {}, void 0, false, {
                        fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                        lineNumber: 81,
                        columnNumber: 27
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-4 right-4 md:left-auto md:right-12 top-1/4 z-30 transition-all duration-300 ease-in-out",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-5 shadow-lg rounded-none gap-3 mb-4 max-w-3xl mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-8 w-8 items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                            className: "h-5 w-5 dark:text-black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold dark:text-white",
                                        children: "Share this Page"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: "WhatsApp",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: shareLinks.whatsapp,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "w-11 hover:scale-110 transition-transform duration-200",
                                                src: "/WHATSAPP_ICON.svg",
                                                alt: "WhatsApp"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: "Facebook",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: shareLinks.facebook,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "w-10 hover:scale-110 transition-transform duration-200",
                                                src: "/FACEBOOK_ICON.svg",
                                                alt: "Facebook"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: "X (Twitter)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: shareLinks.twitter,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "w-7 hover:scale-110 transition-transform duration-200 dark:bg-white p-1 rounded",
                                                src: "/TWITTER_ICON.svg",
                                                alt: "X"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: "LinkedIn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: shareLinks.linkedin,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "w-10 hover:scale-110 transition-transform duration-200",
                                                src: "/LINKEDIN_ICON.svg",
                                                alt: "LinkedIn"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: "Teams",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: shareLinks.teams,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "w-10 hover:scale-110 transition-transform duration-200",
                                                src: "/TEAMS_ICON.svg",
                                                alt: "Teams"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-5 rounded-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 mt-4 max-w-75",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-8 w-8 items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "h-5 w-5 dark:text-black"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold dark:text-white",
                                            children: "Join our Newsletter"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm dark:text-gray-700",
                                    children: "Subscribe to receive the latest updates, articles & insights."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$TextInput$2f$TextInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextInput"], {
                                    type: "email",
                                    placeholder: "name@example.com",
                                    required: true,
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full",
                                    onClick: handleSubscribe,
                                    children: "Subscribe Now"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/shareButton/ShareButton.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/utils/whatsapp.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "openWhatsApp",
    ()=>openWhatsApp
]);
const openWhatsApp = (payload)=>{
    const { title = '', amount = '', plan = '', source = 'Website', pageUrl = '' } = payload;
    const message = `Hi I'm interested in ${title ? `"${title}"` : 'your services'}. ${amount ? `Price: ${amount}` : ''} ${plan ? `Plan: ${plan}` : ''} Source: ${source} ${pageUrl ? `Page: ${pageUrl}` : ''}  .Please share more details.`;
    const url = `https://wa.me/919357770278?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};
}),
"[project]/app/components/whatsapp/WhatsAppButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppButton",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$whatsapp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/whatsapp.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const WhatsAppButton = ({ payload, label = 'Chat on WhatsApp', className = 'w-full', outline = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        className: className,
        outline: outline,
        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$whatsapp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openWhatsApp"])(payload),
        children: label
    }, void 0, false, {
        fileName: "[project]/app/components/whatsapp/WhatsAppButton.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/services/blogService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/apiService.ts [app-ssr] (ecmascript)");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/blogs?populate=*&&sort=createdAt:desc${filterQuery}`).then((res)=>res.data);
}
function getBlogsCategories() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/blogs-categories?fields[0]=name&fields[1]=slug&sort=name:asc').then((res)=>res.data);
}
function getBlogsIds() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/blogs?&&populate=*&sort=createdAt:desc').then((res)=>res.data?.data?.map((blog)=>blog?.slug));
}
function getPaginatedBlogs(pageno = 1, records = 5) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/blogs?&&populate=*&sort=createdAt:desc&pagination[page]=${pageno}&pagination[pageSize]=${records}`).then((res)=>res.data);
}
function getBlog(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/blogs/${id}?populate=*`).then((res)=>res.data);
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
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/blogs', {
            params: {
                ...baseParams
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/blogs', {
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
}),
"[project]/app/services/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// src/services/index.ts
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$blogService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/blogService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$SpinnerService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/SpinnerService.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogDetailClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$richtext$2f$RichTextViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/richtext/RichTextViewer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$seo$2f$seoHead$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/seo/seoHead.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shareButton$2f$ShareButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/shareButton/ShareButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$whatsapp$2f$WhatsAppButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/whatsapp/WhatsAppButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/services/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$blogService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/blogService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const BlogSkeleton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-10 bg-stone-50 py-16 animate-pulse",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto max-w-5xl px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-10 w-3/4 bg-gray-300 rounded mb-6"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                    lineNumber: 44,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 w-1/2 bg-gray-300 rounded mb-8"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                    lineNumber: 45,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-72 w-full bg-gray-300 rounded-xl mb-10"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                    lineNumber: 46,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-full bg-gray-300 rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                            lineNumber: 48,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-5/6 bg-gray-300 rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                            lineNumber: 49,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-4/6 bg-gray-300 rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                            lineNumber: 50,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-3/6 bg-gray-300 rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                            lineNumber: 51,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                    lineNumber: 47,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function BlogDetailClient({ initialBlog, slug, preview }) {
    const [blog, setBlog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!initialBlog);
    const fetchBlog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!blog) {
            setLoading(true);
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$blogService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlogBySlug"])(slug);
                setBlog(res || null);
            } finally{
                setLoading(false);
            }
        }
    }, [
        slug,
        blog
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchBlog();
    }, [
        fetchBlog
    ]);
    const seoData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!blog) {
            return {
                seoTitle: '',
                seoDescription: '',
                seoKeywords: '',
                seoCanonical: '',
                imageUrl: '/placeholder.jpg'
            };
        }
        const seo = blog.Seo;
        const hasSeo = !!seo?.id;
        const img = blog.coverImage?.formats?.medium?.url || blog.coverImage?.url || '/placeholder.jpg';
        const root = ("TURBOPACK compile-time value", "https://dev.insonix.com") || 'https://insonix.com';
        return {
            seoTitle: hasSeo ? seo.metaTitle : blog.title,
            seoDescription: hasSeo ? seo.metaDescription : blog.excerpt || blog.title,
            seoKeywords: hasSeo ? seo.keywords : blog.tags?.join(', ') || 'blog, article',
            seoCanonical: seo?.canonicalURL || `${root}/blogs/detail/${slug}`,
            imageUrl: img
        };
    }, [
        blog,
        slug
    ]);
    /* ---------------- Center Famous Pricing Card ---------------- */ const orderedPricingCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!blog?.pricing_cards?.length) return [];
        const cards = [
            ...blog.pricing_cards
        ];
        const famousIndex = cards.findIndex((c)=>c?.isFamous);
        if (famousIndex === -1) return cards;
        const [famousCard] = cards.splice(famousIndex, 1);
        const centerIndex = Math.floor(cards.length / 2);
        cards.splice(centerIndex, 0, famousCard);
        return cards;
    }, [
        blog?.pricing_cards
    ]);
    /* ---------------- Render Rich Content ---------------- */ const renderedContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!blog?.content?.length) return null;
        return blog.content.map((block, index)=>{
            const plainText = block.children.map((c)=>c.text).join('').trim();
            if (!plainText) return null;
            if (block.type === 'heading') {
                const HeadingTag = `h${block.level}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeadingTag, {
                    className: "mt-8 mb-3 text-xl font-semibold text-gray-900 dark:text-white",
                    children: block.children.map((child, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: [
                                child.bold && 'font-semibold',
                                child.italic && 'italic',
                                child.underline && 'underline',
                                child.code && 'font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded'
                            ].filter(Boolean).join(' '),
                            children: child.text
                        }, i, false, {
                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                            lineNumber: 137,
                            columnNumber: 15
                        }, this))
                }, index, false, {
                    fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-4 leading-7 text-gray-700 dark:text-gray-300",
                children: block.children.map((child, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: [
                            child.bold && 'font-semibold',
                            child.italic && 'italic',
                            child.underline && 'underline',
                            child.code && 'font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded'
                        ].filter(Boolean).join(' '),
                        children: child.text
                    }, i, false, {
                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                        lineNumber: 148,
                        columnNumber: 13
                    }, this))
            }, index, false, {
                fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this);
        });
    }, [
        blog?.content
    ]);
    /* ---------------- States ---------------- */ if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogSkeleton, {}, void 0, false, {
        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
        lineNumber: 159,
        columnNumber: 23
    }, this);
    if (!blog) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-gray-50 text-red-600",
            children: "Blog not found."
        }, void 0, false, {
            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
            lineNumber: 162,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shareButton$2f$ShareButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                shareUrl: seoData?.seoCanonical,
                position: "center"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                lineNumber: 167,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$seo$2f$seoHead$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: seoData.seoTitle,
                description: seoData.seoDescription,
                keywords: seoData.seoKeywords,
                image: seoData.imageUrl,
                url: seoData.seoCanonical
            }, void 0, false, {
                fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-10 py-16 ",
                "aria-labelledby": "blog-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "container mx-auto max-w-7xl px-6 prose dark:prose-invert",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 lg:grid-cols-12 container mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-9",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mb-4 text-3xl font-bold md:text-4xl",
                                            children: blog.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        blog.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg leading-relaxed",
                                            children: blog.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                            lineNumber: 176,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: "mb-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: seoData.imageUrl,
                                        alt: blog.title,
                                        width: 1200,
                                        height: 600,
                                        className: "w-full rounded-xl object-cover shadow-xl",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose max-w-none prose-lg dark:prose-invert",
                                    children: renderedContent
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this),
                                blog?.video?.[0]?.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: blog.video[0].url,
                                    className: "mt-10 w-full rounded-xl",
                                    autoPlay: true,
                                    muted: true,
                                    loop: true,
                                    playsInline: true
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                    lineNumber: 185,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid mt-10 gap-8 md:grid-cols-3",
                                    children: orderedPricingCards.map((card, index)=>{
                                        const isPopular = card?.isFamous;
                                        const { title, description, amount, plan, feature_list, badge } = card || {};
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: isPopular ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative prose dark:prose-invert  flex scale-105 flex-col items-center rounded-2xl bg-gradient-to-b from-blue-600 to-blue-500 p-8 text-center text-white shadow-2xl transition-all hover:scale-110",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-4 right-4 rounded-full bg-white/20 px-2 py-1 text-xs",
                                                        children: badge
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mb-3 text-2xl font-semibold",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$richtext$2f$RichTextViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTextViewer"], {
                                                            content: title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6 text-blue-100",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$richtext$2f$RichTextViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTextViewer"], {
                                                            content: description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 text-3xl font-bold",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$richtext$2f$RichTextViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTextViewer"], {
                                                            content: amount
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6 text-sm text-blue-100",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$richtext$2f$RichTextViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTextViewer"], {
                                                            content: plan
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$richtext$2f$RichTextViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTextViewer"], {
                                                        content: feature_list
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$whatsapp$2f$WhatsAppButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsAppButton"], {
                                                        outline: true,
                                                        label: "Book Sprint",
                                                        payload: {
                                                            title,
                                                            amount,
                                                            plan,
                                                            source: 'Pricing - Popular Plan',
                                                            pageUrl: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ''
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                lineNumber: 197,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md transition-all hover:scale-110 hover:shadow-xl ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-4 right-4 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600",
                                                        children: badge
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mb-3 text-2xl font-semibold",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$richtext$2f$RichTextViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTextViewer"], {
                                                            content: title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6 text-gray-600 dark:text-gray-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$richtext$2f$RichTextViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTextViewer"], {
                                                            content: description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 text-3xl font-bold",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$richtext$2f$RichTextViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTextViewer"], {
                                                            content: amount
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6 text-sm text-gray-500 dark:text-gray-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$richtext$2f$RichTextViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTextViewer"], {
                                                            content: plan
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$richtext$2f$RichTextViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTextViewer"], {
                                                        content: feature_list
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$whatsapp$2f$WhatsAppButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsAppButton"], {
                                                        outline: true,
                                                        label: "Get Started",
                                                        payload: {
                                                            title,
                                                            amount,
                                                            plan,
                                                            source: 'Pricing - Popular Plan',
                                                            pageUrl: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ''
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                                lineNumber: 231,
                                                columnNumber: 25
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                            lineNumber: 195,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/blogs/detail/[id]/BlogDetailClient.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08362934._.js.map
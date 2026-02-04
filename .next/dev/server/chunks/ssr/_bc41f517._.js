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
"[project]/app/services/teamService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTeams",
    ()=>getTeams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/apiService.ts [app-ssr] (ecmascript)");
;
const getTeams = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/our-team?populate[card][populate]=image&sort=createdAt:desc').then((res)=>res.data);
};
}),
"[project]/app/(pages)/teams/TeamPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$teamService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/teamService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$seo$2f$seoHead$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/seo/seoHead.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/Avatar/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/Card/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkedinIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as LinkedinIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
/**
 * In-memory cache (lives as long as this JS bundle is alive)
 */ let cachedTeams = null;
function TeamCardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 rounded-2xl bg-primary-50 shadow-lg flex flex-col items-center animate-pulse",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-24 h-24 rounded-full bg-gray-300 mb-4"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 bg-gray-300 rounded-sm mb-4"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-5 w-40 bg-gray-300 rounded mb-3"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-48 bg-gray-200 rounded mb-4"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-24 bg-gray-300 rounded"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function TeamPage() {
    const [teams, setTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(cachedTeams);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!cachedTeams);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If cache exists, skip API call
        if (cachedTeams) {
            setTeams(cachedTeams);
            setLoading(false);
            return;
        }
        const fetchTeams = async ()=>{
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$teamService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeams"])();
                const data = response?.data || null;
                cachedTeams = data; // ✅ store in memory
                setTeams(data);
            } catch (error) {
                console.error('Failed to fetch teams:', error);
            } finally{
                setLoading(false);
            }
        };
        fetchTeams();
    }, []);
    if (!loading && teams?.card?.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center py-20",
            children: "No team members found."
        }, void 0, false, {
            fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
            lineNumber: 58,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$seo$2f$seoHead$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Meet Our Team - Dolcera",
                description: "Meet the talented professionals at Dolcera. Our team of patent experts and IP specialists are dedicated to delivering innovative solutions.",
                keywords: "Dolcera team, team members, patent experts, IP professionals, leadership",
                url: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ''}/teams`
            }, void 0, false, {
                fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "min-h-screen w-full dark:bg-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "container mx-auto max-w-7xl px-4 py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "my-10 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-extrabold tracking-tight md:text-5xl mt-5",
                                    children: "Meet Our Team"
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-gray-400",
                                    children: "The people who make everything possible"
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 md:mt-16",
                            children: loading ? Array.from({
                                length: 9
                            }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamCardSkeleton, {}, idx, false, {
                                    fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                                    lineNumber: 73,
                                    columnNumber: 59
                                }, this)) : teams?.card?.map((member, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-8 rounded-2xl bg-primary-50 shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-[1.03]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                            img: member?.image?.url,
                                            rounded: true,
                                            size: "xl",
                                            className: "mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                                            lineNumber: 76,
                                            columnNumber: 21
                                        }, this),
                                        member?.linkdin_link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: member.linkdin_link,
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkedinIcon$3e$__["LinkedinIcon"], {
                                                className: "hover:text-white hover:bg-primary rounded-sm cursor-pointer w-10 h-10 p-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                                                lineNumber: 80,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                                            lineNumber: 79,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl md:text-2xl font-bold mb-3 leading-snug",
                                            children: member?.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                                            lineNumber: 84,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4 leading-relaxed",
                                            children: member?.designation
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                                            lineNumber: 86,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#",
                                            className: "text-blue-500 hover:text-blue-700 hover:underline",
                                            children: "Learn More →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                                    lineNumber: 75,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/teams/TeamPage.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/node_modules/flowbite-react/dist/components/Avatar/theme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "avatarTheme",
    ()=>avatarTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$create$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/helpers/create-theme.js [app-ssr] (ecmascript)");
;
const avatarTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$create$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTheme"])({
    root: {
        base: "flex items-center justify-center space-x-4 rounded",
        inner: "relative",
        bordered: "p-1 ring-2",
        rounded: "rounded-full",
        color: {
            dark: "ring-gray-800 dark:ring-gray-800",
            failure: "ring-red-500 dark:ring-red-700",
            gray: "ring-gray-500 dark:ring-gray-400",
            info: "ring-cyan-400 dark:ring-cyan-800",
            light: "ring-gray-300 dark:ring-gray-500",
            purple: "ring-purple-500 dark:ring-purple-600",
            success: "ring-green-500 dark:ring-green-500",
            warning: "ring-yellow-300 dark:ring-yellow-500",
            pink: "ring-pink-500 dark:ring-pink-500"
        },
        img: {
            base: "rounded",
            off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
            on: "",
            placeholder: "absolute -bottom-1 h-auto w-auto text-gray-400"
        },
        size: {
            xs: "h-6 w-6",
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-20 w-20",
            xl: "h-36 w-36"
        },
        stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
        statusPosition: {
            "bottom-left": "-bottom-1 -left-1",
            "bottom-center": "-bottom-1",
            "bottom-right": "-bottom-1 -right-1",
            "top-left": "-left-1 -top-1",
            "top-center": "-top-1",
            "top-right": "-right-1 -top-1",
            "center-right": "-right-1",
            center: "",
            "center-left": "-left-1"
        },
        status: {
            away: "bg-yellow-400",
            base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
            busy: "bg-red-400",
            offline: "bg-gray-400",
            online: "bg-green-400"
        },
        initials: {
            text: "font-medium text-gray-600 dark:text-gray-300",
            base: "relative inline-flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-600"
        }
    },
    group: {
        base: "flex -space-x-4"
    },
    groupCounter: {
        base: "relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
    }
});
;
 //# sourceMappingURL=theme.js.map
}),
"[project]/node_modules/flowbite-react/dist/components/Avatar/Avatar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/helpers/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$resolve$2d$props$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/helpers/resolve-props.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$resolve$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/helpers/resolve-theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$tailwind$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/helpers/tailwind-merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$theme$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/theme/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Avatar$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/Avatar/theme.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const Avatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$theme$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeProvider"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$resolve$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResolveTheme"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Avatar$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avatarTheme"],
        provider.theme?.avatar,
        props.theme
    ], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(provider.clearTheme, "avatar"),
        props.clearTheme
    ], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(provider.applyTheme, "avatar"),
        props.applyTheme
    ]);
    const { alt = "", bordered = false, children, className, color = "light", img, placeholderInitials = "", rounded = false, size = "md", stacked = false, status, statusPosition = "top-left", ...restProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$resolve$2d$props$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveProps"])(props, provider.props?.avatar);
    const imgClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$tailwind$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])(theme.root.img.base, bordered && theme.root.bordered, bordered && theme.root.color[color], rounded && theme.root.rounded, stacked && theme.root.stacked, theme.root.img.on, theme.root.size[size]);
    const imgProps = {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$tailwind$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])(imgClassName, theme.root.img.on),
        "data-testid": "flowbite-avatar-img"
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$tailwind$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])(theme.root.base, className),
        "data-testid": "flowbite-avatar",
        ...restProps,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: theme.root.inner,
                children: [
                    img ? typeof img === "string" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("img", {
                        alt,
                        src: img,
                        ...imgProps
                    }) : img({
                        alt,
                        ...imgProps
                    }) : placeholderInitials ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$tailwind$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])(theme.root.img.off, theme.root.initials.base, stacked && theme.root.stacked, bordered && theme.root.bordered, bordered && theme.root.color[color], theme.root.size[size], rounded && theme.root.rounded),
                        "data-testid": "flowbite-avatar-initials-placeholder",
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$tailwind$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])(theme.root.initials.text),
                            "data-testid": "flowbite-avatar-initials-placeholder-text",
                            children: placeholderInitials
                        })
                    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$tailwind$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])(imgClassName, theme.root.img.off),
                        "data-testid": "flowbite-avatar-img",
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                            className: theme.root.img.placeholder,
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                fillRule: "evenodd",
                                d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                clipRule: "evenodd"
                            })
                        })
                    }),
                    status && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        "data-testid": "flowbite-avatar-status",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$tailwind$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])(theme.root.status.base, theme.root.status[status], theme.root.statusPosition[statusPosition])
                    })
                ]
            }),
            children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                children
            })
        ]
    });
});
Avatar.displayName = "Avatar";
;
 //# sourceMappingURL=Avatar.js.map
}),
"[project]/node_modules/flowbite-react/dist/components/Card/theme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cardTheme",
    ()=>cardTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$create$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/helpers/create-theme.js [app-ssr] (ecmascript)");
;
const cardTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$create$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTheme"])({
    root: {
        base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
        children: "flex h-full flex-col justify-center gap-4 p-6",
        horizontal: {
            off: "flex-col",
            on: "flex-col md:max-w-xl md:flex-row"
        },
        href: "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    img: {
        base: "",
        horizontal: {
            off: "rounded-t-lg",
            on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        }
    }
});
;
 //# sourceMappingURL=theme.js.map
}),
"[project]/node_modules/flowbite-react/dist/components/Card/Card.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/helpers/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$resolve$2d$props$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/helpers/resolve-props.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$resolve$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/helpers/resolve-theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$tailwind$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/helpers/tailwind-merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$theme$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/theme/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Card$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/Card/theme.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const Card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$theme$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeProvider"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$resolve$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResolveTheme"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Card$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardTheme"],
        provider.theme?.card,
        props.theme
    ], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(provider.clearTheme, "card"),
        props.clearTheme
    ], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(provider.applyTheme, "card"),
        props.applyTheme
    ]);
    const { children, className, horizontal, href, imgAlt, imgSrc, renderImage, ...restProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$resolve$2d$props$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveProps"])(props, provider.props?.card);
    const Component = typeof href === "undefined" ? "div" : "a";
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(Component, {
        ref,
        "data-testid": "flowbite-card",
        href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$tailwind$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])(theme.root.base, theme.root.horizontal[horizontal ? "on" : "off"], href && theme.root.href, className),
        ...restProps,
        children: [
            renderImage?.(theme, !!horizontal) ?? (imgSrc && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("img", {
                "data-testid": "flowbite-card-image",
                alt: imgAlt ?? "",
                src: imgSrc,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$helpers$2f$tailwind$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])(theme.img.base, theme.img.horizontal[props.horizontal ? "on" : "off"])
            })),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: theme.root.children,
                children
            })
        ]
    });
});
Card.displayName = "Card";
;
 //# sourceMappingURL=Card.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as LinkedinIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkedinIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_bc41f517._.js.map
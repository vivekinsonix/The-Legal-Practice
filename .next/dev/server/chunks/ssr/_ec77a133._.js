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
"[project]/app/services/projectService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProjects",
    ()=>getProjects,
    "getProjectsCategories",
    ()=>getProjectsCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/apiService.ts [app-ssr] (ecmascript)");
;
const getProjects = (params)=>{
    const filters = [];
    if (params?.categorySlug) {
        filters.push(`filters[project_category][slug][$eq]=${params.categorySlug}`);
    }
    const filterQuery = filters.length ? `&${filters.join('&')}` : '';
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/projects?populate=*&sort=createdAt:desc${filterQuery}`).then((res)=>res.data);
};
const getProjectsCategories = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/project-categories').then((res)=>res.data);
};
}),
"[project]/app/(pages)/projects/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$seo$2f$seoHead$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/seo/seoHead.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$projectService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/projectService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
let cachedProjects = {};
let cachedCategories = null;
function ProjectCardSkeleton({ spanTwo = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `group relative overflow-hidden shadow-lg rounded-lg animate-pulse bg-gray-200 dark:bg-gray-800 h-75 ${spanTwo ? 'md:col-span-2' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gray-300 dark:bg-gray-700"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/projects/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-linear-to-b from-transparent to-black/80 dark:to-black/90"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/projects/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full flex flex-col items-center justify-between p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/app/(pages)/projects/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-3 w-full text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/projects/page.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/projects/page.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/projects/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 w-40 bg-gray-300 dark:bg-gray-700 rounded-full mt-2"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/projects/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/projects/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/projects/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/projects/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function Projects() {
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchCategories = async ()=>{
            if (cachedCategories) {
                setCategories(cachedCategories);
                return;
            }
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$projectService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProjectsCategories"])();
                const cats = res?.data || [];
                const finalCats = [
                    {
                        name: 'All',
                        slug: ''
                    },
                    ...cats.map((cat)=>({
                            name: cat.label,
                            slug: cat.slug
                        }))
                ];
                setCategories(finalCats);
                cachedCategories = finalCats;
            } catch (err) {
                console.error(err);
            }
        };
        fetchCategories();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchProjects = async ()=>{
            try {
                setLoading(true);
                if (cachedProjects) {
                    setProjects(cachedProjects);
                    return;
                }
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$projectService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProjects"])();
                const data = response?.data || [];
                setProjects(data);
                cachedProjects = data;
            } catch (err) {
                console.error('Failed to fetch projects', err);
            } finally{
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchProjects = async ()=>{
            const key = selectedCategory || 'all';
            // Serve from cache
            if (cachedProjects[key]) {
                setProjects(cachedProjects[key]);
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$projectService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProjects"])({
                    categorySlug: selectedCategory || undefined
                });
                const allProjects = res?.data || [];
                setProjects(allProjects);
                cachedProjects[key] = allProjects;
            } catch (err) {
                console.error('Failed to fetch projects', err);
            } finally{
                setLoading(false);
            }
        };
        fetchProjects();
    }, [
        selectedCategory
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-40 animate-pulse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center text-center space-y-3 ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-6 w-50 bg-gray-500 rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/projects/page.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-80 bg-gray-500 rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/projects/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/projects/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4 p-5",
                    children: loading && Array.from({
                        length: 6
                    }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCardSkeleton, {
                            spanTwo: false
                        }, idx, false, {
                            fileName: "[project]/app/(pages)/projects/page.tsx",
                            lineNumber: 126,
                            columnNumber: 122
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/projects/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/projects/page.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$seo$2f$seoHead$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Our Projects - Dolcera",
                description: "Explore our portfolio of successful patent analytics projects.",
                keywords: "Dolcera projects, patent analytics projects,  patent research case studies",
                url: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ''}/projects`
            }, void 0, false, {
                fileName: "[project]/app/(pages)/projects/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "projects",
                className: "py-16 md:px-0 px-4 md:py-24  bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-400 uppercase tracking-wider",
                        children: "What We Do"
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/projects/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-center text-3xl md:text-5xl font-extrabold mb-10",
                        children: "Our Projects"
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/projects/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto text-center mb-5 mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-12 flex justify-center gap-2 flex-wrap",
                                children: categories?.map((cat)=>{
                                    const isActive = selectedCategory === cat?.slug;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        value: cat.slug,
                                        onClick: ()=>setSelectedCategory(cat.slug),
                                        className: ` transition-all ${isActive ? 'bg-primary dark:bg-primary/80 dark:hover:bg-primary text-white border-primary' : 'bg-transparent dark:bg-transparent dark:text-gray-600 text-gray-600 border-gray-300 dark:hover:bg-gray-100 hover:bg-gray-100'}`,
                                        children: cat.name
                                    }, cat.slug, false, {
                                        fileName: "[project]/app/(pages)/projects/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/projects/page.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 ",
                                children: [
                                    projects?.map((project, index)=>{
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: project?.link ?? '#',
                                            className: `group w-full h-87.5 relative overflow-hidden shadow-lg cursor-pointer block  'md:col-span-2'`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110",
                                                    style: {
                                                        backgroundImage: `url(${project?.image?.url})`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/projects/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-primary-900/80 group-hover:bg-black/20 transition-all duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/projects/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-full flex flex-col items-center justify-between text-white p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                            fileName: "[project]/app/(pages)/projects/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg mb-3",
                                                                    children: project?.project_category?.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(pages)/projects/page.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    className: "font-bold",
                                                                    children: project?.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(pages)/projects/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(pages)/projects/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full flex justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block rounded-full bg-secondary px-5 py-2 text-sm font-semibold uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300",
                                                                children: "Explore Projects →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(pages)/projects/page.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/projects/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/projects/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/(pages)/projects/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    !loading && projects?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "col-span-full text-center text-red-500",
                                        children: "No Projects Found!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/projects/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 52
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/projects/page.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/projects/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/projects/page.tsx",
                lineNumber: 134,
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
];

//# sourceMappingURL=_ec77a133._.js.map
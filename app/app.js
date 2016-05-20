'use strict';

// Declare app level module which depends on views, and components
angular.module('bilingualApp', [
    'ngRoute',
    'bilingualApp.view1',
    'bilingualApp.view2',
    'bilingualApp.version',
    'pascalprecht.translate',
    'tmh.dynamicLocale',
    'ngCookies'
])
    .constant('LOCALES', {
        'locales': {
            'es_ES': 'Español',
            'en_US': 'English'
        },
        'preferredLocale': 'en_US'
    })
    .config(['$routeProvider', '$translateProvider', 'tmhDynamicLocaleProvider', function ($routeProvider, $translateProvider, tmhDynamicLocaleProvider) {
        $translateProvider.useMissingTranslationHandlerLog();
        $routeProvider.otherwise({redirectTo: '/view1'});
        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/locale-',// path to translations files
            suffix: '.json'// suffix, currently- extension of the translations
        });
        $translateProvider.preferredLanguage('en_US');// is applied on first load
        $translateProvider.useLocalStorage();// saves selected language to localStorage
        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
    }]);

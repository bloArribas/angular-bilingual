'use strict';

angular.module('bilingualApp.version', [
  'bilingualApp.version.interpolate-filter',
  'bilingualApp.version.version-directive'
])

.value('version', '0.1');

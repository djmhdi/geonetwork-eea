/*
 * Copyright (C) 2001-2016 Food and Agriculture Organization of the
 * United Nations (FAO-UN), United Nations World Food Programme (WFP)
 * and United Nations Environment Programme (UNEP)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or (at
 * your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301, USA
 *
 * Contact: Jeroen Ticheler - FAO - Viale delle Terme di Caracalla 2,
 * Rome - Italy. email: geonetwork@osgeo.org
 */

(function() {
  goog.provide('gn_searchoptions_directive');

  var module = angular.module('gn_searchoptions_directive', []);

  module.directive('gnSearchOptions', [function() {

      return {
        restrict: 'E',
        require: '^ngSearchForm',
        scope: {
        },
        templateUrl: '../../catalog/components/search/searchoptions/partials/' +
            'searchoptions.html',
        link: function(scope, element, attrs, controller) {
          // this enables to keep the dropdown active when we click on the label
          element.find('label > span').each(function(i, e) {
            $(e).on('click', function () {
              $(e).parent().find('input').focus();
            });
          });
          Object.defineProperty(scope, 'exactMatch', {
            get: function() {
              return controller.getExactMatch();
            },
            set: function(value) {
              controller.setExactMatch(value);
            }
          });

          Object.defineProperty(scope, 'titleOnly', {
            get: function() {
              return controller.getTitleOnly();
            },
            set: function(value) {
              controller.setTitleOnly(value);
            }
          });
        }
      };
    }]);
})();

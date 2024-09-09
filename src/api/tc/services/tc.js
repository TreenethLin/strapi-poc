'use strict';

/**
 * tc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tc.tc');

import PouchDB from 'pouchdb';

import * as riot from 'riot';

/**
 * Convert object attributes constructs into strings
 *
 * @param   {Object} attributes - style attributes as object
 * @returns {string} a string with all the attributes and their values
 */
function styles(attributes) {
    return Object.entries(attributes).reduce((acc, item) => {
        const [key, value] = item;
        return [...acc, `${key}: ${value}`];
    }, []).join(';');
}

// install plugins
riot.install(function(component) {
    component.styles = styles;
    return component;
})

import Highscore from './Highscore.riot';

riot.register('highscore', Highscore);
riot.mount('highscore');

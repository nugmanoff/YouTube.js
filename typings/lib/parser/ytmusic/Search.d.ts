export = Search;
/** @namespace */
declare class Search {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     * @param {boolean} is_continuation
     * @constructor
     */
    constructor(response: object, actions: import('../../core/Actions'), is_continuation: boolean);
    /**
     * @type {import('../contents/classes/DidYouMean')}
     */
    did_you_mean: import('../contents/classes/DidYouMean');
    /**
     * @type {import('../contents/classes/ShowingResultsFor')}
     */
    showing_results_for: import('../contents/classes/ShowingResultsFor');
    results: any;
    sections: any;
    getContinuation(): Promise<Search>;
    /**
   * Applies given filter to the search.
   * @param {string} name
   * @returns {Promise.<Search>}
   */
    selectFilter(name: string): Promise<Search>;
    /** @type {boolean} */
    get has_continuation(): boolean;
    /** @type {string[]} */
    get filters(): string[];
    /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
    get songs(): import("../contents/classes/MusicResponsiveListItem")[];
    /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
    get videos(): import("../contents/classes/MusicResponsiveListItem")[];
    /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
    get albums(): import("../contents/classes/MusicResponsiveListItem")[];
    /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
    get artists(): import("../contents/classes/MusicResponsiveListItem")[];
    /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
    get playlists(): import("../contents/classes/MusicResponsiveListItem")[];
    /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
    get page(): import("../contents/classes/MusicResponsiveListItem")[];
    #private;
}

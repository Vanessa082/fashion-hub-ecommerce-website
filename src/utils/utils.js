/* MY HELPER FUNCTIONS */

let PRODUCT_RENDERED = []

const ITEM_PER_PAGE = 10;

let current_page = 0;

const getPaginationCount = () => Math.ceil(PRODUCT_RENDERED.length / ITEM_PER_PAGE)

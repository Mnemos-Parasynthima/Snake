/**
 * Grid class to hold the game in
 * @method init
 * @method set
 * @method get
 */
class Grid {
  constructor() {
    this.width = null;
    this.height = null;
    this._grid = null;
  }

  /**
   * Creates a grid with a default value in each cell
   * @param {Number} d Default value to fill
   * @param {Number} c Number of columns
   * @param {Number} r Number of rows
   * @returns None
   */
  init(d, c, r) {
    this.width = c;
    this.height = r;
    this._grid = [];

    for (let x = 0; x < c; x++) {
      this._grid.push([]);
      for (let y = 0; y < r; y++) {
        this._grid[x].push(d);
      }
    }
  }

  /**
   * Sets the value of a cell (x, y)
   * @param {Number} val The value to set
   * @param {Number} x The x-coordinate
   * @param {Number} y The y-coordinate
   * @returns None
   */
  set(val, x, y) {
    this._grid[x][y] = val;
  }

  /**
   * Gets the value of cell (x, y)
   * @param {Number} x The x-coordinate
   * @param {Number} y The y-coordinate
   * @returns {Number} The value of the cell
   */
  get(x, y) {
    return this._grid[x][y];
  }
}

/**
 * Snake class
 * @method init
 * @method insert
 * @method remove
 */
class Snake {
  constructor() {
    this.direction = null;
    this.last = null;
    this._queue = null;
  }

  /**
   * Initiates the snake (queue), setting a start position and direction
   * @param {Number} d Starting direction
   * @param {Number} x Starting x-coordinate
   * @param {Number} y Starting y-coordinate
   * @returns None
   */
  init(d, x, y) {
    this.direction = d;
    this._queue = [];
    this.insert(x, y);
  }

  /**
   * Adds to the snake
   * @param {Number} x The x-coordinate
   * @param {Number} y The y-coordinate
   * @returns None
   */
  insert(x, y) {
    this._queue.unshift({x:x, y:y});
    this.last = this._queue[0];
  }

  /**
   * Removes and returns the first element
   * @returns {Object} The first element
   */
  remove() {
    return this._queue.pop();
  }
}
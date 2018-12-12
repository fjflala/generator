require('@babel/core').transform('code', {
  presets: ['@babel/preset-react', '@babel/preset-env'],
});

const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const camelcase = require('camelcase');

const {
  TYPES: {
    FOLDER,
  }
} = require('../config/constants');
const defaultStructure = require('../config/default.scaffolding');

const Controller = require('../templates/controller');

const recursive = (structure, fn, destination) => {
  structure.map(el => {
    if (fn && typeof fn === 'function') fn(el, destination);
    if (el.bricks && el.bricks.length > 0) {
      recursive(el.bricks, fn, destination);
    }
  });
};

class Generator {
  /**
   * 
   * @param {String} name 
   */
  static createStyle (name) {

  }
  /**
   * 
   * @param {String} name 
   */
  static createStory (name) {

  }
  /**
   * 
   * @param {String} name 
   */
  static createView (name) {

  }
  /**
   * 
   * @param {String} name 
   */
  static createController(name) {

  }
  /**
   * 
   * @param {String} name 
   */
  static createScaffolding(scaffolding, destination) {
    let structure;
    if (!scaffolding) {
      structure = defaultStructure
    }
    
    if (structure.bricks && structure.bricks.length > 0) {
      recursive(structure.bricks, this.switcher.bind(this), destination);
    }
  }
  /**
   * 
   * @param {*} name 
   */
  static createFolder(el, destination) {
    const pathBase = path.resolve(__dirname, '..', destination);
    const pathResolved = path.resolve(__dirname, '..', destination, el.name);

    if (!fs.existsSync(pathBase)) {
      fs.mkdirSync(pathBase);
    }

    if (!fs.existsSync(pathResolved)) {
      fs.mkdirSync(pathResolved);
    }
  }
  /**
   * 
   * @param {*} name 
   */
  static switcher(el, destination) {
    const types = {
      [FOLDER]: this.createFolder,
    };

    types[el.type](el, destination);
  }
  /**
   * 
   * @param {String} name 
   */
  static create(name) {
    return ReactDOMServer.renderToStaticMarkup(<Controller />)
      .replace('<deletethisone>', '')
      .replace('</deletethisone>', '');
  }
}

module.exports = Generator;

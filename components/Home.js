'use strict';

const AbstractComponent = require('./Abstract');

module.exports = class HomeComponent extends AbstractComponent {
    mount() {
        this.mountPosId = 'main-container';
        super.mount();
    }
    getHTML() {
        return `
            <h1>Home</h1>
        `;
    }
}

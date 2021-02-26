'use strict';

const AbstractComponent = require('./Abstract');

module.exports = class ProjectsComponent extends AbstractComponent {
    mount() {
        this.mountPosId = 'main-container';
        super.mount();
    }
    getHTML() {
        return `
            <h1>Projects</h1>
        `;
    }
}

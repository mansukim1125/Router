'use strict';

const AbstractComponent = require('./Abstract');

module.exports = class PostsComponent extends AbstractComponent {
    async mount() {
        this.mountPosId = 'main-container';
        // await this.getPosts();
        super.mount();
    }
    // async getPosts() {
    //     const posts = await Posts.get();
    //     this.posts = posts;
    // }
    // processPostsToHTML() {
    //     this.postsHTML = '';
    //     this.posts.forEach((post) => {
    //         this.postsHTML += 
    //             `<li>
    //                 <div class="post-info">
    //                     <a href="/blog/posts/${encodeURIComponent(post.name)}" data-link>${post.name}</a>
    //                     <p>${post.config.description}</p>
    //                 </div>            
    //             </li>`;
    //     });
    //     return this.postsHTML;
    // }
    getHTML() {
        return `
            <div id="posts">
                <ul>
                    asd
                </ul>
            </div>
        `;
    }
}

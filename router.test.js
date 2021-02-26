'use strict';

const BlogNavBarComponent = require("./components/BlogNavBar");
const HomeComponent = require("./components/Home");
const NavBarComponent = require("./components/NavBar");
const PostComponent = require("./components/Post");
const PostsComponent = require("./components/Posts");
const ProjectsComponent = require("./components/Projects");
const Router = require("./router");

const routes = [
    {
        path: '/',
        component: NavBarComponent,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: HomeComponent
            },
            {
                path: '/projects',
                component: ProjectsComponent
            }
        ]
    },
    {
        path: '/blog',
        component: BlogNavBarComponent,
        redirect: '/blog/posts',
        children: [
            {
                path: '/posts',
                component: PostsComponent
            },
            {
                path: '/posts/:id',
                component: PostComponent,
                param: {
                    type: String,
                    name: 'postId'
                }
            }
        ]
    }
];

describe('Router test', () => {
    const router = new Router(routes);
    test('push to /blog/posts/45', () => {
        const out = router.push('/blog/posts/45');
        console.log(out);
    });
});

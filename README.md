# Router

## Usage

### Create Router Instance
```javascript
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

const router = new Router(routes);
```
### Move to specific route
Render components based on url you want to move. and return array of rendered components.
#### Example
```javascript
router.push('/blog/posts/45');
```
return value:
```
[
  {
    path: '/blog',
    component: BlogNavBarComponent {
      param: null,
      parent: undefined,
      mountPosId: 'app'
    }
  },
  {
    path: '/posts/:id',
    component: PostComponent {
      param: { postId: '45' },
      parent: {
        path: '/blog',
        component: BlogNavBarComponent {
          param: null,
          parent: undefined,
          mountPosId: 'app'
        }
      },
      mountPosId: 'main-container'
    },
    param: { postId: '45' }
  }
]
```
this method does not change browser url. so you have to set url using History API.

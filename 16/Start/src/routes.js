import Home from './components/Home.vue';

// LAZY LOADING can be done via:
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');
};

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
};

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};

// To check whether the lazy loading is being done or not, just check the network tab in the developer's tool.
// The bundles will get generated. These are the extra bundles webpack created because all these routes here
// we set up here, are noe loaded lazily. And this is how we can utilize this feature to make sure that in bigger
// applications, we only load parts when we need them.
// For grouping all the files together, we can give their name in the third argument. The file generated
// will obviously be heavy, but this is how we can do that. 

export const routes = [
    {
        path: '',
        name: 'index',
        component: Home
        // components: {
        //     default: Home,
        //     // 'header-top': Header
        //     // So, now this brings the header to the top in the Home section
        // }
    },
    {
        path: '/user', // Whenever the user loads user/1 or user/something where something is any dynamic id.,
        component: User,
        // components: {
        //     default: User,
        //     // 'header-bottom': Header
        //     // And this brings the header to the bottom in the User section
        // },
        children: [
            {
                path: '', component: UserStart
            },
            {
                path: ':id',
                component: UserDetail,
                // We can use the beforeEnter method to protect certain routes like this and this is the
                // next step of granularity.
                beforeEnter: (to, from, next) => {
                    console.log('Inside route setup');
                    next();
                }
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit',
                // We can name the routes and use the name directly to go to the path.
            }
        ]
    },
    {
        // So this is how we can redirect through the paths using redirect as a key in the object of the path.
        path: '/redirect-me',
        redirect: {
            // The redirect key can also be used as an object where we can give the name and the parameters as usual.
            name: 'index'
        }
    },
    {
        // This is the setup to redirect the user to a specific path when a user enters an invalid or wrong exact address
        // in the URL.

        // The * catches all the routes that are not being listed here and then redirects all of them to the 
        // specified redirect route. 
        path: '*',
        redirect: {
            name: 'index'
        }
    }
];
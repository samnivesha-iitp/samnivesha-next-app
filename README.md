# samnivesha-next-app
This is the Samnivesha Github page. It is based on React, Express, Nextjs, Node.Js and MongoDB. For User Experience perspective, We are using Nextjs as Server side rendering library to compile our javascript code on server side and send it back to client with HTML and CSS.

If you are not familiar with Server side rendering please go through [this article](https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38)
# File Structure
```bash
.
├── components
│   ├── footer.js
│   ├── header.js
│   ├── layout.js
│   └── nav.js
├── LICENSE
├── models
│   ├── event.model.js
│   └── user.model.js
├── next.config.js
├── package.json
├── pages
│   ├── about.js
│   ├── blog.js
│   ├── contact.js
│   ├── index.js
│   ├── login.js
│   ├── schedule.js
│   └── signup.js
├── public
│   ├── css
│   └── images
├── README.md
├── server
│   ├── config.js
│   ├── index.js
│   └── routes
│       ├── event.js
│       └── users.js
├── static
│   └── favicon.ico
└── yarn.lock
```
## Installations
```bash
git clone https://github.com/samnivesha-iitp/samnivesha-next-app
cd samnivesha-next-app
yarn install
yarn dev
```
# Todo List
- [ ] Landing Page for `/` route
- [ ] Blog Page consists of previous year glimpse of Samnivesha events, Guest Lecture and some details about each event
- [x] Contact page on `/contact` 
- [ ] about page on `/about`
- [ ] login will be on `/login`
- [ ] All signup will be redirected to `/signup`
- [x] A connection to MongoDB database
- [ ] A mailing system
- [ ] A admin Route on `/admin`

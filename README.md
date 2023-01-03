![mega-surveys-high-resolution-logo-color-on-transparent-background](https://user-images.githubusercontent.com/75917932/210292890-24e3132f-3312-408e-9a36-a00758bf71bd.png)

<hr/>

# A Reviews Management System Web Application 
## Made With: 
![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white) 
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) 
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white) 
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)


## What is this Project ?

This project is the successor of [Laravel-Vue-CRUD](https://github.com/celsodasecond/laravel-vue-crud) which is more stable and is fixed. 

This project is built to create, read, update, and delete reviews of the user. A user can only do these operations on his/her own posted reviews. A user has authentications to CRUD if and only if the user logs in successfully or registers successfully. 

## How to Build ?

All usage instruction and information update on [LARAVEL-README.md](https://github.com/celsodasecond/laravel-vue-crud/blob/master/LARAVEL-README.md).

## To test without registering (if still in db), use:
| Email: Johndoe+1@gmail.com \
| Password: T@ste123

## Development

#### Backend:

1. Clone the project
2. Go to the project root directory
3. Run composer install
4. Create database
5. Adjust parameters of .env file depending on your machine
6. Run php artisan serve to start the project at http://localhost:8000


#### Frontend:

1. Navigate to vue folder using terminal
2. Run npm install to install vue.js project dependencies
3. Edit vite.config.js to configure your defined port.
4. Start frontend by running npm run dev
5. Open http://localhost:3000 (Modified - Original port was 5173). 
6. To change port, modify it inside vite.config.js: (optional) 
```
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  }
})
```

#### Built With

- [Laravel](https://laravel.com/) - v.8.75
- [Vue JS](https://vuejs.org/) - v.3.2.45
- [Tailwind Css for Vite](https://tailwindcss.com/docs/guides/vite) - v.3.2.4
- [NodeJS](https://nodejs.org/en/) - v.14.20

#### Clone Project

```shell
https://github.com/celsodasecond/laravel-vue-crud.git
```

This Command will copy a full project to your local environment


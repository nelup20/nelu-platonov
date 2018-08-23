import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        sites: [
            {
                name: 'elrestaurante',
                frontEnd: ['html','css','javascript'],
                backEnd: ['node','heroku'],
                development: ['git','npm'],
                img: 'elrestaurante1',
                link: 'https://el-restaurante.herokuapp.com/'
            },
            {
                name: 'wattz',
                frontEnd: ['html','bootstrap',"jquery"],
                backEnd: ['node', 'heroku', 'mongodb', 'mlab'],
                development: ['git', 'npm'],
                img: 'wattz',
                link: 'https://wattz.herokuapp.com/'
            },
            {
                name: 'meme.com',
                frontEnd: ['html','css','javascript','bootstrap','jquery'],
                backEnd: ['scaleway'],
                development: ['git'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['html','css','javascript','semantic'],
                backEnd: ['node','digitalocean'],
                development: ['git','npm','sass'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['html','css','javascript'],
                backEnd: ['node','heroku','mongodb', 'mlab'],
                development: ['git','npm','babel'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['html','css','javascript'],
                backEnd: ['php','mysql'],
                development: ['git'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['html','css','javascript','jquery'],
                backEnd: ['php','mysql','linux','apache','scaleway'],
                development: ['git'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
        ],
        sitesFreelance: [
            {
                name: 'neluplatonov.com',
                frontEnd: ['html','css','javascript','vue'],
                backEnd: ['node','heroku'],
                development: ['git','npm','babel','webpack'],
                img: 'testSite1',
                link: 'https://www.google.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
            {
                name: 'meme.com',
                frontEnd: ['css','vue'],
                backEnd: ['heroku'],
                development: ['git','webpack'],
                img: 'testSite2',
                link: 'https://www.facebook.com'
            },
        ]
    }
});

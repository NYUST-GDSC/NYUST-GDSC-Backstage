import {createRouter, createWebHistory} from "vue-router";

import IndexView from "@/views/IndexView.vue";
import TeamView from "@/views/TeamView.vue";

const routes = [
    {path:"/",name:"IndexView",component:IndexView},
    {path:"/team",name:"TeamView",component:TeamView},
];

const router = createRouter({
    // history:createWebHistory('/NYUST-GDSC-Backstage/'),
    history:createWebHistory(),
    routes
})
export default router
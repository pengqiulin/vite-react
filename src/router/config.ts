import React from 'react'
import { Redirect } from 'react-router-dom';

import LoginPage from "@/pages/login";
import DocPage from "@/pages/doc";
import CustomPage from "@/pages/customHooks";
import LocalePage from "@/pages/locales";
import IconPage from "@/pages/icon";
import Table from '@/pages/table/index'
import TableList from "@/pages/table/base";
import TableEdit from "@/pages/table/edit";
import TableDrag from "@/pages/table/drag";
import AuthPage from "@/pages/auth";
import BasicLayout from '@/layouts/BasicLayout'

export interface routesType {
    path: string,//路由路径
    exact?: boolean,
    component?: any,//路由组件
    redirect?: string,
    title?: string,
    render?: () => any,
    routes?: routesType[],//子路由,
    auth?: string | boolean
}

const routes: routesType[] = [
    {
        path: "/login",
        exact: true,
        component: LoginPage
    },
    {
        path: "/",
        component: BasicLayout,
        routes: [
            {
                path: "/doc",
                exact: true,
                title: '文档',
                component: DocPage
            },
            {
                path: "/custom",
                exact: true,
                title: '远程搜索框',
                component: CustomPage
            },
            {
                path: "/locale",
                title: '国际化',
                exact: true,
                component: LocalePage
            },
            {
                path: "/icon",
                title: '图标',
                exact: true,
                component: IconPage
            },
            {
                path: "/table",
                title: '表格',
                component: Table,
                redirect: '/table/base',
                routes: [
                    {
                        path: "/table/base",
                        exact: true,
                        title: '基础表格',
                        component: TableList
                    },
                    {
                        path: "/table/edit",
                        exact: true,
                        title: '编辑表格',
                        component: TableEdit
                    },
                    {
                        path: "/table/drag",
                        title: '拖拽表格',
                        exact: true,
                        component: TableDrag
                    },
                ]
            },
            {
                path: "/auth",
                exact: true,
                component: AuthPage
            },
        ]
    },

];

export default routes
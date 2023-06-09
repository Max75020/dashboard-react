import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Home from '../pages/Home'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
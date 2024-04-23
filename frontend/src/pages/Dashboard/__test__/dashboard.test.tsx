import Dashboard from "../Dashboard.page";
import * as ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../../store";
import { Provider } from "react-redux";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";



describe('Login component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Provider store={store} >
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </Provider>

            , container);
    })
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })
    it('Dashboard Renders correctly initial document', () => {
        const dashboard = screen.getByTestId("dashboard");
        expect(dashboard)
    })

})
import Login from "../Login.page";
import * as ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../../store";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";


describe('Login component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Provider store={store} >
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </Provider>

            , container);
    })
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })
    it('Login Renders correctly initial document', () => {
        const inputs = container.querySelectorAll('input')
        expect(inputs).toHaveLength(2);
        expect(inputs[0].name).toBe('email')
        expect(inputs[1].name).toBe('password')
    })

    it('email Inputs change value', () => {
        const email = screen.getByTestId("email");
        expect(email).toHaveValue("");
        fireEvent.change(email, { target: { value: "testing" } })
        expect(email).toHaveValue("testing");
    })
    it('password Inputs change value', () => {
        const password = screen.getByTestId("password");
        expect(password).toHaveValue("");
        fireEvent.change(password, { target: { value: "testing" } })
        expect(password).toHaveValue("testing");
    })
})
import Login from "../Login.page";
import * as ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../../store";
import { Provider } from "react-redux";
import Register from "../Register.page";
import { fireEvent, screen } from "@testing-library/react";


describe('Register component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Provider store={store} >
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </Provider>

            , container);
    })
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })
    it('Register Renders correctly initial document', () => {
        const inputs = container.querySelectorAll('input')
        expect(inputs).toHaveLength(4);
        expect(inputs[0].name).toBe('name')
        expect(inputs[1].name).toBe('email')
        expect(inputs[2].name).toBe('password')
        expect(inputs[3].name).toBe('password2')
    })
    it('name Inputs change value', () => {
        const name = screen.getByTestId("name");
        expect(name).toHaveValue("");
        fireEvent.change(name, {target:{value :"testing"}})
        expect(name).toHaveValue("testing");
    })
    it('email Inputs change value', () => {
        const email = screen.getByTestId("email");
        expect(email).toHaveValue("");
        fireEvent.change(email, {target:{value :"testing"}})
        expect(email).toHaveValue("testing");
    })
    it('password Inputs change value', () => {
        const password = screen.getByTestId("password");
        expect(password).toHaveValue("");
        fireEvent.change(password, {target:{value :"testing"}})
        expect(password).toHaveValue("testing");
    })
    it('confirm password Inputs change value', () => {
        const password2 = screen.getByTestId("password2");
        expect(password2).toHaveValue("");
        fireEvent.change(password2, {target:{value :"testing"}})
        expect(password2).toHaveValue("testing");
    })


})
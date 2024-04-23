import Login from "../Employe.Form";
import * as ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../../store";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import EmployeForm from "../Employe.Form";


describe('Login component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Provider store={store} >
                <EmployeForm open={true} />
            </Provider>

            , container);
    })
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })
    it('EmployeForm Renders correctly initial document', () => {
        const name = screen.getByTestId("name");
        const lastname = screen.getByTestId("lastname");
        const age = screen.getByTestId("age");
        const grade = screen.getByTestId("name");
        const profession = screen.getByTestId("profession");
        const departement = screen.getByTestId("departement");
        expect(name)
        expect(lastname)
        expect(age)
        expect(grade)
        expect(profession)
        expect(departement)
    })

})
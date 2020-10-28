import React from 'react';
import { create } from 'react-test-renderer';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("status in conponent", () => {
        const component = create(<ProfileStatus status = {"New status"} />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("New status")
    })
    test("span in dom", () => {
        const component = create(<ProfileStatus status = {"New status"} />)
        const root = component.root
        const span = root.findByType("span")
        expect(span.children[0]).toBe("New status")
    })

    test("input in dom instead span", () => {
        const component = create(<ProfileStatus status = {"New status"} />)
        const root = component.root
        const span = root.findByType("span")
        span.props.onDoubleClick()
        const input = root.findByType("input")
        expect(input.props.value).toBe("New status")
        //expect(input).not.toBeNull()
    })
})
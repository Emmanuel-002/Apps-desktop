import {render, screen} from '@testing-library/react'
import Welcome from './Welcome'
import userEvents from '@testing-library/user-event'
describe('welcome text checking',()=>{
    test('Test hello world', ()=>{
        render(<Welcome />)
        const helloworld = screen.getByText('Hello World',{exact:false})
        expect(helloworld).toBeInTheDocument() // or expect(helloworld).not.toBeInTheDocument()
    })
    test('Button not click', ()=>{
        render(<Welcome />)
        const notclickText = screen.getByText('Good to have you',{exact:false})
        expect(notclickText).toBeInTheDocument() // or expect(helloworld).not.toBeInTheDocument()
    })
    test('Button is clicked', () => {
        render(<Welcome />)
        const button = screen.getByRole('button')
        userEvents.click(button)
        const element = screen.getByText('Text was changed',{exact:false})
        expect(element).toBeInTheDocument()
    })
    test('remove message',()=>{
        render(<Welcome />)
        const button=screen.getByRole('button')
        userEvents.click(button)
        const element=screen.queryByText('Good to have',{exact:false})
        expect(element).toBeNull()
    })
})
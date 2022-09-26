import {render,screen} from '@testing-library/react'
import Blogs from './Blogs'

describe('api testing',()=>{
    test('Get posts from api', async()=>{
        render(<Blogs />)
        const list= await screen.findAllByRole(`listitem`)
        expect(list).not.toHaveLength(0)
    })
})
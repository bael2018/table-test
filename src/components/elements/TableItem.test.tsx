import { render, screen } from "@testing-library/react"
import TableItem from "./TableItem"

describe('TableItem component', () => { 
    test('should render some text from props', () => {
        render(<TableItem content="some text"/>)
    
        expect(screen.getByText(/some text/i)).toBeInTheDocument()
    })
})
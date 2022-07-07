import { tablesRejected } from '../store/slices/tableSlice'
import { render, screen } from '@testing-library/react'
import Table from './Table'
import axios from 'axios'

jest.mock('axios')

describe('Table component' , () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                [
                    {
                      "id": 1,
                      "content": "12"
                    },
                    {
                      "id": 2,
                      "content": "25"
                    },
                    {
                      "id": 3,
                      "content": "64"
                    },
                ]
            ]
        }   
    })

    test('Should render data from api' , async () => {
        axios.get.mockReturnValue(response)
        render(<Table/>)
        const users = await screen.findAllByTestId('table-item')
        expect(users.length).toBe(1)
    })

    test('Should render error message' , async () => {
        tablesRejected('Some message')
        render(<Table/>)
        expect(screen.getByTestId('error-message')).toBeInTheDocument()
    })
})
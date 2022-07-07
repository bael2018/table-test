import tableSlice , { 
    tablesPending , 
    tablesFulfilled , 
    tablesRejected ,
    setTablesTotalCount,
    setTablesPage,
    setIsFetching
} from './tableSlice'

describe(('TableSlice actions') , () => {
    const data = [
        [
            {
                id: 1,
                content: 'some text'
            }
        ]
    ]

    test('tablesPending action', () => {
        expect(tableSlice.reducer({ status: false }, tablesPending())).toEqual({ status: true })
    })

    test('tablesFulfilled action', () => {
        expect(tableSlice.reducer({ status: true , data: []}, tablesFulfilled(data))).toEqual({ status: false, data })
    })

    test('tablesRejected action', () => {
        expect(tableSlice.reducer({ error: '' }, tablesRejected('Some error'))).toEqual({ error: 'Some error' })
    })

    test('setTablesTotalCount action', () => {
        expect(tableSlice.reducer({ totalCount: 0 }, setTablesTotalCount(1))).toEqual({ totalCount: 1 })
    })

    test('setTablesPage action', () => {
        expect(tableSlice.reducer({ page: 1 }, setTablesPage(2))).toEqual({ page: 2 })
    })

    test('setIsFetching action', () => {
        expect(tableSlice.reducer({ isFetching: false }, setIsFetching(true))).toEqual({ isFetching: true })
    })
})
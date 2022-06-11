import axios from "axios"
import React from "react"

type Dispatch = React.Dispatch<React.SetStateAction<any>>
type Params = 'people' | 'planets' | 'starship' | 'vehicles'

export const Fetching = async (dataPage: any, dispatch: Dispatch, params?: Params, page: number = 0, limit: number = 4) => {
    console.log(page);
    try {
        let res = await axios.get(`https://swapi.dev/api/${params}/${page ? page : ''}`)
        let slc;
        { page ? slc = [res.data] : slc = res.data.results.slice(0, limit) }
        dispatch(slc)
    } catch (error: any) {
        dispatch(error.toString())
    }
}
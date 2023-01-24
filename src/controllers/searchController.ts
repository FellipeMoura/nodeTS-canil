import{Request,Response} from 'express'
import{Pet} from '../models/pet'
import {cMenu} from '../helpers/createMenu'

export const search = (req:Request, res:Response) =>{
    let query: string =req.query.q as string

    if(!query){
        res.redirect('/')
        return
    }

    let list = Pet.getFromName(query)
    res.render('pages/page', {
        menu: cMenu(''),
        list, query
    })
    
}
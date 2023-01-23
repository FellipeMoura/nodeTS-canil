import { Request, Response } from 'express'
import {cMenu} from '../helpers/createMenu'

export const home = (req:Request, res:Response) =>{

    res.render('pages/page',{
        menu: cMenu('all'), 
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    })
}

export const dogs = (req:Request, res:Response) =>{

     res.render('pages/page',{
        menu: cMenu('dog'),
        banner: {
            title: 'Dogs',
            background: 'banner_dog.jpg'
        }
     })
}

export const cats = (req:Request, res:Response) =>{

    res.render('pages/page',{
        menu: cMenu('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
     })
}

export const fishes = (req:Request, res:Response) =>{

    res.render('pages/page',{
        menu: cMenu('fish'),
        banner: {
            title: 'Fishes',
            background: 'banner_fish.jpg'
        }
     })
}

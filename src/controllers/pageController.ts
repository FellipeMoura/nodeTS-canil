import { Request, Response } from 'express'
import {cMenu} from '../helpers/createMenu'
import { Pet } from '../models/pet'


export const home = (req:Request, res:Response) =>{
    let list = Pet.getAll()

    res.render('pages/page',{
        menu: cMenu('all'), 
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    })
}

export const dogs = (req:Request, res:Response) =>{
    let list = Pet.getFromType('dog')

     res.render('pages/page',{
        menu: cMenu('dog'),
        banner: {
            title: 'Dogs',
            background: 'banner_dog.jpg'
        }, 
        list
     })
}

export const cats = (req:Request, res:Response) =>{
    let list = Pet.getFromType('cat')

    res.render('pages/page',{
        menu: cMenu('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
     })
}

export const fishes = (req:Request, res:Response) =>{
    let list = Pet.getFromType('fish')

    res.render('pages/page',{
        menu: cMenu('fish'),
        banner: {
            title: 'Fishes',
            background: 'banner_fish.jpg'
        },
        list
     })
}

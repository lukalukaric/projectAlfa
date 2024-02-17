import { Router, Request, Response } from 'express';
import { MenuBusinessLayer } from '../BusinessLayers/menuBusinessLayer';
import { UserBusinessLayer } from '../BusinessLayers/userBusinessLayer';

const router: Router = Router();

router.get('/menu', (req: Request, res: Response) => {
    MenuBusinessLayer.getMenu().then(_res => {
        res.json(_res);
    }).catch(err => {
        console.log(err);
        return err;
    });
});


export const MenuController: Router = router;
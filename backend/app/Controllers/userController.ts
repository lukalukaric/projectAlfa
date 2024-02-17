import { Router, Request, Response } from 'express';
import { UserBusinessLayer } from '../BusinessLayers/userBusinessLayer';

const router: Router = Router();

router.get('/users', (req: Request, res: Response) => {
    UserBusinessLayer.getUsers().then(_res => {
        res.json(_res);
    }).catch(err => {
        console.log(err);
        return err;
    });
});


export const UserController: Router = router;
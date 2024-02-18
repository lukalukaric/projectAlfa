import { Router, Request, Response } from 'express';
import { LoginBusinessLayer } from '../BusinessLayers/loginBusinessLayer';

const router: Router = Router();

router.post('/doLogin', (req: Request, res: Response) => {
    let data = req.body;
    LoginBusinessLayer.doLogin(data).then(_res => {
        res.json(_res);
    }).catch(err => {
        console.log(err);
        return err;
    });
});


export const LoginController: Router = router;
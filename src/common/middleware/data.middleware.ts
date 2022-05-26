import { Request, Response, NextFunction } from 'express';

export function dataMiddleware(req: Request, res: Response, next: NextFunction) {
  // if (req.url=='/bbb') {
  //    res.send('未登录')
  //    return
  // }
  console.log('Request...', req.url, req.body, req.query);
  next();

}
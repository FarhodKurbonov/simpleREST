import * as Router from 'koa-router';
import User from '../../models/user';

export default (router: Router) => {
   router
   .get('/user', async (ctx)=> {
       //send response
       ctx.body = await User.find({});
   })
   .post('/user', async (ctx)=> {
    ctx.body = await User.create({
        username: ctx.request.body.name,
        createTime: new Date()
    })
    })
    .get('/user/:id', async (ctx) => {
        console.log(ctx.params.id)
        ctx.body = await User.findById(ctx.params.id);
        }
    )
    .put('/user/:id', async (ctx) => {
        const user = await User.findByIdAndUpdate(
          ctx.params.id, 
          {username: ctx.request.body.name},
          {new: true, runValidators: true}
        );
        console.log(user)
        if (user) { ctx.body = user; }
      })
      .delete('/users/:id', async (ctx) => {
        const user = await User.findByIdAndRemove(ctx.params.id);
        if (user) { ctx.status = 204; }
      });
}
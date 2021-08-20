/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    const { filename } = req.file as any;

    const user = updateAvatar.execute({
      user_id: req.user.id,
      avatarFilename: filename,
    });

    return res.json(user);
  }
}

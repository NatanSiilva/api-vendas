/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    const { filename } = req.file as any;

    const user = await updateAvatar.execute({
      user_id: req.user.id,
      avatarFilename: filename,
    });

    return res.json(classToClass(user));
  }
}

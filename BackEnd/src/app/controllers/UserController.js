import * as Yup from 'yup';

import Check from '../models/Check';
import User from '../models/User';

class UserController {
   async indexAll(req, res) {
      const users = await User.findAll({
         attributes: ['name', 'email', 'cell'],
         order: [['createdAt', 'DESC']],
         include: [
            {
               model: Check,
               attributes: ['id', 'date', 'longitude', 'latitude', 'distance'],
               limit: 1,
               order: [['createdAt', 'DESC']],
            },
         ],
      });

      return res.json(users);
   }

   async indexUser(req, res) {
      const users = await User.findOne({
         where: { cell: req.params.cell },
         attributes: ['name', 'email', 'cell'],
         order: [['createdAt', 'DESC']],
         include: [
            {
               model: Check,
               attributes: ['date', 'longitude', 'latitude', 'distance'],
               limit: 5,
               order: [['createdAt', 'DESC']],
            },
         ],
      });

      return res.json(users);
   }

   async store(req, res) {
      const schema = Yup.object().shape({
         name: Yup.string().required(),
         email: Yup.string().required(),
         cell: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Validation fails' });
      }

      // Verifica se ja existe um email
      const hasEmail = await User.findOne({
         where: { email: req.body.email },
      });

      if (hasEmail) {
         return res.status(401).json({ error: 'E-mail alredy exists' });
      }

      // Verifica se ja existe um cell
      const hasCell = await User.findOne({
         where: { cell: req.body.cell },
      });
      if (hasCell) {
         return res.status(401).json({ error: 'Cell number alredy exists' });
      }
      const { name, email, cell } = await User.create(req.body);

      return res.json({ name, email, cell });
   }

   async update(req, res) {
      const schema = Yup.object().shape({
         name: Yup.string(),
         email: Yup.string(),
         cell: Yup.string(),
      });

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Validation fails' });
      }

      const { cell } = req.params;

      const user = await User.findByPk(cell);

      // Verifica se ja existe um email
      if (req.body.email) {
         const hasEmail = await User.findOne({
            where: { email: req.body.email },
         });
         if (hasEmail) {
            return res.status(401).json({ error: 'E-mail alredy exists' });
         }
      }

      // Verifica se ja existe um cell
      if (req.body.cell) {
         const hasCell = await User.findOne({
            where: { cell: req.body.cell },
         });
         if (hasCell) {
            return res.status(401).json({ error: 'Cell number alredy exists' });
         }
      }

      const {
         name: newName,
         email: newEmail,
         cell: newCell,
      } = await user.update(req.body);

      return res.json({
         name: newName,
         email: newEmail,
         cell: newCell,
      });
   }

   async delete(req, res) {
      const user = await User.findOne({ where: { cell: req.params.cell } });

      if (!user) {
         return res.status(401).json({ error: 'User does not exists' });
      }

      await user.destroy();

      return res.json({
         sucess: 'User was deleted',
      });
   }
}

export default new UserController();

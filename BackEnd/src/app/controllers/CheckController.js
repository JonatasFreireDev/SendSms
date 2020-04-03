import { format } from 'date-fns';
import * as Yup from 'yup';

import Check from '../models/Check';
import User from '../models/User';
import getDistanceFromLatLonInKm from '../util/getDistance';

class CheckController {
   async store(req, res) {
      const schema = Yup.object().shape({
         longitude: Yup.string().required(),
         latitude: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Validation fails' });
      }

      const findUser = await User.findOne({
         where: { cell: req.params.cell },
         limit: 1,
         order: [['createdAt', 'DESC']],
         include: [
            {
               model: Check,
               attributes: ['date', 'longitude', 'latitude', 'distance'],
               limit: 1,
               order: [['createdAt', 'DESC']],
            },
         ],
      });

      if (!findUser) {
         return res.status(401).json({ error: 'Cell does not found' });
      }

      let distance = '';
      if (findUser.Checks.length >= 1) {
         distance = getDistanceFromLatLonInKm(
            { lat: req.body.latitude, lng: req.body.longitude },
            {
               lat: findUser.Checks[0].latitude,
               lng: findUser.Checks[0].longitude,
            }
         );
      }

      const {
         date: ChDate,
         longitude: longt,
         latitude: latit,
      } = await Check.create({
         user_cell: req.params.cell,
         date: format(new Date(), 'dd/MM/yyyy - HH:mm'),
         ...req.body,
         distance,
      });

      return res.json({
         user_id: req.params.cell,
         date: ChDate,
         longitude: longt,
         latitude: latit,
         distance,
      });
   }
}

export default new CheckController();

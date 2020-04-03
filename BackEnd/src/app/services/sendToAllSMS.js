import { format } from 'date-fns';
import TotalVoice from 'totalvoice-node';

import token from '../../config/tokenVoice';
import User from '../models/User';

export default async function sendToAllSms(req, res) {
   const users = await User.findAll();

   if (!users) return res.status(401).json({ error: 'Users does not exists' });

   // TOTAL VOICE
   const client = new TotalVoice(token);

   const promises = users.map(async (user) => {
      const messages = await client.sms
         .enviar(
            user.cell,
            `Olá ${user.name}, Valide seu check-in! Acesse: http://192.168.15.11:3000/checkin/user/${user.cell}`
         )
         .then((message) => {
            return message;
         })
         .catch((error) => {
            return error;
         });
      return messages;
   });

   await Promise.all(promises);

   return res.json({
      success: `${promises.length} Mensagens enviada com sucesso`,
      data: format(new Date(), 'dd/MM/yyyy - HH:mm'),
   });
}

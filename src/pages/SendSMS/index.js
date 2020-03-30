import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

import totalvoice from 'totalvoice-node';
import * as Yup from 'yup';

const schema = Yup.object().shape({
   id: Yup.string().required('O Id é obrigatório'),
   name: Yup.string().required('O nome é obrigatório'),
   celular: Yup.string().required('O celular é obrigatório'),
});

const token = '1727372ac9b5f58ff6e8ffc89f70d344';

const client = new totalvoice(token);

export default function SendSMS() {
   const [coordinates, setCoordinates] = useState({});
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            const { latitude, longitude } = position.coords;

            setCoordinates({ latitude, longitude });
         },
         (err) => {
            alert(err);
         },
         {
            timeout: 30000,
         }
      );
   }, []);

   async function handleSubmit({ id, name, celular }) {
      setLoading(true);
      const resp = await client.sms
         .enviar(
            celular,
            `Id: ${id} \n
             Name: ${name}\n
             Lat:  ${coordinates.latitude}\n
             Long: ${coordinates.longitude}\n`
         )
         .catch(function (error) {
            console.error('Erro: ', error);
         });
      setLoading(false);
   }

   return (
      <Container loading={loading}>
         <h1>Cadastro</h1>
         <Form schema={schema} onSubmit={handleSubmit}>
            <Input
               name="id"
               type="text"
               placeholder="Id"
               maxLength="25"
               autoFocus
            />
            <Input name="name" type="text" placeholder="Nome" maxLength="25" />
            <Input
               name="celular"
               type="number"
               placeholder="Celular, Ex: 1122223333"
               pattern="[0-9]{10,11}"
               // pattern="[0-9]{2}[\s][0-9]{4}-[0-9]{4,5}"
            />
            <div>
               <Input
                  value={coordinates?.latitude}
                  title="latitude"
                  name="latitude"
                  type="text"
                  placeholder="lat"
                  disabled
               />
               <Input
                  value={coordinates?.longitude}
                  title="longitude"
                  name="longitude"
                  type="text"
                  placeholder="long"
                  disabled
               />
            </div>

            <button type="submit" disabled={loading}>
               Enviar
            </button>
         </Form>
      </Container>
   );
}

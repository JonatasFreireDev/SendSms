import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import { MdPermIdentity, MdEmail, MdPhone } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import api from '../../services/api';

const schema = Yup.object().shape({
   id: Yup.string().required('O Id é obrigatório'),
   name: Yup.string().required('O nome é obrigatório'),
   celular: Yup.string().required('O celular é obrigatório'),
});

export default function SendSMS() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [cell, setCell] = useState('');
   const [loading, setLoading] = useState(false);

   async function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);

      const data = {
         name,
         email,
         cell,
      };

      try {
         const resp = await api.post('/user', data);
         if (resp) {
            toast.success('Usuario criado com sucesso!');
         }
         setName('');
         setEmail('');
         setCell('');
      } catch (err) {
         toast.error(err.response.data.error);
      }

      setLoading(false);
   }

   return (
      <>
         <Header />
         <Container loading={loading}>
            <h2>Cadastrar novo Usuario</h2>
            <form
               schema={schema}
               onSubmit={(e) => {
                  handleSubmit(e);
               }}
            >
               <div>
                  <MdPermIdentity size={20} />
                  <input
                     name="name"
                     value={name}
                     type="text"
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Nome"
                     maxLength="25"
                  />
               </div>
               <div>
                  <MdEmail size={20} />
                  <input
                     name="email"
                     value={email}
                     type="email"
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="E-mail"
                  />
               </div>
               <div>
                  <MdPhone size={20} />
                  <input
                     name="celular"
                     value={cell}
                     type="number"
                     onChange={(e) => setCell(e.target.value)}
                     placeholder="1122223333"
                     pattern="[0-9]{10,11}"
                     // pattern="[0-9]{2}[\s][0-9]{4}-[0-9]{4,5}"
                  />
               </div>

               {/* {loading == true ? (
                  <div>
                     <Loading />
                  </div>
               ) : ( */}
               <button type="submit" disabled={loading}>
                  Cadastrar
               </button>
               {/* )} */}
            </form>
         </Container>
      </>
   );
}

import React, { useState, useEffect } from 'react';
import { MdPermIdentity, MdEmail, MdPhone, MdClose } from 'react-icons/md';

import * as S from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Dashboard() {
   const [checks, setChecks] = useState([]);
   const [loading, setLoading] = useState('false');

   useEffect(() => {
      async function getChecks() {
         setLoading(true);

         try {
            const resp = await api.get('/user');

            setChecks(resp.data);
            setLoading(false);
         } catch (err) {
            setLoading(false);
            toast.error('Não foi possivel carregar os dados');
         }
      }

      getChecks();
   }, []);

   async function handleDelete(cell) {
      const confirm = window.confirm(
         `Realmente deseja excluir o usuario ${cell} ?`
      );
      if (confirm) {
         try {
            const resp = await api.delete(`/user/${cell}`);

            setChecks(checks.filter((check) => check.cell !== cell));
            toast.success(resp.data);
            setLoading(false);
         } catch (err) {
            setLoading(false);
            toast.error('Não foi possivel carregar os dados');
         }
      }
   }

   return (
      <>
         <Header />
         <S.Container>
            {checks.map((check) => (
               <S.Perfil key={check.cell} distance={check.Checks[0]?.distance}>
                  <S.User>
                     <div>
                        <MdPermIdentity size={20} /> <span>{check.name}</span>
                     </div>
                     <div>
                        <MdEmail size={20} /> <span>{check.email}</span>
                     </div>
                     <div>
                        <MdPhone size={20} /> <span>{check.cell}</span>
                     </div>
                  </S.User>
                  <S.Checks>
                     <p>{check.Checks[0]?.date}</p>
                     <p>Long: {check.Checks[0]?.longitude}</p>
                     <p>Lat: {check.Checks[0]?.latitude}</p>
                     <p>Distancia: {check.Checks[0]?.distance} m</p>
                  </S.Checks>
                  <button
                     type="button"
                     onClick={() => {
                        handleDelete(check.cell);
                     }}
                  >
                     <MdClose />
                  </button>
               </S.Perfil>
            ))}
         </S.Container>
      </>
   );
}

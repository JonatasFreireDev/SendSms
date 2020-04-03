import React, { useState, useEffect } from 'react';

import * as S from './styles';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Header({ match }) {
   const [coordinates, setCoordinates] = useState({});
   const [buttonAble, setButtonAble] = useState(false);

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates({ latitude, longitude });
         },
         (err) => {
            setButtonAble(true);
            alert(err.message);
            alert('Ative a sua Geocalização');
         },
         {
            timeout: 30000,
         }
      );
   }, []);

   async function handleSubmit() {
      try {
         const resp = await api.post(
            `/checkin/user/${match.params.cell}`,
            coordinates
         );
         if (resp.data) {
            toast.success('Check-in Realizado com sucesso!');
         }
      } catch (err) {
         toast.error(err.response.data.error);
      }
   }

   return (
      <S.Container>
         {/* <span> {coordinates.latitude ? 'Habilite a geocalização' : ''}</span> */}
         <p>Por favor, pressione no botão a baixo para fazer o Check-in!</p>
         <div>
            <span>lat:{coordinates.latitude || 'Não foi encontrado'}</span>
            <span>lng:{coordinates.longitude || ' Não foi encontrado'}</span>
         </div>
         <button type="button" disabled={buttonAble} onClick={handleSubmit}>
            Realizar Check-in !
         </button>
      </S.Container>
   );
}

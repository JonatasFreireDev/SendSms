import React, { useState } from 'react';
import {
   MdDashboard,
   MdAccountCircle,
   MdChatBubbleOutline,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as S from './styles';
import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Header() {
   const [dataSend, setDataSend] = useState('');

   async function sendSmsToAll() {
      try {
         const resp = await api.post('/send/all');

         if (resp.data) {
            setDataSend(resp.data?.data);
            toast.success(resp.data.success);
         }
      } catch (err) {
         toast.error(err.response.data.error);
      }
   }

   return (
      <S.Container>
         <S.Content>
            <div>
               <Link to="/dashboard">
                  <MdDashboard size={30} color="#fff" />
               </Link>
               <Link to="/register">
                  <MdAccountCircle size={30} color="#fff" />
               </Link>
            </div>
            <S.Logo>
               <button type="button" onClick={sendSmsToAll} title={dataSend}>
                  <MdChatBubbleOutline size={30} color="#fff" />
               </button>
               <a href="https://www.logithink.it/" target="_blank">
                  <img src={Logo} alt="Logo" />
               </a>
            </S.Logo>
         </S.Content>
      </S.Container>
   );
}

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CopyGroups from '../pages/CopyGroups';
import ClientGroups from '../pages/ClientGroups';
import React from 'react';
import Layout from '../components/Layout';
import CreateCopy from '../pages/CreateCopy';
import AuthRouter from './AuthRouter';
import DetailCopy from '../pages/DetailCopy';
import CreateCampaign from '../pages/CreateCampaign';
import DetailCampaign from '../pages/DetailCampaign';
import ServiceHome from '../pages/ServiceHome';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout router={<ServiceHome />} />} />
        <Route path="/copies" element={<Layout router={<CopyGroups />} />} />
        <Route path="/clients" element={<Layout router={<ClientGroups />} />} />
        <Route path="/copies/create" element={<CreateCopy />} />
        <Route path="/copies/:id/*" element={<DetailCopy />} />
        <Route path="/campaigns/create" element={<CreateCampaign />} />
        <Route path="/campaigns/:campaignID" element={<DetailCampaign />} />
        <Route path="auth/*" element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

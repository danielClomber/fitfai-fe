import { CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './c-components/Layout/Layout';
import { NavBarButtons } from './c-components/Layout/models/layoutProps.models';
import DeleteAccountInstructions from './components/DeleteAccountInstructions/DeleteAccountInstructions';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

function App() {
  const navBarInfo: NavBarButtons[] = [];
  return (
    <>
      <CssBaseline />
      <Container disableGutters sx={{ minWidth: '100%' }}>
        <Layout navBarButtons={navBarInfo} staticNavbar={true}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/delete-account-instructions"
              element={<DeleteAccountInstructions />}
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Container>
    </>
  );
}

export default App;

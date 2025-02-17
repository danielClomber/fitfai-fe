import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, mt: 10 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Updated: 05/02/2025
        </Typography>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            1. Introduction
          </Typography>
          <Typography>
            By using Fitfai ("we," "our," "us"), you agree to these Terms and
            Conditions. If you do not agree, please do not use our services.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            2. User Responsibilities
          </Typography>
          <Typography>
            - You are responsible for the accuracy of your personal information.
            <br />- You must not misuse the app or engage in any illegal or
            harmful activities.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            3. Account Security
          </Typography>
          <Typography>
            - You agree to maintain the confidentiality of your login
            credentials.
            <br />- You are responsible for any activity under your account.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            4. Content Ownership
          </Typography>
          <Typography>
            - All content in Fitfai, including workouts, articles, and images,
            is owned by Clomber Ltd and protected by copyright laws.
            <br />- You are granted a personal, non-commercial license to use
            the app’s content.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            5. Limitation of Liability
          </Typography>
          <Typography>
            - Clomber Ltd is not responsible for any injuries, health issues, or
            damages that may occur from following fitness or dietary
            suggestions.
            <br />- The app’s content is for informational purposes only and is
            not intended as medical advice.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            6. Termination
          </Typography>
          <Typography>
            - We may suspend or terminate your account if you violate these
            terms.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            7. User Data and Consent
          </Typography>
          <Typography>
            - By using Fitfai, you consent to the collection and usage of your
            personal and fitness-related data as outlined in our Privacy Policy.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            8. Privacy Policy
          </Typography>
          <Typography>
            - Our Privacy Policy outlines how we collect and handle your
            personal data. By using the app, you agree to our Privacy Policy.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            9. Age Requirement
          </Typography>
          <Typography>
            - You must be at least 16 years old to use Fitfai. By using the app,
            you confirm that you meet this age requirement.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            10. Updates to Terms
          </Typography>
          <Typography>
            - Clomber Ltd reserves the right to update these Terms and
            Conditions at any time. Any changes will be posted here with an
            updated date, and your continued use of the app after changes will
            be considered acceptance of the updated terms.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            11. Governing Law
          </Typography>
          <Typography>
            - These Terms are governed by the laws of the United Kingdom, and
            any disputes will be resolved in the United Kingdom through
            mediation or arbitration, at our discretion, if necessary.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            12. Contact Us
          </Typography>
          <Typography>
            For any inquiries about these Terms and Conditions, contact us at
            support@fitfai.com.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsAndConditions;

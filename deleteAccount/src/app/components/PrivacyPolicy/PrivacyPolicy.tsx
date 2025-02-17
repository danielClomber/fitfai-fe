import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, mt: 10 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1">Last Updated: 05/02/2025</Typography>

        <Box mt={3}>
          <Typography variant="h6">1. Introduction</Typography>
          <Typography>
            Welcome to Fitfai (by Clomber LTD) ("we," "our," "us"). Your privacy
            is important to us. This Privacy Policy explains how we collect,
            use, and protect your personal information when you use our fitness
            application.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">2. Data We Collect</Typography>
          <Typography>
            When you use Fitfai, we may collect the following data:
          </Typography>
          <ul>
            <li>Personal Information: Name, date of birth, and user ID.</li>
            <li>
              Fitness & Health Data: Height, weight, gender, fitness goals,
              workout history, dietary preferences, physical limitations, and
              meditation usage.
            </li>
            <li>
              Device & Usage Data: IP address, device information, and usage
              analytics.
            </li>
            <li>
              User Preferences & Responses: Training style, exercise location,
              training days, meal frequency, favourite foods, foods to avoid,
              and survey responses.
            </li>
            <li>
              Additional Information: Physical limitations, supplements, and
              additional notes.
            </li>
          </ul>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">3. How We Use Your Data</Typography>
          <Typography>
            We process your data for the following purposes:
          </Typography>
          <ul>
            <li>Providing and improving our fitness services.</li>
            <li>
              Personalising your experience with AI-generated recommendations.
            </li>
            <li>
              Ensuring security, fraud prevention, and compliance with legal
              obligations.
            </li>
          </ul>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">4. Legal Basis for Processing</Typography>
          <ul>
            <li>Consent: When you sign up and agree to our terms.</li>
            <li>Contractual Necessity: To provide our services.</li>
            <li>Legal Obligations: Compliance with data protection laws.</li>
            <li>Legitimate Interest: Improving our app experience.</li>
          </ul>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">5. Data Storage & Security</Typography>
          <Typography>
            Your data is securely stored using industry-standard encryption. We
            retain your data only for as long as necessary to fulfill the
            purposes outlined in this policy.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">6. Third-Party Services</Typography>
          <Typography>
            We may share necessary data with third parties such as:
          </Typography>
          <ul>
            <li>Analytics providers (e.g., Google Analytics)</li>
            <li>Cloud storage providers (e.g., Firebase)</li>
          </ul>
          <Typography>
            These third parties comply with GDPR and have their own privacy
            policies.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">7. User Rights</Typography>
          <Typography>Under UK GDPR, you have the right to:</Typography>
          <ul>
            <li>Access your data.</li>
            <li>Correct inaccurate information.</li>
            <li>Request deletion of your data.</li>
            <li>Withdraw consent for marketing communications.</li>
            <li>Object to automated decision-making (AI recommendations).</li>
          </ul>
          <Typography>
            You can exercise these rights by contacting us at
            support@fitfai.com.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">8. Medical Disclaimer</Typography>
          <Typography>
            Fitfai provides general fitness, nutrition, and wellness
            information. This content is for informational purposes only and is
            not intended as medical advice, diagnosis, or treatment. Always
            consult a qualified healthcare professional before making changes to
            your fitness or diet routine. We are not responsible for any
            injuries, health issues, or damages that may result from using our
            services.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">9. Age Requirement</Typography>
          <Typography>
            Fitfai is intended for users aged 16 and above. By using our app,
            you confirm that you meet this age requirement. We do not knowingly
            collect personal data from users under 16 years old. If we discover
            that a user under 16 has provided personal information, we will take
            immediate steps to delete it. Parents or guardians who believe their
            child has used the app can contact us at support@fitfai.com for
            assistance.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">10. Changes to This Policy</Typography>
          <Typography>
            We may update this policy. Any changes will be posted on this page
            with an updated date.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">11. ICO Registration</Typography>
          <Typography>
            Clomber LTD is registered with the Information Commissioner’s Office
            (ICO) in the United Kingdom, demonstrating our commitment to data
            protection and privacy compliance. Our ICO registration number is
            ZB512978.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">12. Contact Us</Typography>
          <Typography>
            For questions about this policy, contact us at: support@fitfai.com
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;

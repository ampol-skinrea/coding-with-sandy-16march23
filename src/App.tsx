import { useState } from 'react';
import {
  Button,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  FormText,
  Stack,
} from 'react-bootstrap';

// Importing Sass with Bootstrap CSS
import './styles/App.scss';

function App() {
  const numberOfSteps = 1;
  const [currentStep, setCurrentStep] = useState(1);
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === numberOfSteps;

  return (
    <Container className="page p-5">
      <Container className="intro pb-1 p-5 mb-4 bg-light rounded-3">
        <hgroup>
          <h1>Simple Sign-up Flow</h1>
          <h2>Ampol Frontend Code Exercise</h2>
        </hgroup>

        <p>We have set up a very simple React prototype here as the baseline.</p>
        <p>On this page are some form fields that create a mock multi-step sign-up flow. How could it be better?</p>
        <p>We can work together to improve this app, but you'll be in the driver seat.</p>

        <h3>Task</h3>
        <ul>
          <li>Choose a few ways you want to improve the sign-up flow. It would be great if we had a multi-step form with a extra screen at the end that summarises the field values.</li>
          <li>Change the code as much or as little as you like.</li>
          <li>Feel free to install new dependencies, or google for documentation or more information.</li>
          <li>We want to understand your thought process and see you writing code, so let us know if there's anything we can do to make it a more comfortable, enjoyable exercise.</li>
        </ul>

        <h4>Time limit</h4>
        <p>30 minutes</p>
      </Container>

      <Form className="form-flow p-5">
        <Stack gap={4}>
          <p className="progress-indicator">
            Step {currentStep} / {numberOfSteps}
          </p>

          {/* First step of form */}
          <fieldset>
            <FormGroup controlId="firstName">
              <FormLabel>First name</FormLabel>
              <FormControl type="text" placeholder="Given name" />
            </FormGroup>

            <FormGroup controlId="lastName">
              <FormLabel>Last name</FormLabel>
              <FormControl type="text" placeholder="Surname or family name" />
            </FormGroup>
          </fieldset>

          {/* Second step of form */}
          <fieldset>
            <FormGroup controlId="email">
              <FormLabel>Email address</FormLabel>
              <FormControl type="email" placeholder="Enter email" />
            </FormGroup>

            <FormGroup className="mb-3" controlId="password">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" placeholder="Password" />
              <FormText className="text-muted">
                Make sure it's a strong one!
              </FormText>
            </FormGroup>
          </fieldset>

          {/* Third step of form */}
          <fieldset>
            <FormGroup className="mb-3" controlId="select">
              <FormLabel>Choose an option please</FormLabel>
              <FormSelect>
                <option></option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </FormSelect>
            </FormGroup>

            <FormGroup controlId="checkbox">
              <FormCheck type="checkbox" label="Do you agree?" />
            </FormGroup>
          </fieldset>

          <Stack direction="horizontal" gap={3}>
            <Button variant="secondary" type="button" disabled={isFirstStep}>
              Previous
            </Button>

            <Button variant="primary" type="button" disabled={isLastStep}>
              Next
            </Button>
          </Stack>
        </Stack>
      </Form>
    </Container>
  );
}

export default App;

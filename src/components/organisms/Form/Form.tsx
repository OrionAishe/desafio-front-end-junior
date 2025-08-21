import { Box, Button, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
import FormStep from "../../molecules/FormStep/FormStep";

const Form = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>Etapa 1</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Etapa 2</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Etapa 3</StepLabel>
                </Step>
            </Stepper>
            <Box sx={{display: "flex", justifyContent: 'center', width: '50%', padding: '30px 100px'}}>
                {
                    activeStep == 0 ? <FormStep
                        fields={[
                            { label: 'Email:', type: 'email' },
                            { label: 'Senha:', type: 'password'},
                            { label: 'Confirmação de senha:', type: 'password' }
                        ]}
                    />
                        :
                        activeStep == 1 ?
                            <FormStep
                                fields={[
                                    { label: 'Nome:' },
                                    { label: 'Sobrenome:' },
                                    { label: 'Data de Nascimento:' }
                                ]}
                            />
                            :
                            <FormStep
                                fields={[
                                    { label: 'Endereço Completo:' }
                                ]}
                            />}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'flex-end' }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                >
                    Voltar
                </Button>
                <Button
                    disabled={activeStep == 2}
                    onClick={handleNext}
                >
                    Próximo
                </Button>
                <Button disabled>Enviar</Button>
            </Box>
        </Box>
    );
}

export default Form;
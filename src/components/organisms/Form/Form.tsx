import { Box, Button, Modal, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
import FormFirstStep from "../../molecules/FormFirstStep/FormFirstStep";
import { useForm } from "react-hook-form";
import FormSecondStep from "../../molecules/FormSecondStep/FormSecondStep";
import FormThirdStep from "../../molecules/FormThirdStep/FormThirdStep";

interface Form {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    lastName: string;
    dateOfBirth: string;
    address: string;
}

const Form = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [firstStepError, setFirstStepError] = React.useState(false);
    const [secondStepError, setSecondStepError] = React.useState(false);
    const [thirdStepError, setThirdStepError] = React.useState(false);
    const [firstStepCompleted, setFirstStepCompleted] = React.useState(false);
    const [secondStepCompleted, setSecondStepCompleted] = React.useState(false);
    const [thirdStepCompleted, setThirdStepCompleted] = React.useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {
        getValues,
        register,
        formState,
        watch,
        setError,
        clearErrors,
    } = useForm<Form>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            lastName: '',
            dateOfBirth: '',
            address: ''
        }
    })

    const fields = watch();

    function isDisabled() {
        if (fields.password != '' && fields.name != '' && fields.email != '' && fields.lastName != '' && fields.confirmPassword != '' && fields.address != '') {
            return false;
        } else {
            return true;
        }
    }

    function getFirstStepErrors() {
        if (fields.email == '') {
            setError("email", { message: "Campo não pode ficar vazio" });
        } if (fields.password == '' && fields.confirmPassword == '') {
            setError("confirmPassword", { message: "Campo não pode ficar vazio" });
        } if (fields.password != fields.confirmPassword) {
            setError("confirmPassword", { message: "Senha diferente da confirmação" });
        } if (formState.touchedFields.email == undefined) {
            setFirstStepError(true);
            return
        } if (formState.errors.email || formState.errors.password || formState.errors.confirmPassword) {
            setFirstStepError(true);
            setFirstStepCompleted(false);
        } else {
            setFirstStepError(false);
            setFirstStepCompleted(true);
        }
    }

    function getSecondStepErrors() {
        if (fields.name == '') {
            setError("name", { message: "Campo não pode ficar vazio" });
        }
        if (fields.lastName == '') {
            setError("lastName", { message: "Campo não pode ficar vazio" });
        }
        if (formState.touchedFields.name == undefined) {
            setSecondStepError(true);
        }
        if (formState.errors.name || formState.errors.lastName) {
            setSecondStepError(true);
            setSecondStepCompleted(false);
        } else {
            setSecondStepError(false);
            setSecondStepCompleted(true);
        }
    }

    function getThirdStepErrors() {
        if (fields.address == '') {
            setError("address", { message: "Campo não pode ficar vazio" });
        } if (formState.touchedFields.address == undefined) {
            setThirdStepError(true);
        } if (formState.errors.address) {
            setThirdStepError(true);
            setThirdStepCompleted(false);
        } else {
            setThirdStepError(false);
            setThirdStepCompleted(true);
        }
    }

    const handleNext = () => {
        if (activeStep == 0) {
            getFirstStepErrors()
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        if (activeStep == 1) {
            getSecondStepErrors()
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } if (activeStep == 2) {
            getThirdStepErrors()
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep == 0) {
            getFirstStepErrors()
        }
        if (activeStep == 1) {
            getSecondStepErrors()
        } if (activeStep == 2) {
            getThirdStepErrors()
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Confirmação:
                    </Typography>
                    <Box id="modal-modal-description">
                        <Typography>Informações enviadas com sucesso</Typography>
                    </Box>
                </Box>
            </Modal>
            <Stepper activeStep={activeStep} nonLinear>
                <Step completed={firstStepCompleted}>
                    <StepLabel error={firstStepError}>Etapa 1</StepLabel>
                </Step>
                <Step completed={secondStepCompleted}>
                    <StepLabel error={secondStepError}>Etapa 2</StepLabel>
                </Step>
                <Step completed={thirdStepCompleted}>
                    <StepLabel error={thirdStepError}>Etapa 3</StepLabel>
                </Step>
            </Stepper>
            <Box sx={{ display: "flex", justifyContent: 'center', width: '50%', padding: '30px 100px' }}>
                {activeStep == 0 ? <FormFirstStep
                    getValues={getValues}
                    register={register}
                    formState={formState}
                    clearErrors={clearErrors}
                />
                    :
                    activeStep == 1 ?
                        <FormSecondStep
                            getValues={getValues}
                            register={register}
                            formState={formState}
                            clearErrors={clearErrors}
                        />
                        :
                        <FormThirdStep
                            getValues={getValues}
                            register={register}
                            formState={formState}
                            clearErrors={clearErrors}
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
                <Button disabled={isDisabled()} onClick={() => handleOpen()}>Enviar</Button>
            </Box>
        </Box>
    );
}

export default Form;
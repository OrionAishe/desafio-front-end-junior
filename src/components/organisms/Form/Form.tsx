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

    function setFirstStepErrors() {
        if (fields.email == '') {
            setError("email", { message: "Campo não pode ficar vazio" });
            return false;
        }
        if (fields.password == '' && fields.confirmPassword == '') {
            setError("confirmPassword", { message: "Campo não pode ficar vazio" });
            return false;
        }
        if (fields.password != fields.confirmPassword) {
            setError("confirmPassword", { message: "Senha diferente da confirmação" });
            return false;
        }
    }

    function setSecondStepErrors() {
        if (fields.name == '') {
            setError("name", { message: "Campo não pode ficar vazio" });
            return false;
        }
        if (fields.lastName == '') {
            setError("lastName", { message: "Campo não pode ficar vazio" });
            return false;
        }
    }

    function setThirdStepErrors() {
        if (fields.address == '') {
            setError("address", { message: "Campo não pode ficar vazio" });
            return false;
        }
    }

    const handleNext = () => {
        if (activeStep == 0 && setFirstStepErrors() == false) {
            return
        } if (activeStep == 1 && setSecondStepErrors() == false) {
            return
        } if (activeStep == 2 && setThirdStepErrors() == false) {
            return
        }
        else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
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
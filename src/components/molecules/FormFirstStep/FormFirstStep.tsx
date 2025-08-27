import { Box, FormControl, FormLabel, Input, Typography } from "@mui/material";
import type { FormState, UseFormClearErrors, UseFormGetValues, UseFormRegister } from "react-hook-form";
import type Form from "../../organisms/Form/Form";

export interface props {
    getValues: UseFormGetValues<Form>;
    register: UseFormRegister<Form>;
    formState: FormState<Form>;
    clearErrors: UseFormClearErrors<Form>;
}

const FormFirstStep = (props: props) => {
    const { getValues, register, formState, clearErrors } = props;

    return (
        <Box sx={{ width: '80%' }}>
            <FormControl sx={{ width: '100%', display: 'flex' }}>
                <FormLabel
                    sx={{ marginTop: '20px' }}
                    error={!!formState.errors.email}>
                    E-mail:
                </FormLabel>
                <Input
                    type={"email"}
                    defaultValue={getValues("email")}
                    {...register("email", { required: true })}
                    error={!!formState.errors.email}
                    color={formState.errors.email ? "error" : "primary"}
                    onFocus={() => clearErrors("email")} />
                {formState.errors.email && <Typography color="error">{formState.errors.email.message}</Typography>}
            </FormControl>
            <FormControl sx={{ width: '100%', display: 'flex' }} color="error">
                <FormLabel
                    sx={{ marginTop: '20px' }}
                    error={!!formState.errors.confirmPassword}>
                    Senha:
                </FormLabel>
                <Input
                    error={!!formState.errors.confirmPassword}
                    type={"password"}
                    defaultValue={getValues("password")}
                    {...register("password", { required: true })}
                    onFocus={() => clearErrors(["password", "confirmPassword"])}
                />
                {formState.errors.confirmPassword && <Typography color="error">{formState.errors.confirmPassword.message}</Typography>}
            </FormControl>
            <FormControl sx={{ width: '100%', display: 'flex' }}>
                <FormLabel
                    sx={{ marginTop: '20px' }}
                    error={!!formState.errors.confirmPassword}>
                    Confirmação de senha:
                </FormLabel>
                <Input
                    error={!!formState.errors.confirmPassword}
                    type={"password"}
                    defaultValue={getValues("confirmPassword")}
                    {...register("confirmPassword", { required: true })}
                    onFocus={() => clearErrors(["confirmPassword", "password"])}
                />
                {formState.errors.confirmPassword && <Typography color="error">{formState.errors.confirmPassword.message}</Typography>}
            </FormControl>
        </Box>
    )
}

export default FormFirstStep;
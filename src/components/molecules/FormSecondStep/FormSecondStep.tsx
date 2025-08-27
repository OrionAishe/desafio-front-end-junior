import { Box, FormControl, FormLabel, Input, Typography } from "@mui/material";
import type { props } from '../FormFirstStep/FormFirstStep';

const FormSecondStep = (props: props) => {
    const { getValues, register, clearErrors, formState } = props;
    return (
        <Box sx={{ width: '80%' }}>
            <FormControl sx={{ width: '100%', display: 'flex' }}>
                <FormLabel sx={{ marginTop: '20px' }} error={!!formState.errors.name}>
                    Nome:
                </FormLabel>
                <Input
                    defaultValue={getValues("name")}
                    {...register("name", { required: true })}
                    error={!!formState.errors.name}
                    onFocus={() => clearErrors("name")}
                />
                {formState.errors.name && <Typography color="error">{formState.errors.name.message}</Typography>}
            </FormControl>
            <FormControl sx={{ width: '100%', display: 'flex' }}>
                <FormLabel sx={{ marginTop: '20px' }} error={!!formState.errors.lastName}>
                    Sobrenome:
                </FormLabel>
                <Input
                    defaultValue={getValues("lastName")}
                    {...register("lastName", { required: true })}
                    error={!!formState.errors.lastName}
                    onFocus={() => clearErrors("lastName")}
                />
                {formState.errors.lastName && <Typography color="error">{formState.errors.lastName.message}</Typography>}
            </FormControl>
            <FormControl sx={{ width: '100%', display: 'flex' }}>
                <FormLabel sx={{ marginTop: '20px' }}>
                    Data de nascimento:
                </FormLabel>
                <Input
                    defaultValue={getValues("dateOfBirth")}
                    {...register("dateOfBirth", { required: false })}
                />
            </FormControl>
        </Box>
    )
}

export default FormSecondStep;
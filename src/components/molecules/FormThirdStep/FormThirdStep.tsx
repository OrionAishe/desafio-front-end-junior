import { Box, FormControl, FormLabel, Input, Typography } from "@mui/material";
import type { props } from '../FormFirstStep/FormFirstStep';

const FormThirdStep = (props: props) => {
    const { getValues, register, clearErrors, formState } = props;
    return (
        <Box sx={{width: '80%'}}>
            <FormControl sx={{ width: '100%', display: 'flex' }}>
                <FormLabel sx={{ marginTop: '20px' }} error={!!formState.errors.address}>
                    Endereço Completo:
                </FormLabel>
                <Input
                    defaultValue={getValues("address")}
                    {...register("address", { required: true })}
                    error={!!formState.errors.address}
                    onFocus={() => clearErrors("address")}
                />
                {formState.errors.address && <Typography color="error">{formState.errors.address.message}</Typography>}
            </FormControl>
        </Box>
    )
}

export default FormThirdStep;
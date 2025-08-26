import { Box, FormControl, FormLabel, Input, Typography } from "@mui/material";
import type { props } from '../FormFirstStep/FormFirstStep';

const FormThirdStep = (props: props) => {
    const { getValues, register, clearErrors, formState } = props;
    return (
        <Box sx={{width: '80%'}}>
            <FormControl sx={{ width: '100%', display: 'flex' }}>
                <FormLabel sx={{ marginTop: '20px' }} color={formState.errors.name ? "error" : "primary"}>
                    Endereço Completo:
                </FormLabel>
                <Input
                    defaultValue={getValues("address")}
                    {...register("address", { required: true })}
                    color={formState.errors.name ? "error" : "primary"}
                    onFocus={() => clearErrors("address")}
                />
                {formState.errors.address && <Typography color="error">{formState.errors.address.message}</Typography>}
            </FormControl>
        </Box>
    )
}

export default FormThirdStep;
import { Box, FormControl, FormLabel, Input } from "@mui/material";
import type { props } from '../FormFirstStep/FormFirstStep';

const FormThirdStep = (props: props) => {
    const { getValues, register, clearErrors } = props;
    return (
        <Box sx={{width: '80%'}}>
            <FormControl sx={{ width: '100%', display: 'flex' }}>
                <FormLabel sx={{ marginTop: '20px' }}>
                    Endereço Completo:
                </FormLabel>
                <Input
                    defaultValue={getValues("address")}
                    {...register("address", { required: true })}
                    onFocus={() => clearErrors()}
                />
            </FormControl>
        </Box>
    )
}

export default FormThirdStep;